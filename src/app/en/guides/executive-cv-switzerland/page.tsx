import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executive CV Switzerland: Example & Template | EliteCV",

  description:
    "Executive CV example for Switzerland. Discover how senior managers, executives and C-level professionals can present leadership experience, achievements and strategic impact.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/en/guides/executive-cv-switzerland",
    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/executive-cv-schweiz",
      "en":
        "https://www.elitecv.ch/en/guides/executive-cv-switzerland",
    },
  },

  openGraph: {
    title: "Executive CV Switzerland: Example & Template | EliteCV",
    description:
      "Professional Executive CV example for senior managers, executives and C-level professionals in the Swiss job market.",
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
            Executive CV Switzerland: Example for Senior Leaders
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75 sm:text-xl sm:leading-9">
            An Executive CV needs to communicate more than a traditional
            resume. For senior management and C-level positions, strategic
            responsibility, leadership experience and measurable business
            impact should be immediately visible.
          </p>
        </header>

        {/* CV IMAGE */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/executive-cv-schweiz-laura-schmidt.png"
              alt="Executive CV Switzerland example for Chief Operating Officer and senior leaders by EliteCV"
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
              a CV should do more than list previous roles. It should clearly
              communicate the scope of responsibility, strategic contribution
              and results achieved throughout the candidate&apos;s career.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              1. Clear executive positioning
            </h2>

            <p className="mt-5">
              The upper section of the CV should immediately communicate the
              candidate&apos;s professional positioning, leadership profile
              and target level. This helps recruiters and decision-makers
              quickly understand the relevance of the profile.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              2. Make leadership experience visible
            </h2>

            <p className="mt-5">
              Team size, international responsibility, budget ownership,
              transformation initiatives and strategic responsibilities can
              provide important context. They demonstrate the actual scope of
              leadership more effectively than generic management statements.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              3. Focus on measurable achievements
            </h2>

            <p className="mt-5">
              Executive CVs become more compelling when achievements are
              supported by concrete results. Examples include efficiency
              improvements, cost reductions, revenue growth, successful
              transformations and major projects delivered.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              4. Professional and refined design
            </h2>

            <p className="mt-5">
              An Executive CV should look sophisticated without distracting
              from the content. Clear visual hierarchy, consistent typography,
              appropriate white space and a structured layout support a
              professional senior-level presentation.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Executive CVs for the Swiss job market
            </h2>

            <p className="mt-5">
              For applications in Switzerland, a transparent career history,
              relevant qualifications, language skills and a precise
              presentation of professional experience are particularly
              important. The Executive CV should always be tailored to the
              target role and industry.
            </p>
          </div>

        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-16 rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold">
            Explore the EliteCV Career Guide
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
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create your professional Executive CV
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create a professionally structured CV for the Swiss job market
            with modern Professional and Executive layouts from EliteCV.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Open EliteCV Generator
            </Link>

            <Link
              href="/#pakete"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Packages
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}