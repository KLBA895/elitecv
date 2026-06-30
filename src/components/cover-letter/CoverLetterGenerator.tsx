"use client";

import React, { useEffect, useRef, useState } from "react";


import type { AiAction, CoverLetterData } from "./types";
import { emptyCoverLetterData, getMockAtsScore } from "./utils";


import { AnalysisSection } from "./AnalysisSection";
import { WhySection } from "./WhySection";
import { HowSection } from "./HowSection";
import { WhatSection } from "./WhatSection";
import { PreviewSection } from "./PreviewSection";
import { AtsScore } from "./AtsScore";
import { toPng } from "html-to-image";
import jsPDF from "jspdf";

const inputClass =
  "mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-2.5 text-sm outline-none transition focus:border-[#C9A95A]";

  type Props = {
    letterPreviewRef?: React.RefObject<HTMLDivElement | null>;
    initialThemeColor?: CoverLetterData["themeColor"];
    initialLayout?: CoverLetterData["layout"];
  };
  
  export function CoverLetterGenerator({
    letterPreviewRef,
    initialThemeColor = "gray",
    initialLayout = "professional",
  }: Props) {
    const [data, setData] = useState<CoverLetterData>(() => ({
      ...emptyCoverLetterData(),
      themeColor: initialThemeColor,
      layout: initialLayout,
    }));
    useEffect(() => {
      setData((current) => ({
        ...current,
        themeColor: initialThemeColor,
      }));
    }, [initialThemeColor]);
    const handleGenerateFullLetter = async () => {
      try {
        setIsGeneratingLetter(true);
        setLetterGeneratedMessage(false);
        const response = await fetch("/api/cover-letter-ai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            action: "generateFullLetter",
            data: {
              language: data.language,
              position: data.position,
              company: data.company,
              jobAd: data.jobAd,
            },
          }),
        });
    
        if (!response.ok) {
          alert("Anschreiben konnte nicht erstellt werden.");
          return;
        }
    
        const result = await response.json();
    
        setData((current) => ({
          ...current,
          why: result.why || current.why,
          howExperience: result.howExperience || current.howExperience,
          howAchievements: result.howAchievements || current.howAchievements,
          howSkills: result.howSkills || current.howSkills,
          whatValue: result.whatValue || current.whatValue,
          whatClosing: result.whatClosing || current.whatClosing,
        }));
    
        setIsGenerated(true);
        setLetterGeneratedMessage(true);

