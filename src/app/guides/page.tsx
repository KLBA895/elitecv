import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guides Switzerland | CV, ATS & LinkedIn | EliteCV",

  description:
    "Career guides for Switzerland: Learn how to create and optimize your CV, improve your LinkedIn profile, prepare ATS-friendly applications and position yourself professionally.",

  alternates: {
    canonical: "https://www.elitecv.ch/en/guides",

    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber",
      "en-CH": "https://www.elitecv.ch/guides",
    },
  },

  openGraph: {
    title: "Career Guides Switzerland | EliteCV",

    description:
      "Practical CV, ATS, LinkedIn and job application guides for professionals applying in Switzerland.",

    url: "https://www.elitecv.ch/en/guides",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "website",
  },
};

const guides = [
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
      <section className="mx-auto w-full max-w-7xl px-6 py-12 sm:py-16">
        <div className="rounded-[32px] border-2 border-[#0A1F44] bg-[#F7F8FA] p-6 sm:p-10">

          {/* NAVIGATION */}
          <div className="flex flex-wrap items-center justify-between gap-4">
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
          <header className="mt-10 max-w-4xl">
            <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
              EliteCV Career Guides
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight sm:text-4xl">
              Career Guides for the Swiss Job Market
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
              Practical guidance on CV writing, ATS optimization, LinkedIn,
              professional positioning and job applications in Switzerland.
              Explore our guides for specialists, managers and executives.
            </p>
          </header>

          {/* INTRO */}
          <section className="mt-12 max-w-4xl rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-8">
            <h2 className="text-2xl font-bold">
              Build a stronger application for Switzerland
            </h2>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              A successful application depends on more than a visually attractive
              CV. Your positioning, professional experience, achievements,
              keywords and LinkedIn profile should work together and support the
              role you are targeting.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              The EliteCV guides cover both general Swiss application topics and
              profession-specific CV examples to help you improve your documents
              step by step.
            </p>
          </section>

          {/* GUIDES */}
          <section className="mt-14">
            <h2 className="text-3xl font-bold">
              CV, LinkedIn and Application Guides
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {guides.map((guide) => (
                <Link
                  key={guide.href}
                  href={guide.href}
                  className="group rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="text-2xl font-bold transition group-hover:text-[#8A6A22]">
                    {guide.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#0A1F44]/70">
                    {guide.text}
                  </p>

                  <p className="mt-6 text-sm font-semibold text-[#8A6A22]">
                    Read guide →
                  </p>
                </Link>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
              EliteCV
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Ready to improve your CV?
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-white/80">
              Create your CV with the EliteCV Generator or have your existing
              application documents professionally optimized for the Swiss job
              market.
            </p>

            <div className="mt-7 flex flex-wrap gap-4">
              <Link
                href="/cv-generator"
                className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
              >
                Start CV Generator
              </Link>

              <Link
                href="/#preise"
                className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Packages & Pricing
              </Link>
            </div>
          </section>

        </div>
      </section>
    </main>
  );
}