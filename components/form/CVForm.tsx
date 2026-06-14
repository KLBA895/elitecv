"use client";

import React, { useState } from "react";
import type { CVData, WorkExperience, Education, Certificate, ITSkill, Language, Strength, Achievement, USP, SkillGroup } from "../../types/cv";

interface CVFormProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

// ─── Small helpers ────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2, 9);

const FieldLabel = ({ children }: { children: React.ReactNode }) => (
  <label className="cv-form-label">{children}</label>
);

const Input = ({
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) => (
  <input
    type={type}
    className="cv-form-input"
    value={value}
    placeholder={placeholder}
    onChange={(e) => onChange(e.target.value)}
  />
);

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) => (
  <textarea
    className="cv-form-textarea"
    value={value}
    placeholder={placeholder}
    rows={rows}
    onChange={(e) => onChange(e.target.value)}
  />
);

const AccordionSection = ({
  title,
  badge,
  children,
}: {
  title: string;
  badge?: number;
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="cv-form-accordion">
      <button
        type="button"
        className="cv-form-accordion-header"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="cv-form-accordion-title">{title}</span>
        <span className="cv-form-accordion-right">
          {badge !== undefined && <span className="cv-form-badge">{badge}</span>}
          <span className="cv-form-accordion-arrow">{open ? "▲" : "▼"}</span>
        </span>
      </button>
      {open && <div className="cv-form-accordion-body">{children}</div>}
    </div>
  );
};

const AddButton = ({ onClick, label }: { onClick: () => void; label: string }) => (
  <button type="button" className="cv-form-add-btn" onClick={onClick}>
    + {label}
  </button>
);

const RemoveButton = ({ onClick }: { onClick: () => void }) => (
  <button type="button" className="cv-form-remove-btn" onClick={onClick} title="Entfernen">
    ✕
  </button>
);

