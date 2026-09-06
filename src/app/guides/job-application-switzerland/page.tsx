import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Job Application Switzerland | Tips for a Successful Application | EliteCV",

  description:
    "Job application Switzerland: Practical tips for CVs, cover letters, LinkedIn, ATS, application documents and interviews in the Swiss job market.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/job-application-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/bewerbung-schweiz-tipps",
      "en-CH":
        "https://www.elitecv.ch/guides/job-application-switzerland",
    },
  },

  openGraph: {
    title: "Job Application Switzerland | Practical Tips | EliteCV",

    description:
      "Practical guidance for preparing professional job applications in Switzerland, including CV, LinkedIn, ATS and interview preparation.",

    url:
      "https://www.elitecv.ch/guides/job-application-switzerland",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function JobApplicationSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">

        {/* NAVIGATION + LANGUAGE */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to Guides
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <Link
              href="/ratgeber/bewerbung-schweiz-tipps"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/job-application-switzerland"
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
            Job Application Switzerland
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Job Application Switzerland: Practical Tips for a Strong Application
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            Switzerland offers attractive career opportunities, but employers
            often expect professional, well-structured and carefully prepared
            application documents. Your CV, LinkedIn profile, cover letter and
            overall positioning should support the same target role.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-12 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold">
            What does a strong Swiss job application include?
          </h2>

          <p className="mt-5 leading-8 text-[#0A1F44]/75">
            A professional application should make it easy for recruiters to
            understand your experience, qualifications, achievements and
            motivation. The content should be relevant to the position and
            presented in a clear, consistent format.
          </p>

          <p className="mt-4 leading-8 text-[#0A1F44]/75">
            Depending on the employer and role, your application may include a
            CV, cover letter, employment references, certificates and other
            supporting documents.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-12 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              1. Tailor your CV to the target role
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Avoid sending exactly the same CV for every vacancy. Your
              professional profile, experience, skills and achievements should
              emphasize what is most relevant to the specific role.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Review the job advertisement carefully and identify the most
              important responsibilities, competencies and keywords.
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
              2. Use a clear Swiss CV structure
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your CV should be easy to scan. Contact details, professional
              profile, work experience, education, skills and language
              knowledge should be clearly structured.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Recent experience should usually receive more attention than
              older or less relevant positions.
            </p>

            <Link
              href="/guides/cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Make achievements visible
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Recruiters want to understand not only what you were responsible
              for, but also what you achieved. Whenever possible, connect your
              responsibilities with measurable results.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Generic
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Responsible for process improvement.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Stronger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Improved operational processes and reduced lead time by
                  15 percent.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Prepare a targeted cover letter when required
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A cover letter should not simply repeat your CV. It should explain
              why the position is relevant to you, what experience you bring
              and why your profile fits the employer&apos;s needs.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Keep the content specific. Generic motivation statements are less
              convincing than clear links between your experience and the
              target role.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Keep your LinkedIn profile professional and consistent
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Recruiters may review your LinkedIn profile alongside your
              application. Job titles, employers, dates and your overall
              professional positioning should therefore be consistent with
              your CV.
            </p>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → LinkedIn Profile Optimization Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Consider ATS when preparing your CV
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Larger companies may use applicant tracking systems to manage
              applications. Important information should therefore remain
              structured, readable and connected to relevant keywords from the
              job description.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Avoid hiding essential information only in graphics, icons or
              visual rating bars.
            </p>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → ATS Resume Switzerland 2026
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Prepare supporting documents
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Depending on the vacancy, employers may request employment
              references, diplomas or certificates. Keep important documents
              available in a clear digital format.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              You do not necessarily need to overload the first application
              with every document you have. Follow the requirements stated in
              the job advertisement or application portal.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. Pay attention to language requirements
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Switzerland is multilingual, and language requirements vary by
              region and employer. German, French, Italian and English can all
              be relevant depending on the position.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              State your language level clearly and choose the application
              language that best matches the vacancy unless the employer gives
              different instructions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              9. Prepare for the interview
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Before the interview, research the company, understand the role
              and prepare examples from your professional experience.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Be ready to explain your responsibilities, achievements,
              motivation and career decisions clearly and concisely.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              10. Create one consistent professional profile
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your CV, LinkedIn profile, cover letter and interview should tell
              the same professional story. The wording does not need to be
              identical, but your positioning, strengths and target direction
              should remain consistent.
            </p>
          </div>

        </section>

        {/* CHECKLIST */}
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold">
            Job Application Checklist
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "CV tailored to the target position",
              "Contact details checked",
              "Professional profile clearly positioned",
              "Relevant achievements included",
              "Keywords aligned with the vacancy",
              "LinkedIn profile updated",
              "Cover letter customized if required",
              "Certificates and references prepared",
              "Spelling and formatting reviewed",
              "Interview examples prepared",
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
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
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
              href="/guides/cv-optimization-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              CV Optimization Switzerland
            </Link>

            <Link
              href="/guides/linkedin-profile-optimization-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              LinkedIn Optimization
            </Link>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              ATS Resume Switzerland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Strengthen your application for the Swiss job market
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your CV with the EliteCV Generator or have your application
            documents professionally optimized for your target position in
            Switzerland.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Start CV Generator
            </Link>

            <Link
              href="/#preise"
              className="rounded-xl border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Packages & Pricing
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}