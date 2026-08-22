import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bewerbung Schweiz – CV, Lebenslauf & Bewerbungstipps",

  description:
    "Bewerbung in der Schweiz: Tipps zu Lebenslauf, CV, Bewerbungsunterlagen, LinkedIn, ATS, Vorstellungsgespräch und Schweizer Bewerbungsstandards.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/bewerbung-schweiz-tipps",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/bewerbung-schweiz-tipps",
      en:
        "https://www.elitecv.ch/guides/job-application-switzerland",
    },
  },

  openGraph: {
    title:
      "Bewerbung Schweiz – CV, Lebenslauf & Bewerbungstipps",
    description:
      "Praktische Tipps für Bewerbungen in der Schweiz: Lebenslauf, CV, LinkedIn, ATS, Bewerbungsunterlagen und Vorstellungsgespräch.",
    url:
      "https://www.elitecv.ch/ratgeber/bewerbung-schweiz-tipps",
    type: "article",
  },
};

export default function BewerbungSchweizTippsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">

        {/* NAVIGATION + SPRACHE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#C9A95A]"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/bewerbung-schweiz-tipps"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/job-application-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Ratgeber
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Bewerbung Schweiz: Lebenslauf, CV und die wichtigsten Tipps
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
            Wer sich in der Schweiz bewirbt, sollte Lebenslauf,
            Bewerbungsunterlagen und berufliche Positionierung auf den
            Schweizer Arbeitsmarkt abstimmen. Ein klar strukturierter CV,
            relevante Erfahrungen und ein professioneller Gesamteindruck
            erleichtern Recruitern die schnelle Einordnung Ihres Profils.
          </p>
        </header>

        {/* CONTENT */}
        <section className="mt-12 space-y-10 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-2xl font-semibold">
              1. Lebenslauf für die Schweiz klar strukturieren
            </h2>

            <p className="mt-4">
              Ein Lebenslauf für Bewerbungen in der Schweiz sollte
              übersichtlich, nachvollziehbar und auf die gewünschte
              Position ausgerichtet sein. Berufserfahrung, Ausbildung,
              Kompetenzen, Sprachkenntnisse und relevante Weiterbildungen
              sollten schnell auffindbar sein.
            </p>

            <p className="mt-4">
              Für viele Bewerbungen sind ein bis zwei Seiten sinnvoll.
              Wichtiger als die reine Seitenzahl ist jedoch, dass relevante
              Informationen priorisiert und unnötige Wiederholungen vermieden
              werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              2. CV Schweiz: Berufserfahrung mit Wirkung darstellen
            </h2>

            <p className="mt-4">
              Eine reine Aufzählung von Aufgaben reicht häufig nicht aus.
              Zeigen Sie, welche Verantwortung Sie übernommen haben, welche
              Projekte Sie geführt oder unterstützt haben und welche
              Ergebnisse daraus entstanden sind.
            </p>

            <p className="mt-4">
              Messbare Resultate wie Prozessverbesserungen,
              Kosteneinsparungen, Umsatzentwicklungen, Teamverantwortung
              oder erfolgreich umgesetzte Projekte können Ihre Erfahrung
              deutlich konkreter machen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              3. Lebenslauf an die Zielposition anpassen
            </h2>

            <p className="mt-4">
              Ein guter Lebenslauf ist nicht für jede Stelle identisch.
              Profiltext, Kernkompetenzen, ausgewählte Erfahrungen und
              relevante Keywords sollten zur jeweiligen Zielposition passen.
            </p>

            <p className="mt-4">
              Analysieren Sie deshalb die Stellenausschreibung und prüfen Sie,
              welche Anforderungen, Technologien, Fachbegriffe und
              Kompetenzen für die Position besonders relevant sind.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              4. ATS und digitale Bewerbungsportale berücksichtigen
            </h2>

            <p className="mt-4">
              Viele Unternehmen nutzen Bewerbungs- und Recruiting-Systeme,
              um eingehende Bewerbungen zu verwalten. Klare Überschriften,
              verständliche Datumsangaben und relevante Begriffe erleichtern
              die Verarbeitung und machen den CV gleichzeitig für Recruiter
              besser lesbar.
            </p>

            <p className="mt-4">
              Wichtige Kompetenzen sollten deshalb nicht ausschließlich als
              Grafik, Icon oder Bewertungsskala dargestellt werden, sondern
              auch als lesbarer Text im Lebenslauf vorkommen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              5. Bewerbungsunterlagen vollständig und konsistent halten
            </h2>

            <p className="mt-4">
              Je nach Stelle können Lebenslauf, Motivationsschreiben,
              Arbeitszeugnisse, Diplome und Zertifikate Bestandteil der
              Bewerbung sein. Die Angaben sollten untereinander konsistent
              sein und ein nachvollziehbares Gesamtbild ergeben.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              6. LinkedIn-Profil zur Bewerbung passend gestalten
            </h2>

            <p className="mt-4">
              Recruiter und Unternehmen nutzen LinkedIn häufig zusätzlich
              zu klassischen Bewerbungsunterlagen. Berufsbezeichnung,
              Headline, Info-Bereich, Berufserfahrung und Skills sollten
              deshalb zur Positionierung im CV passen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              7. Sprachkenntnisse transparent angeben
            </h2>

            <p className="mt-4">
              Sprachkenntnisse können auf dem Schweizer Arbeitsmarkt je nach
              Region und Tätigkeit eine wichtige Rolle spielen. Deutsch,
              Englisch, Französisch und Italienisch sollten mit einem
              nachvollziehbaren Niveau angegeben werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              8. Vorstellungsgespräch gezielt vorbereiten
            </h2>

            <p className="mt-4">
              Bereiten Sie konkrete Beispiele aus Ihrer bisherigen
              Berufserfahrung vor. Besonders hilfreich sind Situationen,
              in denen Sie Probleme gelöst, Verantwortung übernommen,
              Veränderungen umgesetzt oder messbare Resultate erreicht haben.
            </p>

            <p className="mt-4">
              Informieren Sie sich außerdem über Unternehmen, Branche,
              Aufgabenbereich und Anforderungen der ausgeschriebenen Stelle.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              9. Bewerben aus Deutschland oder dem Ausland
            </h2>

            <p className="mt-4">
              Wer sich aus Deutschland oder einem anderen Land in der
              Schweiz bewirbt, sollte den eigenen Lebenslauf nicht einfach
              unverändert übernehmen. Berufsbezeichnungen, Ausbildungswege
              und bisherige Verantwortungsbereiche müssen für Schweizer
              Arbeitgeber klar verständlich sein.
            </p>

            <p className="mt-4">
              Besonders wichtig ist eine klare Darstellung, warum Ihre
              bisherige Erfahrung zur gewünschten Position in der Schweiz
              passt.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">
              10. Professioneller Gesamteindruck
            </h2>

            <p className="mt-4">
              Lebenslauf, LinkedIn-Profil, Motivationsschreiben und
              Kommunikation sollten dieselbe berufliche Positionierung
              vermitteln. Ein klarer roter Faden erhöht die Verständlichkeit
              Ihres Profils und erleichtert Recruitern die Bewertung Ihrer
              Bewerbung.
            </p>
          </div>
        </section>

        {/* INTERNE LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-7">
          <h2 className="text-2xl font-semibold">
            Weitere Tipps für Lebenslauf und Bewerbung in der Schweiz
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              Lebenslauf optimieren Schweiz
            </Link>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              ATS Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              CV Schweiz vs. Deutschland
            </Link>

            <Link
              href="/ratgeber/linkedin-profil-optimieren-schweiz"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              LinkedIn Profil optimieren
            </Link>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              Executive CV Schweiz
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Lebenslauf für die Schweiz professionell erstellen
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/80">
            Erstellen Sie Ihren CV mit dem EliteCV Generator oder lassen Sie
            Ihre Bewerbungsunterlagen professionell für den Schweizer
            Arbeitsmarkt optimieren.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-full bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              CV Generator starten
            </Link>

            <Link
              href="/#preise"
              className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white"
            >
              Angebote ansehen
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}