// ─── Main Form ────────────────────────────────────────────────────────────────
export function CVForm({ data, onChange }: CVFormProps) {
  const update = <K extends keyof CVData>(key: K, value: CVData[K]) =>
    onChange({ ...data, [key]: value });

  const updatePersonal = (field: keyof CVData["personal"], value: string) =>
    update("personal", { ...data.personal, [field]: value });

  const updateProfile = (field: keyof CVData["profile"], value: string) =>
    update("profile", { ...data.profile, [field]: value });

  // ── Work Experience helpers ───────────────────────────────────────────────
  const addWork = () =>
    update("workExperience", [
      ...data.workExperience,
      {
        id: uid(),
        company: "",
        location: "",
        from: "",
        to: "",
        functionTitle: "",
        responsibilities: [""],
        achievements: [""],
        keywords: [],
      } as WorkExperience,
    ]);

  const updateWork = (id: string, field: keyof WorkExperience, value: unknown) =>
    update(
      "workExperience",
      data.workExperience.map((w) => (w.id === id ? { ...w, [field]: value } : w))
    );

  const removeWork = (id: string) =>
    update("workExperience", data.workExperience.filter((w) => w.id !== id));

  // ── List-of-strings helper ────────────────────────────────────────────────
  const updateListField = (
    id: string,
    listKey: "workExperience",
    field: "responsibilities" | "achievements",
    index: number,
    value: string
  ) => {
    update(
      listKey,
      (data[listKey] as WorkExperience[]).map((w) =>
        w.id === id
          ? {
              ...w,
              [field]: (w[field] as string[]).map((v, i) => (i === index ? value : v)),
            }
          : w
      )
    );
  };

  const addListItem = (id: string, field: "responsibilities" | "achievements") =>
    update(
      "workExperience",
      data.workExperience.map((w) =>
        w.id === id ? { ...w, [field]: [...w[field], ""] } : w
      )
    );

  const removeListItem = (id: string, field: "responsibilities" | "achievements", index: number) =>
    update(
      "workExperience",
      data.workExperience.map((w) =>
        w.id === id
          ? { ...w, [field]: (w[field] as string[]).filter((_, i) => i !== index) }
          : w
      )
    );

  return (
    <div className="cv-form-root">
      <h2 className="cv-form-title">CV-Daten</h2>

      {/* ── Layout ─────────────────────────────────────────────────────────── */}
      <div className="cv-form-field">
        <FieldLabel>Layout-Vorlage</FieldLabel>
        <select
          className="cv-form-select"
          value={data.layout}
          onChange={(e) => update("layout", e.target.value as CVData["layout"])}
        >
          <option value="Professional">EliteCV Professional</option>
          <option value="modern-executive">EliteCV Executive</option>
          <option value="classic-ats">EliteCV ATS</option>
          <option value="compact-1page">Compact 1-Page</option>
          <option value="swiss-professional">EliteCV Swiss</option>
        </select>
      </div>

      {/* ── Persönliche Daten ──────────────────────────────────────────────── */}
      <AccordionSection title="Persönliche Daten" badge={undefined}>
        <div className="cv-form-grid2">
          <div className="cv-form-field">
            <FieldLabel>Vorname</FieldLabel>
            <Input value={data.personal.firstName} onChange={(v) => updatePersonal("firstName", v)} placeholder="Sandra" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>Nachname</FieldLabel>
            <Input value={data.personal.lastName} onChange={(v) => updatePersonal("lastName", v)} placeholder="Meier" />
          </div>
          <div className="cv-form-field cv-form-field--full">
            <FieldLabel>Gewünschte Rollenbezeichnung (CV-Header)</FieldLabel>
            <Input value={data.personal.targetTitle} onChange={(v) => updatePersonal("targetTitle", v)} placeholder="Head of Operations" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>Zielposition (für Keywords)</FieldLabel>
            <Input value={data.personal.targetPosition} onChange={(v) => updatePersonal("targetPosition", v)} placeholder="Head of Operations / COO" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>Branche</FieldLabel>
            <Input value={data.personal.targetIndustry} onChange={(v) => updatePersonal("targetIndustry", v)} placeholder="Finanzdienstleistungen" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>E-Mail</FieldLabel>
            <Input value={data.personal.email} onChange={(v) => updatePersonal("email", v)} type="email" placeholder="name@example.com" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>Telefon</FieldLabel>
            <Input value={data.personal.phone} onChange={(v) => updatePersonal("phone", v)} placeholder="+41 79 123 45 67" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>Standort</FieldLabel>
            <Input value={data.personal.location} onChange={(v) => updatePersonal("location", v)} placeholder="Zürich, Schweiz" />
          </div>
          <div className="cv-form-field">
            <FieldLabel>LinkedIn</FieldLabel>
            <Input value={data.personal.linkedin ?? ""} onChange={(v) => updatePersonal("linkedin", v)} placeholder="linkedin.com/in/name" />
          </div>
          <div className="cv-form-field cv-form-field--full">
  <FieldLabel>Foto hochladen</FieldLabel>

  <input
    type="file"
    accept="image/png,image/jpeg,image/webp"
    className="cv-form-input"
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (!file) return;

      const reader = new FileReader();

      reader.onload = () => {
        updatePersonal("photo", String(reader.result));
      };

      reader.readAsDataURL(file);
    }}
  />
