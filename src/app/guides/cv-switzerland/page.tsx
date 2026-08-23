import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Switzerland 2026 – Structure, Examples & Swiss Resume Guide",

  description:
    "CV Switzerland 2026: Learn how to structure a professional Swiss CV, including length, photo, experience, ATS, examples and tips for the Swiss job market.",

  alternates: {
    canonical: "https://www.elitecv.ch/guides/cv-switzerland",
    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber/lebenslauf-schweiz",
      en: "https://www.elitecv.ch/guides/cv-switzerland",
    },
  },

  openGraph: {
    title: "CV Switzerland 2026 – Structure, Examples & Guide",
    description:
      "A practical guide to creating a professional CV for the Swiss job market.",
    url: "https://www.elitecv.ch/guides/cv-switzerland",
    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function CVSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to Guides
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/lebenslauf-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            CV Switzerland
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            CV Switzerland 2026: Structure, Examples and Practical Tips
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl">
            A professional CV for the Swiss job market should be clear,
            relevant and tailored to the target position. This guide explains
            how to structure a Swiss CV, what information to include and what
            recruiters typically expect.
          </p>
        </header>

        <section className="mt-16 space-y-12 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              What should be included in a CV in Switzerland?
            </h2>

            <p className="mt-5">
              A Swiss CV typically includes contact details, a professional
              profile, work experience, education, further training, language
              skills and relevant professional competencies. Depending on the
              position, projects, leadership experience, certifications or key
              achievements can also be useful.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Recommended structure for a Swiss CV
            </h2>

            <p className="mt-5">
              Recruiters should be able to identify the most important
              information quickly. A clear chronological structure usually
              works best.
            </p>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-7">
              <ol className="space-y-3">
                <li>1. Contact details</li>
                <li>2. Professional profile</li>
                <li>3. Professional experience</li>
                <li>4. Education and further training</li>
                <li>5. Professional skills</li>
                <li>6. IT and language skills</li>
                <li>7. Optional: projects, certifications and engagement</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV or resume – which term is used in Switzerland?
            </h2>

            <p className="mt-5">
              In Switzerland, both “CV” and “resume” may be used in English,
              while German-language applications usually refer to a
              “Lebenslauf”. International companies commonly use the term CV.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              How long should a CV in Switzerland be?
            </h2>

            <p className="mt-5">
              For most applications, one to two pages are ideal. Entry-level
              candidates can often present their profile effectively on one
              page, while experienced professionals, specialists and senior
              leaders usually benefit from two pages when the additional
              information is relevant.
            </p>

            <p className="mt-5">
              The objective is not to include everything. Focus on relevant
              experience, responsibilities, competencies and measurable
              achievements.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Should you include a photo on a Swiss CV?
            </h2>

            <p className="mt-5">
              A photo is not mandatory in Switzerland, but it is still commonly
              used. If you include one, it should be professional, current and
              consistent with the overall presentation of your application.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Present professional experience effectively
            </h2>

            <p className="mt-5">
              Strong CVs do more than list responsibilities. Where relevant,
              include project ownership, leadership scope, budgets, process
              improvements, cost savings, revenue growth or other measurable
              results.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV and ATS systems
            </h2>

            <p className="mt-5">
              Many employers use applicant tracking or recruiting systems.
              Clear headings, readable text and relevant keywords help ensure
              that your CV is easy to process and understand.
            </p>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → ATS Resume Switzerland 2026
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV for experienced professionals
            </h2>

            <p className="mt-5">
              Experienced professionals should prioritize recent and
              target-role-relevant experience instead of describing every
              position in equal detail.
            </p>

            <p className="mt-5">
              In many cases, two pages are sufficient to present relevant
              roles, responsibilities, projects and achievements clearly.
            </p>

            <Link
              href="/guides/cv-template-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Template Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV for executives and senior leaders
            </h2>

            <p className="mt-5">
              Executive CVs should emphasize strategic responsibility,
              leadership scope, transformation, budgets and measurable
              business results.
            </p>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Executive CV Switzerland example
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV for engineers and technical specialists
            </h2>

            <p className="mt-5">
              Technical profiles should clearly present engineering tools,
              technologies, projects and specialist expertise while keeping the
              CV understandable for HR and non-technical decision-makers.
            </p>

            <Link
              href="/guides/mechanical-engineer-cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Mechanical Engineer CV Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Professional CV examples for Switzerland
            </h2>

            <p className="mt-5">
              EliteCV provides CV examples for senior leaders, operations,
              engineering and HR profiles.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/en/guides/executive-cv-switzerland"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                Executive CV
              </Link>

              <Link
                href="/guides/operations-manager-cv-switzerland"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                Operations Manager CV
              </Link>

              <Link
                href="/guides/mechanical-engineer-cv-switzerland"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                Engineering CV
              </Link>

              <Link
                href="/guides/hr-specialist-cv-switzerland"
                className="rounded-full bg-white px-5 py-3 font-semibold shadow-sm"
              >
                HR CV
              </Link>
            </div>
          </div>

        </section>

        {/* CTA */}
        <section className="mt-16 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create your professional CV for Switzerland
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your CV with the EliteCV Generator or have your existing
            application documents professionally optimized for the Swiss job
            market.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Create CV
            </Link>

            <Link
              href="/#preise"
              className="rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View CV Services
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}