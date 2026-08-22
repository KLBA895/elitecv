import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS Resume Switzerland 2026 – ATS-Friendly CV Guide",

  description:
    "Learn how to create an ATS-friendly resume for the Swiss job market in 2026. Improve structure, keywords, readability and compatibility with applicant tracking systems.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/ats-resume-switzerland-2026",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/ats-lebenslauf-schweiz-2026",
      en:
        "https://www.elitecv.ch/guides/ats-resume-switzerland-2026",
    },
  },

  openGraph: {
    title: "ATS Resume Switzerland 2026 – ATS-Friendly CV Guide",
    description:
      "Practical guidance for creating an ATS-friendly resume for the Swiss job market.",
    url:
      "https://www.elitecv.ch/guides/ats-resume-switzerland-2026",
    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function ATSResumeSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        {/* TOP NAVIGATION */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#C9A95A]"
          >
            ← Back to Career Guides
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Career Guide
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            ATS Resume Switzerland 2026: How to Create an ATS-Friendly CV
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
            Applicant Tracking Systems are used by many employers and
            recruiters to process job applications. A well-structured,
            readable and relevant CV can help ensure that your professional
            experience and skills are correctly recognized during the
            recruiting process.
          </p>
        </header>

        {/* CONTENT */}
        <section className="mt-12 space-y-10 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              What is an Applicant Tracking System?
            </h2>

            <p className="mt-4">
              An Applicant Tracking System, commonly referred to as an ATS,
              is software used to organize and process job applications.
              Depending on the system and recruiting process, information
              such as professional experience, education, skills and
              keywords may be extracted from a CV.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              1. Use a clear CV structure
            </h2>

            <p className="mt-4">
              Use recognizable section headings such as Professional
              Experience, Education, Skills and Languages. A clear structure
              makes the document easier to understand for both recruiting
              systems and human recruiters.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              2. Include relevant keywords
            </h2>

            <p className="mt-4">
              Review the job description and identify relevant skills,
              qualifications, technologies and professional terms. Where
              they genuinely match your experience, integrate these terms
              naturally into your CV.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              3. Make important information available as text
            </h2>

            <p className="mt-4">
              Important qualifications and skills should be clearly written
              in the document rather than communicated only through icons,
              graphics or visual rating systems. This also improves
              readability for recruiters.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              4. Focus on achievements, not only responsibilities
            </h2>

            <p className="mt-4">
              Strong CVs explain more than daily tasks. Where possible,
              describe measurable achievements such as process
              improvements, cost reductions, revenue growth, project
              responsibility, team leadership or successful
              transformations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              5. Tailor your CV to the target position
            </h2>

            <p className="mt-4">
              A generic CV may not communicate your suitability for a
              specific position effectively. Prioritize the experience,
              competencies and achievements that are most relevant to the
              role you are applying for.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              6. Keep the design professional and readable
            </h2>

            <p className="mt-4">
              An ATS-friendly CV does not need to look basic. A professional
              design can still use clear typography, consistent spacing and
              strong visual hierarchy while keeping the content easy to
              read and understand.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-[#0A1F44]">
              ATS resumes for the Swiss job market
            </h2>

            <p className="mt-4">
              For applications in Switzerland, your CV should combine clear
              structure with professional positioning. Relevant work
              experience, qualifications, language skills and achievements
              should be easy to identify while the document remains tailored
              to the target role and industry.
            </p>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-7">
          <h2 className="text-2xl font-semibold">
            More EliteCV Career Guides
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              CV Optimization Switzerland
            </Link>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              LinkedIn Optimization
            </Link>

            <Link
              href="/guides/cv-switzerland-vs-germany"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              CV Switzerland vs Germany
            </Link>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              Executive CV Switzerland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create a professional CV for Switzerland
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/80">
            Create a professionally structured CV for the Swiss job market
            with EliteCV and choose between Professional and Executive
            solutions.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-full bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              Start CV Generator
            </Link>

            <Link
              href="/#preise"
              className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white"
            >
              View Services
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}