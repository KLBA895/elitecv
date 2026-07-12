"use client";

import React from "react";
import { THEME_COLORS } from "@/theme/themeColors";
import type { CVData } from "../../types/cv";
import {
  Star,
  Brain,
  GraduationCap,
  Award,
  Languages,
  Briefcase,
  Phone,
  Mail,
  MapPin,
  LinkIcon,
  Users,
  Cog,
  MessageCircle,
  Shield,
  BarChart3,
} from "lucide-react";

interface ProfessionalTwoPageCVProps {
  data: CVData;
  language?: "de" | "en";
}
const DUPLICATE_STOP_WORDS = new Set([
  "the",
  "and",
  "for",
  "with",
  "from",
  "into",
  "across",
  "through",
  "that",
  "this",
  "their",
  "business",
  "project",
  "system",
]);

function normalizeWords(text: string): string[] {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter(
      (word) =>
        word.length >= 4 &&
        !DUPLICATE_STOP_WORDS.has(word)
    );
}

function isNearDuplicate(first: string, second: string): boolean {
  const firstWords = new Set(normalizeWords(first));
  const secondWords = new Set(normalizeWords(second));

  if (firstWords.size === 0 || secondWords.size === 0) {
    return false;
  }

  const sharedWords = [...firstWords].filter((word) =>
    secondWords.has(word)
  ).length;

  const smallerSetSize = Math.min(
    firstWords.size,
    secondWords.size
  );

  return sharedWords / smallerSetSize >= 0.65;
}

function compactCertificateTitle(title: string): string {
  const replacements: Array<[RegExp, string]> = [
    [
      /Business Analysis Certificate Program,\s*IIBA-?BABOK/i,
      "Business Analysis (IIBA-BABOK)",
    ],
    [
      /Business Process Management Professional Certificate/i,
      "Business Process Management",
    ],
    [
      /Business Architecture Best Practices/i,
      "Business Architecture",
    ],
    [
      /Building and Using Business Process Architecture/i,
      "Business Process Architecture",
    ],
    [
      /Business-Oriented\s*\/\s*Advanced Data Modelling/i,
      "Advanced Data Modelling",
    ],
    [
      /Data Modelling Fundamentals\s*\/\s*Masterclass/i,
      "Data Modelling Masterclass",
    ],
    [
      /Business Rules and Decision Analysis Masterclass/i,
      "Business Rules & Decision Analysis",
    ],
  ];

  return replacements.reduce(
    (currentTitle, [pattern, replacement]) =>
      currentTitle.replace(pattern, replacement),
    title.trim()
  );
}

function compactIssuer(issuer: string): string {
  const normalized = issuer.trim();

  if (/Digicomp/i.test(normalized)) return "Digicomp";
  if (/Boston University/i.test(normalized)) return "Boston University";
  if (/Zühlke/i.test(normalized)) return "Zühlke";
  if (/IRM UK/i.test(normalized)) return "IRM UK";
  if (/Tobias Beck/i.test(normalized)) return "Tobias Beck Academy";

  return normalized;
}

function compactCompanyName(company: string): string {
  const replacements: Array<[RegExp, string]> = [
    [
      /Allianz Suisse Versicherungsgesellschaft AG/i,
      "Allianz Suisse",
    ],
    [
      /Systor AG\s*\/\s*Accenture Technology Solutions AG/i,
      "Systor / Accenture",
    ],
    [
      /Conexus AG\s*\(Ex Logical Solutions AG\)/i,
      "Conexus",
    ],
  ];

  return replacements.reduce(
    (currentCompany, [pattern, replacement]) =>
      currentCompany.replace(pattern, replacement),
    company.trim()
  );
}

