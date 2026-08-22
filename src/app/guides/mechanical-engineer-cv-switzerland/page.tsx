import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mechanical Engineer CV Switzerland – Example & Guide",

  description:
    "Professional CV example for mechanical engineers in Switzerland. Learn how to present engineering experience, CAD skills, projects and technical expertise clearly.",

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
    title: "Mechanical Engineer CV Switzerland – Example & Guide",
    description:
      "Professional CV example for mechanical engineers and technical specialists in Switzerland.",
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
        alt:
          "Mechanical Engineer CV Switzerland example – Lukas Meier",
      },
    ],
  },
};

export default function MechanicalEngineerCVSwitzerlandPage() {
  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <article className="mx-auto max-w-6xl px-6 py-16 sm:py-20">

        {/* NAVIGATION */}
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
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#C9A95A]">
            EliteCV Example
          </p>

          <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-5xl">
            Mechanical Engineer CV Switzerland: Professional Example
          </h1>

          <p className="mt-6 text-lg leading-8 text-[#0A1F44]/75">
            A strong mechanical engineering CV should clearly communicate
            technical expertise, project responsibility and practical
            engineering experience. This example shows how design,
            development, project management and technical skills can be
            presented for the Swiss job market.
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
        <section className="mt-16 space-y-10 leading-8 text-[#0A1F44]/78">
          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              What makes a strong Mechanical Engineer CV?
            </h2>

            <p className="mt-5">
              Recruiters and engineering managers should be able to identify
              your technical specialization, software knowledge and project
              experience quickly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              1. Present technical skills clearly
            </h2>

            <p className="mt-4">
              CAD tools, engineering software, ERP systems and technical
              methods should be listed clearly. Relevant examples include
              SolidWorks, Siemens NX, AutoCAD, Inventor, ANSYS and SAP.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              2. Highlight projects and responsibility
            </h2>

            <p className="mt-4">
              Show your role in development projects, component design,
              cooperation with production and quality teams, technical
              documentation and responsibility for budget, schedule and
              project quality.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              3. Structure your experience clearly
            </h2>

            <p className="mt-4">
              Job title, company, dates and key responsibilities should be
              easy to scan. A clear chronological structure is particularly
              important for engineering careers with several technical roles.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              4. Include education and certifications
            </h2>

            <p className="mt-4">
              Engineering degrees, vocational training and relevant
              certifications can strengthen your profile and should be placed
              prominently.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0A1F44]">
              5. Adapt your CV to the Swiss job market
            </h2>

            <p className="mt-4">
              Language skills, local qualifications, industry experience and
              technical competencies should be understandable for Swiss
              employers and aligned with the target position.
            </p>
          </div>
        </section>

        {/* INTERNAL LINKS */}
        <section className="mt-14 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            More CV Examples
          </h2>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/en/guides/executive-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Executive CV Switzerland
            </Link>

            <Link
              href="/guides/operations-manager-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              Operations Manager CV
            </Link>

            <Link
              href="/guides/hr-specialist-cv-switzerland"
              className="rounded-full bg-[#F7F8FA] px-5 py-3 text-sm font-semibold"
            >
              HR Specialist CV
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
            Create your CV with the EliteCV Generator or have your application
            documents professionally optimized for the Swiss job market.
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