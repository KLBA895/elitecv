import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive CV Schweiz: Beispiel & Tipps für Führungskräfte",

  description:
    "Executive CV Schweiz: Beispiel und konkrete Tipps für Führungskräfte, Senior Manager und C-Level. Erfahren Sie, wie Sie Erfolge, Führung und Positionierung überzeugend darstellen.",

  alternates: {
    canonical: "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
      en: "https://www.elitecv.ch/en/guides/executive-cv-switzerland",
    },
  },

  openGraph: {
    title: "Executive CV Schweiz: Beispiel & Tipps für Führungskräfte",
    description:
      "Professionelles Executive-CV-Beispiel mit Tipps zu Positionierung, Führungserfahrung, messbaren Erfolgen und Design für den Schweizer Arbeitsmarkt.",
    url: "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
    images: [
      {
        url: "https://www.elitecv.ch/images/ratgeber/executive-cv-schweiz-laura-schmidt.png",
        width: 1200,
        height: 1600,
        alt: "Executive CV Schweiz – Beispiel für Führungskräfte und C-Level",
      },
    ],
  },
};

export default function ExecutiveCVSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + SPRACHWECHSEL */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Executive CV Schweiz
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Executive CV Schweiz: Beispiel & Tipps für Führungskräfte
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            Ein Executive CV muss mehr leisten als ein klassischer Lebenslauf.
            Für Führungskräfte, Senior Manager und C-Level-Positionen zählen
            eine klare Positionierung, strategische Verantwortung,
            Führungserfahrung und messbare Resultate.
          </p>
        </header>

        {/* CV-BILD */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/executive-cv-schweiz-laura-schmidt.png"
              alt="Executive CV Schweiz Beispiel für Chief Operating Officer und Führungskräfte – EliteCV"
              width={1200}
              height={1600}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Beispiel eines modernen Executive CV für den Schweizer
            Arbeitsmarkt. Die dargestellten Personendaten dienen als
            Musterbeispiel.
          </p>
        </section>

        {/* INHALT */}
        <section className="mt-16 space-y-12 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Was zeichnet einen guten Executive CV aus?
            </h2>

            <p className="mt-5">
              Bei einer Bewerbung auf eine Management- oder C-Level-Position
              sollte der CV nicht lediglich berufliche Stationen und Aufgaben
              auflisten. Entscheidend ist, welchen Mehrwert eine Führungskraft
              geschaffen hat: Welche Verantwortung wurde übernommen? Welche
              Veränderungen wurden angestossen? Welche messbaren Ergebnisse
              wurden erreicht?
            </p>

            <p className="mt-4">
              Ein überzeugender Executive CV verbindet deshalb berufliche
              Erfahrung mit strategischer Positionierung. Recruiter und
              Unternehmen sollten innerhalb kurzer Zeit erkennen können,
              auf welchem Level Sie arbeiten und für welche Führungsaufgaben
              Ihr Profil besonders relevant ist.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              1. Klare Positionierung statt allgemeinem Profil
            </h2>

            <p className="mt-5">
              Bereits im oberen Bereich des CV sollte deutlich werden, für
              welche Funktionen und Verantwortungsbereiche Sie stehen.
              Berufsbezeichnung, Kurzprofil und Kernkompetenzen sollten ein
              konsistentes Bild ergeben und zur angestrebten Position passen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              2. Führungserfahrung konkret sichtbar machen
            </h2>

            <p className="mt-5">
              Allgemeine Formulierungen wie „Führung eines Teams“ sagen wenig
              über die tatsächliche Verantwortung aus. Aussagekräftiger sind
              konkrete Angaben zu Teamgrössen, Standorten, internationaler
              Verantwortung, Budgets, Geschäftsbereichen oder
              Transformationsprojekten.
            </p>

            <p className="mt-4">
              Dadurch wird sichtbar, in welchem organisatorischen und
              wirtschaftlichen Rahmen Sie bereits Verantwortung übernommen
              haben.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              3. Messbare Erfolge statt reiner Aufgabenlisten
            </h2>

            <p className="mt-5">
              Ein Executive CV gewinnt deutlich an Aussagekraft, wenn
              Leistungen anhand konkreter Resultate dargestellt werden.
              Beispiele sind Effizienzsteigerungen, Kostensenkungen,
              Umsatzentwicklungen, Prozessverbesserungen, erfolgreiche
              Transformationen oder umgesetzte Grossprojekte.
            </p>

            <div className="mt-6 rounded-2xl border border-[#C9A95A]/30 bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#0A1F44]">
                Beispiel
              </p>

              <p className="mt-3">
                Statt: „Verantwortlich für die Optimierung interner Prozesse“
              </p>

              <p className="mt-2 font-semibold text-[#0A1F44]">
                Besser: „Durchlaufzeit durch Standardisierung zentraler
                Prozesse um 18 % reduziert.“
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              4. Relevante Kompetenzen gezielt priorisieren
            </h2>

            <p className="mt-5">
              Ein Executive CV sollte nicht jede erworbene Fähigkeit
              gleich stark hervorheben. Strategische Führung,
              Change Management, Transformation, Business Development,
              Operations, Finanzverantwortung oder internationale
              Zusammenarbeit können – abhängig von der Zielposition –
              wesentlich relevanter sein als operative Detailaufgaben.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              5. Professionelles und ruhiges Executive-Design
            </h2>

            <p className="mt-5">
              Auf Executive-Level sollte das Design hochwertig und
              professionell wirken, ohne vom Inhalt abzulenken. Klare
              Hierarchien, konsistente Typografie, ausreichend Weissraum
              und eine strukturierte Darstellung erleichtern die schnelle
              Erfassung der wichtigsten Informationen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Executive CV für den Schweizer Arbeitsmarkt
            </h2>

            <p className="mt-5">
              Für Bewerbungen in der Schweiz sind eine nachvollziehbare
              Karriereentwicklung, relevante Qualifikationen,
              Sprachkenntnisse und eine präzise Darstellung der
              Berufserfahrung wichtig. Gleichzeitig sollte der CV auf
              die konkrete Zielposition abgestimmt sein.
            </p>

            <p className="mt-4">
              Auch die verwendeten Begriffe und Kompetenzen sollten zur
              Stellenausschreibung passen. Eine klare und
              ATS-orientierte Struktur kann zusätzlich helfen, dass
              relevante Informationen sowohl für Recruiter als auch für
              digitale Bewerbersysteme gut erfassbar sind.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Wie lang sollte ein Executive CV sein?
            </h2>

            <p className="mt-5">
              Entscheidend ist nicht eine möglichst kurze Darstellung,
              sondern die Relevanz der Informationen. Bei langjähriger
              Führungs- und Projekterfahrung können zwei Seiten sinnvoll
              sein. Frühere oder weniger relevante Stationen lassen sich
              kompakter darstellen, während aktuelle Führungsrollen und
              messbare Erfolge mehr Raum erhalten.
            </p>
          </div>
        </section>

        {/* INTERNE LINKS */}
        <section className="mt-16 rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Weitere Ratgeber für Ihre Bewerbung in der Schweiz
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              ATS Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              Lebenslauf optimieren Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              CV Schweiz vs. Deutschland
            </Link>

            <Link
              href="/ratgeber/bewerbung-schweiz-tipps"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              Bewerbung Schweiz
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Ihren Executive CV professionell optimieren
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Positionieren Sie Ihre Führungserfahrung, Kompetenzen und
            messbaren Erfolge klar für den Schweizer Arbeitsmarkt.
            Nutzen Sie den EliteCV Generator oder wählen Sie die
            persönliche Executive-CV-Optimierung.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV-Generator starten
            </Link>

            <Link
              href="/#preise"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Pakete & Preise ansehen
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}