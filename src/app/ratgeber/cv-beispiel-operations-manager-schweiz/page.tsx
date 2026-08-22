import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Operations Manager CV Schweiz – Beispiel für Führungskräfte",

  description:
    "Professionelles CV-Beispiel für Operations Manager und Führungskräfte in der Schweiz. Mit Fokus auf Leadership, Prozessoptimierung, Transformation und messbare Ergebnisse.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/ratgeber/cv-beispiel-operations-manager-schweiz",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/cv-beispiel-operations-manager-schweiz",
      en:
        "https://www.elitecv.ch/guides/operations-manager-cv-switzerland",
    },
  },

  openGraph: {
    title: "Operations Manager CV Schweiz – Beispiel für Führungskräfte",
    description:
      "Professionelles CV-Beispiel für Operations Manager und Führungskräfte im Schweizer Arbeitsmarkt.",
    url:
      "https://www.elitecv.ch/ratgeber/cv-beispiel-operations-manager-schweiz",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "article",
    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/professional-cv-schweiz-michael-steiner.png",
        width: 1600,
        height: 1200,
        alt:
          "Operations Manager CV Schweiz Beispiel – Michael Steiner",
      },
    ],
  },
};

export default function OperationsManagerCVSchweizPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/ratgeber"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zum Ratgeber
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/cv-beispiel-operations-manager-schweiz"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/guides/operations-manager-cv-switzerland"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        <header className="mt-10 max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Beispiel
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Operations Manager CV Schweiz: Beispiel für Führungskräfte
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Ein CV für Operations-, Produktions- oder
            Geschäftsleitungsfunktionen sollte strategische Verantwortung,
            Führungserfahrung und messbare Resultate klar sichtbar machen.
            Dieses Beispiel zeigt eine mögliche Struktur für eine erfahrene
            Führungskraft im Schweizer Arbeitsmarkt.
          </p>
        </header>

        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/professional-cv-schweiz-michael-steiner.png"
              alt="Operations Manager CV Schweiz Beispiel – Michael Steiner"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Fiktives EliteCV-Beispiel für eine erfahrene Führungskraft im
            Bereich Operations und Prozessmanagement.
          </p>
        </section>

        <section className="mt-16 space-y-10 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Was macht diesen Operations-CV überzeugend?
            </h2>

            <p className="mt-5">
              Der Lebenslauf verbindet Führung, operative Verantwortung,
              Prozessoptimierung und internationale Erfahrung. Entscheidend
              ist, dass die wichtigsten Resultate bereits auf den ersten
              Seiten klar erkennbar sind.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. Führung und Verantwortung konkret darstellen
            </h2>

            <p className="mt-4">
              Teamgrössen, Budgetverantwortung, internationale Zuständigkeiten
              und strategische Aufgaben sollten klar benannt werden. So können
              Recruiter die bisherige Verantwortung schneller einschätzen.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Messbare Resultate hervorheben
            </h2>

            <p className="mt-4">
              Kostensenkungen, Produktivitätssteigerungen, erfolgreiche
              SAP-Einführungen oder Verbesserungen der Lieferperformance
              vermitteln deutlich mehr Wirkung als reine Aufgabenlisten.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Strategische und operative Kompetenzen verbinden
            </h2>

            <p className="mt-4">
              Für Operations-Funktionen ist die Kombination aus Strategie,
              Führung, Lean Management, Digitalisierung und operativer
              Umsetzung besonders relevant.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. Executive-taugliche Struktur
            </h2>

            <p className="mt-4">
              Eine klare visuelle Hierarchie, ein professionelles Design und
              gut strukturierte Inhalte helfen dabei, umfangreiche Erfahrung
              kompakt und hochwertig zu präsentieren.
            </p>
          </div>
        </section>

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
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Maschinenbauingenieur CV
            </Link>

            <Link
              href="/ratgeber/hr-specialist-cv-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              HR Specialist CV
            </Link>
          </div>
        </section>

        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Professionellen CV für die Schweiz erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Erstellen Sie Ihren CV mit dem EliteCV Generator oder lassen Sie
            Ihre Bewerbungsunterlagen professionell auf Ihre Zielposition
            ausrichten.
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