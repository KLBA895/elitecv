import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATS Resume Switzerland 2026 | ATS-Friendly CV Guide | EliteCV",

  description:
    "ATS Resume Switzerland 2026: Learn how to create an ATS-friendly CV for the Swiss job market with clear structure, relevant keywords and professional positioning.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/ats-resume-switzerland-2026",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/ats-lebenslauf-schweiz-2026",
      "en-CH":
        "https://www.elitecv.ch/guides/ats-resume-switzerland-2026",
    },
  },

  openGraph: {
    title: "ATS Resume Switzerland 2026 | ATS-Friendly CV Guide | EliteCV",

    description:
      "Practical guidance for creating an ATS-friendly CV for the Swiss job market.",

    url:
      "https://www.elitecv.ch/guides/ats-resume-switzerland-2026",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

const commonErrors = [
  "Complex tables, text boxes or multi-column elements",
  "Important information presented only as graphics or icons",
  "Missing keywords from the job description",
  "Inconsistent or unclear date formats",
  "Unstructured professional experience without clear responsibilities and results",
  "Unusual section headings that systems may not recognize easily",
  "Too many colors, fonts or decorative elements",
  "Skills and IT knowledge that are not clearly labeled",
  "Long blocks of text without concise bullet points",
  "Unsuitable file formats or incorrectly exported PDF files",
];

const atsChecklist = [
  "Use clear and recognizable section headings",
  "Present professional experience chronologically and consistently",
  "Clearly state employer, job title, location and dates",
  "Describe responsibilities and achievements concisely",
  "Integrate relevant professional terms and keywords naturally",
  "Group skills, IT knowledge and languages clearly",
  "Choose a professional, calm and readable layout",
  "Check the final PDF carefully before submitting your application",
];

export default function ATSResumeSwitzerlandPage() {
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
              href="/ratgeber/ats-lebenslauf-schweiz-2026"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
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
            ATS Resume Switzerland 2026
          </h1>

          <p className="mt-4 text-xl font-medium text-[#0A1F44]">
            How to create an ATS-friendly CV for recruiters and application systems
          </p>

          <p className="mt-6 max-w-3xl leading-8 text-[#0A1F44]/75">
            A modern CV needs to do more than look professional. It should also
            be structured so that recruiting software can reliably recognize
            and organize your most important professional information.
          </p>
        </header>

        {/* CONTENT */}
        <div className="mt-12 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-12">

          <section>
            <h2 className="text-3xl font-bold">
              What is an Applicant Tracking System?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              An Applicant Tracking System, commonly referred to as an ATS, is
              software used to organize and process job applications.
              Companies can use these systems to collect, search, compare and
              assign incoming CVs to specific positions.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              ATS platforms are particularly common among larger companies,
              recruitment agencies and international organizations. Your CV
              should therefore be designed so that both the software and the
              recruiter reviewing it can understand the information quickly.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Why a strong CV can still be overlooked
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A visually sophisticated CV is not automatically ATS-friendly.
              If important information is placed inside graphics, unusual
              tables or difficult-to-read elements, some information may not
              be processed correctly.
            </p>

            <div className="mt-7 rounded-2xl border border-[#D4B15A]/30 bg-[#FFFDF7] p-6">
              <p className="font-semibold text-[#8A6A22]">
                Important:
              </p>

              <p className="mt-2 leading-7 text-[#0A1F44]/75">
                ATS optimization does not mean that a CV has to look boring.
                The goal is to combine a clear structure, professional design
                and understandable content.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              The 10 most common ATS mistakes
            </h2>

            <ol className="mt-6 space-y-4">
              {commonErrors.map((error, index) => (
                <li
                  key={error}
                  className="flex gap-4 rounded-2xl border border-[#0A1F44]/10 p-5"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0A1F44] text-sm font-bold text-white">
                    {index + 1}
                  </span>

                  <span className="pt-1 leading-7 text-[#0A1F44]/75">
                    {error}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              How to structure an ATS-friendly CV
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A clear and logical structure works well for the Swiss job
              market. The most important information should be visible without
              requiring recruiters to search through the document.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {atsChecklist.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-5"
                >
                  <span className="font-bold text-[#8A6A22]">
                    ✓
                  </span>

                  <p className="mt-2 leading-7 text-[#0A1F44]/75">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Use keywords effectively
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Keywords help recruiting systems and recruiters connect your
              experience and competencies with a specific position. Relevant
              terminology from the job advertisement can be included when it
              genuinely matches your professional background.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Typical examples include Project Management, SAP, ERP, Business
              Analysis, Controlling, Lean Management, Leadership, Microsoft
              365, Scrum and Process Optimization.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Keywords should not simply be listed without context. Connect
              them naturally with your responsibilities, projects and
              achievements.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Present responsibilities and achievements clearly
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Instead of generic statements such as “Responsible for
              projects,” your CV should explain what you actually delivered
              and what impact your work had.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
                <p className="font-semibold text-red-800">
                  Less effective
                </p>

                <p className="mt-3 leading-7 text-red-900/75">
                  Responsible for various projects and collaboration with
                  internal departments.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
                <p className="font-semibold text-emerald-800">
                  Stronger
                </p>

                <p className="mt-3 leading-7 text-emerald-900/75">
                  Led cross-functional projects, coordinated internal
                  stakeholders and reduced process lead time by 15 percent.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              What role can artificial intelligence play?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              AI can help structure existing information, improve wording and
              present relevant competencies more clearly. However, it does not
              replace careful review of the content.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              All information must remain factually correct and reflect your
              actual professional experience. A convincing CV should remain
              individual and should not read like generic AI-generated text.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              How long should a Swiss CV be?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              One or two pages are appropriate for many applications. Junior
              candidates can often present their profile on one page, while
              professionals with extensive experience may benefit from two
              clearly structured pages.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              The number of pages is not the only consideration. Relevance,
              readability and clear prioritization are more important than
              including every possible detail.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Frequently asked questions
            </h2>

            <div className="mt-6 space-y-5">
              <div className="rounded-2xl border border-[#0A1F44]/10 p-6">
                <h3 className="text-xl font-semibold">
                  Can ATS systems read PDF files?
                </h3>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Many current ATS platforms can process properly exported PDF
                  files. However, the text should remain real selectable text
                  rather than being embedded only as an image.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0A1F44]/10 p-6">
                <h3 className="text-xl font-semibold">
                  Are tables always a problem?
                </h3>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Not every table causes problems. Complex, nested or
                  multi-column structures can make information harder to
                  process. A clear arrangement is generally more reliable.
                </p>
              </div>

              <div className="rounded-2xl border border-[#0A1F44]/10 p-6">
                <h3 className="text-xl font-semibold">
                  Should every application be individually tailored?
                </h3>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  The basic CV structure can remain the same. However, your
                  target position, profile summary, relevant competencies and
                  selected achievements should reflect the specific role.
                </p>
              </div>
            </div>
          </section>

          {/* GENERATOR CTA */}
          <section className="rounded-3xl bg-[#0A1F44] p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#D4B15A]">
              EliteCV Generator
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Create a structured CV faster
            </h2>

            <p className="mt-5 leading-8 text-white/75">
              The EliteCV Generator helps you create your CV in a structured
              and efficient way with clearly organized input sections,
              professional CV layouts and AI-assisted wording options.
            </p>

            <ul className="mt-6 space-y-3 text-white/80">
              <li>✓ ATS-oriented and clear CV structure</li>
              <li>✓ Professional and Executive CV layouts</li>
              <li>✓ Structured presentation of experience and achievements</li>
              <li>✓ AI assistance for selected wording</li>
              <li>✓ German and English user interface</li>
              <li>✓ Direct PDF export</li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/cv-generator"
                className="inline-flex items-center justify-center rounded-xl bg-[#D4B15A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#E0C06B]"
              >
                Open EliteCV Generator
              </Link>

              <Link
                href="/#preise"
                className="inline-flex items-center justify-center rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                View Packages
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold">
              Conclusion
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              An ATS-optimized CV combines technical readability with a
              convincing presentation for recruiters. Clear structure,
              relevant keywords, understandable wording and professional
              design help ensure that the most important information can be
              recognized correctly.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Continue with our guides to{" "}
              <Link
                href="/guides/cv-optimization-switzerland"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                CV Optimization in Switzerland
              </Link>
              ,{" "}
              <Link
                href="/guides/cv-switzerland-vs-germany"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                CV Switzerland vs. Germany
              </Link>{" "}
              and{" "}
              <Link
                href="/guides/linkedin-profile-optimization-switzerland"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                LinkedIn Profile Optimization
              </Link>
              .
            </p>
          </section>

        </div>
      </article>
    </main>
  );
}