import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HR Specialist CV Switzerland – Example & Guide | EliteCV",

  description:
    "Professional HR Specialist CV example for Switzerland. Learn how to present recruiting, HR business partnering, talent management, HR systems and measurable achievements.",

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
    title: "HR Specialist CV Switzerland – Professional Example",
    description:
      "Professional HR Specialist CV example for the Swiss job market with practical tips for HR professionals.",
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Example
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            HR Specialist CV Switzerland: Professional Example
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            A professional HR CV should communicate more than administrative
            responsibilities. Recruiting, talent management, HR projects,
            business partnering and measurable improvements help demonstrate
            the value you can bring to an organization.
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
        <section className="mt-16 space-y-10 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              What makes a strong HR CV in Switzerland?
            </h2>

            <p className="mt-5">
              HR roles can cover a wide range of responsibilities. A strong CV
              should therefore make your specialization immediately clear,
              whether your focus is recruiting, HR business partnering,
              employee relations, talent development or HR operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. Define your HR positioning
            </h2>

            <p className="mt-4">
              Your professional profile should make your HR expertise clear
              from the beginning. Relevant areas may include Talent
              Acquisition, HR Business Partnering, Learning & Development,
              Employee Relations or HR Operations.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Show achievements instead of only responsibilities
            </h2>

            <p className="mt-4">
              Strong HR CVs demonstrate results. Examples include reducing
              time-to-hire, improving employee retention, implementing new HR
              processes or successfully managing recruiting and transformation
              projects.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Present recruiting and talent management experience
            </h2>

            <p className="mt-4">
              If you have managed recruiting processes, describe your
              involvement in sourcing, interviews, candidate selection,
              onboarding and talent development. This gives recruiters a
              clearer picture of your actual experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. Include HR systems and digital skills
            </h2>

            <p className="mt-4">
              Experience with HR technology can be highly relevant. Systems
              such as SAP SuccessFactors, Workday, Personio, LinkedIn Recruiter
              or Power BI should be included when they match your experience
              and the target position.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              5. Consider Swiss HR requirements
            </h2>

            <p className="mt-4">
              Knowledge of Swiss employment practices, labor law, social
              insurance, data protection and collective employment agreements
              can be valuable depending on the position. Language skills are
              also particularly important in Switzerland.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              6. Use relevant keywords for recruiters and ATS
            </h2>

            <p className="mt-4">
              Include relevant terminology from the job description where it
              genuinely reflects your experience. This helps both recruiters
              and applicant tracking systems understand the relevance of your
              profile.
            </p>
          </div>

        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
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
            Create a professional HR CV for Switzerland
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create a modern CV with the EliteCV Generator or have your existing
            CV professionally optimized for the Swiss job market.
          </p>

          <div className="mt-7 flex flex-wrap gap-4">
            <Link
              href="/cv-generator-schweiz"
              className="rounded-full bg-[#C9A95A] px-6 py-3 font-semibold text-[#0A1F44]"
            >
              Start CV Generator
            </Link>

            <Link
              href="/#preise"
              className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white"
            >
              View Services
            </Link>
          </div>
        </section>

      </article>
    </main>
  );
}