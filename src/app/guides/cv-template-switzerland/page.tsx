import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Template Switzerland 2026 – Professional Resume Template | EliteCV",

  description:
    "CV Template Switzerland 2026: Structure, examples and practical tips for creating a professional Swiss CV with ATS-friendly layouts and modern resume design.",

  alternates: {
    canonical: "https://www.elitecv.ch/guides/cv-template-switzerland",
    languages: {
      "de-CH": "https://www.elitecv.ch/ratgeber/cv-vorlage-schweiz",
      en: "https://www.elitecv.ch/guides/cv-template-switzerland",
    },
  },

  openGraph: {
    title: "CV Template Switzerland 2026 | EliteCV",
    description:
      "Professional CV template guidance for Switzerland with structure, examples, ATS tips and modern resume layouts.",
    url: "https://www.elitecv.ch/guides/cv-template-switzerland",
    siteName: "EliteCV",
    locale: "en_CH",
    type: "article",
  },
};

export default function CVTemplateSwitzerlandPage() {
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
              href="/ratgeber/cv-vorlage-schweiz"
              className="rounded-full px-4 py-2 text-xs font-bold text-[#0A1F44]/60 transition hover:text-[#0A1F44]"
            >
              DE
            </Link>

            <Link
              href="/guides/cv-template-switzerland"
              className="rounded-full bg-[#0A1F44] px-4 py-2 text-xs font-bold text-white"
            >
              EN
            </Link>
          </div>
        </div>

        {/* HERO */}
        <header className="mt-10">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
            CV Template Switzerland
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            CV Template Switzerland 2026: Create a Professional Resume
          </h1>

          <p className="mt-6 max-w-4xl text-lg leading-8 text-[#0A1F44]/75 sm:text-xl">
            A professional CV template provides a strong foundation for your
            application. However, design alone is not enough. Structure,
            content, relevant keywords and alignment with the target position
            determine how effectively your CV communicates your experience.
          </p>
        </header>

        <section className="mt-16 space-y-12 leading-8 text-[#0A1F44]/78">

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              What should a CV template for Switzerland look like?
            </h2>

            <p className="mt-5">
              A strong Swiss CV template should be clear, professional and easy
              to scan. Recruiters should be able to identify your experience,
              education and key competencies quickly. A modern layout should
              support the content without distracting from it.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Recommended structure for a professional CV
            </h2>

            <p className="mt-5">
              A clear and logical structure works well for most applications in
              Switzerland.
            </p>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
              <ol className="space-y-3">
                <li>1. Name and contact details</li>
                <li>2. Professional profile</li>
                <li>3. Professional experience</li>
                <li>4. Education and further training</li>
                <li>5. Professional competencies</li>
                <li>6. IT and language skills</li>
                <li>7. Certifications and relevant projects</li>
                <li>8. Optional: interests and engagement</li>
              </ol>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              How long should a CV in Switzerland be?
            </h2>

            <p className="mt-5">
              For most applications in Switzerland, one to two pages are ideal.
              Entry-level candidates can often present their profile effectively
              on one page. Experienced professionals, specialists and senior
              leaders usually benefit from two pages when the additional
              information is relevant to the target role.
            </p>

            <p className="mt-5">
              The goal is not to include as much information as possible. Your
              CV should focus on relevant experience, competencies,
              responsibilities and results.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV template or individually tailored resume?
            </h2>

            <p className="mt-5">
              A template should always serve as a foundation. A strong CV is
              adapted to the target position. Your professional profile,
              highlighted skills and professional experience should reflect the
              requirements of the role you are applying for.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Modern CV templates for Switzerland
            </h2>

            <p className="mt-5">
              Modern CVs combine professional design with clear information
              hierarchy. Colors, icons and visual elements can be used, but they
              should never reduce readability.
            </p>

            <p className="mt-5">
              Important information should also be available as readable text
              rather than being communicated only through graphics or icons.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              ATS-friendly CV templates
            </h2>

            <p className="mt-5">
              Applicant tracking systems can process CVs automatically. An
              ATS-friendly template therefore uses clear headings, structured
              content and relevant terminology from the job description.
            </p>

            <Link
              href="/guides/ats-resume-switzerland-2026"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Learn more about ATS resumes in Switzerland
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV templates for experienced professionals
            </h2>

            <p className="mt-5">
              For experienced professionals, relevant career experience should
              be the main focus. Recent and target-role-relevant positions
              should receive more attention than older or less relevant
              experience.
            </p>

            <p className="mt-5">
              Two pages are usually sufficient to present relevant roles,
              responsibilities, projects and measurable achievements clearly.
            </p>

            <p className="mt-5">
              With the{" "}
              <Link
                href="/cv-generator-schweiz"
                className="font-semibold text-[#8A6A22] hover:underline"
              >
                EliteCV CV Generator Switzerland
              </Link>{" "}
              you can create a structured professional CV and use Professional
              or Executive layouts. EliteCV designs are part of the generator
              and are not offered as free downloadable CV templates.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV templates for executives
            </h2>

            <p className="mt-5">
              Executive CVs require a different emphasis. Strategic
              responsibility, leadership scope, budgets, transformation and
              measurable results should be clearly visible.
            </p>

            <Link
              href="/en/guides/executive-cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → View Executive CV Switzerland example
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV templates for engineers
            </h2>

            <p className="mt-5">
              Engineers and technical specialists should clearly present
              relevant technologies, engineering tools, projects and technical
              expertise while keeping the CV understandable for HR and
              non-technical decision-makers.
            </p>

            <Link
              href="/guides/mechanical-engineer-cv-switzerland"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → View Mechanical Engineer CV example
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Common mistakes when using CV templates
            </h2>

            <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-7">
              <ul className="space-y-3">
                <li>• Too many graphic elements</li>
                <li>• Small fonts and overcrowded pages</li>
                <li>• Generic content instead of role-specific content</li>
                <li>• Responsibilities without measurable results</li>
                <li>• Missing relevant keywords</li>
                <li>• Poorly structured professional experience</li>
                <li>• Too much irrelevant information</li>
              </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              Are EliteCV templates available for free download?
            </h2>

            <p className="mt-5">
              EliteCV Professional and Executive designs are exclusive EliteCV
              layouts and are not provided as free Word or PDF templates for
              download. They can be used within the EliteCV Generator to create
              a professional CV.
            </p>

            <Link
              href="/cv-generator-schweiz"
              className="mt-5 inline-block font-semibold text-[#8A6A22] hover:underline"
            >
              → Open EliteCV CV Generator
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0A1F44]">
              CV examples for Switzerland
            </h2>

            <p className="mt-5">
              EliteCV provides professional examples for specialists,
              engineers, HR professionals, managers and executives.
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
            EliteCV Generator
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            Create your professional CV for Switzerland
          </h2>

          <p className="mt-5 max-w-3xl leading-8 text-white/80">
            Create your resume with a professional structure and modern
            Professional or Executive layouts, or have your existing CV
            professionally optimized.
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