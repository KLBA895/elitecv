import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Optimization Switzerland | Improve Your Swiss CV | EliteCV",

  description:
    "CV Optimization Switzerland: Improve your CV structure, positioning, achievements, keywords and ATS compatibility for the Swiss job market.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/cv-optimization-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/lebenslauf-optimieren-schweiz",
      "en-CH":
        "https://www.elitecv.ch/guides/cv-optimization-switzerland",
    },
  },

  openGraph: {
    title: "CV Optimization Switzerland | Improve Your Swiss CV | EliteCV",

    description:
      "Practical guidance for optimizing your CV for the Swiss job market, including structure, achievements, keywords, ATS and professional positioning.",

    url:
      "https://www.elitecv.ch/guides/cv-optimization-switzerland",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function CVOptimizationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to EliteCV Career Guides
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/lebenslauf-optimieren-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
              aria-current="page"
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

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            CV Optimization Switzerland
          </h1>

          <p className="mt-4 text-xl font-medium text-[#0A1F44]">
            Improve your CV for the Swiss job market
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-[#0A1F44]/75">
            A professional CV is more than a list of previous positions.
            Structure, relevance, measurable achievements and clear career
            positioning determine how effectively your profile communicates
            your value to employers in Switzerland.
          </p>
        </header>

        {/* CONTENT */}
        <div className="mt-12 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-12">

          <section>
            <h2 className="text-3xl font-bold">
              What does professional CV optimization mean?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              CV optimization means improving both the content and presentation
              of your existing CV. The goal is to make your professional profile,
              relevant experience, competencies and achievements easier to
              understand while aligning the document with your target position.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              A strong CV should answer three questions quickly: Who are you
              professionally? What relevant experience and results do you bring?
              And why does your profile fit the target role?
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              1. Improve the overall CV structure
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Many CVs contain too much information and too little
              prioritization. Recruiters should be able to identify your most
              relevant experience, skills and achievements quickly.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Use clear sections, consistent formatting and a logical
              chronology. Recent and relevant experience should receive more
              attention than older positions with little connection to your
              target role.
            </p>

            <Link
              href="/guides/cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Switzerland: Structure and Practical Tips
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              2. Strengthen your professional profile
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              The professional profile at the beginning of your CV should
              summarize your experience, specialization and career positioning
              in a concise way.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Avoid generic statements such as “motivated team player” without
              context. Focus instead on your professional level, industry
              experience, core competencies and relevant strengths.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              3. Connect responsibilities with measurable results
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A strong CV does not only describe what you were responsible for.
              It also shows the value you created through projects, process
              improvements, leadership or business results.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Before
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Responsible for improving internal processes.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Better
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Optimized operational processes and reduced lead time by
                  15 percent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              4. Adapt your CV to the target role
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A strong CV should not be completely generic. Your profile,
              competencies and experience should reflect the requirements of
              the position, industry and seniority level you are targeting.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Review the job advertisement and identify which responsibilities,
              skills and experiences are particularly relevant. Prioritize
              those elements when they genuinely match your background.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              5. Use relevant keywords
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Relevant terminology helps recruiters and recruiting systems
              understand your professional profile. Keywords can include job
              titles, specialist competencies, technologies, methods,
              industries or leadership responsibilities.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Keywords should always reflect your real experience. Avoid simply
              copying terms from the vacancy when they do not match your
              background.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              6. Optimize your CV for ATS readability
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Applicant tracking systems can be used to process and organize
              applications. Clear headings, readable text and a logical
              structure help make important information easier to process.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Essential information should not be communicated only through
              graphics, icons or visual rating bars.
            </p>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → ATS Resume Switzerland 2026
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              7. Use a professional CV design
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Design should improve readability rather than compete with the
              content. Consistent typography, spacing and information hierarchy
              help create a professional impression.
            </p>

            <Link
              href="/guides/cv-template-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Template Switzerland
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              8. Remove irrelevant or outdated information
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              More information does not automatically make a stronger CV.
              Details that no longer support your professional positioning can
              make important information harder to identify.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Older roles can often be summarized, while recent and relevant
              positions should receive more detail.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              9. Optimize executive and senior-level CVs differently
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Senior professionals and executives should emphasize strategic
              responsibility, leadership scope, transformation, budgets,
              organizational impact and measurable business results.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              At this level, the CV should communicate not only what you did,
              but also the scale and impact of your responsibility.
            </p>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Executive CV Switzerland
            </Link>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              10. Keep your CV and LinkedIn profile consistent
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your CV and LinkedIn profile should support the same professional
              positioning. Employers should not encounter contradictory job
              titles, dates or career information when comparing both.
            </p>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → LinkedIn Profile Optimization Switzerland
            </Link>
          </section>

          {/* CHECKLIST */}
          <section>
            <h2 className="text-3xl font-bold">
              CV Optimization Checklist
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                "Clear professional positioning",
                "Logical and readable structure",
                "Relevant experience prioritized",
                "Measurable achievements included",
                "Target-role keywords integrated",
                "ATS-friendly content structure",
                "Professional and consistent design",
                "Unnecessary information removed",
                "Language and spelling checked",
                "LinkedIn profile aligned with CV",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-[#F7F8FA] px-5 py-4 text-sm font-semibold"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </section>

          {/* INTERNAL LINKS */}
          <section>
            <h2 className="text-2xl font-bold">
              More Career Guides for Switzerland
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/guides/cv-switzerland"
                className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
              >
                CV Switzerland
              </Link>

              <Link
                href="/guides/cv-template-switzerland"
                className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
              >
                CV Template Switzerland
              </Link>

              <Link
                href="/guides/ats-resume-switzerland-2026"
                className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
              >
                ATS Resume Switzerland
              </Link>

              <Link
                href="/guides/linkedin-profile-optimization-switzerland"
                className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
              >
                LinkedIn Optimization
              </Link>

              <Link
                href="/guides/job-application-switzerland"
                className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
              >
                Job Application Switzerland
              </Link>
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-3xl bg-[#0A1F44] p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
              EliteCV
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Optimize your CV for the Swiss job market
            </h2>

            <p className="mt-5 max-w-3xl leading-8 text-white/80">
              Create your CV with the EliteCV Generator or have your existing CV
              professionally optimized and aligned with your target position in
              Switzerland.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cv-generator"
                className="inline-flex items-center justify-center rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
              >
                Start CV Generator
              </Link>

              <Link
                href="/#preise"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Packages & Pricing
              </Link>
            </div>
          </section>

        </div>
      </article>
    </main>
  );
}