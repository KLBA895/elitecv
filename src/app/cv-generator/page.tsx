"use client";

import React, { useEffect, useRef, useState } from "react";

import { CVForm } from "../../../components/form/CVForm";
import { ProfessionalCVPreview } from "../../../components/cv-preview/SpitzyCVPreview";
import { sampleCVData } from "../../../data/sampleData";
import type { CVData } from "../../../types/cv";
import { CoverLetterGenerator } from "../../components/cover-letter/CoverLetterGenerator";

import "../../../components/form/CVForm.css";
import "../../../components/cv-preview/SpitzyCVPreview.css";
import "./cv-generator.css";
import { ProfessionalTwoPageCV } from "../../../components/cv-preview/ProfessionalTwoPageCV";
import "../../../components/cv-preview/ProfessionalTwoPageCV.css";


type Tab = "form" | "split" | "letter" | "preview";

export default function CVGeneratorPage() {
  const ACCESS_CODES = {
    "PRO-7K92A": { level: "professional", english: false },
    "PRO-9MXT1": { level: "professional", english: true },
    "EXEC-5TYL8": { level: "executive", english: false },
    "EXEC-8RPA2": { level: "executive", english: true },
  } as const;

  const [accessGranted, setAccessGranted] = useState(false);
  const [accessCode, setAccessCode] = useState("");
  const [accessLevel, setAccessLevel] = useState<"professional" | "executive" | null>(null);
  const [hasEnglishAccess, setHasEnglishAccess] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const [isParsingCV, setIsParsingCV] = useState(false);
  const [importPreview, setImportPreview] = useState<any | null>(null);

  useEffect(() => {
    const storedAccess = localStorage.getItem("elitecv_access");
    const storedEnglish = localStorage.getItem("elitecv_english");

    if (storedAccess === "professional" || storedAccess === "executive") {
      setAccessGranted(true);
      setAccessLevel(storedAccess);
    }

    if (storedEnglish === "granted") {
      setHasEnglishAccess(true);
    }
  }, []);

  const [cvData, setCVData] = useState<CVData>(sampleCVData);
  const [cvLanguage, setCvLanguage] = useState<"de" | "en">("de");
  const [tab, setTab] = useState<Tab>("split");
  const [layout, setLayout] = useState<"executive" | "classic">("executive");
  const previewRef = useRef<HTMLDivElement>(null);


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
  @page {
    size: A4;
    margin: 0;
  }
    .elitecv-timeline {
  position: relative !important;
  margin-left: 0 !important;
  padding-left: 26px !important;
  overflow: visible !important;
}

.elitecv-timeline::before {
  content: "" !important;
  position: absolute !important;
  left: 5px !important;
  top: 2px !important;
  bottom: 8px !important;
  width: 2px !important;
  background: #173a56 !important;
  display: block !important;
  z-index: 1 !important;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

.elitecv-job {
  position: relative !important;
  overflow: visible !important;
}

.elitecv-job-dot {
  position: absolute !important;
  left: -25px !important;
  top: 7px !important;
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background: #173a56 !important;
  border: 2px solid #173a56 !important;
  z-index: 999 !important;
  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

.elitecv-job-dot {
  z-index: 2 !important;
}
.elitecv-timeline::before {
  content: "" !important;
  position: absolute !important;
  left: 5px !important;
  top: 2px !important;
  bottom: 8px !important;
  width: 2px !important;
  background: #173a56 !important;
  display: block !important;
}

.elitecv-job {
  position: relative !important;
}

.elitecv-job-dot {
  position: absolute !important;
  left: -25px !important;
  top: 7px !important;

  width: 10px !important;
  height: 10px !important;

  border-radius: 50% !important;

  background: #173a56 !important;
  border: 2px solid #173a56 !important;

  z-index: 999 !important;

  -webkit-print-color-adjust: exact !important;
  print-color-adjust: exact !important;
}

.elitecv-timeline::before {
  z-index: 1 !important;
}

  html,
body {
  margin: 0;
  padding: 0;
  background: #ffffff;
  width: 210mm;
}

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

  if (!accessGranted) {

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
          type="password"
          value={accessCode}
          onChange={(e) => setAccessCode(e.target.value)}
          placeholder="Persönlicher Zugangscode / Personal Access Code"
        />

        <button
          type="button"
          onClick={() => {
            const code = accessCode.trim().toUpperCase();
            const access = ACCESS_CODES[code as keyof typeof ACCESS_CODES];

            if (!access) {
              alert("Ungültiger Zugangscode.\n\nInvalid access code.");
              return;
            }

            localStorage.setItem("elitecv_access", access.level);
            localStorage.setItem(
              "elitecv_english",
              access.english ? "granted" : "denied"
            );

            setAccessLevel(access.level);
            setHasEnglishAccess(access.english);
            setAccessGranted(true);
          }}
        >
          Zugang freischalten / Unlock Access
        </button>
      </div>
    );
  }

  const translateCvToEnglish = async () => {
    try {
      setIsTranslating(true);

      const response = await fetch("/api/translate-cv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cvData }),
      });

      if (!response.ok) {
        alert("Übersetzung fehlgeschlagen.");
        return;
      }

      const result = await response.json();

      if (result.cvData) {
        setCVData(result.cvData);
        setCvLanguage("en");
      }
    } catch (error) {
      console.error(error);
      alert("Übersetzung fehlgeschlagen.");
    } finally {
      setIsTranslating(false);
    }
  };
  const handleCVUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (!file) return;

    if (
      file.type !==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      alert("Bitte laden Sie zuerst nur eine Word-Datei (.docx) hoch.");
      event.target.value = "";
      return;
    }

    try {
      setIsParsingCV(true);

      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("/api/parse-cv", {
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
        alert(result.error || `CV konnte nicht ausgelesen werden. Status: ${response.status}`);
        return;
      }
      if (!result.cvData) {
        alert("Es konnten keine CV-Daten erkannt werden.");
        return;
      }

      setImportPreview(result.cvData);
      console.log("Ausgelesener CV-Text:", result.extractedText);
      console.log("Übernommene CV-Daten:", result.cvData);

      setTab("split");

      alert("Kontaktdaten wurden übernommen. Inhalte bitte prüfen und manuell ergänzen.");
    } catch (error) {
      console.error(error);
      alert("Beim Hochladen ist ein Fehler aufgetreten.");
    } finally {
      setIsParsingCV(false);
      event.target.value = "";
    }
  };
  const applyImportPreview = () => {
    if (!importPreview) return;

    setCVData((current) => ({
      ...current,

      personal: {
        ...current.personal,

        firstName:
          importPreview.personal?.firstName || current.personal.firstName,

        lastName:
          importPreview.personal?.lastName || current.personal.lastName,

        email:
          importPreview.personal?.email || current.personal.email,

        phone:
          importPreview.personal?.phone || current.personal.phone,

        location:
          importPreview.personal?.location || current.personal.location,

        linkedin:
          importPreview.personal?.linkedin || current.personal.linkedin,

        targetTitle:
          importPreview.personal?.targetTitle || current.personal.targetTitle,

        targetPosition: current.personal.targetPosition,
        targetIndustry: current.personal.targetIndustry,
        photo: current.personal.photo,
      },
    }));

    setImportPreview(null);
    alert("Kontaktdaten wurden übernommen.");
  };

  return (
    <div className="cvgen-page">
      <header className="cvgen-topbar">
        <div className="cvgen-topbar-left">
          <span className="cvgen-logo">EliteCV Generator</span>
          <span className="cvgen-badge">Beta</span>
        </div>

        <nav className="cvgen-tabs">
          <button
            className={`cvgen-tab ${tab === "form" ? "cvgen-tab--active" : ""}`}
            onClick={() => setTab("form")}
          >
            CV-Editor
          </button>

          <button
            className={`cvgen-tab ${tab === "split" ? "cvgen-tab--active" : ""}`}
            onClick={() => setTab("split")}
          >
            CV
          </button>

          <button
            className={`cvgen-tab ${tab === "preview" ? "cvgen-tab--active" : ""}`}
            onClick={() => setTab("preview")}
          >
            CV-Vorschau
          </button>

          <button
            type="button"
            className="cvgen-tab"
            onClick={() =>
              alert("🔒 Das Motivationsschreiben ist in diesem Paket nicht enthalten.")
            }
          >
            🔒 Motivationsschreiben
          </button>
        </nav>

        <div className="cvgen-topbar-actions">
          <button
            className="cvgen-btn cvgen-btn--secondary"
            onClick={() => setCVData(sampleCVData)}
          >
            Demo
          </button>
          <input
            id="existing-cv-upload"
            type="file"
            accept=".docx"
            style={{ display: "none" }}
            onChange={handleCVUpload}
          />

          <button
            type="button"
            className="cvgen-btn cvgen-btn--secondary"
            disabled={isParsingCV}
            onClick={() => document.getElementById("existing-cv-upload")?.click()}
          >
            {isParsingCV ? "CV wird ausgelesen..." : "CV importieren"}
          </button>

          {hasEnglishAccess && (
            <button
              type="button"
              className="cvgen-btn cvgen-btn--secondary"
              disabled={isTranslating}
              onClick={() => {
                if (cvLanguage === "de") {
                  translateCvToEnglish();
                } else {
                  setCVData(sampleCVData);
                  setCvLanguage("de");
                }
              }}
            >
              {isTranslating ? "Bitte warten..." : cvLanguage === "de" ? "EN Version" : "DE Version"}
            </button>
          )}

          <button className="cvgen-btn cvgen-btn--primary" onClick={handlePrint}>
            CV als PDF exportieren
          </button>
        </div>
      </header>

      {importPreview && (
        <div className="cvgen-import-preview">
          <h3>📄 Folgende Daten wurden erkannt</h3>

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

          <p className="cvgen-import-note">
            Aktuell werden nur Kontaktdaten übernommen. Profil, Berufserfahrung, Ausbildung und weitere Inhalte können danach manuell ergänzt werden.
          </p>
          <div className="cvgen-import-preview-actions">
            <button
              type="button"
              onClick={applyImportPreview}
            >
              ✓ Kontaktdaten übernehmen
            </button>

            <button
              type="button"
              onClick={() => setImportPreview(null)}
            >
              Abbrechen
            </button>
          </div>
        </div>
      )}
      <div className="cvgen-layout-bar">
        <span className="cvgen-layout-label">Layout:</span>

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
            onClick={() =>
              setCVData((currentData: CVData) => ({
                ...currentData,
                layout: value,
              }))
            }
            title={
              value === "executive" && accessLevel !== "executive"
                ? "Executive nur mit Executive-Zugang"
                : "Verfügbar"
            }
            disabled={
              value === "executive" && accessLevel !== "executive"
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
            className={`cvgen-color-dot ${cvData.themeColor === value ? "cvgen-color-dot--active" : ""
              }`}
            style={{ backgroundColor: color }}
            onClick={() =>
              setCVData((currentData: CVData) => ({
                ...currentData,
                themeColor: value,
              }))
            }
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
              language={cvLanguage}
            />
          </div>
        )}

        {tab === "letter" && (
          <div className="cvgen-form-panel">
            <CoverLetterGenerator
              letterPreviewRef={previewRef}
              initialThemeColor={cvData.themeColor}
              initialLayout={cvData.layout === "executive" ? "executive" : "professional"}
            />
          </div>
        )}

        {(tab === "preview" || tab === "split") && (
          <div className="cvgen-preview-panel">
            <div className="cvgen-preview-toolbar">
              <span className="cvgen-preview-label">
                Live-Vorschau · A4
              </span>

              <span className="cvgen-preview-hint">
                {cvData.personal.firstName} {cvData.personal.lastName} –{" "}
                {cvData.personal.targetTitle}
              </span>
            </div>

            <div className="cvgen-preview-scaler">
              <div
                ref={previewRef}
                style={{ ["--cv-theme-color" as string]: currentThemeColor }}
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