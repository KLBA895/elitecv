import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimization Switzerland – Get Found by Recruiters",

  description:
    "Optimize your LinkedIn profile for the Swiss job market. Improve your headline, About section, experience, keywords and recruiter visibility with a practical before-and-after example.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",
      en:
        "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",
    },
  },

  openGraph: {
    title:
      "LinkedIn Profile Optimization Switzerland – Get Found by Recruiters",
    description:
      "LinkedIn optimization for the Swiss job market with a practical before-and-after example.",
    url:
      "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",
    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function LinkedInProfileOptimizationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">

        {/* NAVIGATION + LANGUAGE SWITCH */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#C9A95A]"
          >
            ← Back to Guides
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/linkedin-profil-optimieren-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
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

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            LinkedIn Profile Optimization Switzerland: Improve Your Visibility
            and Positioning
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
            A professional LinkedIn profile is an important part of career
            positioning. In Switzerland, recruiters, HR professionals and
            companies regularly use LinkedIn to identify professionals,
            specialists and executives for suitable opportunities.
          </p>
        </header>

        {/* TIPS */}
        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Use a clear and targeted headline
          </h2>

          <p>
            Your headline should communicate more than your current job title.
            It should highlight your professional identity, key competencies
            and target direction so recruiters can understand your positioning
            at a glance.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Use the About section strategically
          </h2>

          <p>
            The About section is your professional introduction. It should
            explain who you are, what experience you bring, which areas you
            specialize in and what value you can offer an employer.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Present professional experience with impact
          </h2>

          <p>
            Avoid simply listing tasks. Show responsibilities, projects,
            measurable achievements and the contribution you made in previous
            roles. This makes your experience easier for recruiters to assess.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Include relevant keywords
          </h2>

          <p>
            LinkedIn also works as a search platform. Relevant terms such as
            project management, engineering, finance, HR, IT, sales,
            controlling, leadership or specific technical skills should be
            integrated naturally when they match your background and target
            role.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Use a professional photo and banner
          </h2>

          <p>
            A clear profile photo and a suitable banner strengthen the first
            impression. Visual elements should support your professional
            positioning rather than distract from it.
          </p>
        </section>

        {/* PRACTICAL EXAMPLE */}
        <section className="mt-16">
          <div className="border-t border-[#0A1F44]/10 pt-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
              Practical Example
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#0A1F44]">
              LinkedIn Optimization: Before and After
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/78">
              The following example shows how an unclear LinkedIn profile can be
              transformed into a more focused and professionally positioned
              profile. Daniel Meier is a fictional example created for
              demonstration purposes.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#0A1F44]/60">
              Note: The name, companies and profile information shown in this
              example are fictional or anonymized and are used exclusively to
              illustrate a possible LinkedIn optimization.
            </p>
          </div>

          {/* IMAGE 1 */}
          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Before
              </span>

              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Starting Position
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              The profile does not yet communicate a clear professional
              positioning. The headline, About section and keywords do not make
              Daniel&apos;s technical background and target direction
              immediately visible to recruiters.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <Image
                src="/images/ratgeber/EliteCV_LinkedIn_Optimization_Example_01_Before_Daniel_Meier.png"
                alt="LinkedIn profile before optimization – fictional example Daniel Meier"
                width={1600}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* IMAGE 2 */}
          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#C9A95A] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Analysis
              </span>

              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Positioning and Optimization
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              EliteCV analyzes the professional positioning, headline, About
              section, relevant keywords, work experience and visibility. The
              goal is to create a clearer profile that reflects the candidate&apos;s
              technical identity and target market.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <Image
                src="/images/ratgeber/EliteCV_LinkedIn_Optimization_Example_02_Analysis_Daniel_Meier.png"
                alt="EliteCV analysis and optimization of a fictional LinkedIn profile"
                width={1600}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>

          {/* IMAGE 3 */}
          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                After
              </span>

              <h3 className="text-xl font-semibold text-[#0A1F44]">
                Clear Professional Positioning
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              The optimized profile communicates Daniel&apos;s technical
              background, competencies and career direction much more clearly.
              Relevant keywords are integrated naturally and the profile gives
              recruiters a stronger first impression.
            </p>

            <div className="overflow-hidden rounded-2xl border border-[#0A1F44]/10 bg-white shadow-sm">
              <Image
                src="/images/ratgeber/EliteCV_LinkedIn_Optimization_Example_03_After_Daniel_Meier.png"
                alt="LinkedIn profile after professional optimization – fictional example Daniel Meier"
                width={1600}
                height={1200}
                className="h-auto w-full"
              />
            </div>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-7">
          <h2 className="text-2xl font-semibold">
            More Career Guides for Switzerland
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              CV Optimization Switzerland
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              ATS Resume Switzerland
            </Link>

            <Link
              href="/guides/cv-switzerland-vs-germany"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              CV Switzerland vs Germany
            </Link>

            <Link
              href="/guides/job-application-switzerland"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-sm"
            >
              Job Application Switzerland
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

          <h2 className="mt-3 text-3xl font-semibold">
            Optimize your LinkedIn profile for the Swiss job market
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-white/80">
            EliteCV supports professionals and executives with LinkedIn
            optimization, CV optimization and strategic career positioning for
            Switzerland.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-full bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              View LinkedIn Services
            </Link>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white"
            >
              Optimize Your CV
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}