setTimeout(() => {
  setLetterGeneratedMessage(false);
}, 2000);
} catch (error) {
  console.error(error);
  alert("Anschreiben konnte nicht erstellt werden.");
} finally {
  setIsGeneratingLetter(false);
}
};
    const handlePhotoUpload = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const file = event.target.files?.[0];
      if (!file) return;
    
      if (!file.type.startsWith("image/")) {
        alert("Bitte ein JPG- oder PNG-Bild auswählen.");
        return;
      }
    
      const reader = new FileReader();
    
      reader.onload = () => {
        setData((current) => ({
          ...current,
          photo: reader.result as string,
        }));
      };
    
      reader.readAsDataURL(file);
    };
  
    // Rest deiner Funktionen...

  const [isGenerated, setIsGenerated] = useState(false);
  const [isGeneratingLetter, setIsGeneratingLetter] = useState(false);
  const [letterGeneratedMessage, setLetterGeneratedMessage] = useState(false);
  const letterPrintRef = useRef<HTMLDivElement>(null);
  const handleLetterExport = async () => {
    if (!letterPrintRef.current) return;
  
    const node = letterPrintRef.current;
  
    const dataUrl = await toPng(node, {
      cacheBust: true,
      pixelRatio: 3,
      backgroundColor: "#ffffff",
      width: node.offsetWidth,
      height: node.offsetHeight,
    });
  
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
      compress: true,
    });
  
    pdf.addImage(dataUrl, "PNG", 0, 0, 210, 297);
  
    const senderName = [data.firstName, data.lastName]
      .filter(Boolean)
      .join("_")
      .replace(/\s+/g, "_")
      .replace(/[^a-zA-Z0-9_-]/g, "");
  
    pdf.save(
      senderName
        ? `${senderName}_EliteCV_Motivationsschreiben.pdf`
        : "EliteCV_Motivationsschreiben.pdf"
    );
  };

  const update = <K extends keyof CoverLetterData>(
    key: K,
    value: CoverLetterData[K]
  ) => {
    setData((current) => ({
      ...current,
      [key]: value,
    }));
  };  
  const handleAiAction = async (
    field: keyof CoverLetterData,
    action: AiAction
  ) => {
  
    console.log("AI gestartet", action, field);
  
    const currentValue = String(data[field] ?? "");
  
    try {
      const response = await fetch("/api/cover-letter-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action,
          field,
          text: currentValue,
          data: {
            language: data.language,
            position: data.position,
            company: data.company,
            jobAd: data.jobAd,
          },
        }),
      });
  
      if (!response.ok) {
        alert("KI-Überarbeitung fehlgeschlagen.");
        return;
      }
  
      const result = await response.json();
  
      if (result.text) {
        setData((current) => ({
          ...current,
          [field]: result.text,
        }));
      }
    } catch (error) {
      console.error(error);
      alert("KI-Überarbeitung fehlgeschlagen.");
    }
  };

  const score = getMockAtsScore(data);

  return (
    <div className="space-y-6">
      <section className="rounded-2xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm">
        <h1 className="text-3xl font-semibold tracking-[-0.02em] text-[#0A1F44]">
          EliteCV Motivationsschreiben
        </h1>

        <p className="mt-3 max-w-3xl text-sm leading-6 text-[#0A1F44]/70">
          Erstellen Sie ein professionelles Motivationsschreiben mit klarer
          WHY-HOW-WHAT-Struktur, ATS-Logik und überzeugender Positionierung.
        </p>

        <button
  type="button"
  onClick={handleGenerateFullLetter}
  disabled={isGeneratingLetter}
  className="mt-6 rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12305f] disabled:cursor-not-allowed disabled:opacity-60"
>
  {isGeneratingLetter
    ? "⏳ Anschreiben wird erstellt..."
    : letterGeneratedMessage
    ? "✅ Anschreiben erstellt"
    : "✨ Anschreiben automatisch erstellen"}
</button>

<div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
  <h2 className="text-xl font-semibold text-[#0A1F44]">
    Design Motivationsschreiben
  </h2>

  <div className="mt-4 flex flex-wrap gap-3">
    <button
      type="button"
      onClick={() =>
        setData((current) => ({
          ...current,
          layout: "professional",
        }))
      }
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
        data.layout === "professional"
          ? "bg-[#0A1F44] text-white"
          : "border border-[#0A1F44]/15 text-[#0A1F44]/70"
      }`}
    >
      EliteCV Professional
    </button>

    <button
      type="button"
      onClick={() =>
        setData((current) => ({
          ...current,
          layout: "executive",
        }))
      }
      className={`rounded-xl px-4 py-2 text-sm font-semibold transition ${
        data.layout === "executive"
          ? "bg-[#0A1F44] text-white"
          : "border border-[#0A1F44]/15 text-[#0A1F44]/70"
      }`}
    >
      EliteCV Executive
    </button>
  </div>
</div>
</section>

      <section className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-semibold text-[#0A1F44]">
          Persönliche Angaben
        </h2>

        <p className="mt-2 text-sm text-[#0A1F44]/65">
          Diese Angaben erscheinen links im EliteCV-Brieflayout.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">

        <div className="md:col-span-2">
  <p className="text-sm font-medium text-[#0A1F44]/85">
    Bewerbungsfoto
  </p>

  <div className="mt-3 flex flex-col gap-4 rounded-2xl border border-[#0A1F44]/10 bg-[#F8FAFC] p-5 md:flex-row md:items-center">
    <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-[#C9A95A]/60 bg-white text-xs font-semibold uppercase tracking-[0.16em] text-[#0A1F44]/45">
      {data.photo ? (
        <img
          src={data.photo}
          alt="Bewerbungsfoto"
          className="h-full w-full object-cover"
        />
      ) : (
        <span>Foto</span>
      )}
    </div>

    <div className="flex-1">
      <p className="text-sm font-semibold text-[#0A1F44]">
        {data.photo ? "Foto erfolgreich hochgeladen" : "Foto hochladen"}
      </p>

      <p className="mt-1 text-xs text-[#0A1F44]/60">
        JPG oder PNG. Das Foto erscheint automatisch in Vorschau und PDF.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <label className="cursor-pointer rounded-xl bg-[#0A1F44] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#12305f]">
          {data.photo ? "Foto ändern" : "Foto auswählen"}

          <input
            type="file"
            accept="image/png,image/jpeg,image/jpg"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>

        {data.photo && (
          <button
            type="button"
            onClick={() => update("photo", "")}
            className="rounded-xl border border-[#0A1F44]/15 px-4 py-2 text-sm font-semibold text-[#0A1F44]/70 transition hover:border-red-400 hover:text-red-600"
          >
            Foto entfernen
          </button>
        )}
      </div>
    </div>
  </div>
</div>

  <label className="text-sm font-medium text-[#0A1F44]/85">
    Vorname

    <input
      value={data.firstName}
      onChange={(event) => update("firstName", event.target.value)}
      className={inputClass}
    />
  </label>

          <label className="text-sm font-medium text-[#0A1F44]/85">
            Nachname
            <input
              value={data.lastName}
              onChange={(event) => update("lastName", event.target.value)}
              className={inputClass}
            />
          </label>

          <label className="text-sm font-medium text-[#0A1F44]/85">
            Strasse / Nr.
            <input
              value={data.street}
              onChange={(event) => update("street", event.target.value)}
              className={inputClass}
            />
          </label>

          <div className="grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
            <label className="text-sm font-medium text-[#0A1F44]/85">
              PLZ
              <input
                value={data.senderZipCode}
                onChange={(event) =>
                  update("senderZipCode", event.target.value)
                }
                className={inputClass}
              />
            </label>

            <label className="text-sm font-medium text-[#0A1F44]/85">
              Ort
              <input
                value={data.senderCity}
                onChange={(event) => update("senderCity", event.target.value)}
                className={inputClass}
              />
            </label>
          </div>

          <label className="text-sm font-medium text-[#0A1F44]/85">
            E-Mail
            <input
              type="email"
              value={data.senderEmail}
              onChange={(event) => update("senderEmail", event.target.value)}
              className={inputClass}
            />
          </label>

          <label className="text-sm font-medium text-[#0A1F44]/85">
            Telefon
            <input
              value={data.senderPhone}
              onChange={(event) => update("senderPhone", event.target.value)}
              className={inputClass}
            />
          </label>

          <label className="text-sm font-medium text-[#0A1F44]/85 md:col-span-2">
            LinkedIn
            <input
              value={data.senderLinkedin}
              onChange={(event) =>
                update("senderLinkedin", event.target.value)
              }
              placeholder="https://www.linkedin.com/in/..."
              className={inputClass}
            />
          </label>
        </div>
      </section>

      <AnalysisSection
  data={data}
  onChange={setData}
/>

<div className="mt-6">
</div>

      <HowSection
        data={data}
        onChange={setData}
        onAiAction={handleAiAction}
      />

      <WhatSection
        data={data}
        onChange={setData}
        onAiAction={handleAiAction}
      />

{isGenerated && (
  <div className="space-y-4">
    <div className="flex justify-end">
      <button
        type="button"
        onClick={handleLetterExport}
        className="rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12305f]"
      >
        Motivationsschreiben als PDF exportieren
      </button>
    </div>

    <div className="grid gap-6 xl:grid-cols-[0.85fr_1.15fr]">
      <AtsScore score={score} />
      <PreviewSection data={data} previewRef={letterPrintRef} />
    </div>
  </div>
)}
    </div>
  );
}