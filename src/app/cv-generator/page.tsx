"use client";

import React, { useRef, useState } from "react";

import { CVForm } from "../../../components/form/CVForm";
import { ProfessionalCVPreview } from "../../../components/cv-preview/SpitzyCVPreview";
import { sampleCVData } from "../../../data/sampleData";
import type { CVData } from "../../../types/cv";

import "../../../components/form/CVForm.css";
import "../../../components/cv-preview/SpitzyCVPreview.css";
import "./cv-generator.css";
import { ProfessionalTwoPageCV } from "../../../components/cv-preview/ProfessionalTwoPageCV";
import "../../../components/cv-preview/ProfessionalTwoPageCV.css";
type Tab = "form" | "preview" | "split";

export default function CVGeneratorPage() {
  const [cvData, setCVData] = useState<CVData>(sampleCVData);
  const [tab, setTab] = useState<Tab>("split");
  const [layout, setLayout] = useState<"executive" | "classic">("executive");
  const previewRef = useRef<HTMLDivElement>(null);

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
          <title>${cvData.personal.firstName} ${cvData.personal.lastName} – CV</title>
          <style>
  @page {
    size: A4;
    margin: 0;
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
  box-shadow: none;
  width: 100%;
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
</style>
        </head>
        <body>${printContent}</body>
      </html>
    `);

    printWindow.document.close();
    printWindow.focus();

    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 400);
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
            Formular
          </button>

          <button
            className={`cvgen-tab ${tab === "split" ? "cvgen-tab--active" : ""}`}
            onClick={() => setTab("split")}
          >
            Split-Ansicht
          </button>

          <button
            className={`cvgen-tab ${tab === "preview" ? "cvgen-tab--active" : ""}`}
            onClick={() => setTab("preview")}
          >
            Vorschau
          </button>
        </nav>

        <div className="cvgen-topbar-actions">
          <button
            className="cvgen-btn cvgen-btn--secondary"
            onClick={() => setCVData(sampleCVData)}
          >
            Beispieldaten laden
          </button>

          <button className="cvgen-btn cvgen-btn--primary" onClick={handlePrint}>
            PDF exportieren
          </button>
        </div>
      </header>

      <div className="cvgen-layout-bar">
        <span className="cvgen-layout-label">Layout:</span>

        {(
          [
            ["professional", "EliteCV Professional"],
            ["executive", "EliteCV Executive"],
            ["swiss", "Swiss Professional"],
            ["ats", "ATS Professional"],
          ] as [CVData["layout"], string][]
        ).map(([value, label]) => (
          <button
            key={value}
            className={`cvgen-layout-chip ${
              cvData.layout === value ? "cvgen-layout-chip--active" : ""
            }`}
            onClick={() =>
              setCVData((currentData: CVData) => ({
                ...currentData,
                layout: value,
              }))
            }
            title={value === "professional" ? "Verfügbar" : "Bald verfügbar"}
            disabled={false}
          >
            {label}
          </button>
        ))}
      </div>

      <main
        className={`cvgen-main ${
          tab === "split"
            ? "cvgen-main--split"
            : tab === "form"
            ? "cvgen-main--form"
            : "cvgen-main--preview"
        }`}
      >
        {(tab === "form" || tab === "split") && (
          <div className="cvgen-form-panel">
            <CVForm data={cvData} onChange={setCVData} />
          </div>
        )}

        {(tab === "preview" || tab === "split") && (
          <div className="cvgen-preview-panel">
            <div className="cvgen-preview-toolbar">
              <span className="cvgen-preview-label">Live-Vorschau · A4</span>
              <span className="cvgen-preview-hint">
                {cvData.personal.firstName} {cvData.personal.lastName} –{" "}
                {cvData.personal.targetTitle}
              </span>
            </div>

            <div className="cvgen-preview-scaler">
              <div ref={previewRef}>
              {cvData.layout === "professional" ? (
  <ProfessionalTwoPageCV data={cvData} />
) : (
  <ProfessionalCVPreview data={cvData} />
)}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}