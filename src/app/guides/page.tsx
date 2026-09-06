import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guides Switzerland | CV, ATS & LinkedIn | EliteCV",

  description:
    "Career guides for Switzerland: Learn how to create and optimize your CV, improve your LinkedIn profile, prepare ATS-friendly applications and position yourself professionally.",

  alternates: {
    canonical: "https://www.elitecv.ch/guides",

    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber",
      "en-CH": "https://www.elitecv.ch/guides",
    },
  },

  openGraph: {
    title: "Career Guides Switzerland | EliteCV",

    description:
      "Practical CV, ATS, LinkedIn and job application guides for professionals applying in Switzerland.",

    url: "https://www.elitecv.ch/guides",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "website",
  },
};

type Guide = {
  href: string;
  title: string;
  text: string;
};

const guides: Guide[] = [
  {
    href: "/guides/cv-switzerland",
    title: "CV Switzerland",
    text:
      "Learn how to structure a professional Swiss CV, including content, length, photo, experience and important Swiss application standards.",
  },
  {
    href: "/guides/cv-template-switzerland",
    title: "CV Template Switzerland",
    text:
      "Discover how to use a professional CV template and create a clear, modern and recruiter-friendly Swiss resume.",
  },
  {
    href: "/guides/cv-optimization-switzerland",
    title: "CV Optimization Switzerland",
    text:
      "Improve your CV and present your experience, skills and achievements more effectively for the Swiss job market.",
  },
  {
    href: "/guides/ats-resume-switzerland-2026",
    title: "ATS Resume Switzerland 2026",
    text:
      "Learn how to structure an ATS-friendly CV with relevant keywords, readable formatting and clear professional experience.",
  },
  {
    href: "/guides/linkedin-profile-optimization-switzerland",
    title: "LinkedIn Profile Optimization Switzerland",
    text:
      "Improve your LinkedIn headline, About section, professional experience and keywords to strengthen your professional positioning.",
  },
  {
    href: "/guides/cv-switzerland-vs-germany",
    title: "CV Switzerland vs Germany",
    text:
      "Understand important differences between Swiss and German CVs, including structure, language, references and application expectations.",
  },
  {
    href: "/guides/job-application-switzerland",
    title: "Job Application Tips Switzerland",
    text:
      "Practical guidance for preparing professional and convincing job applications for employers in Switzerland.",
  },
  {
    href: "/en/guides/executive-cv-switzerland",
    title: "Executive CV Switzerland",
    text:
      "Executive CV guidance for senior managers, directors and C-level professionals with a focus on leadership, positioning and measurable impact.",
  },
  {
    href: "/guides/operations-manager-cv-switzerland",
    title: "Operations Manager CV Switzerland",
    text:
      "Learn how to present leadership, operational responsibility, process optimization, KPIs and transformation experience.",
  },
  {
    href: "/guides/mechanical-engineer-cv-switzerland",
    title: "Mechanical Engineer CV Switzerland",
    text:
      "Professional CV guidance for mechanical engineers, including technical skills, CAD systems, projects and engineering achievements.",
  },
  {
    href: "/guides/hr-specialist-cv-switzerland",
    title: "HR Specialist CV Switzerland",
    text:
      "Learn how to present recruiting, HR business partnering, talent management, HR systems and measurable HR achievements.",
  },
];

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
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
              href="/guides"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
              aria-current="page"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <div className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            EliteCV Career Guides
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            CV, Resume & Job Applications in Switzerland
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            Practical guides, CV templates and examples for creating
            professional, ATS-friendly application documents, improving
            LinkedIn and positioning yourself successfully in the Swiss job
            market.
          </p>
        </div>

        {/* TOPICS */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            "CV Switzerland",
            "CV Templates",
            "ATS",
            "Job Applications",
            "LinkedIn",
            "Career",
          ].map((category) => (
            <span
              key={category}
              className="rounded-full border border-[#0A1F44]/10 bg-white px-4 py-2 text-sm font-medium text-[#0A1F44]/75"
            >
              {category}
            </span>
          ))}
        </div>

        {/* GUIDES */}
        <section className="mt-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
              Knowledge for your application
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Current Career Guides
            </h2>
          </div>

          <div className="mt-10 grid gap-7 md:grid-cols-2">
            {guides.map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
              >
                <h3 className="text-2xl font-bold leading-tight transition-colors group-hover:text-[#8A6A22] sm:text-3xl">
                  {guide.title}
                </h3>

                <p className="mt-4 leading-7 text-[#0A1F44]/70">
                  {guide.text}
                </p>

                <div className="mt-7 font-semibold text-[#C9A95A]">
                  Read guide →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            Professional support
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Create or professionally optimize your CV
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                CV Generator Switzerland
              </h3>

              <p className="mt-4 leading-7 text-[#0A1F44]/70">
                Create your professional CV online with modern layouts and
                structured support.
              </p>

              <div className="mt-6 font-semibold text-[#C9A95A]">
                Create CV →
              </div>
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                CV Consulting Switzerland
              </h3>

              <p className="mt-4 leading-7 text-[#0A1F44]/70">
                Professional CV optimization and career positioning for
                specialists and executives.
              </p>

              <div className="mt-6 font-semibold text-[#C9A95A]">
                View consulting →
              </div>
            </Link>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
              className="rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-2xl font-bold">
                LinkedIn Optimization
              </h3>

              <p className="mt-4 leading-7 text-[#0A1F44]/70">
                Strengthen your LinkedIn profile, professional positioning and
                recruiter visibility.
              </p>

              <div className="mt-6 font-semibold text-[#C9A95A]">
                View LinkedIn guide →
              </div>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-20 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10 lg:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV Generator
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl">
            Create a professional CV for Switzerland
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/75">
            Create a professional CV with modern Professional and Executive
            layouts, AI assistance, CV import and PDF export.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/cv-generator"
              className="inline-flex items-center justify-center rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Start CV Generator
            </Link>

            <Link
              href="/#preise"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Packages & Pricing
            </Link>
          </div>
        </section>

      </section>
    </main>
  );
}