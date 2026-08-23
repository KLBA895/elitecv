import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Beratung Schweiz – Lebenslauf professionell optimieren",

  description:
    "CV Beratung Schweiz für Fach- und Führungskräfte. Professionelle Lebenslauf-Beratung, CV-Optimierung, LinkedIn-Unterstützung und klare Karrierepositionierung.",

  alternates: {
    canonical: "https://www.elitecv.ch/cv-beratung-schweiz",
  },

  openGraph: {
    title: "CV Beratung Schweiz – Lebenslauf professionell optimieren",
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
          EliteCV Beratung
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          CV Beratung Schweiz: Lebenslauf professionell optimieren
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 md:text-xl">
          Professionelle Unterstützung für Fach- und Führungskräfte, die ihren
          Lebenslauf klarer positionieren, überzeugender formulieren und gezielt
          auf den Schweizer Arbeitsmarkt ausrichten möchten.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/#preise"
            className="rounded-full bg-[#0A1F44] px-7 py-3.5 font-semibold text-white transition hover:bg-[#102A5E]"
          >
            CV-Beratung ansehen
          </Link>

          <Link
            href="/cv-generator-schweiz"
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
            Wann lohnt sich eine professionelle Lebenslauf-Beratung?
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              "Sie erhalten wenig Rückmeldungen auf Bewerbungen.",
              "Ihr CV wirkt unübersichtlich oder zu allgemein.",
              "Sie möchten sich beruflich neu positionieren.",
              "Sie bewerben sich auf Führungs- oder Managementrollen.",
              "Sie wechseln Branche oder Funktion.",
              "Sie möchten Ihren Lebenslauf an den Schweizer Markt anpassen.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm"
              >
                <p className="leading-7 text-[#0A1F44]/75">
                  {item}
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

        <div className="mt-10 space-y-10 leading-8 text-[#0A1F44]/75">
          <div>
            <h3 className="text-2xl font-semibold">
              Positionierung und Kurzprofil
            </h3>

            <p className="mt-4">
              Ihr Lebenslauf sollte auf den ersten Blick zeigen, wofür Sie
              beruflich stehen, welche Erfahrung Sie mitbringen und welche
              Zielrolle Sie anstreben.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Berufserfahrung und messbare Resultate
            </h3>

            <p className="mt-4">
              Aufgaben werden priorisiert und dort sinnvoll durch konkrete
              Resultate, Projektverantwortung, Führungsspannen,
              Prozessverbesserungen oder andere relevante Erfolge ergänzt.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Struktur und Lesbarkeit
            </h3>

            <p className="mt-4">
              Inhalte werden so gegliedert, dass Recruiter die wichtigsten
              Informationen schnell erfassen können.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">
              Keywords und ATS
            </h3>

            <p className="mt-4">
              Relevante Begriffe werden passend zur Zielposition integriert,
              ohne den CV künstlich mit Keywords zu überladen.
            </p>
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            CV-Beratung für unterschiedliche Karrierelevel
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Fachkräfte
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Klare Positionierung, relevante Kompetenzen und überzeugende
                Berufserfahrung für den nächsten Karriereschritt.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Ingenieure & technische Profile
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Technische Erfahrung, Projektverantwortung und Fachkompetenzen
                verständlich und zielgerichtet darstellen.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Führungskräfte & Executives
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Strategische Verantwortung, Führung, Transformation und
                messbare Resultate klar positionieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Weiterführende Ratgeber
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/ratgeber/lebenslauf-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            Lebenslauf Schweiz
          </Link>

          <Link
            href="/ratgeber/lebenslauf-optimieren-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            Lebenslauf optimieren
          </Link>

          <Link
            href="/ratgeber/cv-vorlage-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            CV Vorlage Schweiz
          </Link>

          <Link
            href="/ratgeber/executive-cv-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            Führungskräfte CV
          </Link>

          <Link
            href="/ratgeber/maschinenbauingenieur-cv-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            Ingenieur CV
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
            Professionelle CV-Beratung für den Schweizer Arbeitsmarkt
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Lassen Sie Ihren bestehenden Lebenslauf professionell optimieren
            oder erstellen Sie Ihren CV selbst mit dem EliteCV Generator.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44]"
            >
              Beratung & Pakete ansehen
            </Link>

            <Link
              href="/cv-generator-schweiz"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white"
            >
              CV Generator
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}