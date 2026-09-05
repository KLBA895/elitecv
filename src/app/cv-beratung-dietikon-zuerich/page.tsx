import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Beratung Dietikon & Zürich | Lebenslauf professionell optimieren",

  description:
    "CV Beratung für Dietikon, Zürich und die Region: Lebenslauf professionell optimieren, berufliche Positionierung stärken und Bewerbungsunterlagen für den Schweizer Arbeitsmarkt verbessern.",

  alternates: {
    canonical: "https://www.elitecv.ch/cv-beratung-dietikon-zuerich",
  },

  openGraph: {
    title: "CV Beratung Dietikon & Zürich | EliteCV",

    description:
      "Professionelle CV-Beratung und Lebenslauf-Optimierung für Dietikon, Zürich und den Schweizer Arbeitsmarkt.",

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
          schärfen Sie Ihre berufliche Positionierung und richten Sie Ihre
          Bewerbungsunterlagen gezielt auf den Schweizer Arbeitsmarkt aus.
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

      {/* REGION */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            CV-Beratung für Dietikon, Zürich und Umgebung
          </h2>

          <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
            Im Wirtschaftsraum Zürich treffen Bewerberinnen und Bewerber auf
            zahlreiche attraktive Arbeitgeber und entsprechend hohe
            Anforderungen. Ein professioneller CV hilft dabei, Berufserfahrung,
            Kompetenzen und messbare Erfolge schnell verständlich zu
            präsentieren.
          </p>

          <p className="mt-4 max-w-4xl leading-8 text-[#0A1F44]/75">
            EliteCV hat seinen Sitz in Dietikon und unterstützt Kundinnen und
            Kunden aus Dietikon, Zürich, dem Limmattal und der gesamten Schweiz.
            Die Zusammenarbeit erfolgt digital und ortsunabhängig.
          </p>
        </div>
      </section>

      {/* WARUM BERATUNG */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          Wann lohnt sich eine professionelle CV-Beratung?
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
          Eine CV-Beratung ist besonders sinnvoll, wenn Ihr Lebenslauf Ihre
          tatsächliche Erfahrung nicht ausreichend widerspiegelt, Ihre
          Positionierung zu allgemein wirkt oder Sie sich auf eine neue
          Funktion, Branche oder höhere Verantwortung bewerben möchten.
        </p>

        <p className="mt-4 max-w-4xl leading-8 text-[#0A1F44]/75">
          Statt lediglich einzelne Formulierungen zu verändern, wird geprüft,
          welche Informationen für Ihre Zielposition wirklich relevant sind
          und wie diese klarer, kompakter und überzeugender dargestellt werden
          können.
        </p>
      </section>

      {/* LEISTUNGEN */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Unterstützung bei Lebenslauf und Bewerbung
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                CV-Optimierung
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Struktur, Formulierungen, Berufserfahrung, Kompetenzen und
                Erfolge werden auf Ihre gewünschte Stelle und den Schweizer
                Arbeitsmarkt abgestimmt.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Berufliche Positionierung
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Ihr berufliches Profil wird so strukturiert, dass Recruiter
                schneller erkennen können, welche Erfahrung und welchen
                Mehrwert Sie für eine Zielposition mitbringen.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                LinkedIn-Optimierung
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                Headline, About-Bereich, Berufserfahrung und relevante Keywords
                werden auf Ihre Positionierung und gewünschte Karriereziele
                abgestimmt.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-semibold">
                Fach- und Führungskräfte
              </h3>

              <p className="mt-3 leading-7 text-[#0A1F44]/70">
                EliteCV unterstützt Fachkräfte, Spezialisten, Projektleiter,
                Manager und Führungskräfte bei der professionellen Darstellung
                ihrer beruflichen Erfahrung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABLAUF */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          So funktioniert die CV-Optimierung
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {[
            {
              step: "1",
              title: "Paket auswählen",
              text: "Wählen Sie die passende CV-Leistung für Ihre Ausgangslage.",
            },
            {
              step: "2",
              title: "Unterlagen senden",
              text: "Übermitteln Sie Ihren bestehenden CV und relevante Zusatzinformationen.",
            },
            {
              step: "3",
              title: "Analyse & Optimierung",
              text: "Profil, Struktur, Inhalte und Positionierung werden professionell überarbeitet.",
            },
            {
              step: "4",
              title: "Überarbeitete Version",
              text: "Sie erhalten Ihre optimierten Bewerbungsunterlagen digital.",
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
      </section>

      {/* ZIELGRUPPEN */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold md:text-4xl">
            Für wen eignet sich die CV-Beratung?
          </h2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              "Fachkräfte, die ihren Lebenslauf modernisieren möchten",
              "Ingenieure und technische Spezialisten",
              "Projektleiter und Teamleiter",
              "Manager und Führungskräfte",
              "Personen mit Branchen- oder Funktionswechsel",
              "Bewerberinnen und Bewerber aus dem Ausland für den Schweizer Arbeitsmarkt",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-[#0A1F44]/10 bg-white px-5 py-4 leading-7 text-[#0A1F44]/75"
              >
                ✓ {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOKAL */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-3xl font-bold md:text-4xl">
          EliteCV in Dietikon – für Bewerbungen im Raum Zürich
        </h2>

        <p className="mt-5 max-w-4xl leading-8 text-[#0A1F44]/75">
          Der Standort in Dietikon liegt im Limmattal zwischen Zürich und
          Baden. Die Dienstleistung selbst ist vollständig digital aufgebaut,
          sodass Sie unabhängig von Ihrem Wohn- oder Arbeitsort mit EliteCV
          zusammenarbeiten können.
        </p>

        <p className="mt-4 max-w-4xl leading-8 text-[#0A1F44]/75">
          Dadurch eignet sich die Beratung sowohl für Bewerbungen bei
          Unternehmen in Zürich und Umgebung als auch für Bewerbungen in
          anderen Regionen der Schweiz.
        </p>
      </section>

      {/* INTERNE LINKS */}
      <section className="bg-[#F7F8FA]">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-3xl font-bold">
            Weitere Informationen rund um Ihren CV
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/cv-beratung-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-[#EEF1F5]"
            >
              CV Beratung Schweiz
            </Link>

            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-[#EEF1F5]"
            >
              Lebenslauf Schweiz
            </Link>

            <Link
              href="/ratgeber/cv-vorlage-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-[#EEF1F5]"
            >
              CV Vorlage Schweiz
            </Link>

            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-[#EEF1F5]"
            >
              Executive CV Schweiz
            </Link>

            <Link
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm transition hover:bg-[#EEF1F5]"
            >
              Ingenieur CV Schweiz
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-[#0A1F44] p-8 text-white md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Ihren CV professionell optimieren
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Optimieren Sie Ihren Lebenslauf für den Schweizer Arbeitsmarkt.
            Wählen Sie eine persönliche CV-Leistung oder erstellen Sie Ihren
            Lebenslauf selbst mit dem EliteCV Generator.
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