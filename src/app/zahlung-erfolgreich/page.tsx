import Link from "next/link";

import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";

type PaymentSuccessPageProps = {
  searchParams: Promise<{
    session_id?: string;
  }>;
};

function formatExpiryDate(value: string | null) {
  if (!value) {
    return null;
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return null;
  }

  return new Intl.DateTimeFormat("de-CH", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Zurich",
  }).format(date);
}

function wait(milliseconds: number) {
  return new Promise((resolve) =>
    setTimeout(resolve, milliseconds)
  );
}

export default async function PaymentSuccessPage({
  searchParams,
}: PaymentSuccessPageProps) {
  const params = await searchParams;
  const sessionId = params.session_id?.trim();

  if (!sessionId) {
    return (
      <PaymentMessage
        title="Zahlungsreferenz fehlt"
        text="Die Bestellung konnte nicht eindeutig zugeordnet werden. Bitte öffnen Sie diese Seite über die Weiterleitung von Stripe."
      />
    );
  }

  try {
    /*
     * Die Stripe-Session wird serverseitig geprüft.
     * Der Zugangscode wird nicht allein aufgrund
     * einer URL-Session-ID ausgegeben.
     */
    const session =
      await stripe.checkout.sessions.retrieve(
        sessionId
      );

    if (
      session.payment_status !== "paid" ||
      session.status !== "complete"
    ) {
      return (
        <PaymentMessage
          title="Zahlung wird noch verarbeitet"
          text="Stripe hat die Zahlung noch nicht vollständig bestätigt. Bitte laden Sie diese Seite in einigen Augenblicken erneut."
          showReload
        />
      );
    }

    /*
     * Der Stripe-Webhook kann wenige Augenblicke
     * benötigen, bis Bestellung und Zugangscode
     * in Supabase gespeichert sind.
     */
    let order: {
      customer_name: string | null;
      customer_email: string | null;
      package: string | null;
      access_code: string | null;
    } | null = null;

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const {
        data,
        error,
      } = await supabaseAdmin
        .from("orders")
        .select(
          `
            customer_name,
            customer_email,
            package,
            access_code
          `
        )
        .eq("stripe_session_id", sessionId)
        .order("created_at", {
          ascending: false,
        })
        .limit(1)
        .maybeSingle();

      if (error) {
        throw error;
      }

      if (data) {
        order = data;
        break;
      }

      await wait(800);
    }

    if (!order) {
      return (
        <PaymentMessage
          title="Zahlung erfolgreich"
          text="Ihre Zahlung wurde bestätigt. Die Bestellung wird gerade verarbeitet. Bitte laden Sie diese Seite in einigen Augenblicken erneut."
          showReload
        />
      );
    }

    const isGeneratorPackage =
      order.package === "generatorProfessional" ||
      order.package === "generatorExecutive";

    if (!isGeneratorPackage) {
      return (
        <PaymentMessage
          title="Zahlung erfolgreich"
          text="Vielen Dank für Ihre Bestellung. Ihre Zahlung wurde bestätigt. EliteCV wird Ihren Auftrag nun bearbeiten."
        />
      );
    }

    if (!order.access_code) {
      return (
        <PaymentMessage
          title="Zahlung erfolgreich"
          text="Die Zahlung wurde bestätigt. Ihr Zugangscode wird gerade erstellt. Bitte laden Sie diese Seite in einigen Augenblicken erneut."
          showReload
        />
      );
    }

    const {
      data: accessData,
      error: accessError,
    } = await supabaseAdmin
      .from("cv_access_codes")
      .select("expires_at")
      .eq(
        "notes",
        `Automatisch erstellt nach Stripe-Zahlung. Session: ${sessionId}`
      )
      .order("created_at", {
        ascending: false,
      })
      .limit(1)
      .maybeSingle();

    if (accessError) {
      console.error(
        "Ablaufdatum konnte nicht geladen werden:",
        accessError
      );
    }

    const expiryText = formatExpiryDate(
      accessData?.expires_at ?? null
    );

    const packageLabel =
      order.package === "generatorExecutive"
        ? "EliteCV Executive Generator"
        : "EliteCV Professional Generator";

    return (
      <main className="mx-auto flex min-h-screen max-w-2xl items-center px-6 py-16">
        <div className="w-full rounded-2xl border border-emerald-600/20 bg-white p-8 shadow-sm">
          <div className="text-4xl text-emerald-600">
            ✓
          </div>

          <h1 className="mt-4 text-3xl font-semibold text-[#0A1F44]">
            Zahlung erfolgreich
          </h1>

          <p className="mt-4 text-[#0A1F44]/70">
            Vielen Dank
            {order.customer_name
              ? `, ${order.customer_name}`
              : ""}
            . Ihre Zahlung für den {packageLabel} wurde
            bestätigt.
          </p>

          <div className="mt-7 rounded-2xl border border-[#C9A95A]/40 bg-[#FFFDF7] p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[#8A6A22]">
              Ihr persönlicher Zugangscode
            </p>

            <div className="mt-3 break-all rounded-xl border border-[#0A1F44]/10 bg-white px-5 py-4 text-center font-mono text-xl font-bold tracking-wider text-[#0A1F44]">
              {order.access_code}
            </div>

            {expiryText && (
              <p className="mt-4 text-sm text-[#0A1F44]/70">
                Gültig bis:{" "}
                <strong>{expiryText}</strong>
              </p>
            )}

            <p className="mt-3 text-sm leading-6 text-[#0A1F44]/65">
              Der Zugangscode ist mit der bei der
              Bestellung verwendeten E-Mail-Adresse
              verknüpft. Bitte bewahren Sie ihn sicher
              auf.
            </p>
          </div>

          <Link
            href="/cv-generator"
            className="mt-7 inline-flex w-full items-center justify-center rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12305F]"
          >
            EliteCV Generator öffnen
          </Link>

          <Link
            href="/"
            className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-[#0A1F44]/15 px-5 py-3 text-sm font-semibold text-[#0A1F44]"
          >
            Zurück zu EliteCV
          </Link>

          <p className="mt-6 break-all text-xs text-[#0A1F44]/35">
            Bestellreferenz: {sessionId}
          </p>
        </div>
      </main>
    );
  } catch (error) {
    console.error(
      "Erfolgsseite konnte Bestellung nicht laden:",
      error
    );

    return (
      <PaymentMessage
        title="Zahlung wurde übermittelt"
        text="Die Bestelldaten konnten momentan nicht geladen werden. Bitte laden Sie die Seite erneut oder kontaktieren Sie EliteCV unter info@elitecv.ch."
        showReload
      />
    );
  }
}

function PaymentMessage({
  title,
  text,
  showReload = false,
}: {
  title: string;
  text: string;
  showReload?: boolean;
}) {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-6 py-16">
      <div className="w-full rounded-2xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-[#0A1F44]">
          {title}
        </h1>

        <p className="mt-4 leading-7 text-[#0A1F44]/70">
          {text}
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          {showReload && (
            <a
              href=""
              className="inline-flex items-center justify-center rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white"
            >
              Seite neu laden
            </a>
          )}

          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-[#0A1F44]/15 px-5 py-3 text-sm font-semibold text-[#0A1F44]"
          >
            Zurück zu EliteCV
          </Link>
        </div>
      </div>
    </main>
  );
}