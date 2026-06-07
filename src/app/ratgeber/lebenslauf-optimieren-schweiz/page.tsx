import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lebenslauf optimieren Schweiz | EliteCV",
  description:
    "Erfahren Sie, wie Sie Ihren Lebenslauf für den Schweizer Arbeitsmarkt professionell optimieren und typische Fehler vermeiden.",
};

export default function LebenslaufOptimierenSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/ratgeber" className="text-sm font-semibold text-[#C9A95A]">
          ← Zurück zum Ratgeber
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          Lebenslauf optimieren Schweiz: Die wichtigsten Tipps
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          Ein professioneller Lebenslauf ist mehr als eine Auflistung von
          Stationen. Gerade im Schweizer Arbeitsmarkt zählt eine klare Struktur,
          eine präzise Positionierung und eine überzeugende Darstellung Ihrer
          Kompetenzen.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Klarer Aufbau statt überladener Informationen
          </h2>
          <p>
            Viele Lebensläufe enthalten zu viele Details und zu wenig
            Priorisierung. Entscheidend ist, dass Recruiter Ihre wichtigsten
            Erfahrungen, Kompetenzen und Erfolge innerhalb weniger Sekunden
            erkennen können.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Berufserfahrung mit Ergebnissen verbinden
          </h2>
          <p>
            Statt nur Aufgaben aufzuzählen, sollten Sie zeigen, welchen Mehrwert
            Sie geschaffen haben. Beispiele sind Prozessverbesserungen,
            Umsatzsteigerungen, Kosteneinsparungen, Projektverantwortung oder
            messbare Resultate.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Schweizer Standards beachten
          </h2>
          <p>
            In der Schweiz wird besonderer Wert auf Übersichtlichkeit,
            Seriosität und Nachvollziehbarkeit gelegt. Ein professionelles Foto,
            klare Kontaktdaten, Sprachkenntnisse und relevante Ausbildungen
            sollten sauber integriert sein.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Kompetenzen gezielt auf die Zielrolle ausrichten
          </h2>
          <p>
            Ein guter Lebenslauf ist nicht allgemein, sondern zielgerichtet.
            Passen Sie Profil, Schlüsselkompetenzen und berufliche Stationen an
            die gewünschte Position und Branche an.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Professionelle Sprache verwenden
          </h2>
          <p>
            Formulierungen sollten klar, aktiv und glaubwürdig sein. Vermeiden
            Sie zu allgemeine Aussagen wie „teamfähig“ oder „motiviert“, wenn
            diese nicht durch konkrete Beispiele belegt werden.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Möchten Sie Ihren Lebenslauf professionell optimieren lassen?
          </h2>
          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV unterstützt Fach- und Führungskräfte bei der professionellen
            CV-Optimierung, LinkedIn-Optimierung und Karrierepositionierung für
            den Schweizer Arbeitsmarkt.
          </p>
          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
          >
            Angebote ansehen
          </Link>
        </div>
      </article>
    </main>
  );
}