import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guides Switzerland | EliteCV",

  description:
    "CV writing, ATS optimization, LinkedIn optimization and job application advice for the Swiss job market.",

  alternates: {
    canonical: "https://www.elitecv.ch/guides",
  },
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#C9A95A]"
          >
            ← Back to EliteCV
          </Link>

          <Link
            href="/ratgeber"
            className="rounded-full border border-[#0A1F44]/15 px-4 py-2 text-sm font-semibold text-[#0A1F44]"
          >
            DE
          </Link>
        </div>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          Career Guides Switzerland
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/72">
          Practical advice on CV writing, ATS optimization, LinkedIn profile
          optimization and job applications for the Swiss job market.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {/* CV OPTIMIZATION */}
          <Link
            href="/guides/cv-optimization-switzerland"
            className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              CV Optimization Switzerland
            </h2>

            <p className="mt-4 text-[#0A1F44]/70">
              Improve your CV and present your experience, skills and
              achievements effectively for the Swiss job market.
            </p>
          </Link>

          {/* LINKEDIN */}
          <Link
            href="/guides/linkedin-profile-optimization-switzerland"
            className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              LinkedIn Profile Optimization Switzerland
            </h2>

            <p className="mt-4 text-[#0A1F44]/70">
              Increase your visibility and strengthen your professional
              positioning on LinkedIn.
            </p>
          </Link>

          {/* ATS */}
          <Link
            href="/guides/ats-resume-switzerland-2026"
            className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              ATS Resume Switzerland 2026
            </h2>

            <p className="mt-4 text-[#0A1F44]/70">
              Learn how to structure an ATS-friendly CV and improve its
              readability for modern recruiting systems.
            </p>
          </Link>

          {/* SWITZERLAND VS GERMANY */}
          <Link
            href="/guides/cv-switzerland-vs-germany"
            className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              CV Switzerland vs Germany
            </h2>

            <p className="mt-4 text-[#0A1F44]/70">
              Discover important differences between Swiss and German CVs
              and job applications.
            </p>
          </Link>

          {/* JOB APPLICATION */}
          <Link
            href="/guides/job-application-switzerland"
            className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              Job Application Tips Switzerland
            </h2>

            <p className="mt-4 text-[#0A1F44]/70">
              Practical tips for preparing professional and convincing job
              applications in Switzerland.
            </p>
          </Link>

          {/* EXECUTIVE CV */}
          <Link
            href="/en/guides/executive-cv-switzerland"
            className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm transition hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">
              Executive CV Switzerland
            </h2>

            <p className="mt-4 text-[#0A1F44]/70">
              Executive CV guidance and examples for senior managers,
              executives and C-level positions in Switzerland.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}