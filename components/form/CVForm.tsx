"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";
import type {
  Achievement,
  Certificate,
  CVData,
  Education,
  ITSkill,
  Language,
  SkillGroup,
  Strength,
  USP,
  VolunteerExperience,
  WorkExperience,
} from "../../types/cv";
import {
  cvFormTranslations,
  type UILanguage,
} from "./cv-form-translations";

const ELITECV_STORAGE_KEY = "elitecv-generator-draft-v1";

interface CVFormProps {
  data: CVData;
  onChange: (data: CVData) => void;
  language?: UILanguage;
}

const uid = () =>
  Math.random().toString(36).slice(2, 9);

const moveItem = <T,>(
  items: T[],
  index: number,
  direction: "up" | "down"
): T[] => {
  const targetIndex =
    direction === "up"
      ? index - 1
      : index + 1;

  if (
    targetIndex < 0 ||
    targetIndex >= items.length
  ) {
    return items;
  }

  const updatedItems = [...items];

  [
    updatedItems[index],
    updatedItems[targetIndex],
  ] = [
      updatedItems[targetIndex],
      updatedItems[index],
    ];

  return updatedItems;
};

const FieldLabel = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <label className="cv-form-label">
    {children}
  </label>
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
    onChange={(event) =>
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
    onChange={(event) =>
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
  const [open, setOpen] =
    useState(false);

  return (
    <div className="cv-form-accordion">
      <button
        type="button"
        className="cv-form-accordion-header"
        onClick={() =>
          setOpen(
            (currentOpen) =>
              !currentOpen
          )
        }
      >
        <span className="cv-form-accordion-title">
          {title}
        </span>

        <span className="cv-form-accordion-right">
          {badge !== undefined && (
            <span className="cv-form-badge">
              {badge}
            </span>
          )}

          <span className="cv-form-accordion-arrow">
            {open ? "▲" : "▼"}
          </span>
        </span>
      </button>

      {open && (
        <div className="cv-form-accordion-body">
          {children}
        </div>
      )}
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
  <button
    type="button"
    className="cv-form-add-btn"
    onClick={onClick}
  >
    + {label}
  </button>
);

const RemoveButton = ({
  onClick,
  label,
}: {
  onClick: () => void;
  label: string;
}) => (
  <button
    type="button"
    className="cv-form-remove-btn"
    onClick={onClick}
    title={label}
    aria-label={label}
  >
    ✕
  </button>
);

const MoveButtons = ({
  index,
  length,
  onMove,
  moveUpLabel,
  moveDownLabel,
}: {
  index: number;
  length: number;
  onMove: (
    direction: "up" | "down"
  ) => void;
  moveUpLabel: string;
  moveDownLabel: string;
}) => (
  <div className="cv-form-move-actions">
    <button
      type="button"
      className="cv-form-move-btn"
      onClick={() => onMove("up")}
      disabled={index === 0}
      title={moveUpLabel}
      aria-label={moveUpLabel}
    >
      ↑
    </button>

    <button
      type="button"
      className="cv-form-move-btn"
      onClick={() => onMove("down")}
      disabled={
        index === length - 1
      }
      title={moveDownLabel}
      aria-label={moveDownLabel}
    >
      ↓
    </button>
  </div>
);

const splitCommaList = (
  value: string
) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export function CVForm({
  data,
  onChange,
  language = "de",
}: CVFormProps) {
  const t =
    cvFormTranslations[language];

  const [
    isGeneratingProfile,
    setIsGeneratingProfile,
  ] = useState(false);

  const [
    profileAiMessage,
    setProfileAiMessage,
  ] = useState("");

  const update = <
    K extends keyof CVData,
  >(
    key: K,
    value: CVData[K]
  ) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const updatePersonal = (
    field: keyof CVData["personal"],
    value: string
  ) => {
    update("personal", {
      ...data.personal,
      [field]: value,
    });
  };

  const updateProfile = (
    field: keyof CVData["profile"],
    value: string
  ) => {
    update("profile", {
      ...data.profile,
      [field]: value,
    });
  };

  const handleGenerateProfile =
    async () => {
      try {
        setIsGeneratingProfile(true);
        setProfileAiMessage("");

        const response = await fetch(
          "/api/generate-profile",
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              language,
              personal:
                data.personal,
              workExperience:
                data.workExperience,
              strengths:
                data.strengths,
              achievements:
                data.achievements,
              skillGroups:
                data.skillGroups,
              hardSkills:
                data.hardSkills,
              itSkills:
                data.itSkills,
              education:
                data.education,
              certificates:
                data.certificates,
              languages:
                data.languages,
            }),
          }
        );

        const result =
          await response.json();

        if (!response.ok) {
          throw new Error(
            result.error ||
            (language === "de"
              ? "Profiltext konnte nicht erstellt werden."
              : "The profile summary could not be generated.")
          );
        }

        const profileText =
          String(
            result.profileText || ""
          ).trim();

        if (!profileText) {
          throw new Error(
            language === "de"
              ? "Die KI hat keinen Profiltext zurückgegeben."
              : "The AI returned no profile summary."
          );
        }

        updateProfile(
          "rawText",
          profileText
        );

        setProfileAiMessage(
          language === "de"
            ? "Profiltext erfolgreich erstellt."
            : "Profile summary generated successfully."
        );
      } catch (error) {
        console.error(
          "Profiltext-Generierung fehlgeschlagen:",
          error
        );

        setProfileAiMessage(
          error instanceof Error
            ? error.message
            : language === "de"
              ? "Profiltext konnte nicht erstellt werden."
              : "The profile summary could not be generated."
        );
      } finally {
        setIsGeneratingProfile(
          false
        );
      }
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
      } as WorkExperience,
    ]);
  };

  const updateWork = (
    id: string,
    field:
      keyof WorkExperience,
    value: unknown
  ) => {
    update(
      "workExperience",
      data.workExperience.map(
        (work) =>
          work.id === id
            ? {
              ...work,
              [field]: value,
            }
            : work
      )
    );
  };

  const removeWork = (
    id: string
  ) => {
    update(
      "workExperience",
      data.workExperience.filter(
        (work) =>
          work.id !== id
      )
    );
  };

  const updateWorkListItem = (
    id: string,
    field:
      | "responsibilities"
      | "achievements",
    index: number,
    value: string
  ) => {
    update(
      "workExperience",
      data.workExperience.map(
        (work) =>
          work.id === id
            ? {
              ...work,
              [field]:
                work[field].map(
                  (
                    item,
                    itemIndex
                  ) =>
                    itemIndex ===
                      index
                      ? value
                      : item
                ),
            }
            : work
      )
    );
  };

  const addWorkListItem = (
    id: string,
    field:
      | "responsibilities"
      | "achievements"
  ) => {
    update(
      "workExperience",
      data.workExperience.map(
        (work) =>
          work.id === id
            ? {
              ...work,
              [field]: [
                ...work[field],
                "",
              ],
            }
            : work
      )
    );
  };

  const removeWorkListItem = (
    id: string,
    field:
      | "responsibilities"
      | "achievements",
    index: number
  ) => {
    update(
      "workExperience",
      data.workExperience.map(
        (work) =>
          work.id === id
            ? {
              ...work,
              [field]:
                work[field].filter(
                  (
                    _,
                    itemIndex
                  ) =>
                    itemIndex !==
                    index
                ),
            }
            : work
      )
    );
  };

  const addVolunteerExperience = () => {
    update("volunteerExperience", [
      ...(data.volunteerExperience ?? []),
      {
        id: uid(),
        organization: "",
        location: "",
        from: "",
        to: "",
        role: "",
        responsibilities: [""],
      },
    ]);
  };

  const updateVolunteerExperience = (
    id: string,
    field: keyof VolunteerExperience,
    value: unknown
  ) => {
    update(
      "volunteerExperience",
      (data.volunteerExperience ?? []).map((item) =>
        item.id === id
          ? {
            ...item,
            [field]: value,
          }
          : item
      )
    );
  };

  const removeVolunteerExperience = (id: string) => {
    update(
      "volunteerExperience",
      (data.volunteerExperience ?? []).filter(
        (item) => item.id !== id
      )
    );
  };

  const updateVolunteerResponsibility = (
    id: string,
    index: number,
    value: string
  ) => {
    update(
      "volunteerExperience",
      (data.volunteerExperience ?? []).map((item) =>
        item.id === id
          ? {
            ...item,
            responsibilities: item.responsibilities.map(
              (responsibility, responsibilityIndex) =>
                responsibilityIndex === index
                  ? value
                  : responsibility
            ),
          }
          : item
      )
    );
  };

  const addVolunteerResponsibility = (id: string) => {
    update(
      "volunteerExperience",
      (data.volunteerExperience ?? []).map((item) =>
        item.id === id
          ? {
            ...item,
            responsibilities: [
              ...item.responsibilities,
              "",
            ],
          }
          : item
      )
    );
  };

  const removeVolunteerResponsibility = (
    id: string,
    index: number
  ) => {
    update(
      "volunteerExperience",
      (data.volunteerExperience ?? []).map((item) =>
        item.id === id
          ? {
            ...item,
            responsibilities:
              item.responsibilities.filter(
                (_, responsibilityIndex) =>
                  responsibilityIndex !== index
              ),
          }
          : item
      )
    );
  };

  const moveProps = {
    moveUpLabel: t.moveUp,
    moveDownLabel:
      t.moveDown,
  };

  return (
    <div className="cv-form-root">
      <h2 className="cv-form-title">
        {t.cvData}
      </h2>
      <div className="cv-form-settings-box">
        <div className="cv-form-field">
          <FieldLabel>{t.cvLength}</FieldLabel>

          <select
            className="cv-form-select"
            value={data.firstPageExperienceCount ?? 3}
            onChange={(event) =>
              update(
                "firstPageExperienceCount",
                Number(event.target.value) as 2 | 3 | 4
              )
            }
          >
            <option value={2}>
              {t.compact}
            </option>

            <option value={3}>
              {t.balanced}
            </option>

            <option value={4}>
              {t.detailed}
            </option>
          </select>

          <small className="cv-form-field-hint">
            {t.cvLengthHint}
          </small>
        </div>

        <div className="cv-form-field">
          <FieldLabel>
            {t.bulletPointsPerPosition}
          </FieldLabel>

          <select
            className="cv-form-select"
            value={data.bulletPointCount ?? 3}
            onChange={(event) =>
              update(
                "bulletPointCount",
                Number(event.target.value) as
                | 2
                | 3
                | 4
                | 5
              )
            }
          >
            <option value={2}>
              2 – {t.veryCompact}
            </option>

            <option value={3}>
              3 – {t.recommended}
            </option>

            <option value={4}>
              4 – {t.detailed}
            </option>

            <option value={5}>
              5 – {t.veryDetailed}
            </option>
          </select>

          <small className="cv-form-field-hint">
            {t.bulletHint}
          </small>
        </div>
      </div>

      <AccordionSection title={t.personalData}>
        <div className="cv-form-grid2">
          <div className="cv-form-field">
            <FieldLabel>
              {t.firstName}
            </FieldLabel>

            <Input
              value={data.personal.firstName}
              onChange={(value) =>
                updatePersonal(
                  "firstName",
                  value
                )
              }
              placeholder={
                t.firstNamePlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.lastName}
            </FieldLabel>

            <Input
              value={data.personal.lastName}
              onChange={(value) =>
                updatePersonal(
                  "lastName",
                  value
                )
              }
              placeholder={
                t.lastNamePlaceholder
              }
            />
          </div>

          <div className="cv-form-field cv-form-field--full">
            <FieldLabel>
              {t.targetTitle}
            </FieldLabel>

            <Input
              value={
                data.personal.targetTitle
              }
              onChange={(value) =>
                updatePersonal(
                  "targetTitle",
                  value
                )
              }
              placeholder={
                t.targetTitlePlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.targetPosition}
            </FieldLabel>

            <Input
              value={
                data.personal.targetPosition
              }
              onChange={(value) =>
                updatePersonal(
                  "targetPosition",
                  value
                )
              }
              placeholder={
                t.targetPositionPlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.industry}
            </FieldLabel>

            <Input
              value={
                data.personal.targetIndustry
              }
              onChange={(value) =>
                updatePersonal(
                  "targetIndustry",
                  value
                )
              }
              placeholder={
                t.industryPlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.email}
            </FieldLabel>

            <Input
              type="email"
              value={data.personal.email}
              onChange={(value) =>
                updatePersonal(
                  "email",
                  value
                )
              }
              placeholder={
                t.emailPlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.phone}
            </FieldLabel>

            <Input
              value={data.personal.phone}
              onChange={(value) =>
                updatePersonal(
                  "phone",
                  value
                )
              }
              placeholder={
                t.phonePlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.location}
            </FieldLabel>

            <Input
              value={
                data.personal.location
              }
              onChange={(value) =>
                updatePersonal(
                  "location",
                  value
                )
              }
              placeholder={
                t.locationPlaceholder
              }
            />
          </div>

          <div className="cv-form-field">
            <FieldLabel>
              {t.linkedin}
            </FieldLabel>

            <Input
              value={
                data.personal.linkedin ?? ""
              }
              onChange={(value) =>
                updatePersonal(
                  "linkedin",
                  value
                )
              }
              placeholder={
                t.linkedinPlaceholder
              }
            />
          </div>

          <div className="cv-form-field cv-form-field--full">
            <FieldLabel>
              {t.uploadPhoto}
            </FieldLabel>

            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="cv-form-input"
              onChange={(event) => {
                const file =
                  event.target.files?.[0];

                if (!file) {
                  return;
                }

                const reader =
                  new FileReader();

                reader.onload = () => {
                  updatePersonal(
                    "photo",
                    String(reader.result)
                  );
                };

                reader.readAsDataURL(
                  file
                );
              }}
            />

            {data.personal.photo && (
              <>
                <img
                  src={
                    data.personal.photo
                  }
                  alt={t.uploadPhoto}
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
                  onClick={() =>
                    updatePersonal(
                      "photo",
                      ""
                    )
                  }
                >
                  {t.removePhoto}
                </button>
              </>
            )}
          </div>
        </div>
      </AccordionSection>

      <AccordionSection
        title={t.profileText}
      >
        <div className="cv-form-field">
          <FieldLabel>
            {t.rawText}
          </FieldLabel>

          <Textarea
            value={
              data.profile.rawText
            }
            onChange={(value) =>
              updateProfile(
                "rawText",
                value
              )
            }
            placeholder={
              t.profilePlaceholder
            }
            rows={4}
          />

          <button
            type="button"
            className="cv-form-ai-btn cv-form-ai-btn--inside"
            onClick={
              handleGenerateProfile
            }
            disabled={
              isGeneratingProfile
            }
          >
            {isGeneratingProfile
              ? `⏳ ${t.generatingProfile}`
              : `✨ ${t.generateProfile}`}
          </button>

          {profileAiMessage && (
            <p className="cv-form-ai-message">
              {profileAiMessage}
            </p>
          )}
        </div>

        <div className="cv-form-field">
          <FieldLabel>
            {t.why}
          </FieldLabel>

          <Textarea
            value={
              data.profile.why ?? ""
            }
            onChange={(value) =>
              updateProfile(
                "why",
                value
              )
            }
            placeholder={
              t.whyPlaceholder
            }
            rows={2}
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>
            {t.how}
          </FieldLabel>

          <Textarea
            value={
              data.profile.how ?? ""
            }
            onChange={(value) =>
              updateProfile(
                "how",
                value
              )
            }
            placeholder={
              t.howPlaceholder
            }
            rows={2}
          />
        </div>

        <div className="cv-form-field">
          <FieldLabel>
            {t.what}
          </FieldLabel>

          <Textarea
            value={
              data.profile.what ?? ""
            }
            onChange={(value) =>
              updateProfile(
                "what",
                value
              )
            }
            placeholder={
              t.whatPlaceholder
            }
            rows={2}
          />
        </div>
      </AccordionSection>
      <AccordionSection
        title={t.usps}
        badge={data.usps.length}
      >
        {data.usps.map((usp: USP, index: number) => (
          <div
            key={usp.id}
            className="cv-form-repeat-item"
          >
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                {t.usp} {index + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={index}
                  length={data.usps.length}
                  onMove={(direction) =>
                    update(
                      "usps",
                      moveItem(
                        data.usps,
                        index,
                        direction
                      )
                    )
                  }
                  {...moveProps}
                />

                <RemoveButton
                  label={t.remove}
                  onClick={() =>
                    update(
                      "usps",
                      data.usps.filter(
                        (item) => item.id !== usp.id
                      )
                    )
                  }
                />
              </div>
            </div>

            <div className="cv-form-field">
              <FieldLabel>{t.title}</FieldLabel>

              <Input
                value={usp.title}
                onChange={(value) =>
                  update(
                    "usps",
                    data.usps.map((item) =>
                      item.id === usp.id
                        ? {
                          ...item,
                          title: value,
                        }
                        : item
                    )
                  )
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>
                {t.description}
              </FieldLabel>

              <Textarea
                value={usp.description}
                onChange={(value) =>
                  update(
                    "usps",
                    data.usps.map((item) =>
                      item.id === usp.id
                        ? {
                          ...item,
                          description: value,
                        }
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
              {
                id: uid(),
                title: "",
                description: "",
              },
            ])
          }
          label={t.addUsp}
        />
      </AccordionSection>

      <AccordionSection
        title={t.strengths}
        badge={data.strengths.length}
      >
        {data.strengths.map(
          (strength: Strength, index: number) => (
            <div
              key={strength.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {t.strengths} {index + 1}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={data.strengths.length}
                    onMove={(direction) =>
                      update(
                        "strengths",
                        moveItem(
                          data.strengths,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "strengths",
                        data.strengths.filter(
                          (item) =>
                            item.id !== strength.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-field">
                <FieldLabel>{t.label}</FieldLabel>

                <Input
                  value={strength.label}
                  onChange={(value) =>
                    update(
                      "strengths",
                      data.strengths.map((item) =>
                        item.id === strength.id
                          ? {
                            ...item,
                            label: value,
                          }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.shortDescription}
                </FieldLabel>

                <Input
                  value={strength.description ?? ""}
                  onChange={(value) =>
                    update(
                      "strengths",
                      data.strengths.map((item) =>
                        item.id === strength.id
                          ? {
                            ...item,
                            description: value,
                          }
                          : item
                      )
                    )
                  }
                />
              </div>
            </div>
          )
        )}

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
          label={t.addStrength}
        />
      </AccordionSection>

      <AccordionSection
        title={t.achievements}
        badge={data.achievements.length}
      >
        {data.achievements.map(
          (
            achievement: Achievement,
            index: number
          ) => (
            <div
              key={achievement.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {t.achievements} {index + 1}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={data.achievements.length}
                    onMove={(direction) =>
                      update(
                        "achievements",
                        moveItem(
                          data.achievements,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "achievements",
                        data.achievements.filter(
                          (item) =>
                            item.id !== achievement.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.projectOrHeadline}
                </FieldLabel>

                <Input
                  value={achievement.metric ?? ""}
                  onChange={(value) =>
                    update(
                      "achievements",
                      data.achievements.map((item) =>
                        item.id === achievement.id
                          ? {
                            ...item,
                            metric: value,
                          }
                          : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.description}
                </FieldLabel>

                <Input
                  value={achievement.text}
                  onChange={(value) =>
                    update(
                      "achievements",
                      data.achievements.map((item) =>
                        item.id === achievement.id
                          ? {
                            ...item,
                            text: value,
                          }
                          : item
                      )
                    )
                  }
                />
              </div>
            </div>
          )
        )}

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
          label={t.addAchievement}
        />
      </AccordionSection>
      <AccordionSection
        title={t.experience}
        badge={data.workExperience.length}
      >
        {data.workExperience.map(
          (job: WorkExperience, index: number) => (
            <div
              key={job.id}
              className="cv-form-repeat-item cv-form-repeat-item--major"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {t.position} {index + 1}
                  {job.company ? ` – ${job.company}` : ""}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={data.workExperience.length}
                    onMove={(direction) =>
                      update(
                        "workExperience",
                        moveItem(
                          data.workExperience,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() => removeWork(job.id)}
                  />
                </div>
              </div>

              <div className="cv-form-grid2">
                <div className="cv-form-field">
                  <FieldLabel>
                    {t.company}
                  </FieldLabel>

                  <Input
                    value={job.company}
                    onChange={(value) =>
                      updateWork(
                        job.id,
                        "company",
                        value
                      )
                    }
                    placeholder={
                      t.companyPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.city}
                  </FieldLabel>

                  <Input
                    value={job.location}
                    onChange={(value) =>
                      updateWork(
                        job.id,
                        "location",
                        value
                      )
                    }
                    placeholder={
                      t.cityPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.from}
                  </FieldLabel>

                  <Input
                    value={job.from}
                    onChange={(value) =>
                      updateWork(
                        job.id,
                        "from",
                        value
                      )
                    }
                    placeholder={
                      t.fromPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.to}
                  </FieldLabel>

                  <Input
                    value={job.to}
                    onChange={(value) =>
                      updateWork(
                        job.id,
                        "to",
                        value
                      )
                    }
                    placeholder={
                      t.toPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field cv-form-field--full">
                  <FieldLabel>
                    {t.functionTitle}
                  </FieldLabel>

                  <Input
                    value={job.functionTitle}
                    onChange={(value) =>
                      updateWork(
                        job.id,
                        "functionTitle",
                        value
                      )
                    }
                    placeholder={
                      t.jobTitlePlaceholder
                    }
                  />
                </div>
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.responsibilities}
                </FieldLabel>

                {job.responsibilities.map(
                  (item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="cv-form-list-row"
                    >
                      <Input
                        value={item}
                        onChange={(value) =>
                          updateWorkListItem(
                            job.id,
                            "responsibilities",
                            itemIndex,
                            value
                          )
                        }
                        placeholder={
                          t.taskPlaceholder
                        }
                      />

                      <MoveButtons
                        index={itemIndex}
                        length={
                          job.responsibilities.length
                        }
                        onMove={(direction) =>
                          updateWork(
                            job.id,
                            "responsibilities",
                            moveItem(
                              job.responsibilities,
                              itemIndex,
                              direction
                            )
                          )
                        }
                        {...moveProps}
                      />

                      <RemoveButton
                        label={t.remove}
                        onClick={() =>
                          removeWorkListItem(
                            job.id,
                            "responsibilities",
                            itemIndex
                          )
                        }
                      />
                    </div>
                  )
                )}

                <AddButton
                  onClick={() =>
                    addWorkListItem(
                      job.id,
                      "responsibilities"
                    )
                  }
                  label={t.addTask}
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.measurableAchievements}
                </FieldLabel>

                {job.achievements.map(
                  (item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="cv-form-list-row"
                    >
                      <Input
                        value={item}
                        onChange={(value) =>
                          updateWorkListItem(
                            job.id,
                            "achievements",
                            itemIndex,
                            value
                          )
                        }
                        placeholder={
                          t.achievementPlaceholder
                        }
                      />

                      <MoveButtons
                        index={itemIndex}
                        length={
                          job.achievements.length
                        }
                        onMove={(direction) =>
                          updateWork(
                            job.id,
                            "achievements",
                            moveItem(
                              job.achievements,
                              itemIndex,
                              direction
                            )
                          )
                        }
                        {...moveProps}
                      />

                      <RemoveButton
                        label={t.remove}
                        onClick={() =>
                          removeWorkListItem(
                            job.id,
                            "achievements",
                            itemIndex
                          )
                        }
                      />
                    </div>
                  )
                )}

                <AddButton
                  onClick={() =>
                    addWorkListItem(
                      job.id,
                      "achievements"
                    )
                  }
                  label={t.addAchievement}
                />
              </div>
            </div>
          )
        )}

        <AddButton
          onClick={addWork}
          label={t.addPosition}
        />
      </AccordionSection>

      <AccordionSection
        title={t.projects}
        badge={data.projects.length}
      >
        {data.projects.map((project, index) => (
          <div
            key={project.id}
            className="cv-form-repeat-item"
          >
            <div className="cv-form-repeat-header">
              <span className="cv-form-repeat-index">
                {t.project} {index + 1}
              </span>

              <div className="cv-form-repeat-actions">
                <MoveButtons
                  index={index}
                  length={data.projects.length}
                  onMove={(direction) =>
                    update(
                      "projects",
                      moveItem(
                        data.projects,
                        index,
                        direction
                      )
                    )
                  }
                  {...moveProps}
                />

                <RemoveButton
                  label={t.remove}
                  onClick={() =>
                    update(
                      "projects",
                      data.projects.filter(
                        (item) =>
                          item.id !== project.id
                      )
                    )
                  }
                />
              </div>
            </div>

            <div className="cv-form-field">
              <FieldLabel>
                {t.projectTitle}
              </FieldLabel>

              <Input
                value={project.title}
                onChange={(value) =>
                  update(
                    "projects",
                    data.projects.map((item) =>
                      item.id === project.id
                        ? {
                          ...item,
                          title: value,
                        }
                        : item
                    )
                  )
                }
                placeholder={
                  t.projectPlaceholder
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>
                {t.role}
              </FieldLabel>

              <Input
                value={project.role ?? ""}
                onChange={(value) =>
                  update(
                    "projects",
                    data.projects.map((item) =>
                      item.id === project.id
                        ? {
                          ...item,
                          role: value,
                        }
                        : item
                    )
                  )
                }
                placeholder={
                  t.rolePlaceholder
                }
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>
                {t.description}
              </FieldLabel>

              <Textarea
                value={
                  project.description ?? ""
                }
                onChange={(value) =>
                  update(
                    "projects",
                    data.projects.map((item) =>
                      item.id === project.id
                        ? {
                          ...item,
                          description: value,
                        }
                        : item
                    )
                  )
                }
                rows={3}
              />
            </div>

            <div className="cv-form-field">
              <FieldLabel>
                {t.results}
              </FieldLabel>

              {project.results.map(
                (result, resultIndex) => (
                  <div
                    key={resultIndex}
                    className="cv-form-list-row"
                  >
                    <Input
                      value={result}
                      onChange={(value) =>
                        update(
                          "projects",
                          data.projects.map(
                            (item) =>
                              item.id === project.id
                                ? {
                                  ...item,
                                  results:
                                    item.results.map(
                                      (
                                        currentResult,
                                        currentIndex
                                      ) =>
                                        currentIndex ===
                                          resultIndex
                                          ? value
                                          : currentResult
                                    ),
                                }
                                : item
                          )
                        )
                      }
                      placeholder={
                        t.resultPlaceholder
                      }
                    />

                    <MoveButtons
                      index={resultIndex}
                      length={
                        project.results.length
                      }
                      onMove={(direction) =>
                        update(
                          "projects",
                          data.projects.map(
                            (item) =>
                              item.id === project.id
                                ? {
                                  ...item,
                                  results: moveItem(
                                    item.results,
                                    resultIndex,
                                    direction
                                  ),
                                }
                                : item
                          )
                        )
                      }
                      {...moveProps}
                    />

                    <RemoveButton
                      label={t.remove}
                      onClick={() =>
                        update(
                          "projects",
                          data.projects.map(
                            (item) =>
                              item.id === project.id
                                ? {
                                  ...item,
                                  results:
                                    item.results.filter(
                                      (
                                        _,
                                        currentIndex
                                      ) =>
                                        currentIndex !==
                                        resultIndex
                                    ),
                                }
                                : item
                          )
                        )
                      }
                    />
                  </div>
                )
              )}

              <AddButton
                onClick={() =>
                  update(
                    "projects",
                    data.projects.map((item) =>
                      item.id === project.id
                        ? {
                          ...item,
                          results: [
                            ...item.results,
                            "",
                          ],
                        }
                        : item
                    )
                  )
                }
                label={t.addResult}
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
          label={t.addProject}
        />
      </AccordionSection>

      <AccordionSection
        title={
          language === "de"
            ? "Ehrenamtliches Engagement"
            : "Volunteer Experience"
        }
        badge={(data.volunteerExperience ?? []).length}
      >
        {(data.volunteerExperience ?? []).map(
          (item: VolunteerExperience, index: number) => (
            <div
              key={item.id}
              className="cv-form-repeat-item cv-form-repeat-item--major"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {language === "de"
                    ? `Engagement ${index + 1}`
                    : `Volunteer role ${index + 1}`}
                  {item.organization
                    ? ` – ${item.organization}`
                    : ""}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={
                      (data.volunteerExperience ?? []).length
                    }
                    onMove={(direction) =>
                      update(
                        "volunteerExperience",
                        moveItem(
                          data.volunteerExperience ?? [],
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      removeVolunteerExperience(item.id)
                    }
                  />
                </div>
              </div>

              <div className="cv-form-grid2">
                <div className="cv-form-field">
                  <FieldLabel>
                    {language === "de"
                      ? "Organisation / Verein"
                      : "Organisation"}
                  </FieldLabel>

                  <Input
                    value={item.organization}
                    onChange={(value) =>
                      updateVolunteerExperience(
                        item.id,
                        "organization",
                        value
                      )
                    }
                    placeholder="FC Biel Academy"
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {language === "de"
                      ? "Ort"
                      : "Location"}
                  </FieldLabel>

                  <Input
                    value={item.location}
                    onChange={(value) =>
                      updateVolunteerExperience(
                        item.id,
                        "location",
                        value
                      )
                    }
                    placeholder="Biel"
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {language === "de"
                      ? "Von"
                      : "From"}
                  </FieldLabel>

                  <Input
                    value={item.from}
                    onChange={(value) =>
                      updateVolunteerExperience(
                        item.id,
                        "from",
                        value
                      )
                    }
                    placeholder="08.2016"
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {language === "de"
                      ? "Bis"
                      : "To"}
                  </FieldLabel>

                  <Input
                    value={item.to}
                    onChange={(value) =>
                      updateVolunteerExperience(
                        item.id,
                        "to",
                        value
                      )
                    }
                    placeholder={
                      language === "de"
                        ? "heute"
                        : "present"
                    }
                  />
                </div>

                <div className="cv-form-field cv-form-field--full">
                  <FieldLabel>
                    {language === "de"
                      ? "Funktion / Rolle"
                      : "Role"}
                  </FieldLabel>

                  <Input
                    value={item.role}
                    onChange={(value) =>
                      updateVolunteerExperience(
                        item.id,
                        "role",
                        value
                      )
                    }
                    placeholder={
                      language === "de"
                        ? "Haupttrainer FE12"
                        : "Head Coach U12"
                    }
                  />
                </div>
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {language === "de"
                    ? "Aufgaben und Engagement"
                    : "Responsibilities"}
                </FieldLabel>

                {item.responsibilities.map(
                  (responsibility, responsibilityIndex) => (
                    <div
                      key={responsibilityIndex}
                      className="cv-form-list-row"
                    >
                      <Input
                        value={responsibility}
                        onChange={(value) =>
                          updateVolunteerResponsibility(
                            item.id,
                            responsibilityIndex,
                            value
                          )
                        }
                        placeholder={
                          language === "de"
                            ? "Aufgabe oder Beitrag beschreiben"
                            : "Describe the responsibility or contribution"
                        }
                      />

                      <MoveButtons
                        index={responsibilityIndex}
                        length={item.responsibilities.length}
                        onMove={(direction) =>
                          updateVolunteerExperience(
                            item.id,
                            "responsibilities",
                            moveItem(
                              item.responsibilities,
                              responsibilityIndex,
                              direction
                            )
                          )
                        }
                        {...moveProps}
                      />

                      <RemoveButton
                        label={t.remove}
                        onClick={() =>
                          removeVolunteerResponsibility(
                            item.id,
                            responsibilityIndex
                          )
                        }
                      />
                    </div>
                  )
                )}

                <AddButton
                  onClick={() =>
                    addVolunteerResponsibility(item.id)
                  }
                  label={
                    language === "de"
                      ? "Aufgabe hinzufügen"
                      : "Add responsibility"
                  }
                />
              </div>
            </div>
          )
        )}

        <AddButton
          onClick={addVolunteerExperience}
          label={
            language === "de"
              ? "Engagement hinzufügen"
              : "Add volunteer role"
          }
        />
      </AccordionSection>

      <AccordionSection
        title={t.expertise}
        badge={data.skillGroups.length}
      >
        {data.skillGroups.map(
          (
            skillGroup: SkillGroup,
            index: number
          ) => (
            <div
              key={skillGroup.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {t.group} {index + 1}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={
                      data.skillGroups.length
                    }
                    onMove={(direction) =>
                      update(
                        "skillGroups",
                        moveItem(
                          data.skillGroups,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "skillGroups",
                        data.skillGroups.filter(
                          (item) =>
                            item.id !==
                            skillGroup.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.category}
                </FieldLabel>

                <Input
                  value={skillGroup.category}
                  onChange={(value) =>
                    update(
                      "skillGroups",
                      data.skillGroups.map(
                        (item) =>
                          item.id ===
                            skillGroup.id
                            ? {
                              ...item,
                              category: value,
                            }
                            : item
                      )
                    )
                  }
                />
              </div>

              <div className="cv-form-field">
                <FieldLabel>
                  {t.commaSeparatedSkills}
                </FieldLabel>

                <Input
                  value={skillGroup.skills.join(
                    ", "
                  )}
                  onChange={(value) =>
                    update(
                      "skillGroups",
                      data.skillGroups.map(
                        (item) =>
                          item.id ===
                            skillGroup.id
                            ? {
                              ...item,
                              skills:
                                splitCommaList(
                                  value
                                ),
                            }
                            : item
                      )
                    )
                  }
                  placeholder={
                    t.skillsPlaceholder
                  }
                />
              </div>
            </div>
          )
        )}

        <AddButton
          onClick={() =>
            update("skillGroups", [
              ...data.skillGroups,
              {
                id: uid(),
                category: "",
                skills: [],
              },
            ])
          }
          label={t.addGroup}
        />
      </AccordionSection>

      <AccordionSection
        title={t.hardSkills}
      >
        <div className="cv-form-field">
          <FieldLabel>
            {t.commaSeparatedSkills}
          </FieldLabel>

          <Textarea
            value={data.hardSkills.join(
              ", "
            )}
            onChange={(value) =>
              update(
                "hardSkills",
                splitCommaList(value)
              )
            }
            placeholder={
              t.skillsPlaceholder
            }
            rows={2}
          />
        </div>
      </AccordionSection>

      <AccordionSection
        title={t.softSkills}
      >
        <div className="cv-form-field">
          <FieldLabel>
            {t.commaSeparatedSkills}
          </FieldLabel>

          <Textarea
            value={data.softSkills.join(
              ", "
            )}
            onChange={(value) =>
              update(
                "softSkills",
                splitCommaList(value)
              )
            }
            rows={2}
          />
        </div>
      </AccordionSection>

      <AccordionSection
        title={t.itSkills}
        badge={data.itSkills.length}
      >
        {data.itSkills.map(
          (
            itSkill: ITSkill,
            index: number
          ) => (
            <div
              key={itSkill.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {itSkill.name ||
                    `${t.tool} ${index + 1}`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={
                      data.itSkills.length
                    }
                    onMove={(direction) =>
                      update(
                        "itSkills",
                        moveItem(
                          data.itSkills,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "itSkills",
                        data.itSkills.filter(
                          (item) =>
                            item.id !==
                            itSkill.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-grid2">
                <div className="cv-form-field">
                  <FieldLabel>
                    {t.software}
                  </FieldLabel>

                  <Input
                    value={itSkill.name}
                    onChange={(value) =>
                      update(
                        "itSkills",
                        data.itSkills.map(
                          (item) =>
                            item.id ===
                              itSkill.id
                              ? {
                                ...item,
                                name: value,
                              }
                              : item
                        )
                      )
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.level}
                  </FieldLabel>

                  <select
                    className="cv-form-select"
                    value={
                      itSkill.level ?? ""
                    }
                    onChange={(event) =>
                      update(
                        "itSkills",
                        data.itSkills.map(
                          (item) =>
                            item.id ===
                              itSkill.id
                              ? {
                                ...item,
                                level:
                                  event.target
                                    .value as
                                  ITSkill["level"],
                              }
                              : item
                        )
                      )
                    }
                  >
                    <option value="">
                      {t.selectLevel}
                    </option>

                    <option value="Grundkenntnisse">
                      {t.basicKnowledge}
                    </option>

                    <option value="Gut">
                      {t.good}
                    </option>

                    <option value="Sehr gut">
                      {t.veryGood}
                    </option>

                    <option value="Expertenwissen">
                      {t.expertKnowledge}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          )
        )}

        <AddButton
          onClick={() =>
            update("itSkills", [
              ...data.itSkills,
              {
                id: uid(),
                name: "",
                level: "Gut",
              },
            ])
          }
          label={t.addTool}
        />
      </AccordionSection>

      <AccordionSection
        title={t.languages}
        badge={data.languages.length}
      >
        {data.languages.map(
          (
            languageItem: Language,
            index: number
          ) => (
            <div
              key={languageItem.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {languageItem.language ||
                    `${t.language} ${index + 1
                    }`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={
                      data.languages.length
                    }
                    onMove={(direction) =>
                      update(
                        "languages",
                        moveItem(
                          data.languages,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "languages",
                        data.languages.filter(
                          (item) =>
                            item.id !==
                            languageItem.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-grid2">
                <div className="cv-form-field">
                  <FieldLabel>
                    {t.language}
                  </FieldLabel>

                  <Input
                    value={
                      languageItem.language
                    }
                    onChange={(value) =>
                      update(
                        "languages",
                        data.languages.map(
                          (item) =>
                            item.id ===
                              languageItem.id
                              ? {
                                ...item,
                                language:
                                  value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.languagePlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.level}
                  </FieldLabel>

                  <Input
                    value={
                      languageItem.level
                    }
                    onChange={(value) =>
                      update(
                        "languages",
                        data.languages.map(
                          (item) =>
                            item.id ===
                              languageItem.id
                              ? {
                                ...item,
                                level: value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.languageLevelPlaceholder
                    }
                  />
                </div>
              </div>
            </div>
          )
        )}

        <AddButton
          onClick={() =>
            update("languages", [
              ...data.languages,
              {
                id: uid(),
                language: "",
                level: "",
              },
            ])
          }
          label={t.addLanguage}
        />
      </AccordionSection>
      <AccordionSection
        title={t.education}
        badge={data.education.length}
      >
        {data.education.map(
          (
            educationItem: Education,
            index: number
          ) => (
            <div
              key={educationItem.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {educationItem.institution ||
                    `${t.educationEntry} ${index + 1
                    }`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={data.education.length}
                    onMove={(direction) =>
                      update(
                        "education",
                        moveItem(
                          data.education,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "education",
                        data.education.filter(
                          (item) =>
                            item.id !==
                            educationItem.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-grid2">
                <div className="cv-form-field cv-form-field--full">
                  <FieldLabel>
                    {t.institution}
                  </FieldLabel>

                  <Input
                    value={
                      educationItem.institution
                    }
                    onChange={(value) =>
                      update(
                        "education",
                        data.education.map(
                          (item) =>
                            item.id ===
                              educationItem.id
                              ? {
                                ...item,
                                institution:
                                  value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.institutionPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.degree}
                  </FieldLabel>

                  <Input
                    value={
                      educationItem.degree
                    }
                    onChange={(value) =>
                      update(
                        "education",
                        data.education.map(
                          (item) =>
                            item.id ===
                              educationItem.id
                              ? {
                                ...item,
                                degree: value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.degreePlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.field}
                  </FieldLabel>

                  <Input
                    value={
                      educationItem.field ?? ""
                    }
                    onChange={(value) =>
                      update(
                        "education",
                        data.education.map(
                          (item) =>
                            item.id ===
                              educationItem.id
                              ? {
                                ...item,
                                field: value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.fieldPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.from}
                  </FieldLabel>

                  <Input
                    value={
                      educationItem.from
                    }
                    onChange={(value) =>
                      update(
                        "education",
                        data.education.map(
                          (item) =>
                            item.id ===
                              educationItem.id
                              ? {
                                ...item,
                                from: value,
                              }
                              : item
                        )
                      )
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.to}
                  </FieldLabel>

                  <Input
                    value={educationItem.to}
                    onChange={(value) =>
                      update(
                        "education",
                        data.education.map(
                          (item) =>
                            item.id ===
                              educationItem.id
                              ? {
                                ...item,
                                to: value,
                              }
                              : item
                        )
                      )
                    }
                  />
                </div>
              </div>
            </div>
          )
        )}

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
          label={t.addEducation}
        />
      </AccordionSection>

      <AccordionSection
        title={t.certificates}
        badge={data.certificates.length}
      >
        {data.certificates.map(
          (
            certificate: Certificate,
            index: number
          ) => (
            <div
              key={certificate.id}
              className="cv-form-repeat-item"
            >
              <div className="cv-form-repeat-header">
                <span className="cv-form-repeat-index">
                  {certificate.title ||
                    `${t.certificate} ${index + 1
                    }`}
                </span>

                <div className="cv-form-repeat-actions">
                  <MoveButtons
                    index={index}
                    length={
                      data.certificates.length
                    }
                    onMove={(direction) =>
                      update(
                        "certificates",
                        moveItem(
                          data.certificates,
                          index,
                          direction
                        )
                      )
                    }
                    {...moveProps}
                  />

                  <RemoveButton
                    label={t.remove}
                    onClick={() =>
                      update(
                        "certificates",
                        data.certificates.filter(
                          (item) =>
                            item.id !==
                            certificate.id
                        )
                      )
                    }
                  />
                </div>
              </div>

              <div className="cv-form-grid2">
                <div className="cv-form-field cv-form-field--full">
                  <FieldLabel>
                    {t.title}
                  </FieldLabel>

                  <Input
                    value={certificate.title}
                    onChange={(value) =>
                      update(
                        "certificates",
                        data.certificates.map(
                          (item) =>
                            item.id ===
                              certificate.id
                              ? {
                                ...item,
                                title: value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.certificatePlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.issuer}
                  </FieldLabel>

                  <Input
                    value={
                      certificate.issuer ?? ""
                    }
                    onChange={(value) =>
                      update(
                        "certificates",
                        data.certificates.map(
                          (item) =>
                            item.id ===
                              certificate.id
                              ? {
                                ...item,
                                issuer: value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.issuerPlaceholder
                    }
                  />
                </div>

                <div className="cv-form-field">
                  <FieldLabel>
                    {t.year}
                  </FieldLabel>

                  <Input
                    value={
                      certificate.year ?? ""
                    }
                    onChange={(value) =>
                      update(
                        "certificates",
                        data.certificates.map(
                          (item) =>
                            item.id ===
                              certificate.id
                              ? {
                                ...item,
                                year: value,
                              }
                              : item
                        )
                      )
                    }
                    placeholder={
                      t.yearPlaceholder
                    }
                  />
                </div>
              </div>
            </div>
          )
        )}

        <AddButton
          onClick={() =>
            update("certificates", [
              ...data.certificates,
              {
                id: uid(),
                title: "",
                issuer: "",
                year: "",
              },
            ])
          }
          label={t.addCertificate}
        />
      </AccordionSection>
    </div>
  );
}