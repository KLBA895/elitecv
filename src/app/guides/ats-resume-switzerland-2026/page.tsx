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
      en:
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

export default function ATSResumeSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-5xl px-6 py-16 sm:py-20">

        {/* TOP NAVIGATION */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/guides"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            ← Back to Career Guides
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
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            ATS Resume Switzerland
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            ATS Resume Switzerland 2026: How to Create an ATS-Friendly CV
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75 sm:text-xl">
            Applicant Tracking Systems are used by many employers and
            recruiters to process job applications. A well-structured,
            readable and relevant CV can help ensure that your professional
            experience, qualifications and skills are recognized clearly
            during the recruiting process.
          </p>
        </header>

        {/* INTRO */}
        <section className="mt-12 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold">
            What is an Applicant Tracking System?
          </h2>

          <p className="mt-5 leading-8 text-[#0A1F44]/75">
            An Applicant Tracking System, commonly referred to as an ATS, is
            software used to organize and process job applications. Depending
            on the system and recruiting process, information such as work
            experience, education, skills, job titles and keywords may be
            extracted from a CV.
          </p>

          <p className="mt-4 leading-8 text-[#0A1F44]/75">
            ATS optimization does not mean writing a CV only for software. The
            goal is to create a document that is easy to process while
            remaining clear, credible and professional for human recruiters.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-12 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              1. Use a clear CV structure
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Use recognizable section headings such as Professional
              Experience, Education, Skills and Languages. A clear structure
              makes the document easier to understand for both recruiting
              systems and human recruiters.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Keep job titles, employers and dates clearly separated and use
              consistent formatting throughout the document.
            </p>

            <Link
              href="/guides/cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Switzerland: Structure and Practical Tips
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Include relevant keywords
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Review the job description and identify relevant skills,
              qualifications, technologies, methods and professional terms.
              Where they genuinely match your experience, integrate these terms
              naturally into your CV.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Do not simply copy keywords. They should be connected to your
              actual experience and professional background.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Make important information available as text
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Important qualifications and skills should be written clearly
              rather than communicated only through icons, graphics, charts or
              visual rating systems.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              This also improves readability for recruiters who may quickly
              scan the document before reading it in detail.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Focus on achievements, not only responsibilities
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Strong CVs explain more than daily tasks. Where possible, describe
              measurable achievements such as process improvements, cost
              reductions, revenue growth, project responsibility, team
              leadership or successful transformations.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Generic
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Responsible for project management and process improvement.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Stronger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Managed cross-functional projects and reduced process lead
                  time by 15 percent.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Tailor your CV to the target position
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A generic CV may not communicate your suitability for a specific
              position effectively. Prioritize the experience, competencies and
              achievements that are most relevant to the role you are applying
              for.
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
              6. Keep the design professional and readable
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              An ATS-friendly CV does not need to look basic. A professional
              design can still use clear typography, consistent spacing and a
              strong information hierarchy while keeping the content easy to
              read.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Avoid overcrowded layouts and visual elements that make essential
              information difficult to identify.
            </p>

            <Link
              href="/guides/cv-template-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Template Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Use standard and recognizable section headings
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Creative section names can look attractive but may make
              information harder to understand. Standard headings such as
              Professional Experience, Education, Skills, Certifications and
              Languages are usually clearer.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. Present dates and job titles consistently
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Use one consistent date format throughout your CV and make job
              titles and company names easy to distinguish.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Consistency improves readability and gives the document a more
              professional appearance.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              9. ATS resumes for the Swiss job market
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              For applications in Switzerland, your CV should combine clear
              structure with professional positioning. Relevant work
              experience, qualifications, language skills and achievements
              should be easy to identify while the document remains tailored
              to the target role and industry.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              10. Do not optimize only for ATS
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your CV ultimately needs to convince people. Keywords and
              structure matter, but your professional profile, achievements
              and career positioning remain essential.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              The strongest CV combines technical readability with clear,
              relevant and credible content.
            </p>
          </div>

        </section>

        {/* CHECKLIST */}
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-8">
          <h2 className="text-3xl font-bold">
            ATS-Friendly CV Checklist
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              "Clear section headings",
              "Consistent dates and job titles",
              "Relevant keywords included naturally",
              "Important information available as text",
              "Professional experience easy to scan",
              "Measurable achievements included",
              "No unnecessary graphic overload",
              "Readable typography and spacing",
              "CV tailored to the target role",
              "Content written for recruiters as well as systems",
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
            More EliteCV Career Guides
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
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Executive CV Switzerland
            </Link>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create an ATS-friendly CV for Switzerland
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your CV with a professional structure and EliteCV
            Professional or Executive design, or have your existing CV
            professionally optimized for your target role.
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