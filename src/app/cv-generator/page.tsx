"use client";

import React, {
  useEffect,
  useRef,
  useState,
} from "react";

import { CVForm } from "../../../components/form/CVForm";
import { ProfessionalCVPreview } from "../../../components/cv-preview/SpitzyCVPreview";
import { ProfessionalTwoPageCV } from "../../../components/cv-preview/ProfessionalTwoPageCV";
import { sampleCVData } from "../../../data/sampleData";
import type { CVData } from "../../../types/cv";
import { CoverLetterGenerator } from "../../components/cover-letter/CoverLetterGenerator";

import "../../../components/form/CVForm.css";
import "../../../components/cv-preview/SpitzyCVPreview.css";
import "../../../components/cv-preview/ProfessionalTwoPageCV.css";
import "./cv-generator.css";

type Tab =
  | "form"
  | "split"
  | "letter"
  | "preview";

const ELITECV_STORAGE_KEY =
  "elitecv-generator-draft-v1";

export default function CVGeneratorPage() {
  const [accessGranted, setAccessGranted] =
    useState(false);

  const [accessCode, setAccessCode] =
    useState("");

  const [accessLevel, setAccessLevel] =
    useState<
      "professional" | "executive" | null
    >(null);

  const [
    hasEnglishAccess,
    setHasEnglishAccess,
  ] = useState(false);

  const [
    hasCoverLetterAccess,
    setHasCoverLetterAccess,
  ] = useState(false);

  const [
    isTranslating,
    setIsTranslating,
  ] = useState(false);

  const [
    isParsingCV,
    setIsParsingCV,
  ] = useState(false);

  const [
    importPreview,
    setImportPreview,
  ] = useState<any | null>(null);

  const [
    showImportedWork,
    setShowImportedWork,
  ] = useState(false);

  const [
    showImportedEducation,
    setShowImportedEducation,
  ] = useState(false);

  const [
    showImportedLanguages,
    setShowImportedLanguages,
  ] = useState(false);

  const [
    showImportedITSkills,
    setShowImportedITSkills,
  ] = useState(false);

  const [
    showImportedCertificates,
    setShowImportedCertificates,
  ] = useState(false);

  const [
    accessEmail,
    setAccessEmail,
  ] = useState("");

  const [
    isCheckingAccess,
    setIsCheckingAccess,
  ] = useState(false);

  const [
    accessError,
    setAccessError,
  ] = useState("");

  const [
    accessExpiresAt,
    setAccessExpiresAt,
  ] = useState<string | null>(null);

  const [cvData, setCVData] =
    useState<CVData>(sampleCVData);

  const [
    draftLoaded,
    setDraftLoaded,
  ] = useState(false);

  const [isAdmin, setIsAdmin] = useState(false);

  /*
   * Gespeicherten CV-Entwurf beim Öffnen laden.
   */
  useEffect(() => {
    try {
      const savedDraft =
        window.localStorage.getItem(
          ELITECV_STORAGE_KEY
        );

      if (savedDraft) {
        const parsedDraft =
          JSON.parse(savedDraft) as Partial<CVData>;

        setCVData((currentData) => ({
          ...currentData,
          ...parsedDraft,

          personal: {
            ...currentData.personal,
            ...(parsedDraft.personal ?? {}),
          },

          profile: {
            ...currentData.profile,
            ...(parsedDraft.profile ?? {}),
          },

          workExperience:
            parsedDraft.workExperience ??
            currentData.workExperience,

          volunteerExperience:
            parsedDraft.volunteerExperience ??
            currentData.volunteerExperience,

          strengths:
            parsedDraft.strengths ??
            currentData.strengths,

          achievements:
            parsedDraft.achievements ??
            currentData.achievements,

          keyAchievements:
            parsedDraft.keyAchievements ??
            currentData.keyAchievements,

          projects:
            parsedDraft.projects ??
            currentData.projects,

          education:
            parsedDraft.education ??
            currentData.education,

          certificates:
            parsedDraft.certificates ??
            currentData.certificates,

          languages:
            parsedDraft.languages ??
            currentData.languages,

          itSkills:
            parsedDraft.itSkills ??
            currentData.itSkills,

          skillGroups:
            parsedDraft.skillGroups ??
            currentData.skillGroups,

          hardSkills:
            parsedDraft.hardSkills ??
            currentData.hardSkills,

          softSkills:
            parsedDraft.softSkills ??
            currentData.softSkills,

          usps:
            parsedDraft.usps ??
            currentData.usps,
        }));
      }
    } catch (error) {
      console.error(
        "Gespeicherter EliteCV-Entwurf konnte nicht geladen werden:",
        error
      );
    } finally {
      setDraftLoaded(true);
    }
  }, []);

  /*
   * CV-Daten nach Änderungen automatisch lokal speichern.
   */
  useEffect(() => {
    if (!draftLoaded) {
      return;
    }

    const saveTimer =
      window.setTimeout(() => {
        try {
          window.localStorage.setItem(
            ELITECV_STORAGE_KEY,
            JSON.stringify(cvData)
          );
        } catch (error) {
          console.error(
            "EliteCV-Entwurf konnte nicht gespeichert werden:",
            error
          );
        }
      }, 600);

    return () => {
      window.clearTimeout(saveTimer);
    };
  }, [cvData, draftLoaded]);

  const [cvLanguage, setCvLanguage] =
    useState<"de" | "en">("de");

  const [uiLanguage, setUiLanguage] =
    useState<"de" | "en">("de");

  const [tab, setTab] =
    useState<Tab>("split");

  const previewRef =
    useRef<HTMLDivElement>(null);

  const [showImportedProjects, setShowImportedProjects] =
    useState(false);

  useEffect(() => {
    const savedAccess =
      localStorage.getItem("elitecv_access");

    const savedEnglish =
      localStorage.getItem("elitecv_english");

    const savedCoverLetter =
      localStorage.getItem(
        "elitecv_cover_letter"
      );

    const savedAdmin =
      localStorage.getItem("elitecv_admin");

    const savedEmail =
      localStorage.getItem(
        "elitecv_access_email"
      );

    const savedExpiresAt =
      localStorage.getItem(
        "elitecv_access_expires_at"
      );

    if (
      savedAccess === "professional" ||
      savedAccess === "executive"
    ) {
      setAccessLevel(savedAccess);
      setHasEnglishAccess(
        savedEnglish === "granted"
      );
      setHasCoverLetterAccess(
        savedCoverLetter === "granted"
      );
      setIsAdmin(
        savedAdmin === "granted"
      );
      setAccessEmail(savedEmail ?? "");
      setAccessExpiresAt(
        savedExpiresAt ?? null
      );
      setAccessGranted(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "elitecv_ui_language",
      uiLanguage
    );
  }, [uiLanguage]);

  const cvFileName = `${cvData.personal.firstName}_${cvData.personal.lastName}_EliteCV_${cvData.layout}`
    .replace(/\s+/g, "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");
  const handlePrint = () => {
    const printContent = previewRef.current?.innerHTML;
    if (!printContent) return;

    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    const styles = Array.from(document.styleSheets)
      .map((sheet) => {
        try {
          return Array.from(sheet.cssRules)
            .map((rule) => rule.cssText)
            .join("\n");
        } catch {
          return "";
        }
      })
      .join("\n");

    printWindow.document.write(`
          <!DOCTYPE html>
          <html lang="de">
            <head>
              <meta charset="UTF-8" />
              <title>${cvFileName}</title>
        
              <style>
        ${styles}
        
        .cv-root {
          box-shadow: none !important;
          width: 210mm !important;
          min-height: 297mm !important;
          margin: 0 auto !important;
          transform: none !important;
        }
        
        .cv-header {
          background: var(--cv-theme-color, #1E3A5F) !important;
          color: #ffffff !important;
          padding: 28px 32px 22px !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: flex-end !important;
          gap: 24px !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        .cv-name,
        .cv-target-title,
        .cv-header-contact {
          color: #ffffff !important;
        }
        
        .cv-photo-placeholder {
          width: 38mm !important;
          height: 38mm !important;
          border-radius: 50% !important;
        }
        
        .cv-photo-img {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          border-radius: 50% !important;
        }
        
        .cv-body {
          display: grid !important;
          grid-template-columns: 72mm 1fr !important;
        }
        
        .cv-sidebar {
          background: #f1f5f9 !important;
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        .cv-main {
          background: white !important;
        }
        
        .cv-root * {
          -webkit-print-color-adjust: exact !important;
          print-color-adjust: exact !important;
        }
        
        .elitecv-doc {
          display: block !important;
          gap: 0 !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        
        .elitecv-page {
          box-shadow: none !important;
          transform: none !important;
        }
        
        .elitecv-page:last-child {
          page-break-after: auto;
          break-after: auto;
        }
        
        .elitecv-sidebar {
          -webkit-print-color-adjust: exact;
          print-color-adjust: exact;
        }
        
        .cv-side-section,
        .cv-usp-item,
        .cv-skill-group,
        .cv-cert-item {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
        
        .cv-work-entry {
          break-inside: auto !important;
          page-break-inside: auto !important;
        }
        
        .cv-main-section {
          break-inside: auto !important;
          page-break-inside: auto !important;
        }
        
        .cv-footer {
          break-inside: avoid !important;
          page-break-inside: avoid !important;
        }
              </style>
        
            </head>
        
            <body style="--cv-theme-color: ${currentThemeColor};">
              ${printContent}
            </body>
          </html>
        `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
  };

  const themeColors: Record<CVData["themeColor"], string> = {
    gray: "#7f7f7f",
    blue: "#1E3A5F",
    navy: "#0A1F44",
    green: "#2F5D50",
    burgundy: "#6B1F2B",
    teal: "#0F766E",
    charcoal: "#374151",
  };

  const currentThemeColor = themeColors[cvData.themeColor] ?? "#1E3A5F";
  const uiText = {
    de: {
      editor: "CV-Editor",
      cv: "CV",
      preview: "CV-Vorschau",
      coverLetter: "Motivationsschreiben",
      coverLetterLocked:
        "Das Motivationsschreiben ist in diesem Paket nicht enthalten.",
      demo: "Demo",
      importCv: "CV importieren",
      importingCv: "CV wird ausgelesen...",
      translateToEnglish: "🇬🇧 CV auf Englisch",
      translateToGerman: "🇩🇪 CV auf Deutsch",
      translating: "Bitte warten...",
      exportPdf: "CV als PDF exportieren",
      layout: "Layout:",
      available: "Verfügbar",
      executiveLocked:
        "Executive nur mit Executive-Zugang",
      livePreview: "Live-Vorschau · A4",
    },

    en: {
      editor: "CV Editor",
      cv: "CV",
      preview: "CV Preview",
      coverLetter: "Cover Letter",
      coverLetterLocked:
        "The cover letter is not included in this package.",
      demo: "Demo",
      importCv: "Import CV",
      importingCv: "Importing CV...",
      translateToEnglish: "🇬🇧 Translate CV to English",
      translateToGerman: "🇩🇪 Translate CV to German",
      translating: "Please wait...",
      exportPdf: "Export CV as PDF",
      layout: "Layout:",
      available: "Available",
      executiveLocked:
        "Executive requires Executive access",
      livePreview: "Live Preview · A4",
    },
  }[uiLanguage];

  if (!accessGranted) {
    const validateAccess = async () => {
      const normalizedCode = accessCode.trim();
      const normalizedEmail = accessEmail.trim().toLowerCase();

      if (!normalizedCode || !normalizedEmail) {
        setAccessError(
          "Bitte Zugangscode und E-Mail-Adresse vollständig eingeben."
        );
        return;
      }

      try {
        setIsCheckingAccess(true);
        setAccessError("");

        const response = await fetch("/api/access/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            code: normalizedCode,
            email: normalizedEmail,
          }),
        });

        const result = await response.json();

        if (!response.ok) {
          setAccessError(
            typeof result.error === "string"
              ? result.error
              : "Der Zugang konnte nicht freigeschaltet werden."
          );
          return;
        }

        const accessLevel =
          result.accessLevel === "executive"
            ? "executive"
            : "professional";

        const englishAccess =
          Boolean(result.englishAccess);

        const coverLetterAccess =
          Boolean(result.coverLetterAccess);

        const adminAccess =
          result.isAdmin === true;

        const expiresAt =
          typeof result.expiresAt === "string" &&
            result.expiresAt.trim()
            ? result.expiresAt
            : null;

        localStorage.setItem(
          "elitecv_access",
          accessLevel
        );

        localStorage.setItem(
          "elitecv_english",
          englishAccess ? "granted" : "denied"
        );

        localStorage.setItem(
          "elitecv_cover_letter",
          coverLetterAccess
            ? "granted"
            : "denied"
        );

        localStorage.setItem(
          "elitecv_access_email",
          normalizedEmail
        );

        localStorage.setItem(
          "elitecv_admin",
          adminAccess ? "granted" : "denied"
        );

        if (expiresAt) {
          localStorage.setItem(
            "elitecv_access_expires_at",
            expiresAt
          );
        } else {
          localStorage.removeItem(
            "elitecv_access_expires_at"
          );
        }

        setAccessLevel(accessLevel);

        if (accessLevel !== "executive") {
          setCVData((current) => ({
            ...current,
            layout: "professional",
          }));
        }

        setHasEnglishAccess(englishAccess);
        setHasCoverLetterAccess(coverLetterAccess);
        setAccessExpiresAt(expiresAt);
        setIsAdmin(adminAccess);
        setAccessGranted(true);
      } catch (error) {
        console.error("Zugangsprüfung fehlgeschlagen:", error);

        setAccessError(
          "Die Zugangsprüfung ist fehlgeschlagen. Bitte erneut versuchen."
        );
      } finally {
        setIsCheckingAccess(false);
      }
    };

    return (
      <div className="cvgen-access">
        <h1>EliteCV Generator</h1>

        <div className="cvgen-access-badge">
          EliteCV Premium
        </div>

        <p>
          <strong>
            Persönlicher Zugang erforderlich
            <br />
            Personal Access Required
          </strong>
        </p>

        <p>
          Dieser Zugangscode wird nach Zahlungseingang individuell erstellt.
          <br />
          Bitte geben Sie Ihren persönlichen EliteCV-Zugangscode ein.
        </p>

        <p>
          This access code is generated individually after payment.
          <br />
          Please enter your personal EliteCV access code.
        </p>

        <input
          type="email"
          value={accessEmail}
          onChange={(event) => setAccessEmail(event.target.value)}
          placeholder="E-Mail-Adresse / Email address"
          autoComplete="email"
        />

        <input
          type="password"
          value={accessCode}
          onChange={(event) => setAccessCode(event.target.value)}
          placeholder="Persönlicher Zugangscode / Personal Access Code"
          autoComplete="one-time-code"
        />

        <button
          type="button"
          disabled={isCheckingAccess}
          onClick={validateAccess}
        >
          {isCheckingAccess
            ? "Zugang wird geprüft..."
            : "Zugang freischalten / Unlock Access"}
        </button>
        {accessError && (
          <p className="cvgen-access-error" role="alert">
            {accessError}
          </p>
        )}
      </div>
    );
  }

  const translateCv = async (targetLanguage: "de" | "en") => {
    try {
      setIsTranslating(true);

      /*
      * Das Foto kann als sehr langer Base64-String gespeichert sein.
      * Es wird für die Übersetzung nicht benötigt und deshalb nicht
      * an die API geschickt.
      */
      const cvDataForTranslation = {
        ...cvData,

        personal: {
          ...cvData.personal,
          photo: "",
        },
      };

      const response = await fetch("/api/translate-cv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cvData: cvDataForTranslation,
          targetLanguage,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("CV translation failed:", result);
        alert(
          typeof result.error === "string"
            ? result.error
            : "Übersetzung fehlgeschlagen."
        );
        return;
      }

      if (!result.cvData) {
        alert("Es wurde keine übersetzte CV-Version zurückgegeben.");
        return;
      }

      setCVData((current) => ({
        ...result.cvData,

        layout: current.layout,
        themeColor: current.themeColor,
        firstPageExperienceCount:
          current.firstPageExperienceCount,
        bulletPointCount:
          current.bulletPointCount,

        personal: {
          ...result.cvData.personal,
          photo: current.personal.photo,
        },
      }));

      setCvLanguage(targetLanguage);
    } catch (error) {
      console.error("CV translation failed:", error);
      alert("Übersetzung fehlgeschlagen.");
    } finally {
      setIsTranslating(false);
    }
  };

  const handleCVUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const isDocx =
      file.type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ||
      file.name.toLowerCase().endsWith(".docx");

    const isPdf =
      file.type === "application/pdf" ||
      file.name.toLowerCase().endsWith(".pdf");

    if (!isDocx && !isPdf) {
      alert(
        "Bitte laden Sie einen Lebenslauf als Word-Datei (.docx) oder PDF hoch."
      );

      event.target.value = "";
      return;
    }

    try {
      setIsParsingCV(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/parse-cv-ai", {
        method: "POST",
        body: formData,
      });

      const text = await response.text();

      let result: any = {};

      try {
        result = text ? JSON.parse(text) : {};
      } catch {
        result = {};
      }

      if (!response.ok) {
        console.warn("parse-cv-ai Fehler:", text);

        alert(
          result.error ||
          text ||
          `CV konnte nicht ausgelesen werden. Status: ${response.status}`
        );

        return;
      }

      if (!result.cvData) {
        alert("Es konnten keine CV-Daten erkannt werden.");
        return;
      }

      setImportPreview(result.cvData);
      setTab("split");

      alert("CV wurde analysiert. Bitte prüfen Sie die erkannten Daten.");
    } catch (error) {
      console.error("CV upload failed:", error);
      alert("Beim Hochladen ist ein Fehler aufgetreten.");
    } finally {
      setIsParsingCV(false);
      event.target.value = "";
    }
  };

  const applyImportPreview = () => {
    if (!importPreview) return;

    const importedAchievements = (
      importPreview.achievements || []
    ).filter(
      (item: any) =>
        item?.metric?.trim() || item?.text?.trim()
    );

    const importedStrengths = (
      importPreview.strengths || []
    ).filter(
      (item: any) =>
        item?.label?.trim() || item?.description?.trim()
    );

    setCVData((current) => ({
      ...current,

      personal: {
        ...current.personal,

        firstName:
          importPreview.personal?.firstName ||
          current.personal.firstName,

        lastName:
          importPreview.personal?.lastName ||
          current.personal.lastName,

        email:
          importPreview.personal?.email ||
          current.personal.email,

        phone:
          importPreview.personal?.phone ||
          current.personal.phone,

        location:
          importPreview.personal?.location ||
          current.personal.location,

        linkedin:
          importPreview.personal?.linkedin ||
          current.personal.linkedin,

        targetTitle:
          importPreview.personal?.targetTitle ||
          current.personal.targetTitle,

        /*
        * Zusatzpositionen und Branchenlisten werden beim Import
        * nicht automatisch in den Header übernommen.
        */
        targetPosition: "",
        targetIndustry: "",

        photo: current.personal.photo,
      },

      profile: importPreview.profile || {
        rawText: "",
        why: "",
        how: "",
        what: "",
      },

      strengths: importedStrengths,
      achievements: importedAchievements,

      workExperience:
        importPreview.workExperience || [],

      volunteerExperience:
        importPreview.volunteerExperience || [],

      education:
        importPreview.education || [],

      certificates:
        importPreview.certificates || [],

      languages:
        importPreview.languages || [],

      itSkills:
        importPreview.itSkills || [],

      projects:
        importPreview.projects || [],

      usps: importedAchievements.map(
        (
          achievement: {
            id?: string;
            metric?: string;
            text?: string;
          },
          index: number
        ) => ({
          id: achievement.id || `usp-${index + 1}`,
          title:
            achievement.metric ||
            `Karriere-Highlight ${index + 1}`,
          description: achievement.text || "",
        })
      ),

      skillGroups: [],
      hardSkills: [],
      softSkills: [],
    }));

    setImportPreview(null);
    setShowImportedWork(false);
    setShowImportedEducation(false);
    setShowImportedLanguages(false);
    setShowImportedITSkills(false);
    setShowImportedCertificates(false);
    setShowImportedProjects(false);

    alert(
      "Die erkannten CV-Daten wurden übernommen. Bitte alle Inhalte und Zeiträume sorgfältig prüfen."
    );
  };

  return (
    <div className="cvgen-page">
      <header className="cvgen-topbar">
        <div className="cvgen-topbar-left">
          <span className="cvgen-logo">
            EliteCV Generator
          </span>

          <span className="cvgen-badge">
            Beta
          </span>
        </div>

        <div
          className="cvgen-language-switch"
          aria-label="Interface language"
        >
          <button
            type="button"
            className={`cvgen-language-option ${uiLanguage === "de"
              ? "cvgen-language-option--active"
              : ""
              }`}
            onClick={() => setUiLanguage("de")}
            aria-pressed={uiLanguage === "de"}
            title="Deutsch"
          >
            DE
          </button>

          <button
            type="button"
            className={`cvgen-language-option ${uiLanguage === "en"
              ? "cvgen-language-option--active"
              : ""
              }`}
            onClick={() => setUiLanguage("en")}
            aria-pressed={uiLanguage === "en"}
            title="English"
          >
            EN
          </button>
        </div>

        <nav className="cvgen-tabs">
          <button
            type="button"
            className={`cvgen-tab ${tab === "form"
              ? "cvgen-tab--active"
              : ""
              }`}
            onClick={() => setTab("form")}
          >
            {uiText.editor}
          </button>

          <button
            type="button"
            className={`cvgen-tab ${tab === "split"
              ? "cvgen-tab--active"
              : ""
              }`}
            onClick={() => setTab("split")}
          >
            {uiText.cv}
          </button>

          <button
            type="button"
            className={`cvgen-tab ${tab === "preview"
              ? "cvgen-tab--active"
              : ""
              }`}
            onClick={() => setTab("preview")}
          >
            {uiText.preview}
          </button>

          {hasCoverLetterAccess ? (
            <button
              type="button"
              className={`cvgen-tab ${tab === "letter"
                ? "cvgen-tab--active"
                : ""
                }`}
              onClick={() => setTab("letter")}
            >
              {uiText.coverLetter}
            </button>
          ) : (
            <button
              type="button"
              className="cvgen-tab"
              onClick={() =>
                alert(
                  `🔒 ${uiText.coverLetterLocked}`
                )
              }
            >
              🔒 {uiText.coverLetter}
            </button>
          )}
        </nav>

        <div className="cvgen-topbar-actions">
          {isAdmin && (
            <span className="cvgen-admin-badge">
              👑 Administrator ▾
            </span>
          )}
          <button
            type="button"
            className="cvgen-btn cvgen-btn--secondary"
            onClick={() =>
              setCVData({
                ...sampleCVData,
                layout:
                  accessLevel === "executive"
                    ? sampleCVData.layout
                    : "professional",
                volunteerExperience:
                  sampleCVData.volunteerExperience ?? [],
              })
            }
          >
            {uiText.demo}
          </button>

          <button
            type="button"
            className="cvgen-btn cvgen-btn--secondary"
            onClick={() => {
              const confirmed = window.confirm(
                uiLanguage === "de"
                  ? "Möchten Sie den gespeicherten CV-Entwurf wirklich löschen? Alle aktuell eingegebenen Daten werden zurückgesetzt."
                  : "Do you really want to delete the saved CV draft? All current entries will be reset."
              );

              if (!confirmed) {
                return;
              }

              window.localStorage.removeItem(
                ELITECV_STORAGE_KEY
              );

              setCVData({
                ...sampleCVData,
                layout:
                  accessLevel === "executive"
                    ? sampleCVData.layout
                    : "professional",
              });

              setImportPreview(null);
              setShowImportedWork(false);
              setShowImportedEducation(false);
              setShowImportedLanguages(false);
              setShowImportedITSkills(false);
              setShowImportedCertificates(false);
            }}
          >
            {uiLanguage === "de"
              ? "Entwurf löschen"
              : "Delete draft"}
          </button>

          <input
            id="existing-cv-upload"
            type="file"
            accept=".docx,.pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf"
            style={{ display: "none" }}
            onChange={handleCVUpload}
          />

          <button
            type="button"
            className="cvgen-btn cvgen-btn--secondary"
            disabled={isParsingCV}
            onClick={() =>
              document
                .getElementById(
                  "existing-cv-upload"
                )
                ?.click()
            }
          >
            {isParsingCV
              ? uiText.importingCv
              : uiText.importCv}
          </button>

          {hasEnglishAccess && (
            <button
              type="button"
              className="cvgen-btn cvgen-btn--secondary"
              disabled={isTranslating}
              onClick={() =>
                translateCv(
                  cvLanguage === "de"
                    ? "en"
                    : "de"
                )
              }
            >
              {isTranslating
                ? uiText.translating
                : cvLanguage === "de"
                  ? uiText.translateToEnglish
                  : uiText.translateToGerman}
            </button>
          )}

          <button
            type="button"
            className="cvgen-btn cvgen-btn--primary"
            onClick={handlePrint}
          >
            {uiText.exportPdf}
          </button>
        </div>
      </header>

      <div className="cvgen-save-status">
        <span>✓</span>

        <span>
          {uiLanguage === "de"
            ? "Ihre Eingaben werden automatisch auf diesem Gerät gespeichert."
            : "Your entries are saved automatically on this device."}
        </span>
      </div>

      <div
        style={{
          marginTop: "10px",
          marginBottom: "16px",
          fontSize: "13px",
          color: "#64748b",
        }}
      >
        📄 Unterstützte Formate: <strong>DOCX</strong> und <strong>PDF</strong>
        (max. 10 MB)
      </div>

      {importPreview && (
        <div className="cvgen-import-preview">
          <h3>✅ Lebenslauf erfolgreich analysiert</h3>
          <p className="cvgen-import-note">
            Bitte prüfen Sie die automatisch erkannten Informationen sorgfältig, bevor
            Sie diese in Ihren Lebenslauf übernehmen.
          </p>

          <div className="cvgen-import-preview-list">
            <p>
              ✅ <strong>Name:</strong>{" "}
              {importPreview.personal?.firstName}{" "}
              {importPreview.personal?.lastName}
            </p>

            <p>
              ✅ <strong>Telefon:</strong>{" "}
              {importPreview.personal?.phone || "Nicht erkannt"}
            </p>

            <p>
              ✅ <strong>E-Mail:</strong>{" "}
              {importPreview.personal?.email || "Nicht erkannt"}
            </p>

            <p>
              ✅ <strong>Ort:</strong>{" "}
              {importPreview.personal?.location || "Nicht erkannt"}
            </p>

            <p>
              ✅ <strong>LinkedIn:</strong>{" "}
              {importPreview.personal?.linkedin || "Nicht erkannt"}
            </p>

            <p>
              ✅ <strong>Jobtitel:</strong>{" "}
              {importPreview.personal?.targetTitle || "Nicht erkannt"}
            </p>
          </div>

          <div className="cvgen-import-analysis">
            <div className="cvgen-import-summary">
              <h4>🤖 EliteCV KI-Analyse</h4>

              <div className="cvgen-import-summary-grid">
                <div className="cvgen-summary-card">
                  <strong>
                    {importPreview.workExperience?.length || 0}
                  </strong>
                  <span>Berufsstationen</span>
                </div>

                <div className="cvgen-summary-card">
                  <strong>
                    {importPreview.education?.length || 0}
                  </strong>
                  <span>Ausbildungen</span>
                </div>

                <div className="cvgen-summary-card">
                  <strong>
                    {importPreview.certificates?.length || 0}
                  </strong>
                  <span>Zertifikate</span>
                </div>

                <div className="cvgen-summary-card">
                  <strong>
                    {importPreview.languages?.length || 0}
                  </strong>
                  <span>Sprachen</span>
                </div>

                <div className="cvgen-summary-card">
                  <strong>
                    {importPreview.itSkills?.length || 0}
                  </strong>
                  <span>IT-Kenntnisse</span>
                </div>

                <div className="cvgen-summary-card">
                  <strong>
                    {importPreview.projects?.length || 0}
                  </strong>
                  <span>Projekte</span>
                </div>
              </div>

              <div className="cvgen-import-success">
                ✅ Die KI hat Ihren Lebenslauf erfolgreich analysiert und die erkannten Daten
                automatisch strukturiert.
              </div>
            </div>

            <h4>Detailanalyse</h4>

            <div className="cvgen-analysis-row">
              <span>🟢 Kontaktdaten</span>
              <span>Vollständig erkannt</span>
            </div>

            <button
              type="button"
              className="cvgen-analysis-row cvgen-analysis-row--clickable"
              onClick={() => setShowImportedWork((value) => !value)}
            >
              <span>🟡 Berufserfahrung</span>
              <span>
                {importPreview.workExperience?.length || 0} Stellen erkannt{" "}
                {showImportedWork ? "▲" : "▼"}
              </span>
            </button>

            {showImportedWork && importPreview.workExperience?.length > 0 && (
              <div className="cvgen-import-work-list">
                {importPreview.workExperience.map((job: any, index: number) => (
                  <div
                    key={job.id || index}
                    className="cvgen-import-work-item"
                  >
                    <strong>
                      {job.functionTitle || "Funktion nicht erkannt"}
                    </strong>

                    <span>
                      {job.company || "Unternehmen nicht erkannt"}
                    </span>

                    <small>
                      {job.from || "?"} – {job.to || "?"}
                    </small>
                  </div>
                ))}
              </div>
            )}

            <button
              type="button"
              className="cvgen-analysis-row cvgen-analysis-row--clickable"
              onClick={() =>
                setShowImportedEducation((value) => !value)
              }
            >
              <span>🟡 Ausbildung</span>

              <span>
                {importPreview.education?.length || 0} Einträge erkannt{" "}
                {showImportedEducation ? "▲" : "▼"}
              </span>
            </button>

            {showImportedEducation &&
              importPreview.education?.length > 0 && (
                <div className="cvgen-import-work-list">
                  {importPreview.education.map(
                    (edu: any, index: number) => (
                      <div
                        key={edu.id || index}
                        className="cvgen-import-work-item"
                      >
                        <strong>
                          {edu.degree || "Abschluss nicht erkannt"}
                        </strong>

                        {edu.field && <span>{edu.field}</span>}

                        {edu.institution && (
                          <span>{edu.institution}</span>
                        )}

                        {(edu.from || edu.to) && (
                          <small>
                            {edu.from || "?"} – {edu.to || "?"}
                          </small>
                        )}
                      </div>
                    )
                  )}
                </div>
              )}

            <button
              type="button"
              className="cvgen-analysis-row cvgen-analysis-row--clickable"
              onClick={() =>
                setShowImportedLanguages((value) => !value)
              }
            >
              <span>🟡 Sprachen</span>

              <span>
                {importPreview.languages?.length || 0} erkannt{" "}
                {showImportedLanguages ? "▲" : "▼"}
              </span>
            </button>

            {showImportedLanguages &&
              importPreview.languages?.length > 0 && (
                <div className="cvgen-import-work-list">
                  {importPreview.languages.map(
                    (language: any, index: number) => (
                      <div
                        key={language.id || index}
                        className="cvgen-import-work-item"
                      >
                        <strong>
                          {language.language || "Sprache nicht erkannt"}
                        </strong>

                        <span>
                          {language.level || "Niveau nicht erkannt"}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}

            <button
              type="button"
              className="cvgen-analysis-row cvgen-analysis-row--clickable"
              onClick={() =>
                setShowImportedITSkills((value) => !value)
              }
            >
              <span>🟡 IT-Kenntnisse</span>

              <span>
                {importPreview.itSkills?.length || 0} erkannt{" "}
                {showImportedITSkills ? "▲" : "▼"}
              </span>
            </button>

            {showImportedITSkills &&
              importPreview.itSkills?.length > 0 && (
                <div className="cvgen-import-work-list">
                  {importPreview.itSkills.map(
                    (skill: any, index: number) => (
                      <div
                        key={skill.id || index}
                        className="cvgen-import-work-item"
                      >
                        <strong>
                          {skill.name || "Kenntnis nicht erkannt"}
                        </strong>

                        {skill.level && <span>{skill.level}</span>}
                      </div>
                    )
                  )}
                </div>
              )}

            {importPreview.projects?.length > 0 && (
              <>
                <button
                  type="button"
                  className="cvgen-analysis-row cvgen-analysis-row--clickable"
                  onClick={() =>
                    setShowImportedProjects((value) => !value)
                  }
                >
                  <span>🟡 Projekte</span>

                  <span>
                    {importPreview.projects.length} erkannt{" "}
                    {showImportedProjects ? "▲" : "▼"}
                  </span>
                </button>

                {showImportedProjects && (
                  <div className="cvgen-import-work-list">
                    {importPreview.projects.map(
                      (project: any, index: number) => (
                        <div
                          key={project.id || index}
                          className="cvgen-import-work-item"
                        >
                          <strong>{project.title || "Projekt"}</strong>

                          {project.role && (
                            <span>{project.role}</span>
                          )}
                        </div>
                      )
                    )}
                  </div>
                )}
              </>
            )}

            <button
              type="button"
              className="cvgen-analysis-row cvgen-analysis-row--clickable"
              onClick={() =>
                setShowImportedCertificates((value) => !value)
              }
            >
              <span>
                {importPreview.certificates?.length > 0
                  ? "🟡"
                  : "⚪"}{" "}
                Zertifikate
              </span>

              <span>
                {importPreview.certificates?.length || 0} erkannt{" "}
                {showImportedCertificates ? "▲" : "▼"}
              </span>
            </button>

            {showImportedCertificates &&
              importPreview.certificates?.length > 0 && (
                <div className="cvgen-import-work-list">
                  {importPreview.certificates.map(
                    (certificate: any, index: number) => (
                      <div
                        key={certificate.id || index}
                        className="cvgen-import-work-item"
                      >
                        <strong>
                          {certificate.title || "Zertifikat"}
                        </strong>

                        <span>
                          {certificate.issuer || ""}
                        </span>

                        {(certificate.date ||
                          certificate.from ||
                          certificate.to ||
                          certificate.year) && (
                            <small>
                              {certificate.date ||
                                [certificate.from, certificate.to]
                                  .filter(Boolean)
                                  .join(" – ") ||
                                certificate.year}
                            </small>
                          )}
                      </div>
                    )
                  )}
                </div>
              )}

            <p className="cvgen-import-note">
              Die erkannten Angaben werden in den CV übernommen. Bitte prüfen Sie
              insbesondere Zeiträume, Tätigkeiten, Ausbildung, Weiterbildungen,
              Sprachen, Projekte und Resultate.
            </p>

            <div className="cvgen-import-preview-actions">
              <button type="button" onClick={applyImportPreview}>
                ✓ CV-Daten übernehmen
              </button>

              <button
                type="button"
                onClick={() => {
                  setImportPreview(null);
                  setShowImportedWork(false);
                  setShowImportedEducation(false);
                  setShowImportedLanguages(false);
                  setShowImportedITSkills(false);
                  setShowImportedCertificates(false);
                  setShowImportedProjects(false);
                }}
              >
                Abbrechen
              </button>
            </div>
          </div>
        </div>
      )}


      <div className="cvgen-layout-bar">
        <span className="cvgen-layout-label">
          {uiText.layout}
        </span>

        {(
          [
            ["professional", "EliteCV Professional"],
            ["executive", "EliteCV Executive"],
          ] as [CVData["layout"], string][]
        ).map(([value, label]) => (
          <button
            key={value}
            className={`cvgen-layout-chip ${cvData.layout === value ? "cvgen-layout-chip--active" : ""
              }`}
            onClick={() => {
              if (
                value === "executive" &&
                accessLevel !== "executive"
              ) {
                return;
              }

              setCVData((currentData: CVData) => ({
                ...currentData,
                layout: value,
              }));
            }}

            title={
              value === "executive" &&
                accessLevel !== "executive"
                ? uiText.executiveLocked
                : uiText.available
            }
          >
            {label}
          </button>
        ))}
      </div>
      <div className="cvgen-color-picker">
        {(
          [
            ["gray", "#7f7f7f"],
            ["blue", "#1E3A5F"],
            ["navy", "#0A1F44"],
            ["green", "#2F5D50"],
            ["burgundy", "#6B1F2B"],
            ["teal", "#0F766E"],
            ["charcoal", "#374151"],
          ] as [CVData["themeColor"], string][]
        ).map(([value, color]) => (
          <button
            key={value}
            type="button"
            className={`cvgen-color-dot ${cvData.themeColor === value
              ? "cvgen-color-dot--active"
              : ""
              }`}
            style={{ backgroundColor: color }}
            onClick={() =>
              setCVData((currentData: CVData) => ({
                ...currentData,
                themeColor: value,
              }))
            }
            aria-label={`Farbe ${value} auswählen`}
          />
        ))}
      </div>

      <main
        className={`cvgen-main ${tab === "split"
          ? "cvgen-main--split"
          : tab === "form"
            ? "cvgen-main--form"
            : "cvgen-main--preview"
          }`}
      >
        {(tab === "form" || tab === "split") && (
          <div className="cvgen-form-panel">
            <CVForm
              data={cvData}
              onChange={setCVData}
              language={uiLanguage}
            />
          </div>
        )}

        {tab === "letter" && hasCoverLetterAccess && (
          <div className="cvgen-form-panel">
            <CoverLetterGenerator
              letterPreviewRef={previewRef}
              initialThemeColor={cvData.themeColor}
              initialLayout={
                cvData.layout === "executive"
                  ? "executive"
                  : "professional"
              }
            />
          </div>
        )}

        {(tab === "preview" || tab === "split") && (
          <div className="cvgen-preview-panel">
            <div className="cvgen-preview-toolbar">
              <span className="cvgen-preview-label">
                {uiText.livePreview}
              </span>

              <span className="cvgen-preview-hint">
                {cvData.personal.firstName}{" "}
                {cvData.personal.lastName} –{" "}
                {cvData.personal.targetTitle}
              </span>
            </div>

            <div className="cvgen-preview-scaler">
              <div
                ref={previewRef}
                style={{
                  ["--cv-theme-color" as string]:
                    currentThemeColor,
                }}
              >
                {cvData.layout === "professional" ? (
                  <ProfessionalTwoPageCV
                    data={cvData}
                    language={cvLanguage}
                  />
                ) : (
                  <ProfessionalCVPreview
                    data={cvData}
                    language={cvLanguage}
                  />
                )}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}