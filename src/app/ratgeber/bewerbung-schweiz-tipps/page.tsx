import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bewerbung Schweiz Tipps | EliteCV",
  description:
    "Praktische Tipps für erfolgreiche Bewerbungen in der Schweiz – vom Lebenslauf bis zum Vorstellungsgespräch.",
};

export default function BewerbungSchweizTippsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/ratgeber" className="text-sm font-semibold text-[#C9A95A]">
          ← Zurück zum Ratgeber
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          Bewerbung Schweiz: Die wichtigsten Tipps
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          Der Schweizer Arbeitsmarkt bietet viele Chancen, gleichzeitig sind die
          Erwartungen an Bewerbungsunterlagen und das Auftreten oft hoch.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold">1. Lebenslauf aktuell halten</h2>
          <p>
            Der Lebenslauf sollte übersichtlich, aktuell und auf die Zielstelle
            abgestimmt sein.
          </p>

          <h2 className="text-2xl font-semibold">2. Bewerbungsunterlagen anpassen</h2>
          <p>
            Vermeiden Sie Standardbewerbungen. Jede Bewerbung sollte auf die
            ausgeschriebene Stelle zugeschnitten werden.
          </p>

          <h2 className="text-2xl font-semibold">3. LinkedIn nutzen</h2>
          <p>
            Viele Schweizer Unternehmen prüfen LinkedIn-Profile zusätzlich zu den
            Bewerbungsunterlagen.
          </p>

          <h2 className="text-2xl font-semibold">4. Auf das Vorstellungsgespräch vorbereiten</h2>
          <p>
            Informieren Sie sich über das Unternehmen, die Stelle und bereiten
            Sie konkrete Beispiele aus Ihrer Berufserfahrung vor.
          </p>

          <h2 className="text-2xl font-semibold">5. Professioneller Gesamteindruck</h2>
          <p>
            Lebenslauf, LinkedIn-Profil und Kommunikation sollten ein
            einheitliches und professionelles Bild vermitteln.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Unterstützung bei Ihrer Bewerbung?
          </h2>

          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV unterstützt Sie bei CV-Optimierung, LinkedIn-Optimierung und
            professioneller Karrierepositionierung.
          </p>

          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white"
          >
            Angebote ansehen
          </Link>
        </div>
      </article>
    </main>
  );
}