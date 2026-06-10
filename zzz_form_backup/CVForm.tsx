"use client";

import React, { useState } from "react";
import type {
  CVData,
  WorkExperience,
  Strength,
  Achievement,
  USP,
  SkillGroup,
  ITSkill,
  Language,
  Education,
  Certificate,
} from "../src/types/cv";

interface CVFormProps {
  data: CVData;
  onChange: (data: CVData) => void;
}

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
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
}) => (
  <input
    type={type}
    className="cv-form-input"
    value={value}
    placeholder={placeholder}
    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
      onChange(event.target.value)
    }
  />
);

const Textarea = ({
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  rows?: number;
}) => (
  <textarea
    className="cv-form-textarea"
    value={value}
    placeholder={placeholder}
    rows={rows}
    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
      onChange(event.target.value)
    }
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
        onClick={() => setOpen((currentOpen: boolean) => !currentOpen)}
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

const AddButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => (
  <button type="button" className="cv-form-add-btn" onClick={onClick}>
    + {label}
  </button>
);

const RemoveButton = ({ onClick }: { onClick: () => void }) => (
  <button
    type="button"
    className="cv-form-remove-btn"
    onClick={onClick}
    title="Entfernen"
  >
    ✕
  </button>
);

const splitCommaList = (value: string) =>
  value
    .split(",")
    .map((item: string) => item.trim())
    .filter(Boolean);

