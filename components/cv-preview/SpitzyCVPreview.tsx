"use client";

import React from "react";
import type { CVData } from "../../types/cv";

interface ProfessionalCVProps {
  data: CVData;
  language?: "de" | "en";
}

// ─── Sidebar Section Wrapper ─────────────────────────────────────────────────
function SideSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-side-section">
      <h2 className="cv-side-heading">{title}</h2>
      {children}
    </section>
  );
}

// ─── Main Section Wrapper ─────────────────────────────────────────────────────
function MainSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="cv-main-section">
      <h2 className="cv-main-heading">{title}</h2>
      {children}
    </section>
  );
}

// ─── Work Experience Entry ────────────────────────────────────────────────────
function WorkEntry({
  job,
  successLabel = "Key Achievements",
}: {
  job: CVData["workExperience"][0];
  successLabel?: string;
}) {
  return (
    <article className="cv-work-entry">
      <div className="cv-work-header">
        <div className="cv-work-meta">
          <span className="cv-work-period">{job.from} – {job.to}</span>
          <span className="cv-work-location">{job.location}</span>
        </div>

        <div className="cv-work-info">
          <h3 className="cv-work-title">{job.functionTitle}</h3>
          <p className="cv-work-company">{job.company}</p>
        </div>
      </div>

      {job.responsibilities.length > 0 && (
        <ul className="cv-work-list">
          {job.responsibilities.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {job.achievements.length > 0 && (
        <>
          <p className="cv-work-achievements-title">{successLabel}</p>

          <ul className="cv-work-achievements">
            {job.achievements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </article>
  );
}

// ─── Main Preview Component ───────────────────────────────────────────────────
export function ProfessionalCVPreview({
  data,
  language = "de",
}: ProfessionalCVProps) {
  const {
    personal,
    profile,
    usps,
    strengths,
    achievements,
    workExperience,
    skillGroups,
    hardSkills,
    softSkills,
    itSkills,
    languages,
    education,
    certificates,
  } = data;

  const firstPageJobs = workExperience.slice(0, 1);
  const secondPageJobs = workExperience.slice(1);

  const itLevelDots = (level?: string) => {
    const levels = { "Grundkenntnisse": 1, "Gut": 2, "Sehr gut": 3, "Expertenwissen": 4 };
    const filled = levels[level as keyof typeof levels] ?? 2;
    return Array.from({ length: 4 }, (_, i) => (
      <span key={i} className={`cv-skill-dot ${i < filled ? "cv-skill-dot--filled" : ""}`} />
    ));
  };

  const labels = {
    de: {
      strengths: "Stärken",
      sidebarAchievements: "Top-Erfolge",
      jobAchievements: "Resultate",
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
      careerHighlights: "Karriere-Highlights",
      expertise: "Fachkenntnisse",
      successes: "Key Achievements",
    },
    en: {
      strengths: "Strengths",
      successes: "Key Achievements",
      sidebarAchievements: "Top Achievements",
      jobAchievements: "Key Achievements",
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
      careerHighlights: "Career Highlights",
      expertise: "Expertise",
    },
  };

  const t = labels[language];
  return (
    <div className="cv-root">
      <section className="cv-page cv-page-1">
        {/* Header */}
        <header className="cv-header">
          <div className="cv-header-left">

            <div className="cv-photo-placeholder">
              {personal.photo ? (
                <img
                  src={personal.photo}
                  alt={`${personal.firstName} ${personal.lastName}`}
                  className="cv-photo-img"
                />
              ) : (
                <span>FOTO</span>
              )}
            </div>

            <div className="cv-header-name">
              <h1 className="cv-name">
                {personal.firstName} {personal.lastName}
              </h1>

              <p className="cv-target-title">
                {personal.targetTitle
                  .replace(/\s*\/\s*/g, " | ")
                  .replace(/\|\s*\n/g, "\n")
                  .replace(/\s*\|\s*$/g, "")}
              </p>
            </div>

          </div>

          <div className="cv-header-contact">
            {personal.email && <span>{personal.email}</span>}
            {personal.phone && <span>{personal.phone}</span>}
            {personal.location && <span>{personal.location}</span>}
            {personal.linkedin && <span>{personal.linkedin}</span>}
          </div>
        </header>

        {/* ── Body: Sidebar + Main ────────────────────────────────────────── */}
        <div className="cv-body">

          {/* ── LEFT SIDEBAR ─────────────────────────────────────────────── */}
          <aside className="cv-sidebar">

            {/* Stärken */}
            {strengths.length > 0 && (
              <SideSection title={t.strengths}>
                <ul className="cv-strengths-list">
                  {strengths.map((s) => (
                    <li key={s.id} className="cv-strength-item">
                      <span className="cv-strength-label">{s.label}</span>
                      {s.description && <span className="cv-strength-desc">{s.description}</span>}
                    </li>
                  ))}
                </ul>
              </SideSection>
            )}

            {/* Erfolge */}
            {achievements.length > 0 && (
              <SideSection title={t.sidebarAchievements}>
                <ul className="cv-achievements-list">
                  {achievements.map((a) => (
                    <li key={a.id} className="cv-achievement-item">
                      {a.metric && <span className="cv-achievement-metric">{a.metric}</span>}
                      <span className="cv-achievement-text">{a.text}</span>
                    </li>
                  ))}
                </ul>
              </SideSection>
            )}

            {/* Soft Skills */}
            {softSkills.length > 0 && (
              <SideSection title="Soft Skills">
                <ul className="cv-tag-list">
                  {softSkills.map((s, i) => <li key={i} className="cv-tag">{s}</li>)}
                </ul>
              </SideSection>
            )}

            {/* IT-Kenntnisse */}
            {itSkills.length > 0 && (
              <SideSection title={t.itSkills}>
                <ul className="cv-it-list">
                  {itSkills.map((it) => (
                    <li key={it.id} className="cv-it-item">
                      <span className="cv-it-name">{it.name}</span>
                      <span className="cv-it-dots">{itLevelDots(it.level)}</span>
                    </li>
                  ))}
                </ul>
              </SideSection>
            )}

            {/* ── MAIN CONTENT ─────────────────────────────────────────────── */}
          </aside>

          <main className="cv-main">
            {(profile.why || profile.how || profile.what || profile.rawText) && (
              <MainSection title={t.profile}>
                {profile.rawText && !profile.why && (
                  <p className="cv-profile-text">{profile.rawText}</p>
                )}

                {profile.why && <p className="cv-profile-text">{profile.why}</p>}
                {profile.how && <p className="cv-profile-text">{profile.how}</p>}
                {profile.what && <p className="cv-profile-text">{profile.what}</p>}
              </MainSection>
            )}

            {/* USP */}
            {usps.length > 0 && (
              <MainSection title={t.careerHighlights}>
                <div className="cv-usp-grid">
                  {usps.map((u) => (
                    <div key={u.id} className="cv-usp-item">
                      <p className="cv-usp-title">{u.title}</p>
                      <p className="cv-usp-desc">{u.description}</p>
                    </div>
                  ))}
                </div>
              </MainSection>
            )}

            {/* Berufserfahrung Seite 1 */}
            {firstPageJobs.length > 0 && (
              <MainSection title={t.experience}>
                {firstPageJobs.map((job) => (
                  <WorkEntry
                    key={job.id}
                    job={job}
                    successLabel={t.jobAchievements}
                  />
                ))}
              </MainSection>
            )}
          </main>
        </div>
      </section>
      <section className="cv-page cv-page-2">
        <div className="cv-body">
          <aside className="cv-sidebar cv-sidebar-page2">
            {/* Sprachen */}
            {languages.length > 0 && (
              <SideSection title={t.languages}>
                <ul className="cv-language-list">
                  {languages.map((l) => (
                    <li key={l.id} className="cv-language-item">
                      <span className="cv-language-name">{l.language}</span>
                      <span className="cv-language-level">{l.level}</span>
                    </li>
                  ))}
                </ul>
              </SideSection>
            )}
            {/* Ausbildung */}
            {education.length > 0 && (
              <SideSection title={t.education}>
                {education.map((edu) => (
                  <div key={edu.id} className="cv-edu-item">
                    <p className="cv-edu-degree">{edu.degree}</p>
                    {edu.field && <p className="cv-edu-field">{edu.field}</p>}
                    <p className="cv-edu-institution">{edu.institution}</p>
                    <p className="cv-edu-period">{edu.from} – {edu.to}</p>
                  </div>
                ))}
              </SideSection>
            )}

            {/* Weiterbildungen & Zertifikate */}
            {certificates.length > 0 && (
              <SideSection title={t.certificates}>
                {certificates.map((c) => (
                  <div key={c.id} className="cv-cert-item">
                    <p className="cv-cert-title">{c.title}</p>
                    {(c.issuer || c.year) && (
                      <p className="cv-cert-meta">
                        {[c.issuer, c.year].filter(Boolean).join(", ")}
                      </p>
                    )}
                  </div>
                ))}
              </SideSection>
            )}
          </aside>

          <main className="cv-main">
            {secondPageJobs.length > 0 && (
              <MainSection title="Weitere Berufserfahrung">
                {secondPageJobs.map((job) => (
                  <WorkEntry
                    key={job.id}
                    job={job}
                    successLabel={t.jobAchievements}
                  />
                ))
                }
              </MainSection>
            )}

            {skillGroups.length > 0 && (
              <MainSection title={t.expertise}>
                {skillGroups.map((sg) => (
                  <div key={sg.id} className="cv-skill-group">
                    <p className="cv-skill-group-category">{sg.category}</p>
                    <p className="cv-skill-group-items">{sg.skills.join(" · ")}</p>
                  </div>
                ))}
              </MainSection>
            )}

            {hardSkills.length > 0 && (
              <MainSection title="Hard Skills">
                <ul className="cv-tag-list cv-tag-list--main">
                  {hardSkills.map((s, i) => (
                    <li key={i} className="cv-tag cv-tag--hard">{s}</li>
                  ))}
                </ul>
              </MainSection>
            )}
          </main>
        </div>

        <footer className="cv-footer cv-footer--page2">
          <span>
            {personal.firstName} {personal.lastName} · {personal.email} · {personal.phone}
            {personal.linkedin && <> · {personal.linkedin}</>}
          </span>
        </footer>
      </section>
    </div>
  );
}