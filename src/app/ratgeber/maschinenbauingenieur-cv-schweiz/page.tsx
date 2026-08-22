import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Maschinenbauingenieur CV Schweiz – Beispiel & Vorlage",

  description:
    "Professionelles CV-Beispiel für Maschinenbauingenieure in der Schweiz. Mit Fokus auf Konstruktion, Projektleitung, CAD, technische Kompetenzen und Berufserfahrung.",

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
    title: "Maschinenbauingenieur CV Schweiz – Beispiel & Vorlage",
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
        alt:
          "Maschinenbauingenieur CV Schweiz Beispiel – Lukas Meier",
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Beispiel
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Maschinenbauingenieur CV Schweiz: Beispiel für technische Fachkräfte
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein professioneller Lebenslauf für Maschinenbauingenieure sollte
            technische Kompetenz, Projekterfahrung und messbare Verantwortung
            klar miteinander verbinden. Das Beispiel von Lukas Meier zeigt,
            wie Konstruktion, Entwicklung, Projektleitung und technische
            Fähigkeiten strukturiert präsentiert werden können.
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
        <section className="mt-16 space-y-10 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Was zeichnet einen guten Maschinenbauingenieur-CV aus?
            </h2>

            <p className="mt-5">
              Recruiter und technische Führungskräfte möchten schnell erkennen,
              welche Fachgebiete, Systeme und Projekte relevant sind. Ein klarer
              Aufbau erleichtert die Einordnung von Erfahrung und Kompetenz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. Technische Kompetenzen konkret benennen
            </h2>

            <p className="mt-4">
              CAD-Systeme, Berechnungstools, ERP-Anwendungen und technische
              Methoden sollten klar aufgeführt werden. Beispiele sind
              SolidWorks, Siemens NX, AutoCAD, Inventor, ANSYS oder SAP.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Projekte und Verantwortung sichtbar machen
            </h2>

            <p className="mt-4">
              Entwicklungsprojekte, Konstruktion von Baugruppen,
              Zusammenarbeit mit Produktion und Qualität sowie Verantwortung
              für Budget, Termine und technische Dokumentation zeigen die
              tatsächliche Rolle deutlich besser als allgemeine Aussagen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Berufserfahrung nachvollziehbar strukturieren
            </h2>

            <p className="mt-4">
              Funktionen, Unternehmen, Zeitraum und zentrale Aufgaben sollten
              schnell erfassbar sein. Bei mehreren technischen Stationen ist
              eine klare chronologische Struktur besonders wichtig.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. Ausbildung und technische Weiterbildung
            </h2>

            <p className="mt-4">
              Für Ingenieurprofile sind Studium, Berufsausbildung,
              Zertifizierungen und technische Weiterbildungen häufig ein
              wichtiger Bestandteil des Lebenslaufs und sollten entsprechend
              sichtbar platziert werden.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              5. Schweizer Arbeitsmarkt berücksichtigen
            </h2>

            <p className="mt-4">
              Sprachkenntnisse, technische Ausbildung, Branchenbezug und
              relevante Berufserfahrung sollten für Schweizer Unternehmen
              klar verständlich dargestellt sein. Auch lokale
              Berufsbezeichnungen und Qualifikationen können die Einordnung
              erleichtern.
            </p>
          </div>
        </section>

        {/* WEITERE BEISPIELE */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
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
            lassen Sie Ihre Bewerbungsunterlagen professionell für den
            Schweizer Arbeitsmarkt optimieren.
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