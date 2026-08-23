import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Karriere-Ratgeber Schweiz: CV, Lebenslauf & Bewerbung | EliteCV",

  description:
    "Ratgeber zu Lebenslauf Schweiz, CV Vorlagen, ATS, Bewerbung, LinkedIn, CV-Beispielen und Karriere für den Schweizer Arbeitsmarkt.",

  alternates: {
    canonical: "https://www.elitecv.ch/ratgeber",
  },

  openGraph: {
    title: "EliteCV Karriere-Ratgeber Schweiz",
    description:
      "Tipps zu Lebenslauf, CV, Vorlagen, ATS, Bewerbung, LinkedIn und Karriere im Schweizer Arbeitsmarkt.",
    url: "https://www.elitecv.ch/ratgeber",
    siteName: "EliteCV",
    locale: "de_CH",
    type: "website",
  },
};

type Article = {
  title: string;
  description: string;
  href: string;
  category: string;
  readingTime: string;
  badge?: string;
};

const articles: Article[] = [
  {
    title: "Lebenslauf Schweiz 2026",
    description:
      "Aufbau, Inhalt, Länge, Foto und Beispiele: So erstellen Sie einen professionellen Lebenslauf für den Schweizer Arbeitsmarkt.",
    href: "/ratgeber/lebenslauf-schweiz",
    category: "Lebenslauf",
    readingTime: "10 Min.",
    badge: "NEU",
  },
  {
    title: "CV Vorlage Schweiz 2026",
    description:
      "Professionelle CV-Vorlagen für die Schweiz: Aufbau, Gestaltung, ATS-Tauglichkeit und Beispiele für verschiedene Karrierelevel.",
    href: "/ratgeber/cv-vorlage-schweiz",
    category: "CV-Vorlagen",
    readingTime: "9 Min.",
    badge: "NEU",
  },
  {
    title: "ATS Lebenslauf Schweiz 2026",
    description:
      "Wie Sie einen ATS-konformen Lebenslauf erstellen, der Bewerbungsportale und Recruiter überzeugt.",
    href: "/ratgeber/ats-lebenslauf-schweiz-2026",
    category: "ATS",
    readingTime: "8 Min.",
  },
  {
    title: "Lebenslauf optimieren Schweiz",
    description:
      "Die häufigsten Fehler im Lebenslauf und wie Sie Ihren CV für den Schweizer Arbeitsmarkt professionell verbessern.",
    href: "/ratgeber/lebenslauf-optimieren-schweiz",
    category: "Lebenslauf",
    readingTime: "7 Min.",
  },
  {
    title: "LinkedIn Profil optimieren Schweiz",
    description:
      "Mehr Sichtbarkeit, bessere Positionierung und mehr relevante Recruiter-Anfragen auf LinkedIn.",
    href: "/ratgeber/linkedin-profil-optimieren-schweiz",
    category: "LinkedIn",
    readingTime: "7 Min.",
  },
  {
    title: "CV Schweiz vs. Deutschland",
    description:
      "Die wichtigsten Unterschiede zwischen Schweizer und deutschen Bewerbungsunterlagen.",
    href: "/ratgeber/cv-schweiz-vs-deutschland",
    category: "Lebenslauf",
    readingTime: "6 Min.",
  },
  {
    title: "Bewerbung Schweiz Tipps",
    description:
      "Praktische Tipps für überzeugende Bewerbungsunterlagen und einen professionellen Auftritt.",
    href: "/ratgeber/bewerbung-schweiz-tipps",
    category: "Bewerbung",
    readingTime: "6 Min.",
  },
];

const cvExamples = [
  {
    title: "Chief Operating Officer",
    subtitle: "C-Level & Führungskräfte",
    image:
      "/images/ratgeber/executive-cv-schweiz-laura-schmidt.png",
    alt:
      "Executive CV Schweiz Beispiel für Führungskräfte und C-Level von EliteCV",
    href: "/ratgeber/executive-cv-schweiz",
  },
  {
    title: "Head of Operations",
    subtitle: "Management & Operations",
    image:
      "/images/ratgeber/professional-cv-schweiz-michael-steiner.png",
    alt:
      "Professional CV Schweiz Beispiel für Management und Operations von EliteCV",
    href: "/ratgeber/cv-beispiel-operations-manager-schweiz",
  },
  {
    title: "Maschinenbauingenieur",
    subtitle: "Maschinenbau & Engineering",
    image:
      "/images/ratgeber/professional-cv-schweiz-lukas-meier.png",
    alt:
      "Professional CV Schweiz Beispiel für Maschinenbauingenieur von EliteCV",
    href: "/ratgeber/maschinenbauingenieur-cv-schweiz",
  },
  {
    title: "HR Specialist",
    subtitle: "Human Resources",
    image:
      "/images/ratgeber/hr-specialist-lebenslauf-schweiz-sarah-keller.png",
    alt:
      "HR Specialist Lebenslauf Schweiz Beispiel für Human Resources von EliteCV",
    href: "/ratgeber/hr-specialist-cv-schweiz",
  },
];

