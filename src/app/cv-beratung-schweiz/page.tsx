import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Beratung Schweiz | Lebenslauf professionell optimieren",

  description:
    "Professionelle CV Beratung in der Schweiz für Fach- und Führungskräfte. Lebenslauf optimieren, Positionierung schärfen und Bewerbungsunterlagen auf den Schweizer Arbeitsmarkt ausrichten.",

  alternates: {
    canonical: "https://www.elitecv.ch/cv-beratung-schweiz",
  },

  openGraph: {
    title: "CV Beratung Schweiz | EliteCV",

    description:
      "Professionelle CV- und Lebenslauf-Beratung für den Schweizer Arbeitsmarkt – für Fachkräfte, Führungskräfte und Executive-Profile.",

    url: "https://www.elitecv.ch/cv-beratung-schweiz",

    siteName: "EliteCV",

    locale: "de_CH",

    type: "website",
  },
};

export default function CVBeratungSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
          EliteCV Schweiz
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          CV Beratung Schweiz: Lebenslauf professionell optimieren
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 md:text-xl">
          Professionelle Unterstützung für Fach- und Führungskräfte, die ihren
          Lebenslauf klarer positionieren, überzeugender formulieren und
          gezielt auf den Schweizer Arbeitsmarkt ausrichten möchten.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#preise"
            className="rounded-full bg-[#0A1F44] px-7 py-3.5 font-semibold text-white transition hover:bg-[#102A5E]"
          >
            Pakete & Preise ansehen
          </Link>

          <Link
            href="/cv-generator"
            className="rounded-full border border-[#0A1F44] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#F5F7FA]"
          >
            CV selbst erstellen
          </Link>
        </div>
      </section>

      {/* WANN SINNVOLL */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Wann lohnt sich eine professionelle CV-Beratung?
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Eine CV-Beratung kann besonders sinnvoll sein, wenn Ihr
            Lebenslauf Ihre Erfahrung und Kompetenzen nicht klar genug
            vermittelt oder wenn Sie sich auf eine neue Position,
            Führungsrolle oder einen Branchenwechsel vorbereiten.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Sie erhalten wenig Rückmeldungen auf Ihre Bewerbungen.",
              "Ihr CV wirkt unübersichtlich oder zu allgemein.",
              "Sie möchten sich beruflich neu positionieren.",
              "Sie bewerben sich auf Führungs- oder Managementrollen.",
              "Sie wechseln Branche oder Funktion.",
              "Sie möchten Ihren Lebenslauf an den Schweizer Arbeitsmarkt anpassen.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm"
              >
                <p className="leading-7 text-[#0A1F44]/75">
                  ✓ {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WAS OPTIMIERT WIRD */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Was wird bei einer CV-Beratung optimiert?
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-2xl font-semibold">
              Positionierung und Kurzprofil
            </h3>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Ihr Lebenslauf sollte auf den ersten Blick zeigen, wofür Sie
              beruflich stehen, welche Erfahrung Sie mitbringen und welche
              Zielposition zu Ihrem Profil passt.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-2xl font-semibold">
              Berufserfahrung und messbare Resultate
            </h3>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Aufgaben werden priorisiert und dort sinnvoll durch konkrete
              Resultate, Projektverantwortung, Führungsspannen,
              Prozessverbesserungen oder andere relevante Erfolge ergänzt.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-2xl font-semibold">
              Struktur und Lesbarkeit
            </h3>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Inhalte werden so gegliedert, dass Recruiter die wichtigsten
              Informationen schnell erfassen und berufliche Schwerpunkte
              leichter einordnen können.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-2xl font-semibold">
              Keywords und ATS
            </h3>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Relevante Begriffe werden passend zur Zielposition integriert,
              ohne den CV künstlich mit Keywords zu überladen. Gleichzeitig
              wird auf eine klar strukturierte und ATS-orientierte Darstellung
              geachtet.
            </p>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            So funktioniert die CV-Optimierung bei EliteCV
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Paket auswählen",
                text: "Wählen Sie die passende Leistung für Ihre Bewerbungssituation.",
              },
              {
                step: "2",
                title: "Unterlagen hochladen",
                text: "Übermitteln Sie Ihren bestehenden CV und relevante Informationen.",
              },
              {
                step: "3",
                title: "Sicher bezahlen",
                text: "Schliessen Sie die Bestellung sicher über Stripe ab.",
              },
              {
                step: "4",
                title: "Optimierung & Lieferung",
                text: "Ihre Unterlagen werden professionell bearbeitet und digital geliefert.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-[#C9A95A]">
                  Schritt {item.step}
                </p>

                <h3 className="mt-3 text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#0A1F44]/70">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          CV-Beratung für unterschiedliche Karrierelevel
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold">
              Fachkräfte
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Klare Positionierung, relevante Kompetenzen und überzeugende
              Berufserfahrung für den nächsten Karriereschritt.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold">
              Ingenieure & technische Profile
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Technische Erfahrung, Projektverantwortung und Fachkompetenzen
              verständlich, kompakt und zielgerichtet darstellen.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
            <h3 className="text-xl font-semibold">
              Führungskräfte & Executives
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Strategische Verantwortung, Führungserfahrung, Transformation
              und messbare Resultate überzeugend positionieren.
            </p>
          </div>
        </div>
      </section>

      {/* SCHWEIZER ARBEITSMARKT */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            CV-Optimierung für den Schweizer Arbeitsmarkt
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Bewerbungsunterlagen sollten nicht nur professionell aussehen,
            sondern auch zur angestrebten Position und zum jeweiligen
            Arbeitsmarkt passen. Entscheidend sind eine nachvollziehbare
            Karriereentwicklung, relevante Kompetenzen und eine klare
            Darstellung Ihrer Berufserfahrung.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-[#0A1F44]/75">
            EliteCV unterstützt Bewerberinnen und Bewerber in der gesamten
            Schweiz digital und ortsunabhängig. Die CV-Beratung eignet sich
            damit sowohl für Bewerbungen bei Schweizer Unternehmen als auch
            für internationale Fach- und Führungskräfte, die sich in der
            Schweiz positionieren möchten.
          </p>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Weitere Informationen für Ihre Bewerbung
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/cv-beratung-dietikon-zuerich"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            CV Beratung Dietikon & Zürich
          </Link>

          <Link
            href="/ratgeber/lebenslauf-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            Lebenslauf Schweiz
          </Link>

          <Link
            href="/ratgeber/lebenslauf-optimieren-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            Lebenslauf optimieren Schweiz
          </Link>

          <Link
            href="/ratgeber/cv-vorlage-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            CV Vorlage Schweiz
          </Link>

          <Link
            href="/ratgeber/executive-cv-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            Executive CV Schweiz
          </Link>

          <Link
            href="/ratgeber/maschinenbauingenieur-cv-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            Ingenieur CV Schweiz
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-[#0A1F44] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Ihren CV professionell optimieren
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Optimieren Sie Ihren bestehenden Lebenslauf für den Schweizer
            Arbeitsmarkt oder erstellen Sie Ihren CV selbst mit dem EliteCV
            Generator.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Pakete & Preise ansehen
            </Link>

            <Link
              href="/cv-generator"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              CV Generator starten
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}