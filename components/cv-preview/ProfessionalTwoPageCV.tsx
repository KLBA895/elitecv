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
      moreExperience: "Weitere Berufserfahrungen",
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
      moreExperience: "Additional Professional Experience",
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
  const secondPageJobs = workExperience.slice(2);

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
              {achievements.map((item) => (
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
              {firstPageJobs.map((job) => (
                <JobEntry
                  key={job.id}
                  job={job}
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

          <SideBlock title={t.certificates} icon={<Award />}>
            {certificates.map((cert) => (
              <SideItem
                key={cert.id}
                title={cert.title}
                text={[
                  cert.issuer,
                  cert.date ||
                  [cert.from, cert.to].filter(Boolean).join(" – "),
                ]
                  .filter(Boolean)
                  .join(" · ")}
              />
            ))}
          </SideBlock>

          <SideBlock title={t.languages} icon={<Languages />}>
            {languages.map((lang) => (
              <div key={lang.id} className="elitecv-side-line">
                <span>{lang.language}</span>
                <span>{lang.level}</span>
              </div>
            ))}
          </SideBlock>

          <SidebarFooter personal={personal} />
        </aside>

        <main className="elitecv-main">
          <div className="elitecv-page2-header">
            <Header personal={personal} />
          </div>

          {secondPageJobs.length > 0 && (
            <MainBlock title={t.moreExperience}>
              <div className="elitecv-timeline">
                {secondPageJobs.map((job) => (
                  <JobEntry key={job.id} job={job} successLabel={t.successes} />
                ))}
              </div>
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

          <MainBlock title={t.itSkills}>
            <ul className="elitecv-tools-list">
              {itSkills
                .filter((it) => it.name?.trim())
                .map((it) => (
                  <li key={it.id}>
                    <strong>{it.name}</strong>
                    {it.level && <span> – {it.level}</span>}
                  </li>
                ))}
            </ul>
          </MainBlock>
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
  successLabel,
}: {
  job: CVData["workExperience"][0];
  successLabel: string;
}) {
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

        {job.responsibilities.length > 0 && (
          <ul>
            {job.responsibilities.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}

        {job.achievements.length > 0 && (
          <>
            <p className="elitecv-job-label">{successLabel}</p>
            <ul>
              {job.achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </>
        )}
      </div>
    </article>
  );
}