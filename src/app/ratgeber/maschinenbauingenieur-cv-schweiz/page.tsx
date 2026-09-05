import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenbauingenieur CV Schweiz | Beispiel & Vorlage | EliteCV",

  description:
    "Maschinenbauingenieur CV Schweiz: Professionelles Beispiel mit Fokus auf Konstruktion, Projektleitung, CAD, technische Kompetenzen, Berufserfahrung und ATS.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/maschinenbauingenieur-cv-schweiz",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/maschinenbauingenieur-cv-schweiz",
      en:
        "https://www.elitecv.ch/guides/mechanical-engineer-cv-switzerland",
    },
  },

  openGraph: {
    title: "Maschinenbauingenieur CV Schweiz | Beispiel & Vorlage",

    description:
      "Professionelles CV-Beispiel für Maschinenbauingenieure und technische Fachkräfte im Schweizer Arbeitsmarkt.",

    url:
      "https://www.elitecv.ch/ratgeber/maschinenbauingenieur-cv-schweiz",

    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",

    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/professional-cv-schweiz-lukas-meier.png",
        width: 1600,
        height: 1200,
        alt: "Maschinenbauingenieur CV Schweiz Beispiel – Lukas Meier",
      },
    ],
  },
};

export default function MaschinenbauingenieurCVSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + SPRACHE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/mechanical-engineer-cv-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Maschinenbau & Engineering
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Maschinenbauingenieur CV Schweiz: Beispiel, Aufbau und Tipps
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein professioneller Lebenslauf für Maschinenbauingenieure sollte
            technische Kompetenz, Projekterfahrung und konkrete Verantwortung
            klar miteinander verbinden. Recruiter und technische
            Führungskräfte sollten schnell erkennen können, welche Systeme,
            Methoden, Projekte und Resultate für die Zielposition relevant sind.
          </p>
        </header>

        {/* CV-BILD */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/professional-cv-schweiz-lukas-meier.png"
              alt="Maschinenbauingenieur CV Schweiz Beispiel – Lukas Meier"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Fiktives EliteCV-Beispiel für einen Maschinenbauingenieur im
            Schweizer Arbeitsmarkt.
          </p>
        </section>

        {/* INHALT */}
        <section className="mt-16 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              Was zeichnet einen guten Maschinenbauingenieur-CV aus?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein guter Ingenieur-CV zeigt nicht nur Ausbildung und
              Berufsstationen. Entscheidend ist, dass technische Tiefe,
              Projektverantwortung und praktische Ergebnisse schnell
              verständlich werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Besonders relevant sind je nach Position Konstruktion,
              Produktentwicklung, Berechnung, Produktion, Projektleitung,
              Qualität, technische Dokumentation sowie Schnittstellen zu
              Einkauf, Lieferanten oder Kunden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              1. Technische Kompetenzen konkret benennen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              CAD-Systeme, Berechnungstools, ERP-Anwendungen und technische
              Methoden sollten klar und nachvollziehbar aufgeführt werden.
              Recruiter sollten nicht erst aus langen Aufgabenbeschreibungen
              ableiten müssen, welche Tools Sie tatsächlich beherrschen.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "SolidWorks",
                "Siemens NX",
                "Autodesk Inventor",
                "AutoCAD",
                "ANSYS",
                "SAP / ERP",
                "FMEA",
                "PDM / PLM",
                "Technische Dokumentation",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] px-5 py-4 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Projekte und Verantwortung sichtbar machen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Entwicklungsprojekte, Konstruktion von Baugruppen,
              Produktänderungen, technische Abstimmungen und Projektleitung
              sollten möglichst konkret beschrieben werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Relevant sind beispielsweise Projektumfang, Budget,
              Terminkoordination, technische Verantwortung, Zusammenarbeit mit
              Produktion und Qualität oder die Betreuung von Lieferanten und
              Kunden.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Aufgaben mit Ergebnissen verbinden
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein technischer Lebenslauf gewinnt deutlich an Aussagekraft,
              wenn nicht nur Tätigkeiten, sondern auch Resultate sichtbar
              werden.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Allgemein
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Verantwortlich für Konstruktion und Optimierung verschiedener
                  Baugruppen.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Aussagekräftiger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Konstruktion und Optimierung mechanischer Baugruppen mit
                  Reduktion der Fertigungszeit um 12 Prozent.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Berufserfahrung nachvollziehbar strukturieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Funktion, Unternehmen, Ort und Zeitraum sollten klar sichtbar
              sein. Darunter können die wichtigsten Verantwortlichkeiten und
              Resultate in kurzen, präzisen Stichpunkten dargestellt werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Bei mehreren technischen Positionen ist eine klare
              Priorisierung wichtig. Aktuelle und für die Zielposition
              relevante Tätigkeiten sollten ausführlicher dargestellt werden
              als ältere oder weniger relevante Stationen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Ausbildung und technische Weiterbildung
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Studium, Berufsausbildung, technische Weiterbildungen und
              Zertifikate sind bei Ingenieurprofilen besonders relevant.
              Schweizer und internationale Abschlüsse sollten eindeutig
              bezeichnet werden.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Auch zusätzliche Qualifikationen in Projektmanagement,
              Qualität, Lean Management, Digitalisierung oder Führung können
              für bestimmte Zielpositionen wichtig sein.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Maschinenbauingenieur-CV auf die Stelle ausrichten
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Ein Konstrukteur, Entwicklungsingenieur, Projektleiter oder
              technischer Leiter benötigt nicht exakt dieselbe Gewichtung im
              Lebenslauf.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Analysieren Sie deshalb die Stellenanzeige und priorisieren Sie
              Kompetenzen, Systeme und Erfahrungen, die für die konkrete
              Funktion besonders relevant sind.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Relevante Keywords integrieren
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Technische Stellenanzeigen enthalten häufig konkrete Begriffe,
              nach denen Recruiter oder Bewerbungssoftware suchen können.
              Dazu gehören beispielsweise CAD-Systeme, Normen, Methoden,
              Branchenkenntnisse oder bestimmte Engineering-Prozesse.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Verwenden Sie diese Begriffe nur, wenn sie tatsächlich zu Ihrer
              Erfahrung passen, und verbinden Sie sie möglichst mit konkreten
              Tätigkeiten oder Projekten.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. ATS-Tauglichkeit bei technischen CVs
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Auch technische Lebensläufe sollten digital gut lesbar sein.
              Wichtige Fachkenntnisse dürfen deshalb nicht ausschliesslich über
              Icons, Grafiken oder visuelle Kompetenzbalken dargestellt werden.
            </p>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → ATS-Lebenslauf Schweiz 2026
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              9. Schweizer Arbeitsmarkt berücksichtigen
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Sprachkenntnisse, Ausbildung, Branchenbezug und berufliche
              Erfahrung sollten für Schweizer Unternehmen klar verständlich
              dargestellt sein. Besonders in international ausgerichteten
              Industriebetrieben können Deutsch und Englisch eine wichtige
              Rolle spielen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Auch regionale Branchencluster können relevant sein, etwa
              Maschinenbau, Medizintechnik, Automation, Energie,
              Gebäudetechnik oder industrielle Produktion.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              10. Wie lang sollte ein Ingenieur-CV sein?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Für Berufserfahrene sind zwei Seiten häufig eine gute
              Orientierung. Entscheidend ist jedoch nicht die Seitenzahl,
              sondern die Relevanz der Informationen.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Lange Projektlisten, detaillierte technische Beschreibungen oder
              vollständige Aufzählungen sämtlicher früher verwendeter Tools
              sollten nur aufgenommen werden, wenn sie für die Zielposition
              einen klaren Mehrwert bieten.
            </p>
          </div>

        </section>

        {/* INTERNE LINKS */}
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            Weitere Tipps für Ihren Schweizer CV
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-vorlage-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              CV Vorlage Schweiz
            </Link>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Lebenslauf optimieren
            </Link>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              ATS-Lebenslauf
            </Link>
          </div>
        </section>

        {/* WEITERE BEISPIELE */}
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            Weitere CV-Beispiele
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Executive CV Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-beispiel-operations-manager-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Operations Manager CV
            </Link>

            <Link
              href="/ratgeber/hr-specialist-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              HR Specialist CV
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Professionellen Ingenieur-CV erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Erstellen Sie Ihren Lebenslauf mit dem EliteCV Generator oder
            lassen Sie Ihren bestehenden CV professionell für technische
            Positionen im Schweizer Arbeitsmarkt optimieren.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV Generator starten
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              CV professionell optimieren
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}