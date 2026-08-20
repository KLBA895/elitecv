import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CV Generator Schweiz – Professionellen Lebenslauf erstellen",

  description:
    "CV Generator für die Schweiz: Erstellen Sie einen professionellen, ATS-optimierten Lebenslauf auf Deutsch oder Englisch mit modernen Professional- und Executive-Vorlagen.",

  alternates: {
    canonical: "https://www.elitecv.ch/cv-generator-schweiz",
  },

  openGraph: {
    title: "CV Generator Schweiz – Professionellen Lebenslauf erstellen",
    description:
      "Professionellen und ATS-optimierten CV für den Schweizer Arbeitsmarkt erstellen – mit EliteCV.",
    url: "https://www.elitecv.ch/cv-generator-schweiz",
    type: "website",
  },
};

export default function CVGeneratorSchweizPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
          EliteCV Generator
        </p>

        <h1 className="mt-4 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
          CV Generator Schweiz: Professionellen Lebenslauf erstellen
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/75 md:text-xl">
          Erstellen Sie einen professionellen und ATS-optimierten Lebenslauf
          für den Schweizer Arbeitsmarkt – auf Deutsch oder Englisch und mit
          modernen Professional- und Executive-Layouts.
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

      {/* VORTEILE */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            CV erstellen für den Schweizer Arbeitsmarkt
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-[#0A1F44]/75">
            Ein überzeugender Lebenslauf muss Informationen schnell
            erfassbar machen und gleichzeitig Ihre berufliche Positionierung
            klar vermitteln. EliteCV unterstützt Sie dabei, Ihre Erfahrungen,
            Kompetenzen und Erfolge strukturiert darzustellen.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                ATS-optimiert
              </h3>
              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Klare Strukturen und relevante Inhalte unterstützen die
                Verarbeitung durch moderne Bewerbungs- und Recruiting-Systeme.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Professional & Executive
              </h3>
              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Wählen Sie eine professionelle Darstellung passend zu Ihrer
                Berufserfahrung, Zielposition und Karrierestufe.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                KI-Unterstützung
              </h3>
              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Nutzen Sie intelligente Unterstützung für Profiltexte und
                weitere Inhalte Ihres Lebenslaufs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SO FUNKTIONIERT ES */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          So funktioniert der EliteCV Generator
        </h2>

        <div className="mt-10 space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              1. Berufliche Daten erfassen
            </h3>
            <p className="mt-2 leading-7 text-[#0A1F44]/70">
              Erfassen Sie Berufserfahrung, Ausbildung, Kompetenzen,
              Sprachkenntnisse und weitere relevante Informationen.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              2. Inhalte professionell strukturieren
            </h3>
            <p className="mt-2 leading-7 text-[#0A1F44]/70">
              Strukturieren Sie Profil, Berufserfahrung, Skills und Erfolge
              übersichtlich und auf Ihre berufliche Zielposition ausgerichtet.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold">
              3. CV erstellen und verwenden
            </h3>
            <p className="mt-2 leading-7 text-[#0A1F44]/70">
              Erstellen Sie daraus einen professionellen Lebenslauf für Ihre
              Bewerbungen auf dem Schweizer Arbeitsmarkt.
            </p>
          </div>
        </div>
      </section>

      {/* DE / EN */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Lebenslauf auf Deutsch oder Englisch
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-[#0A1F44]/75">
            Bewerbungen in der Schweiz werden je nach Unternehmen,
            Branche und Position auf Deutsch oder Englisch erwartet.
            EliteCV unterstützt beide Sprachen, damit Sie Ihren CV passend
            zur gewünschten Stelle erstellen können.
          </p>
        </div>
      </section>

      {/* RATGEBER / INTERNE LINKS */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-3xl font-bold">
          CV richtig optimieren
        </h2>

        <p className="mt-5 max-w-3xl leading-8 text-[#0A1F44]/75">
          Nutzen Sie zusätzlich unsere Ratgeber zur professionellen
          Optimierung Ihres Lebenslaufs und Ihrer Bewerbungsunterlagen.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/ratgeber/lebenslauf-optimieren-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            Lebenslauf optimieren Schweiz
          </Link>

          <Link
            href="/ratgeber/ats-lebenslauf-schweiz-2026"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            ATS Lebenslauf Schweiz
          </Link>

          <Link
            href="/ratgeber/executive-cv-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            Executive CV Schweiz
          </Link>

          <Link
            href="/ratgeber/linkedin-profil-optimieren-schweiz"
            className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
          >
            LinkedIn Profil optimieren
          </Link>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="rounded-3xl bg-[#0A1F44] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Jetzt professionellen CV erstellen
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/80">
            Starten Sie mit dem EliteCV Generator und erstellen Sie Ihren
            Lebenslauf für den Schweizer Arbeitsmarkt.
          </p>

          <Link
            href="/cv-generator"
            className="mt-7 inline-block rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
          >
            CV Generator starten
          </Link>
        </div>
      </section>
    </main>
  );
}