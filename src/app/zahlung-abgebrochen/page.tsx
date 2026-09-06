import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Zahlung abgebrochen | EliteCV",
  robots: {
    index: false,
    follow: true,
  },
};

export default function PaymentCancelledPage() {
  return (
    <main className="flex min-h-screen items-center bg-[#F7F8FA] px-6 py-16 text-[#0A1F44]">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm sm:p-10">
        <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
          EliteCV
        </span>

        <h1 className="mt-6 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
          Zahlung abgebrochen
        </h1>

        <p className="mt-5 leading-8 text-[#0A1F44]/70">
          Die Zahlung wurde nicht abgeschlossen. Es wurde keine Zahlung
          ausgeführt und noch kein Zugangscode freigeschaltet.
        </p>

        <p className="mt-3 leading-8 text-[#0A1F44]/70">
          Sie können jederzeit zu den Paketen zurückkehren und die Bestellung
          erneut starten.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/#preise"
            className="inline-flex items-center justify-center rounded-xl bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#12305F]"
          >
            Zurück zu den Paketen
          </Link>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-xl border border-[#0A1F44]/15 px-6 py-3 text-sm font-semibold text-[#0A1F44] transition hover:bg-[#F7F8FA]"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </main>
  );
}