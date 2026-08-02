import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kontakt | EliteCV",
  description:
    "Kontaktieren Sie EliteCV bei Fragen zu Lebenslauf-Optimierung, Bewerbungsunterlagen, LinkedIn oder dem EliteCV Generator.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A1F44]">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <Link
          href="/"
          className="text-sm font-semibold text-[#C9A95A] hover:underline"
        >
          ← Zurück zu EliteCV
        </Link>

        <h1 className="mt-10 text-5xl font-bold">
          Kontakt
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
          Haben Sie Fragen zu unseren Dienstleistungen oder zum EliteCV
          Generator? Wir helfen Ihnen gerne weiter.
        </p>

        <div className="mt-12 rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-semibold">
            EliteCV
          </h2>

          <div className="mt-6 space-y-5">

            <div>
              <h3 className="font-semibold text-[#8A6A22]">
                Ansprechpartner
              </h3>

              <p className="mt-2">
                Klaudio Batinić
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#8A6A22]">
                E-Mail
              </h3>

              <a
                href="mailto:info@elitecv.ch"
                className="mt-2 inline-block hover:underline"
              >
                info@elitecv.ch
              </a>
            </div>

            <div>
              <h3 className="font-semibold text-[#8A6A22]">
                Telefon
              </h3>

              <p className="mt-2">
                +41 76 331 46 24
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#8A6A22]">
                Geschäftsadresse
              </h3>

              <p className="mt-2">
                Schulgutstrasse 1<br />
                8953 Dietikon<br />
                Schweiz
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#8A6A22]">
                Dienstleistungen
              </h3>

              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Lebenslauf-Optimierung</li>
                <li>Bewerbungsunterlagen</li>
                <li>LinkedIn-Profil-Optimierung</li>
                <li>Motivationsschreiben</li>
                <li>EliteCV Generator</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-[#8A6A22]">
                Digitale Lieferung
              </h3>

              <p className="mt-2 leading-7 text-[#0A1F44]/75">
                Digitale Produkte werden nach erfolgreichem Zahlungseingang
                elektronisch bereitgestellt. Der Zugang zum EliteCV Generator
                erfolgt über einen persönlichen Zugangscode, der automatisch
                per E-Mail zugestellt wird.
              </p>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}