</div>
        </div>
      </AccordionSection>

      {/* ── Profil ─────────────────────────────────────────────────────────── */}
      <AccordionSection title="Profiltext">
        <div className="cv-form-field">
          <FieldLabel>Rohtext (vom Kunden)</FieldLabel>
          <Textarea value={data.profile.rawText} onChange={(v) => updateProfile("rawText", v)} placeholder="Freitext über Motivation, Erfahrung, Arbeitsweise…" rows={4} />
        </div>
        <div className="cv-form-field">
          <FieldLabel>WHY – Warum / Motivation</FieldLabel>
          <Textarea value={data.profile.why ?? ""} onChange={(v) => updateProfile("why", v)} rows={2} placeholder="Was treibt mich an?" />
        </div>
        <div className="cv-form-field">
          <FieldLabel>HOW – Wie / Arbeitsweise</FieldLabel>
          <Textarea value={data.profile.how ?? ""} onChange={(v) => updateProfile("how", v)} rows={2} placeholder="Wie gehe ich vor?" />
        </div>
        <div className="cv-form-field">
          <FieldLabel>WHAT – Was / Kompetenzen</FieldLabel>
          <Textarea value={data.profile.what ?? ""} onChange={(v) => updateProfile("what", v)} rows={2} placeholder="Was bringe ich konkret mit?" />
        </div>
      </AccordionSection>

      {/* ── USP ────────────────────────────────────────────────────────────── */}
      <AccordionSection title="Alleinstellungsmerkmale (USP)" badge={data.usps.length}>
        {data.usps.map((usp, idx) => (
          <div key={usp.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">USP {idx + 1}</span>
              <RemoveButton onClick={() => update("usps", data.usps.filter((u) => u.id !== usp.id))} />
            </div>
            <div className="cv-form-field">
              <FieldLabel>Titel</FieldLabel>
              <Input value={usp.title} onChange={(v) => update("usps", data.usps.map((u) => u.id === usp.id ? { ...u, title: v } : u))} placeholder="Kostensenkung durch Prozessoptimierung" />
            </div>
            <div className="cv-form-field">
              <FieldLabel>Beschreibung</FieldLabel>
              <Textarea value={usp.description} onChange={(v) => update("usps", data.usps.map((u) => u.id === usp.id ? { ...u, description: v } : u))} rows={2} />
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("usps", [...data.usps, { id: uid(), title: "", description: "" }])} label="USP hinzufügen" />
      </AccordionSection>

      {/* ── Stärken ────────────────────────────────────────────────────────── */}
      <AccordionSection title="Stärken" badge={data.strengths.length}>
        {data.strengths.map((s, idx) => (
          <div key={s.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">Stärke {idx + 1}</span>
              <RemoveButton onClick={() => update("strengths", data.strengths.filter((x) => x.id !== s.id))} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Bezeichnung</FieldLabel>
                <Input value={s.label} onChange={(v) => update("strengths", data.strengths.map((x) => x.id === s.id ? { ...x, label: v } : x))} placeholder="Führungsstärke" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Kurzbeschreibung</FieldLabel>
                <Input value={s.description ?? ""} onChange={(v) => update("strengths", data.strengths.map((x) => x.id === s.id ? { ...x, description: v } : x))} placeholder="Teams motivieren und ausrichten" />
              </div>
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("strengths", [...data.strengths, { id: uid(), label: "", description: "" }])} label="Stärke hinzufügen" />
      </AccordionSection>

      {/* ── Erfolge ────────────────────────────────────────────────────────── */}
      <AccordionSection title="Erfolge" badge={data.achievements.length}>
        {data.achievements.map((a, idx) => (
          <div key={a.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">Erfolg {idx + 1}</span>
              <RemoveButton onClick={() => update("achievements", data.achievements.filter((x) => x.id !== a.id))} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Kennzahl / Metrik</FieldLabel>
                <Input value={a.metric ?? ""} onChange={(v) => update("achievements", data.achievements.map((x) => x.id === a.id ? { ...x, metric: v } : x))} placeholder="–30% Kosten" />
              </div>
              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Beschreibung</FieldLabel>
                <Input value={a.text} onChange={(v) => update("achievements", data.achievements.map((x) => x.id === a.id ? { ...x, text: v } : x))} placeholder="Operative Kosten um 30% reduziert durch Lean" />
              </div>
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("achievements", [...data.achievements, { id: uid(), text: "", metric: "" }])} label="Erfolg hinzufügen" />
      </AccordionSection>

      {/* ── Berufserfahrung ─────────────────────────────────────────────────── */}
      <AccordionSection title="Berufserfahrung" badge={data.workExperience.length}>
        {data.workExperience.map((job, idx) => (
          <div key={job.id} className="cv-form-repeat-item cv-form-repeat-item--major">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">Position {idx + 1}{job.company ? ` – ${job.company}` : ""}</span>
              <RemoveButton onClick={() => removeWork(job.id)} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Unternehmen</FieldLabel>
                <Input value={job.company} onChange={(v) => updateWork(job.id, "company", v)} placeholder="Swiss Finance AG" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Ort</FieldLabel>
                <Input value={job.location} onChange={(v) => updateWork(job.id, "location", v)} placeholder="Zürich" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Von</FieldLabel>
                <Input value={job.from} onChange={(v) => updateWork(job.id, "from", v)} placeholder="03.2019" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Bis</FieldLabel>
                <Input value={job.to} onChange={(v) => updateWork(job.id, "to", v)} placeholder="heute" />
              </div>
              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Funktionsbezeichnung</FieldLabel>
                <Input value={job.functionTitle} onChange={(v) => updateWork(job.id, "functionTitle", v)} placeholder="Head of Operations" />
              </div>
            </div>

            <div className="cv-form-field">
              <FieldLabel>Aufgaben / Verantwortlichkeiten</FieldLabel>
              {job.responsibilities.map((r, i) => (
                <div key={i} className="cv-form-list-row">
                  <Input value={r} onChange={(v) => updateListField(job.id, "workExperience", "responsibilities", i, v)} placeholder="Aufgabe beschreiben…" />
                  <RemoveButton onClick={() => removeListItem(job.id, "responsibilities", i)} />
                </div>
              ))}
              <AddButton onClick={() => addListItem(job.id, "responsibilities")} label="Aufgabe hinzufügen" />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Erfolge</FieldLabel>
              {job.achievements.map((a, i) => (
                <div key={i} className="cv-form-list-row">
                  <Input value={a} onChange={(v) => updateListField(job.id, "workExperience", "achievements", i, v)} placeholder="Messbarer Erfolg…" />
                  <RemoveButton onClick={() => removeListItem(job.id, "achievements", i)} />
                </div>
              ))}
              <AddButton onClick={() => addListItem(job.id, "achievements")} label="Erfolg hinzufügen" />
            </div>
          </div>
        ))}
        <AddButton onClick={addWork} label="Position hinzufügen" />
      </AccordionSection>
      <AccordionSection title="Projekte" badge={data.projects.length}>
  {data.projects.map((project, idx) => (
    <div key={project.id} className="cv-form-repeat-item">

      <div className="cv-form-repeat-header">
        <span className="cv-form-repeat-index">
          Projekt {idx + 1}
        </span>

        <RemoveButton
          onClick={() =>
            update(
              "projects",
              data.projects.filter((p) => p.id !== project.id)
            )
          }
        />
      </div>

      <div className="cv-form-field">
        <FieldLabel>Projekttitel</FieldLabel>
        <Input
          value={project.title}
          onChange={(v) =>
            update(
              "projects",
              data.projects.map((p) =>
                p.id === project.id ? { ...p, title: v } : p
              )
            )
          }
          placeholder="ERP-Migration Selectline → Infor COM"
        />
      </div>

      <div className="cv-form-field">
        <FieldLabel>Rolle</FieldLabel>
        <Input
          value={project.role ?? ""}
          onChange={(v) =>
            update(
              "projects",
              data.projects.map((p) =>
                p.id === project.id ? { ...p, role: v } : p
              )
            )
          }
          placeholder="Projektleitung"
        />
      </div>

      <div className="cv-form-field">
        <FieldLabel>Beschreibung</FieldLabel>
        <Textarea
          value={project.description ?? ""}
          onChange={(v) =>
            update(
              "projects",
              data.projects.map((p) =>
                p.id === project.id
                  ? { ...p, description: v }
                  : p
              )
            )
          }
          rows={3}
        />
      </div>

      <div className="cv-form-field">
        <FieldLabel>Ergebnisse (eine Zeile pro Ergebnis)</FieldLabel>

        {(project.results ?? []).map((result, i) => (
          <div key={i} className="cv-form-list-row">
            <Input
              value={result}
              onChange={(v) =>
                update(
                  "projects",
                  data.projects.map((p) =>
                    p.id === project.id
                      ? {
                          ...p,
                          results: p.results.map((r, idx) =>
                            idx === i ? v : r
                          ),
                        }
                      : p
                  )
                )
              }
            />

            <RemoveButton
              onClick={() =>
                update(
                  "projects",
                  data.projects.map((p) =>
                    p.id === project.id
                      ? {
                          ...p,
                          results: p.results.filter(
                            (_, idx) => idx !== i
                          ),
                        }
                      : p
                  )
                )
              }
            />
          </div>
        ))}

        <AddButton
          onClick={() =>
            update(
              "projects",
              data.projects.map((p) =>
                p.id === project.id
                  ? {
                      ...p,
                      results: [...p.results, ""],
                    }
                  : p
              )
            )
          }
          label="Ergebnis hinzufügen"
        />
      </div>
    </div>
  ))}

  <AddButton
    onClick={() =>
      update("projects", [
        ...data.projects,
        {
          id: uid(),
          title: "",
          role: "",
          description: "",
          results: [""],
        },
      ])
    }
    label="Projekt hinzufügen"
  />
</AccordionSection>

      {/* ── Skills ─────────────────────────────────────────────────────────── */}
      <AccordionSection title="Fachkenntnisse (Skill-Gruppen)">
        {data.skillGroups.map((sg, idx) => (
          <div key={sg.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">Gruppe {idx + 1}</span>
              <RemoveButton onClick={() => update("skillGroups", data.skillGroups.filter((x) => x.id !== sg.id))} />
            </div>
            <div className="cv-form-field">
              <FieldLabel>Kategorie</FieldLabel>
              <Input value={sg.category} onChange={(v) => update("skillGroups", data.skillGroups.map((x) => x.id === sg.id ? { ...x, category: v } : x))} placeholder="Prozessoptimierung & Qualität" />
            </div>
            <div className="cv-form-field">
              <FieldLabel>Skills (kommagetrennt)</FieldLabel>
              <Input value={sg.skills.join(", ")} onChange={(v) => update("skillGroups", data.skillGroups.map((x) => x.id === sg.id ? { ...x, skills: v.split(",").map((s) => s.trim()).filter(Boolean) } : x))} placeholder="Lean, Six Sigma, BPMN…" />
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("skillGroups", [...data.skillGroups, { id: uid(), category: "", skills: [] }])} label="Gruppe hinzufügen" />
      </AccordionSection>

      {/* ── Hard Skills ────────────────────────────────────────────────────── */}
      <AccordionSection title="Hard Skills">
        <div className="cv-form-field">
          <FieldLabel>Hard Skills (kommagetrennt)</FieldLabel>
          <Textarea value={data.hardSkills.join(", ")} onChange={(v) => update("hardSkills", v.split(",").map((s) => s.trim()).filter(Boolean))} placeholder="Lean Management, Six Sigma, PMP…" rows={2} />
        </div>
      </AccordionSection>

      {/* ── Soft Skills ────────────────────────────────────────────────────── */}
      <AccordionSection title="Soft Skills">
        <div className="cv-form-field">
          <FieldLabel>Soft Skills (kommagetrennt)</FieldLabel>
          <Textarea value={data.softSkills.join(", ")} onChange={(v) => update("softSkills", v.split(",").map((s) => s.trim()).filter(Boolean))} placeholder="Führungsstärke, Kommunikation…" rows={2} />
        </div>
      </AccordionSection>

      {/* ── IT Skills ──────────────────────────────────────────────────────── */}
      <AccordionSection title="IT-Kenntnisse" badge={data.itSkills.length}>
        {data.itSkills.map((it, idx) => (
          <div key={it.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">{it.name || `Tool ${idx + 1}`}</span>
              <RemoveButton onClick={() => update("itSkills", data.itSkills.filter((x) => x.id !== it.id))} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Tool / Software</FieldLabel>
                <Input value={it.name} onChange={(v) => update("itSkills", data.itSkills.map((x) => x.id === it.id ? { ...x, name: v } : x))} placeholder="Microsoft Office 365" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Niveau</FieldLabel>
                <select className="cv-form-select" value={it.level ?? ""} onChange={(e) => update("itSkills", data.itSkills.map((x) => x.id === it.id ? { ...x, level: e.target.value as ITSkill["level"] } : x))}>
                  <option value="">– auswählen –</option>
                  <option>Grundkenntnisse</option>
                  <option>Gut</option>
                  <option>Sehr gut</option>
                  <option>Expertenwissen</option>
                </select>
              </div>
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("itSkills", [...data.itSkills, { id: uid(), name: "", level: "Gut" }])} label="Tool hinzufügen" />
      </AccordionSection>

      {/* ── Sprachen ───────────────────────────────────────────────────────── */}
      <AccordionSection title="Sprachen" badge={data.languages.length}>
        {data.languages.map((l, idx) => (
          <div key={l.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">{l.language || `Sprache ${idx + 1}`}</span>
              <RemoveButton onClick={() => update("languages", data.languages.filter((x) => x.id !== l.id))} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Sprache</FieldLabel>
                <Input value={l.language} onChange={(v) => update("languages", data.languages.map((x) => x.id === l.id ? { ...x, language: v } : x))} placeholder="Deutsch" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Niveau</FieldLabel>
                <Input value={l.level} onChange={(v) => update("languages", data.languages.map((x) => x.id === l.id ? { ...x, level: v } : x))} placeholder="Muttersprache / C1 / B2" />
              </div>
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("languages", [...data.languages, { id: uid(), language: "", level: "" }])} label="Sprache hinzufügen" />
      </AccordionSection>

      {/* ── Ausbildung ─────────────────────────────────────────────────────── */}
      <AccordionSection title="Ausbildung" badge={data.education.length}>
        {data.education.map((edu, idx) => (
          <div key={edu.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">{edu.institution || `Ausbildung ${idx + 1}`}</span>
              <RemoveButton onClick={() => update("education", data.education.filter((x) => x.id !== edu.id))} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Institution</FieldLabel>
                <Input value={edu.institution} onChange={(v) => update("education", data.education.map((x) => x.id === edu.id ? { ...x, institution: v } : x))} placeholder="Universität St. Gallen" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Abschluss</FieldLabel>
                <Input value={edu.degree} onChange={(v) => update("education", data.education.map((x) => x.id === edu.id ? { ...x, degree: v } : x))} placeholder="Master of Science" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Studienrichtung</FieldLabel>
                <Input value={edu.field ?? ""} onChange={(v) => update("education", data.education.map((x) => x.id === edu.id ? { ...x, field: v } : x))} placeholder="Business Administration" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Von</FieldLabel>
                <Input value={edu.from} onChange={(v) => update("education", data.education.map((x) => x.id === edu.id ? { ...x, from: v } : x))} placeholder="2007" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Bis</FieldLabel>
                <Input value={edu.to} onChange={(v) => update("education", data.education.map((x) => x.id === edu.id ? { ...x, to: v } : x))} placeholder="2011" />
              </div>
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("education", [...data.education, { id: uid(), institution: "", degree: "", field: "", from: "", to: "", location: "" }])} label="Ausbildung hinzufügen" />
      </AccordionSection>

      {/* ── Zertifikate ────────────────────────────────────────────────────── */}
      <AccordionSection title="Weiterbildungen & Zertifikate" badge={data.certificates.length}>
        {data.certificates.map((c, idx) => (
          <div key={c.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">{c.title || `Zertifikat ${idx + 1}`}</span>
              <RemoveButton onClick={() => update("certificates", data.certificates.filter((x) => x.id !== c.id))} />
            </div>
            <div className="cv-form-grid2">
              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Titel</FieldLabel>
                <Input value={c.title} onChange={(v) => update("certificates", data.certificates.map((x) => x.id === c.id ? { ...x, title: v } : x))} placeholder="Project Management Professional (PMP)" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Aussteller</FieldLabel>
                <Input value={c.issuer ?? ""} onChange={(v) => update("certificates", data.certificates.map((x) => x.id === c.id ? { ...x, issuer: v } : x))} placeholder="PMI" />
              </div>
              <div className="cv-form-field">
                <FieldLabel>Jahr</FieldLabel>
                <Input value={c.year ?? ""} onChange={(v) => update("certificates", data.certificates.map((x) => x.id === c.id ? { ...x, year: v } : x))} placeholder="2023" />
              </div>
            </div>
          </div>
        ))}
        <AddButton onClick={() => update("certificates", [...data.certificates, { id: uid(), title: "", issuer: "", year: "" }])} label="Zertifikat hinzufügen" />
      </AccordionSection>
    </div>
  );
}
