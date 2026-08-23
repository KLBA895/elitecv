import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Beratung Dietikon & Zürich – Lebenslauf professionell optimieren",

  description:
    "CV Beratung in Dietikon und Zürich: Professionelle Lebenslauf-Optimierung, Bewerbungsberatung, LinkedIn-Unterstützung und CV-Services für den Schweizer Arbeitsmarkt.",

  alternates: {
    canonical: "https://www.elitecv.ch/cv-beratung-dietikon-zuerich",
  },

  openGraph: {
    title: "CV Beratung Dietikon & Zürich | EliteCV",
    description:
      "Professionelle CV- und Lebenslauf-Beratung für Dietikon, Zürich und den Schweizer Arbeitsmarkt.",
    url: "https://www.elitecv.ch/cv-beratung-dietikon-zuerich",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "website",
  },
};

export default function CVBeratungDietikonZuerichPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
          EliteCV Schweiz
        </p>

        <h1 className="mt-4 max-w-5xl text-4xl font-bold leading-tight md:text-6xl">
          CV Beratung Dietikon & Zürich: Lebenslauf professionell optimieren
        </h1>

        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 md:text-xl">
          Professionelle CV-Beratung für Fach- und Führungskräfte aus Dietikon,
          Zürich und der gesamten Region. Optimieren Sie Ihren Lebenslauf,
          stärken Sie Ihre berufliche Positionierung und verbessern Sie Ihre
          Bewerbungsunterlagen für den Schweizer Arbeitsmarkt.
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

      {/* REGION */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            CV-Beratung für Dietikon, Zürich und Umgebung
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Bewerbungen im Raum Zürich sind häufig stark umkämpft. Ein klar
            positionierter, professioneller CV hilft dabei, Erfahrung,
            Kompetenzen und berufliche Ziele schnell verständlich zu
            präsentieren.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-[#0A1F44]/75">
            Die Beratung ist nicht auf einen bestimmten Wohnort beschränkt.
            EliteCV unterstützt Kundinnen und Kunden in der ganzen Schweiz
            digital und ortsunabhängig.
          </p>
        </div>
      </section>

      {/* LEISTUNGEN */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Unterstützung bei Lebenslauf und Bewerbung
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-xl font-semibold">
              CV-Optimierung
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Struktur, Formulierungen, Berufserfahrung, Kompetenzen und
              Positionierung werden gezielt auf die gewünschte Stelle
              ausgerichtet.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-xl font-semibold">
              Lebenslauf-Beratung
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Sie erhalten Unterstützung dabei, Ihren beruflichen Werdegang
              klar, professionell und überzeugend darzustellen.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-xl font-semibold">
              LinkedIn-Optimierung
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              Headline, About-Bereich, Berufserfahrung und relevante Keywords
              werden auf Ihre Zielposition abgestimmt.
            </p>
          </div>

          <div className="rounded-2xl border border-[#0A1F44]/10 p-7">
            <h3 className="text-xl font-semibold">
              Führungskräfte & Fachkräfte
            </h3>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              EliteCV unterstützt sowohl Fachkräfte als auch Manager,
              Führungskräfte und Executive-Profile.
            </p>
          </div>
        </div>
      </section>

      {/* ZIELGRUPPEN */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Für wen eignet sich die CV-Beratung?
          </h2>

          <div className="mt-8 space-y-4 leading-8 text-[#0A1F44]/75">
            <p>
              • Fachkräfte, die ihren Lebenslauf modernisieren möchten
            </p>
            <p>
              • Ingenieure und technische Spezialisten
            </p>
            <p>
              • Projektleiter und Teamleiter
            </p>
            <p>
              • Führungskräfte und Executive-Profile
            </p>
            <p>
              • Personen mit Branchen- oder Funktionswechsel
            </p>
            <p>
              • Bewerberinnen und Bewerber aus dem Ausland für den Schweizer Markt
            </p>
          </div>
        </div>
      </section>

      {/* INTERNE LINKS */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          Weitere Informationen
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          <Link
            href="/cv-beratung-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            CV Beratung Schweiz
          </Link>

          <Link
            href="/ratgeber/lebenslauf-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold"
          >
            Lebenslauf Schweiz
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
            CV professionell optimieren lassen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Lassen Sie Ihren Lebenslauf professionell für den Schweizer
            Arbeitsmarkt optimieren oder erstellen Sie Ihren CV selbst mit dem
            EliteCV Generator.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44]"
            >
              Beratung & Pakete
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