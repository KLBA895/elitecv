import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical Engineer CV Switzerland | Example & Tips | EliteCV",

  description:
    "Mechanical Engineer CV Switzerland: Professional example with tips on CAD, engineering projects, technical skills, achievements, ATS and the Swiss job market.",

  alternates: {
    canonical:
      "https://www.elitecv.ch/guides/mechanical-engineer-cv-switzerland",

    languages: {
      "de-CH":
        "https://www.elitecv.ch/ratgeber/maschinenbauingenieur-cv-schweiz",
      en:
        "https://www.elitecv.ch/guides/mechanical-engineer-cv-switzerland",
    },
  },

  openGraph: {
    title: "Mechanical Engineer CV Switzerland | Example & Tips",

    description:
      "Professional CV example for mechanical engineers and technical specialists applying in Switzerland.",

    url:
      "https://www.elitecv.ch/guides/mechanical-engineer-cv-switzerland",

    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",

    images: [
      {
        url:
          "https://www.elitecv.ch/images/ratgeber/professional-cv-switzerland-lukas-meier.png",
        width: 1600,
        height: 1200,
        alt: "Mechanical Engineer CV Switzerland example – Lukas Meier",
      },
    ],
  },
};

export default function MechanicalEngineerCVSwitzerlandPage() {
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
              href="/ratgeber/maschinenbauingenieur-cv-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/mechanical-engineer-cv-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10 max-w-4xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            Mechanical Engineering
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
            Mechanical Engineer CV Switzerland: Example, Structure and Tips
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            A strong mechanical engineering CV should clearly communicate
            technical expertise, project responsibility and measurable impact.
            Recruiters and engineering managers should quickly understand your
            engineering background, systems knowledge, projects and relevance
            for the target position.
          </p>
        </header>

        {/* CV IMAGE */}
        <section className="mt-14">
          <div className="overflow-hidden rounded-3xl border border-[#0A1F44]/10 bg-white p-4 shadow-xl sm:p-7">
            <Image
              src="/images/ratgeber/professional-cv-switzerland-lukas-meier.png"
              alt="Mechanical Engineer CV Switzerland example – Lukas Meier"
              width={1600}
              height={1200}
              priority
              className="h-auto w-full rounded-xl object-contain"
            />
          </div>

          <p className="mt-4 text-sm leading-6 text-[#0A1F44]/55">
            Fictional EliteCV example for a mechanical engineer applying in
            Switzerland.
          </p>
        </section>

        {/* CONTENT */}
        <section className="mt-16 space-y-12 rounded-3xl bg-white p-7 shadow-sm sm:p-10">

          <div>
            <h2 className="text-3xl font-bold">
              What makes a strong Mechanical Engineer CV?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A good engineering CV does more than list qualifications and job
              titles. It should demonstrate technical depth, project exposure,
              practical responsibility and the results you achieved.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Depending on the role, relevant areas may include mechanical
              design, product development, simulation, manufacturing,
              project management, quality, technical documentation and
              cooperation with suppliers or customers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              1. Present technical skills clearly
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              CAD systems, engineering software, ERP applications and
              technical methods should be easy to identify. Important tools
              should not be hidden in long paragraphs of responsibilities.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "SolidWorks",
                "Siemens NX",
                "Autodesk Inventor",
                "AutoCAD",
                "ANSYS",
                "SAP / ERP",
                "FMEA",
                "PDM / PLM",
                "Technical Documentation",
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
              2. Highlight projects and responsibility
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Engineering projects should make your actual contribution clear.
              Describe your role in product development, component design,
              testing, manufacturing support, technical documentation or
              project coordination.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Where relevant, include project scope, budget responsibility,
              deadlines, technical ownership and collaboration with
              production, quality, suppliers or customers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              3. Combine responsibilities with measurable results
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Your CV becomes more convincing when engineering activities are
              linked to practical outcomes instead of being presented as a
              simple list of tasks.
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-[#0A1F44]/10 bg-[#F7F8FA] p-6">
                <p className="font-semibold">
                  Generic
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/70">
                  Responsible for the design and optimization of mechanical
                  assemblies.
                </p>
              </div>

              <div className="rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-6">
                <p className="font-semibold text-[#8A6A22]">
                  Stronger
                </p>

                <p className="mt-3 leading-7 text-[#0A1F44]/75">
                  Redesigned mechanical assemblies and reduced manufacturing
                  time by 12 percent.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              4. Structure your professional experience clearly
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Job title, company, location and dates should be easy to scan.
              Under each position, focus on the most relevant responsibilities,
              projects and achievements.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Recent and target-relevant roles usually deserve more detail than
              older positions that no longer support your current career goal.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              5. Include education and technical qualifications
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Engineering degrees, vocational qualifications, postgraduate
              education and relevant certifications should be clearly
              identified.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Additional qualifications in project management, quality, Lean,
              digitalization or leadership can also strengthen your profile
              when they are relevant to the target position.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              6. Tailor the CV to the engineering role
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              A design engineer, development engineer, project manager and
              engineering manager should not use exactly the same CV focus.
              Adapt your professional profile and experience to the type of
              role you are targeting.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Review the job description and prioritize systems, methods and
              projects that are most relevant to that position.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              7. Use relevant engineering keywords
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Engineering vacancies often contain specific software,
              technical methods, standards and industry terminology. Relevant
              keywords can help both recruiters and applicant tracking systems
              understand your profile.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Only include keywords that genuinely match your background and,
              where possible, connect them to real projects or responsibilities.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              8. Keep your engineering CV ATS-friendly
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Important technical information should remain machine-readable.
              Avoid presenting essential skills only through icons, charts or
              graphical rating bars.
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
              9. Adapt your CV to the Swiss job market
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              Language skills, engineering qualifications, industry
              experience and technical competencies should be easy for Swiss
              employers to understand.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Switzerland offers engineering opportunities across industries
              such as mechanical engineering, medtech, automation, energy,
              building technology and industrial manufacturing.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              10. How long should a Mechanical Engineer CV be?
            </h2>

            <p className="mt-5 leading-8 text-[#0A1F44]/75">
              For experienced professionals, two pages are often a practical
              guideline. The key factor, however, is relevance rather than a
              strict page count.
            </p>

            <p className="mt-4 leading-8 text-[#0A1F44]/75">
              Avoid extensive project lists, outdated software inventories or
              overly detailed technical descriptions unless they add clear
              value for the target position.
            </p>
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
              href="/guides/operations-manager-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              Operations Manager CV
            </Link>

            <Link
              href="/guides/hr-specialist-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold hover:bg-[#EEF1F5]"
            >
              HR Specialist CV
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
            Create a professional engineering CV
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your CV with the EliteCV Generator or have your existing CV
            professionally optimized for engineering roles in the Swiss job
            market.
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