"use client";

import React, { useState } from "react";
import type { CVData, WorkExperience, Education, Certificate, ITSkill, Language, Strength, Achievement, USP, SkillGroup } from "../../types/cv";

interface CVFormProps {
  data: CVData;
  onChange: (data: CVData) => void;
  language?: "de" | "en";
}
// ─── Small helpers ────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2, 9);
const moveItem = <T,>(
  items: T[],
  index: number,
  direction: "up" | "down"
): T[] => {
  const targetIndex = direction === "up" ? index - 1 : index + 1;

  if (targetIndex < 0 || targetIndex >= items.length) {
    return items;
  }

  const updatedItems = [...items];

  [updatedItems[index], updatedItems[targetIndex]] = [
    updatedItems[targetIndex],
    updatedItems[index],
  ];

  return updatedItems;
};

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
        onClick={() => setOpen((currentOpen) => !currentOpen)}
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
const MoveButtons = ({
  index,
  length,
  onMove,
}: {
  index: number;
  length: number;
  onMove: (direction: "up" | "down") => void;
}) => (
  <div className="cv-form-move-actions">
    <button
      type="button"
      className="cv-form-move-btn"
      onClick={() => onMove("up")}
      disabled={index === 0}
      title="Nach oben verschieben"
      aria-label="Nach oben verschieben"
    >
      ↑
    </button>

    <button
      type="button"
      className="cv-form-move-btn"
      onClick={() => onMove("down")}
      disabled={index === length - 1}
      title="Nach unten verschieben"
      aria-label="Nach unten verschieben"
    >
      ↓
    </button>
  </div>
);

