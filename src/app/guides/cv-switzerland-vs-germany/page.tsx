import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Switzerland vs. Germany: Key Differences | EliteCV",

  description:
    "CV Switzerland vs. Germany: Learn the key differences in CV structure, language, photos, references, certificates and job applications for the Swiss job market.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/cv-switzerland-vs-germany",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/cv-schweiz-vs-deutschland",
      "en-CH":
        "https://www.elitecv.ch/guides/cv-switzerland-vs-germany",
    },
  },

  openGraph: {
    title: "CV Switzerland vs. Germany: Key Differences",

    description:
      "The key differences between Swiss and German CVs, with practical advice for job applications in Switzerland.",

    url:
      "https://www.elitecv.ch/guides/cv-switzerland-vs-germany",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function CVSwitzerlandVsGermanyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-20">

        {/* NAVIGATION + LANGUAGE SWITCH */}
        <div className="flex items-center justify-between gap-6">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#C9A95A] hover:underline"
          >
            ← Back to Career Guides
          </Link>

          <div className="flex items-center rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/cv-schweiz-vs-deutschland"
              className="rounded-full px-5 py-2 text-sm font-semibold text-[#0A1F44]/65 transition hover:bg-[#F7F8FA]"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-switzerland-vs-germany"
              className="rounded-full bg-[#0A1F44] px-5 py-2 text-sm font-semibold text-white"
              aria-current="page"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            Applying in Switzerland
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
            CV Switzerland vs. Germany: The Key Differences
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/72 md:text-xl">
            If you are applying for jobs in Switzerland from Germany, you can
            usually use your existing CV as a starting point. However, several
            details should be adapted to the expectations and conventions of
            the Swiss job market.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-12 rounded-3xl bg-[#F7F8FA] p-8">
          <h2 className="text-2xl font-bold">
            Swiss and German CVs are similar – but not identical
          </h2>

          <p className="mt-4 leading-8 text-[#0A1F44]/75">
            The basic structure, professional experience and qualifications are
            generally comparable. The main differences are found in
            presentation, personal information, language skills, employment
            references and the way a CV is adapted to the Swiss market.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-14 space-y-12 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              1. Swiss CVs should be clear and concise
            </h2>

            <p className="mt-5">
              Recruiters should be able to identify the most important
              information quickly. Professional experience, education,
              competencies and language skills should be clearly structured
              and prioritized.
            </p>

            <p className="mt-4">
              Long lists of responsibilities are usually less effective than a
              concise presentation of relevant responsibilities, projects and
              measurable results.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              2. Language skills are particularly important in Switzerland
            </h2>

            <p className="mt-5">
              Switzerland is a multilingual country. Depending on the region
              and position, German, French, Italian and English can have very
              different levels of importance.
            </p>

            <p className="mt-4">
              Language skills should therefore be presented clearly, for
              example using recognized levels or descriptions such as native,
              fluent or professional working proficiency.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              3. Adapt professional experience to the Swiss market
            </h2>

            <p className="mt-5">
              International experience is valued in Switzerland. What matters,
              however, is that responsibilities and achievements are easy for
              Swiss recruiters to understand and evaluate.
            </p>

            <p className="mt-4">
              Relevant information can include project scope, leadership
              responsibility, budgets, team size and measurable business
              outcomes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              4. Photo and personal information
            </h2>

            <p className="mt-5">
              A professional application photo is still common in Switzerland,
              although it is not mandatory. The overall CV should remain
              professional, modern and consistent.
            </p>

            <p className="mt-4">
              Your phone number, email address, location and, where relevant,
              LinkedIn profile should be easy to find.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              5. Employment references and diplomas are often important
            </h2>

            <p className="mt-5">
              Complete application documents are often valued by Swiss
              employers. These may include employment references, diplomas,
              certificates and other relevant qualifications.
            </p>

            <p className="mt-4">
              Dates, job titles and other information in your CV should remain
              consistent with the supporting documents.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              6. Adapt terminology and job titles
            </h2>

            <p className="mt-5">
              Some job titles, qualifications and organizational terms differ
              between Germany and Switzerland.
            </p>

            <p className="mt-4">
              When applying in Switzerland, check whether your terminology is
              immediately understandable to Swiss recruiters and employers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              7. Consider ATS and relevant keywords
            </h2>

            <p className="mt-5">
              Swiss companies also use applicant tracking systems and digital
              recruitment platforms. A clearly structured CV with relevant
              terminology from the job advertisement can make your profile
              easier to process and understand.
            </p>

            <p className="mt-4">
              Keywords should always be used naturally and must accurately
              reflect your actual experience and qualifications.
            </p>
          </div>

        </section>

        {/* COMPARISON */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            Switzerland and Germany: CV comparison
          </h2>

          <div className="mt-8 overflow-hidden rounded-2xl border border-[#0A1F44]/10">
            <div className="grid grid-cols-3 bg-[#0A1F44] text-white">
              <div className="p-4 font-semibold">Topic</div>
              <div className="p-4 font-semibold">Switzerland</div>
              <div className="p-4 font-semibold">Germany</div>
            </div>

            {[
              [
                "Application photo",
                "Common, but optional",
                "Also optional",
              ],
              [
                "Languages",
                "Often particularly important",
                "Depends on role and employer",
              ],
              [
                "Employment references",
                "Frequently relevant",
                "Also commonly used",
              ],
              [
                "CV structure",
                "Clear, concise and targeted",
                "Similar basic structure",
              ],
              [
                "Market adaptation",
                "Swiss terminology and requirements should be considered",
                "German market conventions",
              ],
            ].map(([topic, switzerland, germany]) => (
              <div
                key={topic}
                className="grid grid-cols-3 border-t border-[#0A1F44]/10 bg-white"
              >
                <div className="p-4 font-semibold">{topic}</div>
                <div className="p-4 text-[#0A1F44]/75">
                  {switzerland}
                </div>
                <div className="p-4 text-[#0A1F44]/75">
                  {germany}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="mt-16 rounded-3xl bg-[#F7F8FA] p-8">
          <h2 className="text-3xl font-bold">
            Conclusion: Adapt your CV for the Swiss job market
          </h2>

          <p className="mt-5 leading-8 text-[#0A1F44]/75">
            A German CV does not need to be completely rebuilt for an
            application in Switzerland. However, adapting terminology,
            language skills, supporting documents, presentation and positioning
            to the Swiss market can significantly strengthen the application.
          </p>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold">
            More career guides for Switzerland
          </h2>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/guides/cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              CV Switzerland
            </Link>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              CV Optimization Switzerland
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              ATS Resume Switzerland
            </Link>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              Executive CV Switzerland
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 font-semibold transition hover:bg-[#EEF1F5]"
            >
              CV Consulting Switzerland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Applying for jobs in Switzerland?
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Optimize your existing CV for the Swiss job market or create your
            professional CV with the EliteCV Generator.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-full bg-[#C9A95A] px-7 py-3.5 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              View Packages & Pricing
            </Link>

            <Link
              href="/cv-generator"
              className="rounded-full border border-white/25 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Start CV Generator
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}