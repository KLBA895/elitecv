import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Specialist CV Switzerland | Example & Tips | EliteCV",

  description:
    "HR Specialist CV Switzerland: Professional example with tips on recruiting, HR business partnering, HR systems, measurable achievements, keywords and ATS.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/hr-specialist-cv-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/hr-specialist-cv-schweiz",
      en:
        "https://www.elitecv.ch/guides/hr-specialist-cv-switzerland",
    },
  },

  openGraph: {
    title: "HR Specialist CV Switzerland | Example & Tips",

    description:
      "Professional HR Specialist CV example for the Swiss job market with practical tips for HR professionals and HR Business Partners.",

    url:
      "https://www.elitecv.ch/guides/hr-specialist-cv-switzerland",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",

    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/hr-specialist-cv-switzerland-sarah-keller.png",
        width: 1600,
        height: 1200,
        alt: "HR Specialist CV Switzerland example – Sarah Keller – EliteCV",
      },
    ],
  },
};

export default function HRSpecialistCVSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

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
              href="/ratgeber/hr-specialist-cv-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/hr-specialist-cv-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Human Resources
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            HR Specialist CV Switzerland: Example, Structure and Tips
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            A professional HR CV should communicate more than administrative
            responsibilities. Recruiting, talent development, HR business
            partnering, HR projects and measurable improvements help show the
            value you bring to an organization.
          </p>
        </header>

        {/* CV IMAGE */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/hr-specialist-cv-switzerland-sarah-keller.png"
              alt="HR Specialist CV Switzerland example – Sarah Keller"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Fictional EliteCV example for an HR Specialist / HR Business
            Partner applying in the Swiss job market.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-16 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              What makes a strong HR CV in Switzerland?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              HR roles can cover a wide range of responsibilities. A strong CV
              should therefore make your specialization immediately clear,
              whether your focus is recruiting, HR business partnering,
              employee relations, talent development or HR operations.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Recruiters should also be able to understand which employee
              groups, business units or organizational areas you have supported.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              1. Define your HR positioning
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your professional profile should make your core HR expertise
              clear from the beginning. A precise positioning statement helps
              recruiters understand your relevance for the role more quickly.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "HR Business Partnering",
                "Talent Acquisition",
                "Recruiting",
                "HR Operations",
                "Learning & Development",
                "Employee Relations",
                "Talent Management",
                "HR Projects",
                "Employment Law",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] px-5 py-4 font-semibold"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              2. Show achievements instead of only responsibilities
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Strong HR CVs demonstrate impact. Whenever possible, connect your
              responsibilities with measurable or clearly described outcomes.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Generic
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Responsible for recruitment and management of the hiring
                  process.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Stronger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Managed end-to-end recruitment and reduced average
                  time-to-hire by 20 percent.
                </p>
              </div>
            </div>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Other relevant achievements may include improved onboarding,
              successful HR system implementations, more efficient processes,
              stronger retention or the delivery of major recruitment and
              transformation projects.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Present recruiting and talent management experience
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              If recruiting is a key part of your profile, show the actual
              scope of your responsibility. This may include active sourcing,
              candidate screening, interviews, stakeholder management,
              contract processes and onboarding.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              It can also be useful to mention the types of roles you recruited
              for, such as engineering, IT, finance, sales or management
              positions.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Present HR Business Partnering as a strategic role
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              For HR Business Partner positions, your CV should show that your
              contribution goes beyond HR administration. Relevant areas may
              include leadership advisory, workforce planning,
              organizational development, change management and complex
              employee relations.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Where appropriate, include the size of the organization,
              employee population or leadership group you supported.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Include HR systems and digital skills
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Experience with HR technology can be highly relevant. List
              systems and tools that genuinely match your background and the
              requirements of the target position.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {[
                "SAP SuccessFactors",
                "Workday",
                "Personio",
                "Power BI",
                "LinkedIn Recruiter",
                "Microsoft 365",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Consider Swiss HR requirements
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Depending on the position, knowledge of Swiss employment law,
              social insurance, data protection or collective employment
              agreements can strengthen your profile.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Language skills can also be important in Switzerland. German and
              English are frequently combined in international organizations,
              while additional national languages may be valuable depending on
              the region and employer.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Highlight HR education and qualifications
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              In addition to your degree or initial professional training,
              HR-specific qualifications and certifications can be important.
              Present relevant education clearly so recruiters can quickly
              assess your professional background.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. Use relevant keywords for recruiters and ATS
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Include relevant terminology from the job description where it
              genuinely reflects your experience. This helps recruiters and
              applicant tracking systems understand the relevance of your
              profile.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              The goal is not keyword repetition. Important terms should appear
              naturally in the context of your actual experience.
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
              9. Align your HR CV and LinkedIn profile
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A professional LinkedIn profile is particularly useful in HR.
              Job titles, employers, dates and your overall professional
              positioning should remain consistent with your CV.
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
              10. Tailor the CV to the target HR role
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              An HR Specialist, Recruiter, HR Business Partner and HR Manager
              require different areas of emphasis. Prioritize the experience,
              skills and achievements that are most relevant to your target
              position.
            </p>

            <Link
              href="/guides/cv-optimization-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → CV Optimization Switzerland
            </Link>
          </div>

        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-14 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold">
            More CV Examples and Guides
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Executive CV Switzerland
            </Link>

            <Link
              href="/guides/mechanical-engineer-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Mechanical Engineer CV
            </Link>

            <Link
              href="/guides/operations-manager-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Operations Manager CV
            </Link>

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
          </div>
        </section>

        {/* CTA */}
        <section className="mt-14 rounded-3xl bg-[#0A1F44] p-8 text-white sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create a professional HR CV for Switzerland
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your CV with the EliteCV Generator or have your existing CV
            professionally optimized for HR roles in the Swiss job market.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator"
              className="rounded-xl bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44] transition hover:bg-[#D6B96E]"
            >
              Start CV Generator
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