export default function RatgeberPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Zurück zu EliteCV
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              DE
            </Link>

            <Link
              href="/en/guides"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <div className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            EliteCV Karriere-Ratgeber
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            CV, Lebenslauf & Bewerbung in der Schweiz
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            Ratgeber, CV-Vorlagen und Beispiele für einen professionellen
            Lebenslauf, ATS-optimierte Bewerbungsunterlagen, LinkedIn und die
            erfolgreiche Positionierung im Schweizer Arbeitsmarkt.
          </p>
        </div>

        {/* THEMEN */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Lebenslauf Schweiz",
            "CV Schweiz",
            "CV-Vorlagen",
            "ATS",
            "Bewerbung",
            "LinkedIn",
            "Karriere",
          ].map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#0A1F44]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A1F44]/75"
            >
              {category}
            </span>
          ))}
        </div>

        {/* ARTIKEL */}
        <section className="mt-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
              Wissen für Ihre Bewerbung
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Aktuelle Ratgeber
            </h2>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {articles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span className="rounded-full bg-[#0A1F44]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#0A1F44]/65">
                    {article.category}
                  </span>

                  <span className="text-xs text-[#0A1F44]/50">
                    {article.readingTime} Lesezeit
                  </span>

                  {article.badge && (
                    <span className="rounded-full bg-[#C9A95A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      {article.badge}
                    </span>
                  )}
                </div>

                <h3 className="mt-5 text-2xl font-bold leading-tight transition-colors group-hover:text-[#8A6A22] sm:text-3xl">
                  {article.title}
                </h3>

                <p className="mt-4 leading-7 text-[#0A1F44]/70">
                  {article.description}
                </p>

                <div className="mt-7 font-semibold text-[#C9A95A]">
                  Ratgeber lesen →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CV-BEISPIELE */}
        <section className="mt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
              EliteCV Beispiele
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              CV- und Lebenslauf-Beispiele für die Schweiz
            </h2>

            <p className="mt-4 max-w-3xl leading-8 text-[#0A1F44]/70">
              Professionelle CV-Beispiele für Führungskräfte, Management,
              Ingenieure und Human Resources im Schweizer Arbeitsmarkt.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {cvExamples.map((example) => (
              <Link
                key={example.image}
                href={example.href}
                className="group overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EEF1F5]">
                  <Image
                    src={example.image}
                    alt={example.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain p-3 transition duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="p-6 sm:p-7">
                  <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#C9A95A]">
                    {example.subtitle}
                  </p>

                  <h3 className="mt-2 text-2xl font-bold transition-colors group-hover:text-[#8A6A22]">
                    {example.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#0A1F44]/65">
                    Modernes, klar strukturiertes CV-Beispiel im EliteCV-Stil
                    für Bewerbungen in der Schweiz.
                  </p>

                  <div className="mt-5 font-semibold text-[#C9A95A]">
                    CV-Beispiel ansehen →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CV SERVICES */}
        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            Professionelle Unterstützung
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            CV erstellen oder professionell optimieren lassen
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                CV Generator Schweiz
              </h3>

              <p className="mt-4 leading-7 text-[#0A1F44]/70">
                Erstellen Sie Ihren professionellen CV online mit modernen
                Vorlagen und strukturierter Unterstützung.
              </p>

              <div className="mt-6 font-semibold text-[#C9A95A]">
                CV erstellen →
              </div>
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                CV Beratung Schweiz
              </h3>

              <p className="mt-4 leading-7 text-[#0A1F44]/70">
                Professionelle Lebenslauf-Beratung und CV-Optimierung für
                Fach- und Führungskräfte.
              </p>

              <div className="mt-6 font-semibold text-[#C9A95A]">
                CV-Beratung →
              </div>
            </Link>

            <Link
              href="/cv-beratung-dietikon-zuerich"
              className="rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                CV Beratung Dietikon & Zürich
              </h3>

              <p className="mt-4 leading-7 text-[#0A1F44]/70">
                CV- und Lebenslauf-Unterstützung für Dietikon, Zürich und die
                gesamte Region.
              </p>

              <div className="mt-6 font-semibold text-[#C9A95A]">
                Beratung ansehen →
              </div>
            </Link>
          </div>
        </section>

        {/* GENERATOR CTA */}
        <section className="mt-20 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV Generator
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            Professionellen Lebenslauf für die Schweiz erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/75">
            Erstellen Sie einen professionellen CV mit modernen Professional-
            und Executive-Layouts, KI-Unterstützung, CV-Import und PDF-Export.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/cv-generator-schweiz"
              className="inline-flex items-center justify-center rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              CV jetzt erstellen
            </Link>

            <Link
              href="/#preise"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Pakete ansehen
            </Link>
          </div>
        </section>

      </section>
    </main>
  );
}