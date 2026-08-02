import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Karriere-Ratgeber Schweiz | EliteCV",
  description:
    "Praxisnahe Tipps zu Lebenslauf, ATS, LinkedIn, Bewerbung und Karriere im Schweizer Arbeitsmarkt.",
};

const articles = [
  {
    title: "ATS Lebenslauf Schweiz 2026",
    description:
      "Erfahren Sie, wie Sie einen ATS-konformen Lebenslauf erstellen, der moderne Bewerbungsportale und Recruiter überzeugt.",
    href: "/ratgeber/ats-lebenslauf-schweiz-2026",
    badge: "NEU",
  },
  {
    title: "Lebenslauf optimieren Schweiz",
    description:
      "Die häufigsten Fehler im Lebenslauf und wie Sie Ihren CV professionell verbessern.",
    href: "/ratgeber/lebenslauf-optimieren-schweiz",
  },
  {
    title: "LinkedIn Profil optimieren Schweiz",
    description:
      "Mehr Sichtbarkeit, bessere Positionierung und mehr Recruiter-Anfragen auf LinkedIn.",
    href: "/ratgeber/linkedin-profil-optimieren-schweiz",
  },
  {
    title: "CV Schweiz vs. Deutschland",
    description:
      "Die wichtigsten Unterschiede zwischen Schweizer und deutschen Bewerbungsunterlagen.",
    href: "/ratgeber/cv-schweiz-vs-deutschland",
  },
  {
    title: "Bewerbung Schweiz Tipps",
    description:
      "Praktische Tipps für überzeugende Bewerbungsunterlagen und mehr Einladungen zum Vorstellungsgespräch.",
    href: "/ratgeber/bewerbung-schweiz-tipps",
  },
];

export default function RatgeberPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A1F44]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <Link
          href="/"
          className="text-sm font-semibold text-[#C9A95A] hover:underline"
        >
          ← Zurück zu EliteCV
        </Link>

        <div className="mt-10 max-w-4xl">
          <span className="rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            EliteCV Karriere-Ratgeber
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight">
            Karriere-Ratgeber Schweiz
          </h1>

          <p className="mt-6 text-xl leading-9 text-[#0A1F44]/75">
            Entdecken Sie praxisnahe Ratgeber rund um Lebenslauf,
            Bewerbung, LinkedIn, ATS-Systeme und Karriere im
            Schweizer Arbeitsmarkt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              {article.badge && (
                <span className="inline-block rounded-full bg-[#C9A95A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {article.badge}
                </span>
              )}

              <h2 className="mt-4 text-3xl font-bold text-[#0A1F44] group-hover:text-[#8A6A22] transition-colors">
                {article.title}
              </h2>

              <p className="mt-5 leading-8 text-[#0A1F44]/70">
                {article.description}
              </p>

              <div className="mt-8 font-semibold text-[#C9A95A]">
                Ratgeber lesen →
              </div>
            </Link>
          ))}
        </div>

        <section className="mt-20 rounded-3xl bg-[#0A1F44] p-10 text-white">
          <h2 className="text-3xl font-bold">
            Moderne Bewerbungsunterlagen schneller erstellen
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Mit dem EliteCV Generator erstellen Sie strukturierte,
            ATS-orientierte Lebensläufe mit moderner Gestaltung,
            KI-unterstützten Formulierungen und professionellen
            Professional- sowie Executive-Layouts.
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
              Pakete ansehen
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}