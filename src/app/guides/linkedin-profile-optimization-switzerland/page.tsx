import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "LinkedIn Profile Optimization Switzerland | Get Found | EliteCV",

  description:
    "LinkedIn Profile Optimization Switzerland: Improve your headline, About section, experience, keywords and recruiter visibility with a practical before-and-after example.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/linkedin-profil-optimieren-schweiz",
      "en-CH":
        "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",
    },
  },

  openGraph: {
    title: "LinkedIn Profile Optimization Switzerland | EliteCV",

    description:
      "Professional LinkedIn optimization for the Swiss job market with practical tips and a before-and-after example.",

    url:
      "https://www.elitecv.ch/guides/linkedin-profile-optimization-switzerland",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function LinkedInProfileOptimizationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + LANGUAGE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/en/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to Career Guides
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
              aria-current="page"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            LinkedIn & Career Positioning
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            LinkedIn Profile Optimization Switzerland: Improve Visibility and Positioning
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            A professional LinkedIn profile can strengthen your positioning in
            the Swiss job market. Recruiters, HR professionals and companies
            use LinkedIn to identify specialists, managers and executives for
            relevant opportunities.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-12 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold">
            Why LinkedIn optimization matters
          </h2>

          <p className="mt-5 leading-8 text-[#0A1F44]/75">
            LinkedIn is more than an online version of your CV. Your headline,
            About section, experience, skills and keywords influence how
            clearly your professional profile is understood and how easily you
            can be found in recruiter searches.
          </p>

          <p className="mt-4 leading-8 text-[#0A1F44]/75">
            A strong profile should communicate your professional identity,
            relevant expertise and career direction within a few seconds.
          </p>
        </section>

        {/* TIPS */}
        <section className="mt-12 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              1. Use a clear and targeted headline
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your headline should communicate more than your current job
              title. It should combine your professional identity, core
              expertise and target direction.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Generic
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Project Manager
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Stronger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Senior Project Manager | Digital Transformation | ERP |
                  Process Optimization
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Use the About section strategically
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              The About section is your professional introduction. It should
              explain who you are, what experience you bring, your main areas
              of expertise and the type of value you create.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Avoid generic descriptions. A focused introduction makes it
              easier for recruiters to understand your profile and target
              direction.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Present professional experience with impact
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Avoid simply copying your job description. Show responsibilities,
              relevant projects and measurable achievements so recruiters can
              understand the scope and impact of your work.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Results such as cost reductions, process improvements, project
              delivery, revenue growth or increased efficiency can make your
              profile significantly stronger.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Include relevant keywords
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              LinkedIn also functions as a search platform. Relevant keywords
              help recruiters find professionals with specific experience,
              skills or industry knowledge.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Terms such as project management, engineering, finance, HR, IT,
              sales, controlling, leadership or specific technical systems
              should be included naturally when they genuinely match your
              background.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Use a professional photo and banner
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A professional profile photo and a suitable banner can strengthen
              the first impression. Visual elements should support your
              positioning rather than distract from it.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Keep your LinkedIn profile and CV consistent
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Job titles, employers, dates and your overall professional
              positioning should be consistent across LinkedIn and your CV.
              Small wording differences are normal, but contradictions can
              create unnecessary questions.
            </p>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Optimization Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Keep your profile up to date
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Update your profile when your responsibilities, skills or career
              direction change. New certifications, projects and measurable
              achievements can strengthen your positioning over time.
            </p>
          </div>

        </section>

        {/* PRACTICAL EXAMPLE */}
        <section className="mt-16">
          <div className="border-t border-[#0A1F44]/10 pt-12">
            <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
              Practical Example
            </span>

            <h2 className="mt-5 text-3xl font-bold">
              LinkedIn Optimization: Before and After
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              The following example shows how an unclear LinkedIn profile can
              be transformed into a more focused and professionally positioned
              profile. Daniel Meier is a fictional example created for
              demonstration purposes.
            </p>

            <p className="mt-3 text-sm leading-6 text-[#0A1F44]/55">
              Note: The name, companies and profile information shown in this
              example are fictional or anonymized and are used exclusively to
              illustrate a possible LinkedIn optimization.
            </p>
          </div>

          {/* BEFORE */}
          <div className="mt-12">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Before
              </span>

              <h3 className="text-xl font-bold">
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

          {/* ANALYSIS */}
          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#C9A95A] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                Analysis
              </span>

              <h3 className="text-xl font-bold">
                Positioning and Optimization
              </h3>
            </div>

            <p className="mb-6 leading-7 text-[#0A1F44]/72">
              EliteCV analyzes the professional positioning, headline, About
              section, relevant keywords, work experience and visibility. The
              goal is to create a clearer profile that reflects the
              candidate&apos;s professional identity and target market.
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

          {/* AFTER */}
          <div className="mt-14">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-[#0A1F44] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                After
              </span>

              <h3 className="text-xl font-bold">
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
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            More Career Guides for Switzerland
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/guides/cv-optimization-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              CV Optimization Switzerland
            </Link>

            <Link
              href="/guides/cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              CV Switzerland
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              ATS Resume Switzerland
            </Link>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Executive CV Switzerland
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
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Optimize your LinkedIn profile for the Swiss job market
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Strengthen your professional positioning with an optimized
            LinkedIn profile and a CV aligned with your target role in
            Switzerland.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/#preise"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              View LinkedIn Services
            </Link>

            <Link
              href="/cv-beratung-schweiz"
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Professional CV Optimization
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}