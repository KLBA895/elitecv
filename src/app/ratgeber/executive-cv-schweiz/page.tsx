import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive CV Schweiz: Beispiel & Vorlage | EliteCV",

  description:
    "Executive CV für die Schweiz: Entdecken Sie ein professionelles Lebenslauf-Beispiel für Führungskräfte, Management und C-Level.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
  },

  openGraph: {
    title: "Executive CV Schweiz: Beispiel & Vorlage | EliteCV",
    description:
      "Professionelles Executive-CV-Beispiel für Führungskräfte und C-Level im Schweizer Arbeitsmarkt.",
    url: "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
    images: [
      {
        url: "https://www.elitecv.ch/images/ratgeber/executive-cv-schweiz-michael-steiner.png",
        width: 1200,
        height: 1600,
        alt: "Executive CV Schweiz Beispiel für Führungskräfte – EliteCV",
      },
    ],
  },
};

export default function ExecutiveCVSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        <Link
          href="/ratgeber"
          className="text-sm font-semibold text-[#8A6A22] hover:underline"
        >
          ← Zurück zum Ratgeber
        </Link>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Executive CV Schweiz
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Executive CV Schweiz: Beispiel für Führungskräfte
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            Ein Executive CV muss mehr leisten als ein klassischer
            Lebenslauf. Für Führungskräfte, Senior Manager und
            C-Level-Positionen stehen strategische Verantwortung,
            Führungserfahrung und messbare Resultate im Mittelpunkt.
          </p>
        </header>

        {/* CV-BILD */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/executive-cv-schweiz-michael-steiner.png"
              alt="Executive CV Schweiz Beispiel für COO und Führungskräfte von EliteCV"
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
              Bei einer Bewerbung auf Management- oder
              C-Level-Positionen sollte der Lebenslauf nicht lediglich
              berufliche Stationen auflisten. Entscheidend ist, welche
              Verantwortung übernommen wurde, welche Veränderungen
              angestossen wurden und welche Ergebnisse daraus entstanden
              sind.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              1. Klare Positionierung
            </h2>

            <p className="mt-5">
              Bereits im oberen Bereich des CV sollte erkennbar sein,
              für welche Funktionen und Verantwortungsbereiche die
              Führungskraft steht. Eine klare Zielpositionierung erleichtert
              Recruitern und Unternehmen die schnelle Einordnung des Profils.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              2. Führungserfahrung sichtbar machen
            </h2>

            <p className="mt-5">
              Teamgrössen, internationale Verantwortung,
              Budgetverantwortung und strategische Aufgaben können wichtige
              Informationen sein. Sie zeigen den Umfang bisheriger
              Führungsverantwortung wesentlich konkreter als allgemeine
              Aussagen.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              3. Messbare Erfolge statt reiner Aufgabenlisten
            </h2>

            <p className="mt-5">
              Ein Executive CV gewinnt an Aussagekraft, wenn relevante
              Resultate nachvollziehbar dargestellt werden. Dazu gehören
              beispielsweise Effizienzsteigerungen, Kostensenkungen,
              Umsatzentwicklungen, Transformationen oder erfolgreich
              umgesetzte Grossprojekte.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              4. Professionelles und ruhiges Design
            </h2>

            <p className="mt-5">
              Auf Executive-Level sollte das Design hochwertig wirken,
              ohne die Inhalte zu überlagern. Klare Hierarchien,
              konsistente Typografie und eine strukturierte Darstellung
              unterstützen die professionelle Wirkung.
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
              Berufserfahrung besonders wichtig. Der CV sollte dabei immer
              auf die konkrete Zielposition abgestimmt werden.
            </p>
          </div>

        </section>

        {/* INTERNE LINKS */}
        <section className="mt-16 rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Weitere EliteCV Ratgeber
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
              Lebenslauf optimieren
            </Link>

            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              CV Schweiz vs. Deutschland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Professionellen Executive CV erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Mit EliteCV erstellen Sie einen professionell strukturierten
            Lebenslauf für den Schweizer Arbeitsmarkt – mit modernen
            Professional- und Executive-Layouts.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              EliteCV Generator
            </Link>

            <Link
              href="/#pakete"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Angebote ansehen
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}