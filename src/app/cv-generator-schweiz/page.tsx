import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV Generator Schweiz – CV & Lebenslauf online erstellen",

  description:
    "CV Generator Schweiz: Erstellen Sie einen professionellen Lebenslauf mit modernen CV-Vorlagen, ATS-orientierter Struktur, Professional- und Executive-Layouts sowie KI-Unterstützung.",

  keywords: [
    "CV Generator Schweiz",
    "CV erstellen Schweiz",
    "Lebenslauf erstellen Schweiz",
    "CV Vorlage Schweiz",
    "CV Vorlagen Generator",
    "Lebenslauf Vorlage Schweiz",
    "professionellen CV erstellen",
    "CV online erstellen",
    "ATS Lebenslauf Schweiz",
    "Executive CV Schweiz",
  ],

  alternates: {
    canonical: "https://www.elitecv.ch/cv-generator-schweiz",
  },

  openGraph: {
    title: "CV Generator Schweiz – Professionellen CV erstellen",
    description:
      "Erstellen Sie einen professionellen CV für den Schweizer Arbeitsmarkt mit modernen Vorlagen, ATS-orientierter Struktur und KI-Unterstützung.",
    url: "https://www.elitecv.ch/cv-generator-schweiz",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "website",
  },
};

const faqData = [
  {
    question: "Wie funktioniert der EliteCV Generator?",
    answer:
      "Sie erfassen Ihre beruflichen Daten, Erfahrungen, Ausbildung und Kompetenzen strukturiert im Generator. Anschliessend können Sie daraus einen professionellen CV für den Schweizer Arbeitsmarkt erstellen.",
  },
  {
    question: "Kann ich einen CV für die Schweiz erstellen?",
    answer:
      "Ja. Der EliteCV Generator ist auf Bewerbungen im Schweizer Arbeitsmarkt ausgerichtet und unterstützt eine klare, professionelle Struktur für Fach- und Führungskräfte.",
  },
  {
    question: "Kann ich meinen Lebenslauf auf Deutsch oder Englisch erstellen?",
    answer:
      "Je nach gewähltem Zugang können Inhalte auf Deutsch oder Englisch genutzt werden. Damit eignet sich EliteCV auch für internationale Bewerbungen in der Schweiz.",
  },
  {
    question: "Ist der CV ATS-freundlich aufgebaut?",
    answer:
      "EliteCV legt Wert auf klare Überschriften, strukturierte Inhalte und eine nachvollziehbare Darstellung von Berufserfahrung und Kompetenzen. Das unterstützt sowohl Recruiter als auch moderne Bewerbungsprozesse.",
  },
  {
    question: "Gibt es Vorlagen für Führungskräfte?",
    answer:
      "Ja. Neben Professional-Layouts stehen auch Executive-Lösungen für erfahrene Fachkräfte, Manager und Führungskräfte zur Verfügung.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function CVGeneratorSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
          EliteCV Generator Schweiz
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          CV Generator Schweiz: Professionellen CV und Lebenslauf erstellen
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 md:text-xl">
          Erstellen Sie einen professionellen Lebenslauf für den Schweizer
          Arbeitsmarkt – mit moderner CV-Vorlage, klarer Struktur,
          Professional- und Executive-Layouts sowie intelligenter
          Unterstützung bei ausgewählten Inhalten.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/cv-generator"
            className="rounded-full bg-[#0A1F44] px-7 py-3.5 font-semibold text-white transition hover:bg-[#102A5E]"
          >
            Jetzt CV erstellen
          </Link>

          <Link
            href="/#preise"
            className="rounded-full border border-[#0A1F44] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#F5F7FA]"
          >
            Preise ansehen
          </Link>
        </div>
      </section>

      {/* WARUM */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            CV online erstellen für den Schweizer Arbeitsmarkt
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Ein professioneller CV muss relevante Informationen schnell
            sichtbar machen. Berufserfahrung, Ausbildung, Kompetenzen und
            Erfolge sollten logisch strukturiert und auf die gewünschte
            Position ausgerichtet sein.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Professionelle CV-Vorlagen
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Nutzen Sie moderne Professional- und Executive-Layouts für
                unterschiedliche Karrierelevel und Zielpositionen.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                ATS-orientierte Struktur
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Klare Überschriften und strukturierte Inhalte unterstützen
                die Lesbarkeit für Recruiter und digitale Bewerbungsprozesse.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                KI-Unterstützung
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Nutzen Sie intelligente Unterstützung für ausgewählte
                Formulierungen und die professionelle Darstellung Ihrer
                Erfahrungen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT ES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          So erstellen Sie Ihren CV mit EliteCV
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <p className="text-sm font-bold text-[#C9A95A]">
              SCHRITT 1
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Berufliche Daten erfassen
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Erfassen Sie Berufserfahrung, Ausbildung, Weiterbildungen,
              Kompetenzen und Sprachkenntnisse.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <p className="text-sm font-bold text-[#C9A95A]">
              SCHRITT 2
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Inhalte strukturieren
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Ordnen Sie Ihre Erfahrungen und Erfolge so, dass die wichtigsten
              Informationen für die Zielposition schnell erkennbar sind.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <p className="text-sm font-bold text-[#C9A95A]">
              SCHRITT 3
            </p>

            <h3 className="mt-3 text-xl font-semibold">
              Professionellen CV erstellen
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Wählen Sie Ihr Layout und erstellen Sie daraus Ihren
              professionellen Lebenslauf.
            </p>
          </div>
        </div>
      </section>

      {/* VORLAGEN */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            CV Vorlagen für unterschiedliche Karrierelevel
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Der Lebenslauf eines Berufseinsteigers benötigt eine andere
            Gewichtung als der CV einer erfahrenen Führungskraft. Deshalb
            sollte die Darstellung zu Erfahrung, Branche und Zielposition
            passen.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/cv-vorlage-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              CV Vorlage Schweiz
            </Link>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              Führungskräfte CV
            </Link>

            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              Ingenieur CV
            </Link>

            <Link
              href="/ratgeber/hr-specialist-cv-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              HR CV
            </Link>

            <Link
              href="/ratgeber/cv-beispiel-operations-manager-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              Management CV
            </Link>
          </div>
        </div>
      </section>

      {/* DE / EN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Lebenslauf auf Deutsch oder Englisch erstellen
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
          In der Schweiz werden Bewerbungen je nach Unternehmen, Branche und
          Position auf Deutsch oder Englisch eingereicht. EliteCV unterstützt
          beide Sprachen, damit Sie Ihren CV passend zur jeweiligen
          Bewerbung erstellen können.
        </p>
      </section>

      {/* SCHWEIZER CV */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Was ist bei einem CV in der Schweiz wichtig?
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Ein Schweizer Lebenslauf sollte professionell, klar und
            nachvollziehbar aufgebaut sein. Besonders wichtig sind relevante
            Berufserfahrung, Ausbildung, Sprachkenntnisse, Fachkompetenzen und
            eine klare Ausrichtung auf die gewünschte Stelle.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              Lebenslauf optimieren
            </Link>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              ATS Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
            >
              CV Schweiz vs. Deutschland
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Häufige Fragen zum CV Generator Schweiz
        </h2>

        <div className="mt-8 space-y-5">
          {faqData.map((item) => (
            <div
              key={item.question}
              className="rounded-2xl border border-[#0A1F44]/10 p-6"
            >
              <h3 className="text-xl font-semibold">
                {item.question}
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-3xl bg-[#0A1F44] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Generator
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Jetzt professionellen CV für die Schweiz erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Erstellen Sie Ihren Lebenslauf online mit einer professionellen
            Struktur und modernen CV-Vorlagen oder wählen Sie eine persönliche
            CV-Optimierung.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV jetzt erstellen
            </Link>

            <Link
              href="/#preise"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white"
            >
              CV-Beratung & Optimierung
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}