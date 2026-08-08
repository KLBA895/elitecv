import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Career Guide Switzerland: CV, Resume & Applications | EliteCV",

  description:
    "Practical guides on CVs, resumes, ATS, applications, LinkedIn and career development for the Swiss job market.",

  alternates: {
    canonical: "https://www.elitecv.ch/en/guides",
    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber",
      "en": "https://www.elitecv.ch/en/guides",
    },
  },

  openGraph: {
    title: "EliteCV Career Guide Switzerland",
    description:
      "Practical advice on CVs, resumes, ATS, applications and LinkedIn for the Swiss job market.",
    url: "https://www.elitecv.ch/en/guides",
    siteName: "EliteCV",
    locale: "en_CH",
    type: "website",
  },
};

const articles = [
  {
    title: "ATS Resume Switzerland 2026",
    description:
      "Learn how to create an ATS-friendly resume that works for modern application systems and recruiters.",
    href: "/en/guides/ats-resume-switzerland-2026",
    category: "ATS",
    readingTime: "8 min",
    badge: "NEW",
  },
  {
    title: "Optimize Your Resume for Switzerland",
    description:
      "Common resume mistakes and how to improve your CV for the Swiss job market.",
    href: "/en/guides/optimize-resume-switzerland",
    category: "Resume",
    readingTime: "7 min",
  },
  {
    title: "Optimize Your LinkedIn Profile in Switzerland",
    description:
      "Improve visibility, positioning and recruiter interest on LinkedIn.",
    href: "/en/guides/linkedin-profile-switzerland",
    category: "LinkedIn",
    readingTime: "7 min",
  },
  {
    title: "CV Switzerland vs. Germany",
    description:
      "The most important differences between Swiss and German application documents.",
    href: "/en/guides/cv-switzerland-vs-germany",
    category: "Resume",
    readingTime: "6 min",
  },
  {
    title: "Applying for Jobs in Switzerland",
    description:
      "Practical tips for stronger applications and a professional overall presentation.",
    href: "/en/guides/applying-in-switzerland",
    category: "Application",
    readingTime: "6 min",
  },
];

const cvExamples = [
  {
    title: "Chief Operating Officer",
    subtitle: "C-Level & Executives",
    image:
      "/images/ratgeber/executive-cv-schweiz-laura-schmidt.png",
    alt:
      "Executive CV Switzerland example for C-Level and senior leadership by EliteCV",
    href: "/en/guides/executive-cv-switzerland",
  },
  {
    title: "Head of Operations",
    subtitle: "Management & Operations",
    image:
      "/images/ratgeber/professional-cv-schweiz-michael-steiner.png",
    alt:
      "Professional CV Switzerland example for management and operations by EliteCV",
    href: "/en/guides/cv-example-switzerland",
  },
  {
    title: "Mechanical Engineer",
    subtitle: "Mechanical Engineering",
    image:
      "/images/ratgeber/professional-cv-schweiz-lukas-meier.png",
    alt:
      "Professional CV Switzerland example for a mechanical engineer by EliteCV",
    href: "/en/guides/mechanical-engineer-resume-switzerland",
  },
  {
    title: "HR Specialist",
    subtitle: "Human Resources",
    image:
      "/images/ratgeber/hr-specialist-lebenslauf-schweiz-sarah-keller.png",
    alt:
      "HR Specialist resume Switzerland example for Human Resources by EliteCV",
    href: "/en/guides/hr-specialist-resume-switzerland",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

        {/* TOP NAV */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to EliteCV
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/en/guides"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <div className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            EliteCV Career Guide
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            CV, Resume & Job Applications in Switzerland
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            Practical guidance for professional resumes, ATS-friendly
            applications, LinkedIn and successful career positioning in the
            Swiss job market.
          </p>
        </div>

        {/* TOPICS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "Resume",
            "ATS",
            "Application",
            "LinkedIn",
            "Career",
            "CV Templates",
          ].map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#0A1F44]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A1F44]/75"
            >
              {category}
            </span>
          ))}
        </div>

        {/* ARTICLES */}
        <section className="mt-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
              Career knowledge
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Latest Guides
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
                    {article.readingTime} read
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
                  Read guide →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CV EXAMPLES */}
        <section className="mt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
              EliteCV Examples
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              CV Examples for the Swiss Job Market
            </h2>
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

                  <h3 className="mt-2 text-2xl font-bold text-[#0A1F44] transition-colors group-hover:text-[#8A6A22]">
                    {example.title}
                  </h3>

                  <p className="mt-3 leading-7 text-[#0A1F44]/65">
                    Modern, clearly structured EliteCV example for
                    applications in Switzerland.
                  </p>

                  <div className="mt-5 font-semibold text-[#C9A95A]">
                    View example →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* GENERATOR */}
        <section className="mt-20 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV Generator
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            Create your professional CV
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/75">
            Create a structured professional resume with modern Professional
            and Executive layouts, AI assistance, CV import and PDF export.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/cv-generator"
              className="inline-flex items-center justify-center rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Open EliteCV Generator
            </Link>

            <Link
              href="/#pakete"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Packages
            </Link>
          </div>
        </section>
      </section>
    </main>
  );
}