// ─── Main Form ────────────────────────────────────────────────────────────────
export function CVForm({
  data,
  onChange,
  language = "de",
}: CVFormProps) {
  const [isGeneratingProfile, setIsGeneratingProfile] = useState(false);
  const [profileAiMessage, setProfileAiMessage] = useState("");
  const labels = {
    de: {
      strengths: "Stärken",
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
      careerHighlights: "Karriere-Highlights",
      expertise: "Fachkenntnisse",
      successes: "Erfolge",
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
      careerHighlights: "Career Highlights",
      expertise: "Expertise",
      successes: "Achievements",
    },
  };

  const t = labels[language];
  const update = <K extends keyof CVData>(key: K, value: CVData[K]) =>
    onChange({ ...data, [key]: value });

  const updatePersonal = (field: keyof CVData["personal"], value: string) =>
    update("personal", { ...data.personal, [field]: value });

  const updateProfile = (field: keyof CVData["profile"], value: string) =>
    update("profile", { ...data.profile, [field]: value });
  const handleGenerateProfile = async () => {
    try {
      setIsGeneratingProfile(true);
      setProfileAiMessage("");

      const response = await fetch("/api/generate-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language,
          personal: data.personal,
          workExperience: data.workExperience,
          strengths: data.strengths,
          achievements: data.achievements,
          skillGroups: data.skillGroups,
          hardSkills: data.hardSkills,
          itSkills: data.itSkills,
          education: data.education,
          certificates: data.certificates,
          languages: data.languages,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Profiltext konnte nicht erstellt werden."
        );
      }

      const profileText = String(result.profileText || "").trim();

      if (!profileText) {
        throw new Error("Die KI hat keinen Profiltext zurückgegeben.");
      }

      updateProfile("rawText", profileText);
      setProfileAiMessage("Profiltext erfolgreich erstellt.");
    } catch (error) {
      console.error("Profiltext-Generierung fehlgeschlagen:", error);

      setProfileAiMessage(
        error instanceof Error
          ? error.message
          : "Profiltext konnte nicht erstellt werden."
      );
    } finally {
      setIsGeneratingProfile(false);
    }
  };

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
          onChange={(e) =>
            update("layout", e.target.value as CVData["layout"])
          }
        >
          <option value="professional">EliteCV Professional</option>
          <option value="executive">EliteCV Executive</option>
        </select>
      </div>
      {/* ── Persönliche Daten ──────────────────────────────────────────────── */}
      <div className="cv-form-settings-box">

        <div className="cv-form-field">
          <FieldLabel>Layout Template</FieldLabel>

          <select
            className="cv-form-select"
            value={data.layout}
            onChange={(e) =>
              update("layout", e.target.value as CVData["layout"])
            }
          >
            <option value="professional">EliteCV Professional</option>
            <option value="executive">EliteCV Executive</option>
          </select>
        </div>

        <div className="cv-form-field">
          <FieldLabel>CV Length</FieldLabel>

          <select
            className="cv-form-select"
            value={data.firstPageExperienceCount ?? 3}
            onChange={(e) =>
              update(
                "firstPageExperienceCount",
                Number(e.target.value) as 2 | 3 | 4
              )
            }
          >
            <option value={2}>Compact</option>
            <option value={3}>Balanced</option>
            <option value={4}>Detailed</option>
          </select>

          <small className="cv-form-field-hint">
            Choose how much professional experience should be highlighted in your CV.
          </small>
        </div>

      </div>

      {/* ── Persönliche Daten ──────────────────────────────────────────────── */}

      <AccordionSection title="Persönliche Daten" badge={undefined}>
        <div className="cv-form-grid2">
          <div className="cv-form-field">
            <FieldLabel>Vorname</FieldLabel>
            <Input
              value={data.personal.firstName}
              onChange={(v) => updatePersonal("firstName", v)}
              placeholder="Sandra"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Nachname</FieldLabel>
            <Input
              value={data.personal.lastName}
              onChange={(v) => updatePersonal("lastName", v)}
              placeholder="Meier"
            />
          </div>

          <div className="cv-form-field cv-form-field--full">
            <FieldLabel>Gewünschte Rollenbezeichnung (CV-Header)</FieldLabel>
            <Input
              value={data.personal.targetTitle
                .replace(/\s*\/\s*/g, " | ")
                .replace(/\|\s*\n/g, "\n")
                .replace(/\s*\|\s*$/g, "")}
              onChange={(v) => updatePersonal("targetTitle", v)}
              placeholder="Head of Operations"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Zielposition (für Keywords)</FieldLabel>
            <Input
              value={data.personal.targetPosition}
              onChange={(v) => updatePersonal("targetPosition", v)}
              placeholder="Head of Operations / COO"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Branche</FieldLabel>
            <Input
              value={data.personal.targetIndustry}
              onChange={(v) => updatePersonal("targetIndustry", v)}
              placeholder="Finanzdienstleistungen"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>E-Mail</FieldLabel>
            <Input
              value={data.personal.email}
              onChange={(v) => updatePersonal("email", v)}
              type="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Telefon</FieldLabel>
            <Input
              value={data.personal.phone}
              onChange={(v) => updatePersonal("phone", v)}
              placeholder="+41 79 123 45 67"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Standort</FieldLabel>
            <Input
              value={data.personal.location}
              onChange={(v) => updatePersonal("location", v)}
              placeholder="Zürich, Schweiz"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>LinkedIn</FieldLabel>
            <Input
              value={data.personal.linkedin ?? ""}
              onChange={(v) => updatePersonal("linkedin", v)}
              placeholder="linkedin.com/in/name"
            />
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

            {data.personal.photo && (
              <>
                <img
                  src={data.personal.photo}
                  alt="Vorschau"
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    marginTop: "12px",
                    display: "block",
                  }}
                />

                <button
                  type="button"
                  className="cv-form-remove-photo"
                  onClick={() => updatePersonal("photo", "")}
                >
                  Foto entfernen
                </button>
              </>
            )}
          </div>
        </div>
      </AccordionSection>

      {/* ── Profil ─────────────────────────────────────────────────────────── */}
      <AccordionSection title="Profiltext">
        <div className="cv-form-field">
          <FieldLabel>Rohtext (vom Kunden)</FieldLabel>

          <Textarea
            value={data.profile.rawText}
            onChange={(v) => updateProfile("rawText", v)}
            placeholder="Freitext über Motivation, Erfahrung, Arbeitsweise…"
            rows={4}
          />

          <button
            type="button"
            className="cv-form-ai-btn cv-form-ai-btn--inside"
            onClick={handleGenerateProfile}
            disabled={isGeneratingProfile}
          >
            {isGeneratingProfile
              ? "⏳ Profiltext wird erstellt..."
              : "✨ KI-Profiltext generieren"}
          </button>

          {profileAiMessage && (
            <p className="cv-form-ai-message">
              {profileAiMessage}
            </p>
          )}
        </div>

        <div className="cv-form-field">
          <FieldLabel>WHY – Warum / Motivation</FieldLabel>
          <Textarea
            value={data.profile.why ?? ""}
            onChange={(v) => updateProfile("why", v)}
            rows={2}
            placeholder="Was treibt mich an?"
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>HOW – Wie / Arbeitsweise</FieldLabel>
          <Textarea
            value={data.profile.how ?? ""}
            onChange={(v) => updateProfile("how", v)}
            rows={2}
            placeholder="Wie gehe ich vor?"
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>WHAT – Was / Kompetenzen</FieldLabel>
          <Textarea
            value={data.profile.what ?? ""}
            onChange={(v) => updateProfile("what", v)}
            rows={2}
            placeholder="Was bringe ich konkret mit?"
          />
        </div>
      </AccordionSection>

      {/* ── USP ────────────────────────────────────────────────────────────── */}
      <AccordionSection title="Alleinstellungsmerkmale (USP)" badge={data.usps.length}>
        {data.usps.map((usp, idx) => (
          <div key={usp.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                USP {idx + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={idx}
                  length={data.usps.length}
                  onMove={(direction) =>
                    update(
                      "usps",
                      moveItem(data.usps, idx, direction)
                    )
                  }
                />

                <RemoveButton
                  onClick={() =>
                    update(
                      "usps",
                      data.usps.filter((u) => u.id !== usp.id)
                    )
                  }
                />
              </div>
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
        <button
          type="button"
          className="cv-form-ai-btn cv-form-ai-btn--inside"
          onClick={() => {
            update("strengths", [
              {
                id: uid(),
                label: "Analytisches Denken",
                description: "Komplexe Zusammenhänge erkennen und strukturieren",
              },
              {
                id: uid(),
                label: "Projektmanagement",
                description: "Projekte zielgerichtet planen und umsetzen",
              },
              {
                id: uid(),
                label: "Prozessoptimierung",
                description: "Abläufe analysieren und nachhaltig verbessern",
              },
              {
                id: uid(),
                label: "Führungskompetenz",
                description: "Teams motivieren und koordinieren",
              },
              {
                id: uid(),
                label: "Kommunikationsstärke",
                description: "Adressatengerecht und lösungsorientiert kommunizieren",
              },
              {
                id: uid(),
                label: "Umsetzungsstärke",
                description: "Ideen effizient in Ergebnisse überführen",
              },
            ]);
          }}
        >
          ✨ Stärken generieren
        </button>

        {data.strengths.map((s, idx) => (
          <div key={s.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Stärke {idx + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={idx}
                  length={data.strengths.length}
                  onMove={(direction) =>
                    update(
                      "strengths",
                      moveItem(data.strengths, idx, direction)
                    )
                  }
                />

                <RemoveButton
                  onClick={() =>
                    update(
                      "strengths",
                      data.strengths.filter((x) => x.id !== s.id)
                    )
                  }
                />
              </div>
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Bezeichnung</FieldLabel>
                <Input
                  value={s.label}
                  onChange={(v) =>
                    update(
                      "strengths",
                      data.strengths.map((x) =>
                        x.id === s.id ? { ...x, label: v } : x
                      )
                    )
                  }
                  placeholder="Führungsstärke"
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Kurzbeschreibung</FieldLabel>
                <Input
                  value={s.description ?? ""}
                  onChange={(v) =>
                    update(
                      "strengths",
                      data.strengths.map((x) =>
                        x.id === s.id
                          ? { ...x, description: v }
                          : x
                      )
                    )
                  }
                  placeholder="Teams motivieren und ausrichten"
                />
              </div>
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("strengths", [
              ...data.strengths,
              {
                id: uid(),
                label: "",
                description: "",
              },
            ])
          }
          label="Stärke hinzufügen"
        />
      </AccordionSection>
      {/* ── Erfolge ────────────────────────────────────────────────────────── */}
      <AccordionSection title="Erfolge" badge={data.achievements.length}>
        <button
          type="button"
          className="cv-form-ai-btn cv-form-ai-btn--inside"
          onClick={() => {
            update("achievements", [
              {
                id: uid(),
                metric: "-15%",
                text: "Durchlaufzeiten durch Prozessoptimierung reduziert",
              },
              {
                id: uid(),
                metric: "+10%",
                text: "Umsatzsteigerung durch effizientere Abläufe erzielt",
              },
              {
                id: uid(),
                metric: "-20%",
                text: "Reklamationsbearbeitungszeit nachhaltig verkürzt",
              },
              {
                id: uid(),
                metric: "6000+",
                text: "Stammdaten erfolgreich migriert und harmonisiert",
              },
            ]);
          }}
        >
          ✨ Highlights generieren
        </button>

        {data.achievements.map((a, idx) => (
          <div key={a.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Erfolg {idx + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={idx}
                  length={data.achievements.length}
                  onMove={(direction) =>
                    update(
                      "achievements",
                      moveItem(data.achievements, idx, direction)
                    )
                  }
                />

                <RemoveButton
                  onClick={() =>
                    update(
                      "achievements",
                      data.achievements.filter((x) => x.id !== a.id)
                    )
                  }
                />
              </div>
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Projekt / Überschrift</FieldLabel>

                <Input
                  value={a.metric ?? ""}
                  onChange={(v) =>
                    update(
                      "achievements",
                      data.achievements.map((x) =>
                        x.id === a.id ? { ...x, metric: v } : x
                      )
                    )
                  }
                  placeholder="Innosuisse"
                />
              </div>

              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Beschreibung</FieldLabel>

                <Input
                  value={a.text}
                  onChange={(v) =>
                    update(
                      "achievements",
                      data.achievements.map((x) =>
                        x.id === a.id ? { ...x, text: v } : x
                      )
                    )
                  }
                  placeholder="Led business analysis for..."
                />
              </div>
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("achievements", [
              ...data.achievements,
              {
                id: uid(),
                text: "",
                metric: "",
              },
            ])
          }
          label="Erfolg hinzufügen"
        />
      </AccordionSection>

      {/* ── Berufserfahrung ─────────────────────────────────────────────────── */}
      <AccordionSection title={t.experience} badge={data.workExperience.length}>
        {data.workExperience.map((job, idx) => (
          <div
            key={job.id}
            className="cv-form-repeat-item cv-form-repeat-item--major"
          >
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Position {idx + 1}
                {job.company ? ` – ${job.company}` : ""}
              </span>

              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  Position {idx + 1}
                  {job.company ? ` – ${job.company}` : ""}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={idx}
                    length={data.workExperience.length}
                    onMove={(direction) =>
                      update(
                        "workExperience",
                        moveItem(data.workExperience, idx, direction)
                      )
                    }
                  />

                  <RemoveButton onClick={() => removeWork(job.id)} />
                </div>
              </div>
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Unternehmen</FieldLabel>
                <Input
                  value={job.company}
                  onChange={(v) => updateWork(job.id, "company", v)}
                  placeholder="Swiss Finance AG"
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Ort</FieldLabel>
                <Input
                  value={job.location}
                  onChange={(v) => updateWork(job.id, "location", v)}
                  placeholder="Zürich"
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Von</FieldLabel>
                <Input
                  value={job.from}
                  onChange={(v) => updateWork(job.id, "from", v)}
                  placeholder="03.2019"
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Bis</FieldLabel>
                <Input
                  value={job.to}
                  onChange={(v) => updateWork(job.id, "to", v)}
                  placeholder="heute"
                />
              </div>

              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Funktionsbezeichnung</FieldLabel>
                <Input
                  value={job.functionTitle}
                  onChange={(v) => updateWork(job.id, "functionTitle", v)}
                  placeholder="Head of Operations"
                />
              </div>
            </div>

            <button
              type="button"
              className="cv-form-ai-btn cv-form-ai-btn--inside"
              onClick={() => {
                const title = job.functionTitle?.toLowerCase() ?? "";

                let responsibilities: string[] = [];
                let achievements: string[] = [];

                if (title.includes("projekt")) {
                  responsibilities = [
                    "Leitung und Steuerung anspruchsvoller Projekte von der Planung bis zur Umsetzung",
                    "Koordination interner und externer Stakeholder",
                    "Verantwortung für Termine, Qualität und Budget",
                    "Sicherstellung einer erfolgreichen Projektabwicklung",
                  ];

                  achievements = [
                    "Projekte termingerecht und innerhalb des Budgets umgesetzt",
                    "Effizienzsteigerungen durch Prozessoptimierungen realisiert",
                    "Zusammenarbeit zwischen Fachbereichen nachhaltig verbessert",
                  ];
                } else if (title.includes("manager")) {
                  responsibilities = [
                    "Führung und Weiterentwicklung von Teams und Prozessen",
                    "Verantwortung für operative und strategische Zielerreichung",
                    "Steuerung von Budgets und Ressourcen",
                    "Umsetzung von Veränderungs- und Optimierungsinitiativen",
                  ];

                  achievements = [
                    "Operative Abläufe nachhaltig optimiert",
                    "Leistungskennzahlen verbessert",
                    "Mitarbeiterentwicklung erfolgreich gefördert",
                  ];
                } else {
                  responsibilities = [
                    "Verantwortung für operative Aufgaben und Projekte",
                    "Optimierung bestehender Prozesse",
                    "Zusammenarbeit mit internen und externen Stakeholdern",
                    "Sicherstellung hoher Qualitätsstandards",
                  ];

                  achievements = [
                    "Effizienzsteigerungen umgesetzt",
                    "Nachhaltige Verbesserungen erzielt",
                    "Wertvolle Beiträge zur Unternehmensentwicklung geleistet",
                  ];
                }

                updateWork(job.id, "responsibilities", responsibilities);
                updateWork(job.id, "achievements", achievements);
              }}
            >
              ✨ Berufserfahrung generieren
            </button>

            <div className="cv-form-field">
              <FieldLabel>Aufgaben / Verantwortlichkeiten</FieldLabel>

              {job.responsibilities.map((r, i) => (
                <div key={i} className="cv-form-list-row">
                  <Input
                    value={r}
                    onChange={(v) =>
                      updateListField(
                        job.id,
                        "workExperience",
                        "responsibilities",
                        i,
                        v
                      )
                    }
                    placeholder="Aufgabe beschreiben…"
                  />

                  <MoveButtons
                    index={i}
                    length={job.responsibilities.length}
                    onMove={(direction) =>
                      updateWork(
                        job.id,
                        "responsibilities",
                        moveItem(
                          job.responsibilities,
                          i,
                          direction
                        )
                      )
                    }
                  />

                  <RemoveButton
                    onClick={() =>
                      removeListItem(
                        job.id,
                        "responsibilities",
                        i
                      )
                    }
                  />
                </div>
              ))}

              <AddButton
                onClick={() => addListItem(job.id, "responsibilities")}
                label="Aufgabe hinzufügen"
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Erfolge</FieldLabel>

              {job.achievements.map((a, i) => (
                <div key={i} className="cv-form-list-row">
                  <Input
                    value={a}
                    onChange={(v) =>
                      updateListField(
                        job.id,
                        "workExperience",
                        "achievements",
                        i,
                        v
                      )
                    }
                    placeholder="Messbarer Erfolg…"
                  />

                  <MoveButtons
                    index={i}
                    length={job.achievements.length}
                    onMove={(direction) =>
                      updateWork(
                        job.id,
                        "achievements",
                        moveItem(
                          job.achievements,
                          i,
                          direction
                        )
                      )
                    }
                  />

                  <RemoveButton
                    onClick={() =>
                      removeListItem(
                        job.id,
                        "achievements",
                        i
                      )
                    }
                  />
                </div>
              ))}

              <AddButton
                onClick={() => addListItem(job.id, "achievements")}
                label="Erfolg hinzufügen"
              />
            </div>
          </div>
        ))}

        <AddButton onClick={addWork} label="Position hinzufügen" />
      </AccordionSection>

      {/* ── Projekte ───────────────────────────────────────────────────────── */}
      <AccordionSection title="Projekte" badge={data.projects.length}>
        {data.projects.map((project, idx) => (
          <div key={project.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Projekt {idx + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={idx}
                  length={data.projects.length}
                  onMove={(direction) =>
                    update(
                      "projects",
                      moveItem(data.projects, idx, direction)
                    )
                  }
                />

                <RemoveButton
                  onClick={() =>
                    update(
                      "projects",
                      data.projects.filter((p) => p.id !== project.id)
                    )
                  }
                />
              </div>
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
              <FieldLabel>Ergebnisse</FieldLabel>

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
                              results: p.results.map((r, resultIndex) =>
                                resultIndex === i ? v : r
                              ),
                            }
                            : p
                        )
                      )
                    }
                    placeholder="Ergebnis beschreiben…"
                  />

                  <MoveButtons
                    index={i}
                    length={project.results.length}
                    onMove={(direction) =>
                      update(
                        "projects",
                        data.projects.map((p) =>
                          p.id === project.id
                            ? {
                              ...p,
                              results: moveItem(
                                p.results,
                                i,
                                direction
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
                                (_, resultIndex) => resultIndex !== i
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
              <span className="cv-form-repeat-index">
                Gruppe {idx + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={idx}
                  length={data.skillGroups.length}
                  onMove={(direction) =>
                    update(
                      "skillGroups",
                      moveItem(data.skillGroups, idx, direction)
                    )
                  }
                />

                <RemoveButton
                  onClick={() =>
                    update(
                      "skillGroups",
                      data.skillGroups.filter((x) => x.id !== sg.id)
                    )
                  }
                />
              </div>
            </div>
            <div className="cv-form-field">
              <FieldLabel>Kategorie</FieldLabel>
              <Input value={sg.category} onChange={(v) => update("skillGroups", data.skillGroups.map((x) => x.id === sg.id ? { ...x, category: v } : x))} placeholder="Prozessoptimierung & Qualität" />
            </div>
            <div className="cv-form-field">
              <FieldLabel>Skills (kommagetrennt)</FieldLabel>
              <Input value={sg.skills.join(", ")} onChange={(v) => update("skillGroups", data.skillGroups.map((x) => x.id === sg.id ? { ...x, skills: v.split(",").map((s) => s.trim()).filter(Boolean) } : x))} placeholder="Lean, Six Sigma, BPMN…" />
            </div>
          </div >
        ))
        }
        <AddButton onClick={() => update("skillGroups", [...data.skillGroups, { id: uid(), category: "", skills: [] }])} label="Gruppe hinzufügen" />
      </AccordionSection >

      {/* ── Hard Skills ────────────────────────────────────────────────────── */}
      < AccordionSection title="Hard Skills" >
        <div className="cv-form-field">
          <FieldLabel>Hard Skills (kommagetrennt)</FieldLabel>
          <Textarea value={data.hardSkills.join(", ")} onChange={(v) => update("hardSkills", v.split(",").map((s) => s.trim()).filter(Boolean))} placeholder="Lean Management, Six Sigma, PMP…" rows={2} />
        </div>
      </AccordionSection >

      {/* ── Soft Skills ────────────────────────────────────────────────────── */}
      < AccordionSection title="Soft Skills" >
        <div className="cv-form-field">
          <FieldLabel>Soft Skills (kommagetrennt)</FieldLabel>
          <Textarea value={data.softSkills.join(", ")} onChange={(v) => update("softSkills", v.split(",").map((s) => s.trim()).filter(Boolean))} placeholder="Führungsstärke, Kommunikation…" rows={2} />
        </div>
      </AccordionSection >

      {/* ── IT Skills ──────────────────────────────────────────────────────── */}
      < AccordionSection title="IT-Kenntnisse" badge={data.itSkills.length} >
        {
          data.itSkills.map((it, idx) => (
            <div key={it.id} className="cv-form-repeat-item">
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {it.name || `Tool ${idx + 1}`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={idx}
                    length={data.itSkills.length}
                    onMove={(direction) =>
                      update(
                        "itSkills",
                        moveItem(data.itSkills, idx, direction)
                      )
                    }
                  />

                  <RemoveButton
                    onClick={() =>
                      update(
                        "itSkills",
                        data.itSkills.filter((x) => x.id !== it.id)
                      )
                    }
                  />
                </div>
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
          ))
        }
        < AddButton onClick={() => update("itSkills", [...data.itSkills, { id: uid(), name: "", level: "Gut" }])} label="Tool hinzufügen" />
      </AccordionSection >

      {/* ── Sprachen ───────────────────────────────────────────────────────── */}
      < AccordionSection title="Sprachen" badge={data.languages.length} >
        {
          data.languages.map((l, idx) => (
            <div key={l.id} className="cv-form-repeat-item">
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {l.language || `Sprache ${idx + 1}`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={idx}
                    length={data.languages.length}
                    onMove={(direction) =>
                      update(
                        "languages",
                        moveItem(data.languages, idx, direction)
                      )
                    }
                  />

                  <RemoveButton
                    onClick={() =>
                      update(
                        "languages",
                        data.languages.filter((x) => x.id !== l.id)
                      )
                    }
                  />
                </div>
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
          ))
        }
        < AddButton onClick={() => update("languages", [...data.languages, { id: uid(), language: "", level: "" }])} label="Sprache hinzufügen" />
      </AccordionSection >

      {/* ── Ausbildung ─────────────────────────────────────────────────────── */}
      < AccordionSection title={t.education} badge={data.education.length} >
        {
          data.education.map((edu, idx) => (
            <div key={edu.id} className="cv-form-repeat-item">
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {edu.institution || `Ausbildung ${idx + 1}`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={idx}
                    length={data.education.length}
                    onMove={(direction) =>
                      update(
                        "education",
                        moveItem(data.education, idx, direction)
                      )
                    }
                  />

                  <RemoveButton
                    onClick={() =>
                      update(
                        "education",
                        data.education.filter((x) => x.id !== edu.id)
                      )
                    }
                  />
                </div>
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
          ))
        }
        < AddButton onClick={() => update("education", [...data.education, { id: uid(), institution: "", degree: "", field: "", from: "", to: "", location: "" }])} label="Ausbildung hinzufügen" />
      </AccordionSection >

      {/* ── Zertifikate ────────────────────────────────────────────────────── */}
      < AccordionSection title="Weiterbildungen & Zertifikate" badge={data.certificates.length} >
        {
          data.certificates.map((c, idx) => (
            <div key={c.id} className="cv-form-repeat-item">
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {c.title || `Zertifikat ${idx + 1}`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={idx}
                    length={data.certificates.length}
                    onMove={(direction) =>
                      update(
                        "certificates",
                        moveItem(data.certificates, idx, direction)
                      )
                    }
                  />

                  <RemoveButton
                    onClick={() =>
                      update(
                        "certificates",
                        data.certificates.filter((x) => x.id !== c.id)
                      )
                    }
                  />
                </div>
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
          ))
        }
        < AddButton onClick={() => update("certificates", [...data.certificates, { id: uid(), title: "", issuer: "", year: "" }])} label="Zertifikat hinzufügen" />
      </AccordionSection >
    </div >
  );
}