export function CVForm({ data, onChange }: CVFormProps) {
  const update = <K extends keyof CVData>(key: K, value: CVData[K]) => {
    onChange({ ...data, [key]: value });
  };

  const updatePersonal = (field: keyof CVData["personal"], value: string) => {
    update("personal", { ...data.personal, [field]: value });
  };

  const updateProfile = (field: keyof CVData["profile"], value: string) => {
    update("profile", { ...data.profile, [field]: value });
  };

  const updateWork = (
    id: string,
    field: keyof WorkExperience,
    value: WorkExperience[keyof WorkExperience]
  ) => {
    update(
      "workExperience",
      data.workExperience.map((work: WorkExperience) =>
        work.id === id ? { ...work, [field]: value } : work
      )
    );
  };

  const addWork = () => {
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
      },
    ]);
  };

  const removeWork = (id: string) => {
    update(
      "workExperience",
      data.workExperience.filter((work: WorkExperience) => work.id !== id)
    );
  };

  const updateWorkListItem = (
    id: string,
    field: "responsibilities" | "achievements",
    index: number,
    value: string
  ) => {
    update(
      "workExperience",
      data.workExperience.map((work: WorkExperience) =>
        work.id === id
          ? {
              ...work,
              [field]: work[field].map((item: string, itemIndex: number) =>
                itemIndex === index ? value : item
              ),
            }
          : work
      )
    );
  };

  const addWorkListItem = (
    id: string,
    field: "responsibilities" | "achievements"
  ) => {
    update(
      "workExperience",
      data.workExperience.map((work: WorkExperience) =>
        work.id === id ? { ...work, [field]: [...work[field], ""] } : work
      )
    );
  };

  const removeWorkListItem = (
    id: string,
    field: "responsibilities" | "achievements",
    index: number
  ) => {
    update(
      "workExperience",
      data.workExperience.map((work: WorkExperience) =>
        work.id === id
          ? {
              ...work,
              [field]: work[field].filter(
                (_item: string, itemIndex: number) => itemIndex !== index
              ),
            }
          : work
      )
    );
  };

  return (
    <div className="cv-form-root">
      <h2 className="cv-form-title">CV-Daten</h2>

      <div className="cv-form-field">
        <FieldLabel>Layout-Vorlage</FieldLabel>
        <select
          className="cv-form-select"
          value={data.layout}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
            update("layout", event.target.value as CVData["layout"])
          }
        >
          <option value="professional">EliteCV Professional</option>
          <option value="executive">EliteCV Executive</option>
          <option value="swiss">Swiss Professional</option>
          <option value="ats">ATS Professional</option>
        </select>
      </div>

      <AccordionSection title="Persönliche Daten">
        <div className="cv-form-grid2">
          <div className="cv-form-field">
            <FieldLabel>Vorname</FieldLabel>
            <Input
              value={data.personal.firstName}
              onChange={(value: string) => updatePersonal("firstName", value)}
              placeholder="Sandra"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Nachname</FieldLabel>
            <Input
              value={data.personal.lastName}
              onChange={(value: string) => updatePersonal("lastName", value)}
              placeholder="Meier"
            />
          </div>

          <div className="cv-form-field cv-form-field--full">
            <FieldLabel>Rollenbezeichnung im CV</FieldLabel>
            <Input
              value={data.personal.targetTitle}
              onChange={(value: string) => updatePersonal("targetTitle", value)}
              placeholder="Head of Operations"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Zielposition</FieldLabel>
            <Input
              value={data.personal.targetPosition}
              onChange={(value: string) =>
                updatePersonal("targetPosition", value)
              }
              placeholder="Head of Operations / COO"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Branche</FieldLabel>
            <Input
              value={data.personal.targetIndustry}
              onChange={(value: string) =>
                updatePersonal("targetIndustry", value)
              }
              placeholder="Finanzdienstleistungen"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>E-Mail</FieldLabel>
            <Input
              value={data.personal.email}
              onChange={(value: string) => updatePersonal("email", value)}
              type="email"
              placeholder="name@example.com"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Telefon</FieldLabel>
            <Input
              value={data.personal.phone}
              onChange={(value: string) => updatePersonal("phone", value)}
              placeholder="+41 79 123 45 67"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>Standort</FieldLabel>
            <Input
              value={data.personal.location}
              onChange={(value: string) => updatePersonal("location", value)}
              placeholder="Zürich, Schweiz"
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>LinkedIn</FieldLabel>
            <Input
              value={data.personal.linkedin ?? ""}
              onChange={(value: string) => updatePersonal("linkedin", value)}
              placeholder="linkedin.com/in/name"
            />
          </div>
        </div>
      </AccordionSection>

      <AccordionSection title="Profiltext">
        <div className="cv-form-field">
          <FieldLabel>Profiltext</FieldLabel>
          <Textarea
            value={data.profile.rawText}
            onChange={(value: string) => updateProfile("rawText", value)}
            placeholder="Kurzer beruflicher Profiltext..."
            rows={5}
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>Motivation / beruflicher Antrieb</FieldLabel>
          <Textarea
            value={data.profile.why ?? ""}
            onChange={(value: string) => updateProfile("why", value)}
            rows={2}
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>Arbeitsweise / Vorgehen</FieldLabel>
          <Textarea
            value={data.profile.how ?? ""}
            onChange={(value: string) => updateProfile("how", value)}
            rows={2}
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>Kompetenzen / Mehrwert</FieldLabel>
          <Textarea
            value={data.profile.what ?? ""}
            onChange={(value: string) => updateProfile("what", value)}
            rows={2}
          />
        </div>
      </AccordionSection>

      <AccordionSection title="Karriere-Highlights" badge={data.usps.length}>
        {data.usps.map((usp: USP, index: number) => (
          <div key={usp.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Highlight {index + 1}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "usps",
                    data.usps.filter((item: USP) => item.id !== usp.id)
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Titel</FieldLabel>
              <Input
                value={usp.title}
                onChange={(value: string) =>
                  update(
                    "usps",
                    data.usps.map((item: USP) =>
                      item.id === usp.id ? { ...item, title: value } : item
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Beschreibung</FieldLabel>
              <Textarea
                value={usp.description}
                onChange={(value: string) =>
                  update(
                    "usps",
                    data.usps.map((item: USP) =>
                      item.id === usp.id
                        ? { ...item, description: value }
                        : item
                    )
                  )
                }
                rows={2}
              />
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("usps", [
              ...data.usps,
              { id: uid(), title: "", description: "" },
            ])
          }
          label="Highlight hinzufügen"
        />
      </AccordionSection>

      <AccordionSection title="Stärken" badge={data.strengths.length}>
        {data.strengths.map((strength: Strength, index: number) => (
          <div key={strength.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Stärke {index + 1}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "strengths",
                    data.strengths.filter(
                      (item: Strength) => item.id !== strength.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Bezeichnung</FieldLabel>
              <Input
                value={strength.label}
                onChange={(value: string) =>
                  update(
                    "strengths",
                    data.strengths.map((item: Strength) =>
                      item.id === strength.id
                        ? { ...item, label: value }
                        : item
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Kurzbeschreibung</FieldLabel>
              <Input
                value={strength.description ?? ""}
                onChange={(value: string) =>
                  update(
                    "strengths",
                    data.strengths.map((item: Strength) =>
                      item.id === strength.id
                        ? { ...item, description: value }
                        : item
                    )
                  )
                }
              />
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("strengths", [
              ...data.strengths,
              { id: uid(), label: "", description: "" },
            ])
          }
          label="Stärke hinzufügen"
        />
      </AccordionSection>

      <AccordionSection title="Erfolge" badge={data.achievements.length}>
        {data.achievements.map((achievement: Achievement, index: number) => (
          <div key={achievement.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Erfolg {index + 1}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "achievements",
                    data.achievements.filter(
                      (item: Achievement) => item.id !== achievement.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Kennzahl / Metrik</FieldLabel>
              <Input
                value={achievement.metric ?? ""}
                onChange={(value: string) =>
                  update(
                    "achievements",
                    data.achievements.map((item: Achievement) =>
                      item.id === achievement.id
                        ? { ...item, metric: value }
                        : item
                    )
                  )
                }
                placeholder="-15% Durchlaufzeit"
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Beschreibung</FieldLabel>
              <Input
                value={achievement.text}
                onChange={(value: string) =>
                  update(
                    "achievements",
                    data.achievements.map((item: Achievement) =>
                      item.id === achievement.id
                        ? { ...item, text: value }
                        : item
                    )
                  )
                }
              />
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("achievements", [
              ...data.achievements,
              { id: uid(), text: "", metric: "" },
            ])
          }
          label="Erfolg hinzufügen"
        />
      </AccordionSection>

      <AccordionSection
        title="Berufserfahrung"
        badge={data.workExperience.length}
      >
        {data.workExperience.map((job: WorkExperience, index: number) => (
          <div key={job.id} className="cv-form-repeat-item cv-form-repeat-item--major">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Position {index + 1}
                {job.company ? ` – ${job.company}` : ""}
              </span>
              <RemoveButton onClick={() => removeWork(job.id)} />
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Unternehmen</FieldLabel>
                <Input
                  value={job.company}
                  onChange={(value: string) =>
                    updateWork(job.id, "company", value)
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Ort</FieldLabel>
                <Input
                  value={job.location}
                  onChange={(value: string) =>
                    updateWork(job.id, "location", value)
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Von</FieldLabel>
                <Input
                  value={job.from}
                  onChange={(value: string) => updateWork(job.id, "from", value)}
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Bis</FieldLabel>
                <Input
                  value={job.to}
                  onChange={(value: string) => updateWork(job.id, "to", value)}
                />
              </div>

              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Funktionsbezeichnung</FieldLabel>
                <Input
                  value={job.functionTitle}
                  onChange={(value: string) =>
                    updateWork(job.id, "functionTitle", value)
                  }
                />
              </div>
            </div>

            <div className="cv-form-field">
              <FieldLabel>Aufgaben / Verantwortlichkeiten</FieldLabel>
              {job.responsibilities.map((item: string, itemIndex: number) => (
                <div key={itemIndex} className="cv-form-list-row">
                  <Input
                    value={item}
                    onChange={(value: string) =>
                      updateWorkListItem(
                        job.id,
                        "responsibilities",
                        itemIndex,
                        value
                      )
                    }
                  />
                  <RemoveButton
                    onClick={() =>
                      removeWorkListItem(
                        job.id,
                        "responsibilities",
                        itemIndex
                      )
                    }
                  />
                </div>
              ))}
              <AddButton
                onClick={() => addWorkListItem(job.id, "responsibilities")}
                label="Aufgabe hinzufügen"
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Erfolge</FieldLabel>
              {job.achievements.map((item: string, itemIndex: number) => (
                <div key={itemIndex} className="cv-form-list-row">
                  <Input
                    value={item}
                    onChange={(value: string) =>
                      updateWorkListItem(
                        job.id,
                        "achievements",
                        itemIndex,
                        value
                      )
                    }
                  />
                  <RemoveButton
                    onClick={() =>
                      removeWorkListItem(job.id, "achievements", itemIndex)
                    }
                  />
                </div>
              ))}
              <AddButton
                onClick={() => addWorkListItem(job.id, "achievements")}
                label="Erfolg hinzufügen"
              />
            </div>
          </div>
        ))}

        <AddButton onClick={addWork} label="Position hinzufügen" />
      </AccordionSection>

      <AccordionSection title="Fachkenntnisse" badge={data.skillGroups.length}>
        {data.skillGroups.map((skillGroup: SkillGroup, index: number) => (
          <div key={skillGroup.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                Gruppe {index + 1}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "skillGroups",
                    data.skillGroups.filter(
                      (item: SkillGroup) => item.id !== skillGroup.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Kategorie</FieldLabel>
              <Input
                value={skillGroup.category}
                onChange={(value: string) =>
                  update(
                    "skillGroups",
                    data.skillGroups.map((item: SkillGroup) =>
                      item.id === skillGroup.id
                        ? { ...item, category: value }
                        : item
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>Skills kommagetrennt</FieldLabel>
              <Input
                value={skillGroup.skills.join(", ")}
                onChange={(value: string) =>
                  update(
                    "skillGroups",
                    data.skillGroups.map((item: SkillGroup) =>
                      item.id === skillGroup.id
                        ? { ...item, skills: splitCommaList(value) }
                        : item
                    )
                  )
                }
              />
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("skillGroups", [
              ...data.skillGroups,
              { id: uid(), category: "", skills: [] },
            ])
          }
          label="Gruppe hinzufügen"
        />
      </AccordionSection>

      <AccordionSection title="Hard Skills">
        <div className="cv-form-field">
          <FieldLabel>Hard Skills kommagetrennt</FieldLabel>
          <Textarea
            value={data.hardSkills.join(", ")}
            onChange={(value: string) =>
              update("hardSkills", splitCommaList(value))
            }
            rows={2}
          />
        </div>
      </AccordionSection>

      <AccordionSection title="Soft Skills">
        <div className="cv-form-field">
          <FieldLabel>Soft Skills kommagetrennt</FieldLabel>
          <Textarea
            value={data.softSkills.join(", ")}
            onChange={(value: string) =>
              update("softSkills", splitCommaList(value))
            }
            rows={2}
          />
        </div>
      </AccordionSection>

      <AccordionSection title="IT-Kenntnisse" badge={data.itSkills.length}>
        {data.itSkills.map((itSkill: ITSkill, index: number) => (
          <div key={itSkill.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                {itSkill.name || `Tool ${index + 1}`}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "itSkills",
                    data.itSkills.filter(
                      (item: ITSkill) => item.id !== itSkill.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Tool / Software</FieldLabel>
                <Input
                  value={itSkill.name}
                  onChange={(value: string) =>
                    update(
                      "itSkills",
                      data.itSkills.map((item: ITSkill) =>
                        item.id === itSkill.id
                          ? { ...item, name: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Niveau</FieldLabel>
                <select
                  className="cv-form-select"
                  value={itSkill.level ?? ""}
                  onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                    update(
                      "itSkills",
                      data.itSkills.map((item: ITSkill) =>
                        item.id === itSkill.id
                          ? {
                              ...item,
                              level: event.target.value as ITSkill["level"],
                            }
                          : item
                      )
                    )
                  }
                >
                  <option value="">– auswählen –</option>
                  <option value="Grundkenntnisse">Grundkenntnisse</option>
                  <option value="Gut">Gut</option>
                  <option value="Sehr gut">Sehr gut</option>
                  <option value="Expertenwissen">Expertenwissen</option>
                </select>
              </div>
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("itSkills", [
              ...data.itSkills,
              { id: uid(), name: "", level: "Gut" },
            ])
          }
          label="Tool hinzufügen"
        />
      </AccordionSection>

      <AccordionSection title="Sprachen" badge={data.languages.length}>
        {data.languages.map((language: Language, index: number) => (
          <div key={language.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                {language.language || `Sprache ${index + 1}`}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "languages",
                    data.languages.filter(
                      (item: Language) => item.id !== language.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field">
                <FieldLabel>Sprache</FieldLabel>
                <Input
                  value={language.language}
                  onChange={(value: string) =>
                    update(
                      "languages",
                      data.languages.map((item: Language) =>
                        item.id === language.id
                          ? { ...item, language: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Niveau</FieldLabel>
                <Input
                  value={language.level}
                  onChange={(value: string) =>
                    update(
                      "languages",
                      data.languages.map((item: Language) =>
                        item.id === language.id
                          ? { ...item, level: value }
                          : item
                      )
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("languages", [
              ...data.languages,
              { id: uid(), language: "", level: "" },
            ])
          }
          label="Sprache hinzufügen"
        />
      </AccordionSection>

      <AccordionSection title="Ausbildung" badge={data.education.length}>
        {data.education.map((educationItem: Education, index: number) => (
          <div key={educationItem.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                {educationItem.institution || `Ausbildung ${index + 1}`}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "education",
                    data.education.filter(
                      (item: Education) => item.id !== educationItem.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Institution</FieldLabel>
                <Input
                  value={educationItem.institution}
                  onChange={(value: string) =>
                    update(
                      "education",
                      data.education.map((item: Education) =>
                        item.id === educationItem.id
                          ? { ...item, institution: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Abschluss</FieldLabel>
                <Input
                  value={educationItem.degree}
                  onChange={(value: string) =>
                    update(
                      "education",
                      data.education.map((item: Education) =>
                        item.id === educationItem.id
                          ? { ...item, degree: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Studienrichtung</FieldLabel>
                <Input
                  value={educationItem.field ?? ""}
                  onChange={(value: string) =>
                    update(
                      "education",
                      data.education.map((item: Education) =>
                        item.id === educationItem.id
                          ? { ...item, field: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Von</FieldLabel>
                <Input
                  value={educationItem.from}
                  onChange={(value: string) =>
                    update(
                      "education",
                      data.education.map((item: Education) =>
                        item.id === educationItem.id
                          ? { ...item, from: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Bis</FieldLabel>
                <Input
                  value={educationItem.to}
                  onChange={(value: string) =>
                    update(
                      "education",
                      data.education.map((item: Education) =>
                        item.id === educationItem.id
                          ? { ...item, to: value }
                          : item
                      )
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("education", [
              ...data.education,
              {
                id: uid(),
                institution: "",
                degree: "",
                field: "",
                from: "",
                to: "",
                location: "",
              },
            ])
          }
          label="Ausbildung hinzufügen"
        />
      </AccordionSection>

      <AccordionSection
        title="Weiterbildungen & Zertifikate"
        badge={data.certificates.length}
      >
        {data.certificates.map((certificate: Certificate, index: number) => (
          <div key={certificate.id} className="cv-form-repeat-item">
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                {certificate.title || `Zertifikat ${index + 1}`}
              </span>
              <RemoveButton
                onClick={() =>
                  update(
                    "certificates",
                    data.certificates.filter(
                      (item: Certificate) => item.id !== certificate.id
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-grid2">
              <div className="cv-form-field cv-form-field--full">
                <FieldLabel>Titel</FieldLabel>
                <Input
                  value={certificate.title}
                  onChange={(value: string) =>
                    update(
                      "certificates",
                      data.certificates.map((item: Certificate) =>
                        item.id === certificate.id
                          ? { ...item, title: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Aussteller</FieldLabel>
                <Input
                  value={certificate.issuer ?? ""}
                  onChange={(value: string) =>
                    update(
                      "certificates",
                      data.certificates.map((item: Certificate) =>
                        item.id === certificate.id
                          ? { ...item, issuer: value }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>Jahr</FieldLabel>
                <Input
                  value={certificate.year ?? ""}
                  onChange={(value: string) =>
                    update(
                      "certificates",
                      data.certificates.map((item: Certificate) =>
                        item.id === certificate.id
                          ? { ...item, year: value }
                          : item
                      )
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}

        <AddButton
          onClick={() =>
            update("certificates", [
              ...data.certificates,
              { id: uid(), title: "", issuer: "", year: "" },
            ])
          }
          label="Zertifikat hinzufügen"
        />
      </AccordionSection>
    </div>
  );
}