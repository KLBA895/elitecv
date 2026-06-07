import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimization Switzerland | EliteCV",
  description:
    "Learn how to optimize your LinkedIn profile for the Swiss job market and improve your professional visibility.",
};

export default function LinkedInProfileOptimizationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/guides" className="text-sm font-semibold text-[#C9A95A]">
          ← Back to Guides
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          LinkedIn Profile Optimization Switzerland: Improve Your Professional Visibility
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          A professional LinkedIn profile is an important part of career
          positioning. In Switzerland, recruiters, HR professionals and companies
          often use LinkedIn to identify suitable professionals and executives.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Use a clear headline
          </h2>
          <p>
            Your headline should not only show your current role. It should also
            highlight your key strengths, areas of expertise and target direction.
            A precise positioning is stronger than a generic job title.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Use the About section strategically
          </h2>
          <p>
            The About section is your professional introduction. It should explain
            who you are, what experience you bring and what value you create for
            organizations. Clear, credible and readable wording is essential.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Present experience with impact
          </h2>
          <p>
            Your LinkedIn experience section should not simply list tasks. Show
            results, responsibilities, projects and measurable contributions.
            This makes your profile more relevant and easier to understand.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Include relevant keywords
          </h2>
          <p>
            LinkedIn also works like a search engine. Terms such as project
            management, finance, HR, engineering, sales, IT, controlling or
            leadership should be integrated naturally when they match your
            background and target role.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Use a professional profile photo and banner
          </h2>
          <p>
            A clear profile photo and a suitable banner strengthen the first
            impression. Your profile should feel consistent, credible and
            professional.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Would you like to optimize your LinkedIn profile professionally?
          </h2>
          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV supports professionals and executives with LinkedIn profile
            optimization, CV optimization and career positioning for the Swiss job
            market.
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