"use client";

import React, { useRef, useState } from "react";

import { CVForm } from "../../../components/form/CVForm";
import { ProfessionalCVPreview } from "../../../components/cv-preview/SpitzyCVPreview";
import { sampleCVData } from "../../../data/sampleData";
import type { CVData } from "../../../types/cv";

import "../../../components/form/CVForm.css";
import "../../../components/cv-preview/SpitzyCVPreview.css";
import "./cv-generator.css";

type Tab = "form" | "preview" | "split";

export default function CVGeneratorPage() {
  const [cvData, setCVData] = useState<CVData>(sampleCVData);
  const [tab, setTab] = useState<Tab>("split");
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
            @page { size: A4; margin: 0; }
            body { margin: 0; padding: 0; }
            ${styles}
            .cv-root { box-shadow: none; width: 100%; }
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
            disabled={value !== "professional"}
          >
            {label}
            {value !== "professional" && <span className="cvgen-soon">bald</span>}
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
                <ProfessionalCVPreview data={cvData} />
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}