import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lebenslauf optimieren Schweiz – CV professionell verbessern",

  description:
    "Lebenslauf optimieren für die Schweiz: Erfahren Sie, wie Sie Struktur, Berufserfahrung, Keywords und ATS-Tauglichkeit verbessern und Ihren CV professionell auf die Zielposition ausrichten.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",
      en:
        "https://www.elitecv.ch/guides/cv-optimization-switzerland",
    },
  },

  openGraph: {
    title:
      "Lebenslauf optimieren Schweiz – CV professionell verbessern",
    description:
      "Praktische Tipps zur CV-Optimierung für den Schweizer Arbeitsmarkt: Struktur, ATS, Berufserfahrung, Keywords und Positionierung.",
    url:
      "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",
    type: "article",
  },
};

export default function LebenslaufOptimierenSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">

        {/* NAVIGATION + SPRACHWECHSEL */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#C9A95A]"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

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

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            6. Lebenslauf für ATS und Recruiter optimieren
          </h2>

          <p>
            Viele Unternehmen nutzen digitale Bewerbungs- und
            Recruiting-Systeme zur ersten Verarbeitung von Lebensläufen.
            Verwenden Sie deshalb klare Überschriften, eine nachvollziehbare
            Struktur und relevante Begriffe aus der Stellenanzeige. Wichtige
            Kompetenzen sollten nicht nur grafisch dargestellt, sondern auch
            als Text im CV vorhanden sein.
          </p>
        </section>

        {/* CTA */}
        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Möchten Sie Ihren Lebenslauf jetzt verbessern?
          </h2>

          <p className="mt-4 text-[#0A1F44]/72">
            Erstellen Sie Ihren CV mit dem EliteCV Generator selbst oder
            lassen Sie Ihre Bewerbungsunterlagen professionell für den
            Schweizer Arbeitsmarkt optimieren.
          </p>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
            >
              CV Generator starten
            </Link>

            <Link
              href="/#preise"
              className="inline-block rounded-full border border-[#0A1F44] px-6 py-3 text-sm font-semibold text-[#0A1F44] hover:bg-[#F5F7FA]"
            >
              Professionelle CV-Optimierung
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}