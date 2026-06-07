import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Application Tips Switzerland | EliteCV",
  description:
    "Practical advice for successful job applications in Switzerland.",
};

export default function JobApplicationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/guides" className="text-sm font-semibold text-[#C9A95A]">
          ← Back to Guides
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          Job Application Tips Switzerland
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          Switzerland offers many career opportunities, but employers often
          expect well-prepared application documents and a professional
          presentation.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold">1. Keep your CV updated</h2>
          <p>
            Your CV should be clear, current and tailored to the target role.
          </p>

          <h2 className="text-2xl font-semibold">2. Customize every application</h2>
          <p>
            Avoid generic applications. Adapt your documents to the specific
            position and employer.
          </p>

          <h2 className="text-2xl font-semibold">3. Use LinkedIn professionally</h2>
          <p>
            Many Swiss employers review LinkedIn profiles alongside application
            documents.
          </p>

          <h2 className="text-2xl font-semibold">4. Prepare for interviews</h2>
          <p>
            Research the company, understand the role and prepare examples from
            your professional experience.
          </p>

          <h2 className="text-2xl font-semibold">5. Create a consistent professional image</h2>
          <p>
            Your CV, LinkedIn profile and communication should support the same
            professional positioning.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Need support with your application?
          </h2>

          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV supports professionals and executives with CV optimization,
            LinkedIn profile optimization and career positioning.
          </p>

          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white"
          >
            View Services
          </Link>
        </div>
      </article>
    </main>
  );
}