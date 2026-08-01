import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  generateAccessCode,
  hashAccessCode,
  normalizeEmail,
} from "@/lib/access-codes";
import { sendOrderConfirmationEmails } from "@/lib/order-emails";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

if (!webhookSecret) {
  throw new Error("STRIPE_WEBHOOK_SECRET fehlt.");
}

const stripeWebhookSecret: string = webhookSecret;

export async function POST(req: NextRequest) {
  let claimedSessionId: string | null = null;
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json(
      {
        error: "Stripe-Signatur fehlt.",
      },
      {
        status: 400,
      }
    );
  }

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      stripeWebhookSecret
    );

  } catch (error) {
    console.error(
      "Webhook-Signatur ungültig:",
      error
    );

    return NextResponse.json(
      {
        error: "Ungültige Webhook-Signatur.",
      },
      {
        status: 400,
      }
    );
  }

  try {
    const isSuccessfulCheckoutEvent =
      event.type ===
      "checkout.session.completed" ||
      event.type ===
      "checkout.session.async_payment_succeeded";

    if (!isSuccessfulCheckoutEvent) {
      return NextResponse.json({
        received: true,
      });
    }

    const session =
      event.data.object as Stripe.Checkout.Session;

    /*
     * Bei checkout.session.completed kann die Zahlung
     * bei gewissen Zahlungsarten noch ausstehend sein.
     */
    if (
      event.type ===
      "checkout.session.completed" &&
      session.payment_status !== "paid"
    ) {
      console.log(
        "Checkout abgeschlossen, Zahlung wird noch verarbeitet:",
        session.id
      );

      return NextResponse.json({
        received: true,
      });
    }

    /*
 * Dieselbe Stripe-Session darf nur einmal verarbeitet werden.
 * Das verhindert mehrere Zugangscodes und mehrere E-Mails
 * bei parallelen Webhook-Aufrufen.
 */
    const {
      error: claimError,
    } = await supabaseAdmin
      .from("stripe_processed_sessions")
      .insert({
        session_id: session.id,
        event_id: event.id,
      });

    if (claimError) {
      if (claimError.code === "23505") {
        console.log(
          "ℹ️ Stripe-Session wurde bereits verarbeitet:",
          session.id
        );

        return NextResponse.json({
          received: true,
        });
      }

      throw claimError;
    }

    claimedSessionId = session.id;

    /*
     * Zuerst prüfen, ob die Bestellung bereits
     * gespeichert wurde.
     *
     * Falls die Bestellung besteht, die E-Mail aber
     * noch nicht erfolgreich versendet wurde, wird
     * der Versand erneut versucht.
     */
    const {
      data: existingOrder,
      error: existingOrderError,
    } = await supabaseAdmin
      .from("orders")
      .select(
        `
          id,
          customer_name,
          customer_email,
          package,
          addons,
          language,
          total_amount,
          access_code,
          confirmation_email_sent
        `
      )
      .eq("stripe_session_id", session.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle();

    if (existingOrderError) {
      throw existingOrderError;
    }

    if (existingOrder) {
      if (
        existingOrder.confirmation_email_sent
      ) {
        console.log(
          "ℹ️ Bestellung bereits vollständig verarbeitet:",
          session.id
        );

        return NextResponse.json({
          received: true,
        });
      }

      let existingExpiresAt: string | null =
        null;

      if (existingOrder.access_code) {
        const {
          data: existingAccessCode,
          error: existingAccessCodeError,
        } = await supabaseAdmin
          .from("cv_access_codes")
          .select("expires_at")
          .eq(
            "notes",
            `Automatisch erstellt nach Stripe-Zahlung. Session: ${session.id}`
          )
          .order("created_at", {
            ascending: false,
          })
          .limit(1)
          .maybeSingle();

        if (existingAccessCodeError) {
          throw existingAccessCodeError;
        }

        existingExpiresAt =
          existingAccessCode?.expires_at ?? null;
      }

      try {
        await sendOrderConfirmationEmails({
          customerName:
            existingOrder.customer_name ?? "",
          customerEmail:
            existingOrder.customer_email ?? "",
          packageKey:
            existingOrder.package ?? "",
          language:
            existingOrder.language ?? "de",
          addons: Array.isArray(
            existingOrder.addons
          )
            ? existingOrder.addons
            : [],
          totalAmount: Number(
            existingOrder.total_amount ?? 0
          ),
          accessCode:
            existingOrder.access_code ?? null,
          expiresAt: existingExpiresAt,
          stripeSessionId: session.id,
        });

        const {
          error: confirmationUpdateError,
        } = await supabaseAdmin
          .from("orders")
          .update({
            confirmation_email_sent: true,
          })
          .eq("stripe_session_id", session.id);

        if (confirmationUpdateError) {
          throw confirmationUpdateError;
        }

        console.log(
          "✅ Bestell-E-Mails nach erneutem Versuch versendet:",
          session.id
        );
      } catch (mailError) {
        console.error(
          "⚠️ Erneuter E-Mail-Versand fehlgeschlagen. Bestellung und Zugangscode bleiben gültig:",
          mailError
        );
      }

      return NextResponse.json({
        received: true,
      });
    }

    const customerName =
      session.metadata?.customer_name ??
      session.customer_details?.name ??
      "";

    const customerEmail =
      session.customer_details?.email ??
      session.customer_email ??
      session.metadata?.customer_email ??
      "";

    const packageKey =
      session.metadata?.plan_key ?? "";

    const language =
      session.metadata?.language ?? "de";

    const addons =
      session.metadata?.addons
        ?.split(",")
        .map((addon) => addon.trim())
        .filter(Boolean) ?? [];

    const hasEnglishAccess =
      session.metadata?.english_access === "true" ||
      language === "en";

    const hasCoverLetterAccess =
      session.metadata?.cover_letter_access === "true" ||
      packageKey === "generatorExecutive" ||
      addons.includes("coverLetter");

    const isGeneratorPackage =
      packageKey ===
      "generatorProfessional" ||
      packageKey ===
      "generatorExecutive";

    const totalAmount =
      session.amount_total !== null
        ? session.amount_total / 100
        : 0;

    const paymentIntentId =
      typeof session.payment_intent ===
        "string"
        ? session.payment_intent
        : session.payment_intent?.id ??
        null;

    const paymentMethodTypes =
      session.payment_method_types?.join(
        ", "
      ) ?? null;

    let accessCode: string | null = null;
    let expiresAt: string | null = null;

    /*
     * Nur für Generator-Pakete wird automatisch
     * ein Zugangscode erzeugt.
     */
    if (isGeneratorPackage) {
      const normalizedEmail =
        normalizeEmail(customerEmail);

      if (!normalizedEmail) {
        throw new Error(
          "Für die Zugangscode-Erstellung fehlt eine gültige Kunden-E-Mail."
        );
      }

      const isExecutive =
        packageKey ===
        "generatorExecutive";

      const validDays = isExecutive ? 5 : 3;

      accessCode = generateAccessCode();

      const codeHash =
        hashAccessCode(accessCode);

      const expiryDate = new Date();

      expiryDate.setDate(
        expiryDate.getDate() + validDays
      );

      expiresAt = expiryDate.toISOString();

      const {
        error: accessCodeError,
      } = await supabaseAdmin
        .from("cv_access_codes")
        .insert({
          code_hash: codeHash,
          customer_email: normalizedEmail,
          access_level: isExecutive
            ? "executive"
            : "professional",
          english_access:
            hasEnglishAccess,

          cover_letter_access:
            hasCoverLetterAccess,
          professional_layout_access:
            true,
          executive_layout_access:
            isExecutive,
          expires_at: expiresAt,
          is_active: true,
          max_usage_count: 100,
          notes:
            `Automatisch erstellt nach Stripe-Zahlung. Session: ${session.id}`,
        });

      if (accessCodeError) {
        throw accessCodeError;
      }

      console.log(
        "✅ Zugangscode erstellt:",
        normalizedEmail
      );
    }

    /*
     * Bestellung zuerst speichern.
     *
     * confirmation_email_sent bleibt zunächst false.
     * Falls der E-Mail-Versand fehlschlägt, kann Stripe
     * den Webhook erneut senden und der Versand wird
     * erneut versucht.
     */
    const {
      error: orderError,
    } = await supabaseAdmin
      .from("orders")
      .upsert(
        {
          customer_name: customerName,
          customer_email: customerEmail,
          package: packageKey,
          addons,
          language,
          total_amount: totalAmount,
          payment_status: "paid",
          payment_method:
            paymentMethodTypes,
          stripe_session_id: session.id,
          stripe_payment_intent:
            paymentIntentId,
          access_code: accessCode,
          paid_at: new Date().toISOString(),
          confirmation_email_sent: false,
        },
        {
          onConflict: "stripe_session_id",
        }
      );

    if (orderError) {
      throw orderError;
    }

    console.log(
      "✅ Bestellung gespeichert:",
      session.id
    );

    /*
     * Kundenbestätigung und interne
     * Bestellbestätigung versenden.
     */
    try {
      await sendOrderConfirmationEmails({
        customerName,
        customerEmail,
        packageKey,
        language,
        addons,
        totalAmount,
        accessCode,
        expiresAt,
        stripeSessionId: session.id,
      });

      const {
        error: confirmationUpdateError,
      } = await supabaseAdmin
        .from("orders")
        .update({
          confirmation_email_sent: true,
        })
        .eq("stripe_session_id", session.id);

      if (confirmationUpdateError) {
        throw confirmationUpdateError;
      }

      console.log(
        "✅ Bestell-E-Mails versendet:",
        session.id
      );
    } catch (mailError) {
      console.error(
        "⚠️ E-Mail-Versand fehlgeschlagen, Bestellung und Zugangscode bleiben gültig:",
        mailError
      );
    }

    return NextResponse.json({
      received: true,
    });

  } catch (error) {
    if (claimedSessionId) {
      const {
        error: releaseError,
      } = await supabaseAdmin
        .from("stripe_processed_sessions")
        .delete()
        .eq("session_id", claimedSessionId);

      if (releaseError) {
        console.error(
          "Webhook-Sperre konnte nicht entfernt werden:",
          releaseError
        );
      }
    }
    console.error("================================");
    console.error("WEBHOOK ERROR");
    console.error(error);

    if (error instanceof Error) {
      console.error(error.message);
      console.error(error.stack);
    }

    console.error("================================");

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Webhook-Verarbeitung fehlgeschlagen.",
      },
      {
        status: 500,
      }
    );
  }
}