function compactToolName(name: string): string {
  return name
    .replace(
      /Thomson Reuters Accelus Risk Manager/i,
      "Accelus Risk Manager"
    )
    .trim();
}
export function ProfessionalTwoPageCV({
  data,
  language = "de",
}: ProfessionalTwoPageCVProps) {

  const themeColor =
    THEME_COLORS[data.themeColor] ?? THEME_COLORS.gray;

  const labels = {
    de: {
      strengths: "Persönliche Kompetenzen",
      achievements: "Erfolge",
      education: "Ausbildung",
      certificates: "Weiterbildungen",
      languages: "Sprachen",
      itSkills: "IT-Kenntnisse",
      softSkills: "Soft Skills",
      profile: "Profil",
      experience: "Berufserfahrung",
      moreExperience: "Weitere Berufserfahrung",
      careerHistory: "Frühere Stationen",
      skills: "Kompetenzen & Tools",
      projects: "Projekte",
      careerHighlights: "Erfolge",
      expertise: "Fachkenntnisse",
      successes: "Resultate",
    },
    en: {
      strengths: "Strengths",
      achievements: "Achievements",
      education: "Education",
      certificates: "Certificates",
      languages: "Languages",
      itSkills: "IT Skills",
      softSkills: "Soft Skills",
      profile: "Profile",
      experience: "Professional Experience",
      moreExperience: "Earlier Experience",
      careerHistory: "Career History",
      skills: "Skills & Tools",
      projects: "Projects",
      careerHighlights: "Achievements",
      expertise: "Expertise",
      successes: "Achievements",
    },
  };

  const t = labels[language];
  const {
    personal,
    profile,
    strengths,
    achievements,
    workExperience,
    education,
    certificates,
    languages,
    itSkills,
    projects,
  } = data;

  const firstPageJobs = workExperience.slice(0, 2);

  // Auf Seite 2 noch drei Stellen mit Beschreibung
  const secondPageDetailedJobs = workExperience.slice(2, 5);

  // Alle älteren Stellen nur noch kompakt
  const MAX_CAREER_HISTORY = 5;

  const olderJobs = workExperience.slice(
    5,
    5 + MAX_CAREER_HISTORY
  );

  const profileText =
    profile.rawText?.trim() ||
    [profile.why, profile.how, profile.what]
      .filter(Boolean)
      .join(" ")
      .trim();

  return (
    <div className="elitecv-doc">
      <section
        className="elitecv-page"
        lang={language}
      >
        <aside className="elitecv-sidebar" style={{ backgroundColor: themeColor }}>
          <Photo personal={personal} />

          {strengths.length > 0 && (
            <SideBlock title={t.strengths} icon={<Star />}>
              {strengths.map((item) => (
                <SideItem
                  key={item.id}
                  icon={item.icon}
                  title={item.label}
                  text={item.description}
                />
              ))}
            </SideBlock>
          )}

          {achievements.length > 0 && (
            <SideBlock title={t.achievements} icon={<Award />}>
              {achievements
                .filter((item) => item.text?.trim())
                .slice(0, 4)
                .map((item) => (
                  <SideItem
                    key={item.id}
                    title={item.metric ?? ""}
                    text={item.text}
                  />
                ))}
            </SideBlock>
          )}

          <SidebarFooter personal={personal} />
        </aside>

        <main className="elitecv-main">
          <Header personal={personal} />

          <MainBlock title={t.profile}>
            <p className="elitecv-profile-text">{profileText}</p>
          </MainBlock>

          <MainBlock title={t.experience}>
            <div className="elitecv-timeline">
              {firstPageJobs.map((job, index) => (
                <JobEntry
                  key={job.id}
                  job={job}
                  jobIndex={index}
                  successLabel={t.successes}
                />
              ))}
            </div>
          </MainBlock>
        </main>
      </section>

      <section
        className="elitecv-page"
        lang={language}
      >
        <aside
          className="elitecv-sidebar elitecv-sidebar-page2"
          style={{ backgroundColor: themeColor }}
        >
          <SideBlock title={t.education} icon={<GraduationCap />}>
            {education.map((edu) => (
              <SideItem
                key={edu.id}
                title={edu.degree}
                text={[
                  edu.field,
                  edu.institution,
                  edu.from || edu.to
                    ? edu.from === edu.to
                      ? edu.from
                      : [edu.from, edu.to].filter(Boolean).join(" – ")
                    : "",
                ]
                  .filter(Boolean)
                  .join(" · ")}
              />
            ))}
          </SideBlock>

          {certificates.length > 0 && (
            <SideBlock title={t.certificates} icon={<Award />}>
              <div className="elitecv-certificates-compact">
                {certificates
                  .filter((cert) => cert.title?.trim())
                  .map((cert) => {
                    const date =
                      cert.date ||
                      [cert.from, cert.to].filter(Boolean).join(" – ");

                    const details = [
                      cert.issuer
                        ? compactIssuer(cert.issuer)
                        : "",
                      date,
                    ]
                      .filter(Boolean)
                      .join(" · ");

                    return (
                      <div
                        key={cert.id}
                        className="elitecv-certificate-row"
                      >
                        <div className="elitecv-certificate-title">
                          {compactCertificateTitle(cert.title)}
                        </div>

                        {details && (
                          <div className="elitecv-certificate-details">
                            {details}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </SideBlock>
          )}

          <SideBlock title={t.languages} icon={<Languages />}>
            {languages.map((lang) => (
              <div key={lang.id} className="elitecv-side-line">
                <span>{lang.language}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </SideBlock>

          {itSkills.filter((it) => it.name?.trim()).length > 0 && (
            <SideBlock title={t.itSkills} icon={<Cog />}>
              <div className="elitecv-it-skills-sidebar">
                {itSkills
                  .filter((it) => it.name?.trim())
                  .map((it) => (
                    <div
                      key={it.id}
                      className="elitecv-it-skill-row"
                    >
                      <span>{compactToolName(it.name)}</span>

                      {it.level && (
                        <span className="elitecv-it-skill-level">
                          {it.level}
                        </span>
                      )}
                    </div>
                  ))}
              </div>
            </SideBlock>
          )}

          <SidebarFooter personal={personal} />
        </aside>

        <main className="elitecv-main">
          <div className="elitecv-page2-header">
            <Header personal={personal} />
          </div>

          {(secondPageDetailedJobs.length > 0 || olderJobs.length > 0) && (
            <MainBlock title={t.moreExperience}>
              {secondPageDetailedJobs.length > 0 && (
                <div className="elitecv-timeline elitecv-timeline-detailed">
                  {secondPageDetailedJobs.map((job, index) => (
                    <JobEntry
                      key={job.id}
                      job={job}
                      jobIndex={index + 2}
                      successLabel={t.successes}
                    />
                  ))}
                </div>
              )}

              {olderJobs.length > 0 && (
                <section className="elitecv-career-history">
                  <h4>{t.careerHistory}</h4>

                  <div className="elitecv-career-list">
                    {olderJobs.map((job) => (
                      <CompactJobEntry key={job.id} job={job} />
                    ))}
                  </div>
                </section>
              )}
            </MainBlock>
          )}

          {projects && projects.length > 0 && (
            <MainBlock title={t.projects}>
              <div className="elitecv-projects">
                {projects.map((project) => (
                  <article key={project.id} className="elitecv-project">
                    <strong>{project.title}</strong>

                    {project.role && (
                      <p className="elitecv-project-role">{project.role}</p>
                    )}

                    {project.description && (
                      <p className="elitecv-project-description">
                        {project.description}
                      </p>
                    )}

                    {project.results?.length > 0 && (
                      <ul>
                        {project.results.map((result, index) => (
                          <li key={index}>{result}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </MainBlock>
          )}
        </main>
      </section >
    </div >
  );
}

function SidebarFooter({ personal }: { personal: CVData["personal"] }) {
  return (
    <div className="elitecv-sidebar-footer">
      {personal.phone && <div>{personal.phone}</div>}
      {personal.email && <div>{personal.email}</div>}
      {personal.linkedin && <div>{personal.linkedin}</div>}
    </div>
  );
}

function Photo({ personal }: { personal: CVData["personal"] }) {
  return (
    <div className="elitecv-photo">
      {personal.photo ? (
        <img src={personal.photo} alt="Profilfoto" />
      ) : (
        <span>FOTO</span>
      )}
    </div>
  );
}

function Header({
  personal,
  compact = false,
}: {
  personal: CVData["personal"];
  compact?: boolean;
}) {
  const titleParts = [
    personal.targetTitle,
    personal.targetPosition,
    personal.targetIndustry,
  ].filter(Boolean);

  const contactParts = [
    { value: personal.phone, icon: <Phone /> },
    { value: personal.email, icon: <Mail /> },
    { value: personal.location, icon: <MapPin /> },
    { value: personal.linkedin, icon: <LinkIcon /> },
  ].filter((item) => Boolean(item.value));

  return (
    <header className={`elitecv-header ${compact ? "elitecv-header-compact" : ""}`}>
      <h1>
        {personal.firstName} <span>{personal.lastName}</span>
      </h1>

      {!compact && titleParts.length > 0 && (
        <div className="elitecv-title-line">
          {titleParts.map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="elitecv-title-part"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      <div className="elitecv-contact-line">
        {contactParts.map((item, index) => (
          <React.Fragment key={`${item.value}-${index}`}>
            {index > 0 && <span className="elitecv-separator">|</span>}
            <span className="elitecv-contact-item">
              <span className="elitecv-contact-icon">{item.icon}</span>
              <span>{item.value}</span>
            </span>
          </React.Fragment>
        ))}
      </div>

      <div className="elitecv-header-mark" />
    </header>
  );
}

function SideBlock({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="elitecv-side-block">
      <h3>
        {icon && <span className="elitecv-side-icon">{icon}</span>}
        <span>{title}</span>
      </h3>
      {children}
    </section>
  );
}

const skillIcons: Record<string, React.ReactNode> = {
  brain: <Brain size={17} />,
  users: <Users size={17} />,
  settings: <Cog size={17} />,
  message: <MessageCircle size={17} />,
  shield: <Shield size={17} />,
  chart: <BarChart3 size={17} />,
};

function SideItem({
  icon,
  title,
  text,
}: {
  icon?: string;
  title: string;
  text?: string;
}) {
  const displayIcon = icon ? skillIcons[icon] : null;

  return (
    <div className="elitecv-side-item">
      <strong>
        {displayIcon && (
          <span className="elitecv-item-icon">{displayIcon}</span>
        )}
        {title}
      </strong>

      {text && <p>{text}</p>}
    </div>
  );
}

function MainBlock({
  title,
  icon,
  children,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="elitecv-main-block">
      <h3>
        {icon && <span className="elitecv-main-icon">{icon}</span>}
        <span>{title}</span>
      </h3>
      {children}
    </section>
  );
}

function JobEntry({
  job,
  jobIndex,
  successLabel,
}: {
  job: CVData["workExperience"][0];
  jobIndex: number;
  successLabel: string;
}) {
  const maxResponsibilities =
    jobIndex === 0
      ? 3
      : jobIndex <= 2
        ? 2
        : 1;

  const visibleResponsibilities = job.responsibilities
    .filter((item) => item?.trim())
    .slice(0, maxResponsibilities);

  const allResponsibilities = job.responsibilities.filter(
    (item) => item?.trim()
  );

  const visibleAchievements =
    jobIndex < 3
      ? job.achievements
        .filter((achievement) => {
          if (!achievement?.trim()) {
            return false;
          }

          return !allResponsibilities.some((responsibility) =>
            isNearDuplicate(achievement, responsibility)
          );
        })
        .slice(0, 1)
      : [];

  return (
    <article className="elitecv-job">
      <div className="elitecv-job-dot" />

      <div className="elitecv-job-content">
        <div className="elitecv-job-head">
          <div>
            <strong>{job.functionTitle}</strong>
            <p>{job.company}</p>
          </div>

          {job.showPeriod !== false && (job.from || job.to) && (
            <span>
              {job.from && job.to
                ? job.from === job.to
                  ? job.from
                  : `${job.from} – ${job.to}`
                : job.from || job.to}
            </span>
          )}
        </div>

        {visibleResponsibilities.length > 0 && (
          <ul>
            {visibleResponsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {visibleAchievements.length > 0 && (
          <>
            <p className="elitecv-job-label">{successLabel}</p>
            <ul>
              {visibleAchievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}

function CompactJobEntry({
  job,
}: {
  job: CVData["workExperience"][0];
}) {
  const period =
    job.showPeriod !== false && (job.from || job.to)
      ? job.from && job.to
        ? job.from === job.to
          ? job.from
          : `${job.from} – ${job.to}`
        : job.from || job.to
      : "";

  return (
    <article className="elitecv-career-row">
      <div className="elitecv-career-details">
        <strong>{compactCompanyName(job.company)}</strong>
        <span>{job.functionTitle}</span>
      </div>

      {period && (
        <span className="elitecv-career-period">
          {period}
        </span>
      )}
    </article>
  );
}