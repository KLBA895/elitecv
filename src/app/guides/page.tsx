import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Career Guides Switzerland | EliteCV",
  description:
    "CV writing, LinkedIn optimization and job application advice for Switzerland.",
};

export default function GuidesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <section className="mx-auto w-full max-w-7xl px-6 py-20">
        <Link href="/" className="text-sm font-semibold text-[#C9A95A]">
          ← Back to EliteCV
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          Career Guides Switzerland
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#0A1F44]/72">
          Practical advice on CV writing, LinkedIn optimization and job applications in Switzerland.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Link href="/guides/cv-optimization-switzerland" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">CV Optimization Switzerland</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Improve your CV for the Swiss job market.
            </p>
          </Link>

          <Link href="/guides/linkedin-profile-optimization-switzerland" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">LinkedIn Profile Optimization Switzerland</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Increase visibility and strengthen your professional profile.
            </p>
          </Link>

          <Link href="/guides/cv-switzerland-vs-germany" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">CV Switzerland vs Germany</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Key differences between Swiss and German applications.
            </p>
          </Link>

          <Link href="/guides/job-application-switzerland" className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm hover:shadow-md">
            <h2 className="text-2xl font-semibold">Job Application Tips Switzerland</h2>
            <p className="mt-4 text-[#0A1F44]/70">
              Practical tips for successful applications in Switzerland.
            </p>
          </Link>
        </div>
      </section>
    </main>
  );
}