import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Optimization Switzerland | EliteCV",
  description:
    "Learn how to optimize your CV for the Swiss job market and avoid common application mistakes.",
};

export default function CVOptimizationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/guides" className="text-sm font-semibold text-[#C9A95A]">
          ← Back to Guides
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          CV Optimization Switzerland: Key Tips for the Swiss Job Market
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          A professional CV is more than a list of previous positions. In the
          Swiss job market, clarity, structure and a precise professional
          positioning are essential.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Keep the structure clear
          </h2>
          <p>
            Many CVs contain too much information and too little prioritization.
            Recruiters should be able to understand your most relevant
            experience, skills and achievements within a few seconds.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Connect experience with results
          </h2>
          <p>
            Instead of only listing tasks, show the value you created. Examples
            include process improvements, revenue growth, cost savings, project
            responsibility or measurable outcomes.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Follow Swiss application standards
          </h2>
          <p>
            Swiss employers value clarity, reliability and a professional
            presentation. Contact details, languages, education and relevant
            experience should be easy to find and well structured.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Adapt your CV to the target role
          </h2>
          <p>
            A strong CV is not generic. Your profile, key skills and experience
            should be aligned with the specific role, industry and level you are
            targeting.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Use professional and credible language
          </h2>
          <p>
            Your wording should be clear, active and credible. Avoid generic
            statements unless they are supported by concrete examples or
            achievements.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Would you like to optimize your CV professionally?
          </h2>
          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV supports professionals and executives with CV optimization,
            LinkedIn profile optimization and career positioning for the Swiss
            job market.
          </p>
          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
          >
            View services
          </Link>
        </div>
      </article>
    </main>
  );
}