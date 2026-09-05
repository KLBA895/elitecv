import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive CV Switzerland: Example & Tips for Senior Leaders",

  description:
    "Executive CV Switzerland: example and practical tips for senior managers, executives and C-level professionals. Learn how to present leadership, achievements and strategic impact.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/en/guides/executive-cv-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
      en:
        "https://www.elitecv.ch/en/guides/executive-cv-switzerland",
    },
  },

  openGraph: {
    title: "Executive CV Switzerland: Example & Tips for Senior Leaders",

    description:
      "Professional Executive CV example with practical tips on positioning, leadership experience, measurable achievements and design for the Swiss job market.",

    url:
      "https://www.elitecv.ch/en/guides/executive-cv-switzerland",

    siteName: "EliteCV",

    locale: "en_CH",

    type: "article",

    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/executive-cv-schweiz-laura-schmidt.png",
        width: 1200,
        height: 1600,
        alt:
          "Executive CV Switzerland example for senior managers and C-level professionals – EliteCV",
      },
    ],
  },
};

export default function ExecutiveCVSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        {/* TOP NAVIGATION */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/en/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to Career Guide
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/executive-cv-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Executive CV Switzerland
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Executive CV Switzerland: Example & Tips for Senior Leaders
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            An Executive CV needs to communicate more than a traditional
            resume. For senior management and C-level positions, clear
            positioning, strategic responsibility, leadership experience
            and measurable business impact should be immediately visible.
          </p>
        </header>

        {/* CV IMAGE */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/executive-cv-schweiz-laura-schmidt.png"
              alt="Executive CV Switzerland example for senior leaders and C-level executives"
              width={1200}
              height={1600}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Example of a modern Executive CV for the Swiss job market.
            The personal information shown is used for illustrative purposes.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-16 space-y-12 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              What makes a strong Executive CV?
            </h2>

            <p className="mt-5">
              When applying for senior management or C-level positions,
              a CV should do more than list previous roles and responsibilities.
              The key question is what value you created: What level of
              responsibility did you hold? What changes did you initiate?
              What measurable results did you achieve?
            </p>

            <p className="mt-4">
              A strong Executive CV therefore combines career history with
              strategic positioning. Recruiters and decision-makers should
              quickly understand your seniority, leadership scope and relevance
              for the target role.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              1. Clear executive positioning
            </h2>

            <p className="mt-5">
              The top section of the CV should immediately communicate your
              professional positioning, leadership profile and target level.
              Job title, executive summary and core competencies should form
              a consistent and credible picture.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              2. Make leadership experience visible
            </h2>

            <p className="mt-5">
              Generic statements such as “managed a team” do not show the true
              scope of your responsibility. More useful information includes
              team size, international responsibility, budget ownership,
              locations, business units and transformation programmes.
            </p>

            <p className="mt-4">
              These details make it easier to understand the organisational
              and commercial scale at which you have already operated.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              3. Focus on measurable achievements
            </h2>

            <p className="mt-5">
              Executive CVs become significantly more convincing when
              achievements are supported by concrete results. Examples include
              efficiency improvements, cost reductions, revenue growth,
              process optimisation, successful transformations and major
              projects delivered.
            </p>

            <div className="mt-6 rounded-2xl border border-[#C9A95A]/30 bg-white p-6 shadow-sm">
              <p className="font-semibold text-[#0A1F44]">
                Example
              </p>

              <p className="mt-3">
                Instead of: “Responsible for optimising internal processes”
              </p>

              <p className="mt-2 font-semibold text-[#0A1F44]">
                Better: “Reduced lead time by 18% through the standardisation
                of key internal processes.”
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              4. Prioritise relevant executive competencies
            </h2>

            <p className="mt-5">
              An Executive CV should not give every skill the same weight.
              Strategic leadership, change management, transformation,
              business development, operations, financial responsibility
              or international collaboration may be far more relevant than
              detailed operational tasks, depending on the target role.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              5. Use a professional and refined design
            </h2>

            <p className="mt-5">
              At executive level, the design should look polished without
              distracting from the content. Clear hierarchy, consistent
              typography, appropriate white space and structured sections
              support a professional senior-level presentation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Executive CVs for the Swiss job market
            </h2>

            <p className="mt-5">
              For applications in Switzerland, a transparent career history,
              relevant qualifications, language skills and a precise
              presentation of professional experience are important.
              The Executive CV should always be tailored to the specific
              target role and industry.
            </p>

            <p className="mt-4">
              Relevant terminology and competencies should also reflect the
              job description. A clear and ATS-oriented structure can help
              make key information easier to process for both recruiters
              and digital applicant tracking systems.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              How long should an Executive CV be?
            </h2>

            <p className="mt-5">
              The goal is not to make the CV as short as possible, but to keep
              the content relevant. For experienced senior professionals,
              two pages can be appropriate. Earlier or less relevant roles can
              be summarised more briefly, while recent leadership positions
              and measurable achievements receive more space.
            </p>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-16 rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Explore more EliteCV career guides
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/guides"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              Career Guide Switzerland
            </Link>

            <Link
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              ATS CV Switzerland
            </Link>

            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              CV Switzerland vs. Germany
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold hover:bg-[#EEF1F5]"
            >
              CV Consulting Switzerland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Professionally optimise your Executive CV
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Position your leadership experience, competencies and measurable
            achievements clearly for the Swiss job market. Use the EliteCV
            Generator or choose personal Executive CV optimisation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Start CV Generator
            </Link>

            <Link
              href="/#preise"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Packages & Pricing
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}