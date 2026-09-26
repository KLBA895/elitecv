"use client";

import { useState } from "react";
import type {
  CoverLetterData,
  LetterLayout,
  LetterThemeColor,
} from "./types";

type Props = {
  data: CoverLetterData;
  onChange: (data: CoverLetterData) => void;
};

const inputClass =
  "mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 text-sm outline-none transition focus:border-[#C9A95A]";

export function AnalysisSection({ data, onChange }: Props) {
  const [isReadingPdf, setIsReadingPdf] = useState(false);
  const [pdfMessage, setPdfMessage] = useState("");
  const [isAnalysingJobAd, setIsAnalysingJobAd] = useState(false);
  const [analysisMessage, setAnalysisMessage] = useState("");

  const update = <K extends keyof CoverLetterData>(
    key: K,
    value: CoverLetterData[K]
  ) => {
    onChange({
      ...data,
      [key]: value,
    });
  };

  const handleJobPdfUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsReadingPdf(true);
      setPdfMessage("");
      setAnalysisMessage("");

      const response = await fetch("/api/parse-job-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        setPdfMessage("❌ PDF konnte nicht gelesen werden.");
        return;
      }

      const result = await response.json();

      if (result.text) {
        update("jobAd", result.text);
        setPdfMessage(
          `✅ ${file.name} wurde erfolgreich eingelesen.`
        );
      } else {
        setPdfMessage(
          "⚠️ Das PDF wurde gelesen, aber es konnte kein Text erkannt werden."
        );
      }
    } catch (error) {
      console.error(error);
      setPdfMessage("❌ PDF konnte nicht gelesen werden.");
    } finally {
      setIsReadingPdf(false);
      event.target.value = "";
    }
  };

  const analyseJobAd = async () => {
    const text = data.jobAd.trim();

    if (!text) {
      setAnalysisMessage(
        "⚠️ Bitte zuerst ein Stelleninserat hochladen oder einfügen."
      );
      return;
    }

    try {
      setIsAnalysingJobAd(true);
      setAnalysisMessage("");

      // Kurzer sichtbarer Status für den Benutzer
      await new Promise((resolve) => setTimeout(resolve, 500));

      const positionMatch =
        text.match(
          /(?:stelle als|position als|rolle als|bewerbung als|als)\s+([^\n,.]+)/i
        ) ||
        text.match(
          /(Projektleiter(?:in)?|Produktmanager(?:in)?|Projektmanager(?:in)?|Business Analyst|Controller(?:in)?|Sachbearbeiter(?:in)?|Berater(?:in)?|Consultant|Manager(?:in)?|Leiter(?:in)?)[^\n,.]*/i
        );

      const companyMatch =
        text.match(
          /([A-ZÄÖÜ][A-Za-zÄÖÜäöüß&\-\s]+(?:AG|GmbH|Bank|Versicherung|Verwaltung|Gruppe|Group|Kantonalbank))/
        ) ||
        text.match(/(?:bei|für)\s+([A-ZÄÖÜ][^\n,.]{2,60})/i);

      const extractedPosition =
        data.position ||
        positionMatch?.[1]?.trim() ||
        positionMatch?.[0]?.trim() ||
        "";

      const extractedCompany =
        data.company ||
        companyMatch?.[1]?.trim() ||
        companyMatch?.[0]?.trim() ||
        "";

      onChange({
        ...data,
        position: extractedPosition,
        company: extractedCompany,
      });

      setAnalysisMessage(
        "✅ Angaben aus dem Stelleninserat wurden übernommen."
      );
    } finally {
      setIsAnalysingJobAd(false);
    }
  };

  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#0A1F44]">
        Analyse
      </h2>

      <p className="mt-2 text-sm text-[#0A1F44]/65">
        Laden Sie zuerst das Stelleninserat hoch oder fügen Sie den Text
        direkt ein. EliteCV übernimmt daraus die wichtigsten Angaben.
      </p>

      {/* 1. STELLENINSERAT HOCHLADEN */}
      <div className="mt-6 rounded-2xl border border-[#C9A95A]/40 bg-[#FBF8EF] p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C9A95A] text-sm font-bold text-[#0A1F44]">
            1
          </div>

          <div>
            <p className="font-semibold text-[#0A1F44]">
              Stelleninserat als PDF hochladen
            </p>

            <p className="mt-1 text-sm leading-6 text-[#0A1F44]/65">
              Laden Sie das Stelleninserat als PDF hoch. Der Text wird
              automatisch eingelesen und in das Stelleninserat-Feld
              übernommen.
            </p>
          </div>
        </div>

        <label
          className={`mt-4 inline-flex cursor-pointer items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white transition ${isReadingPdf
            ? "cursor-not-allowed bg-[#0A1F44]/60"
            : "bg-[#0A1F44] hover:bg-[#12305f]"
            }`}
        >
          {isReadingPdf
            ? "⏳ PDF wird eingelesen..."
            : "📄 PDF auswählen"}

          <input
            type="file"
            accept="application/pdf"
            onChange={handleJobPdfUpload}
            className="hidden"
            disabled={isReadingPdf}
          />
        </label>

        {pdfMessage && (
          <p className="mt-3 text-sm font-medium text-[#0A1F44]/75">
            {pdfMessage}
          </p>
        )}
      </div>

      {/* 2. STELLENINSERAT TEXT */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1F5] text-sm font-bold text-[#0A1F44]">
            2
          </div>

          <p className="font-semibold text-[#0A1F44]">
            Stelleninserat prüfen
          </p>
        </div>

        <label className="mt-3 block">
          <span className="text-sm text-[#0A1F44]/65">
            Der erkannte PDF-Text erscheint hier automatisch. Alternativ
            können Sie ein Stelleninserat direkt einfügen.
          </span>

          <textarea
            rows={8}
            value={data.jobAd}
            onChange={(e) => {
              update("jobAd", e.target.value);
              setAnalysisMessage("");
            }}
            placeholder="Stelleninserat hier einfügen..."
            className={inputClass}
          />
        </label>
      </div>

      {/* 3. ANGABEN ÜBERNEHMEN */}
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EEF1F5] text-sm font-bold text-[#0A1F44]">
            3
          </div>

          <p className="font-semibold text-[#0A1F44]">
            Angaben übernehmen
          </p>
        </div>

        <button
          type="button"
          onClick={analyseJobAd}
          disabled={isAnalysingJobAd || !data.jobAd.trim()}
          className="mt-4 rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12305f] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isAnalysingJobAd
            ? "⏳ Inserat wird analysiert..."
            : analysisMessage.startsWith("✅")
              ? "✅ Angaben übernommen"
              : "📄 Angaben aus Inserat übernehmen"}
        </button>

        {analysisMessage && (
          <p className="mt-3 text-sm font-medium text-[#0A1F44]/70">
            {analysisMessage}
          </p>
        )}

        <p className="mt-2 text-xs leading-5 text-[#0A1F44]/55">
          Position und Unternehmen werden, soweit eindeutig erkennbar,
          automatisch übernommen. Sie können die Angaben anschliessend
          kontrollieren und korrigieren.
        </p>
      </div>

      {/* 4. ERKANNTE / MANUELLE ANGABEN */}
      <div className="mt-8 border-t border-[#0A1F44]/10 pt-6">
        <h3 className="text-lg font-semibold text-[#0A1F44]">
          Angaben zum Unternehmen und zur Stelle
        </h3>

        <p className="mt-1 text-sm text-[#0A1F44]/60">
          Kontrollieren oder ergänzen Sie die übernommenen Angaben.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label>
            <span className="text-sm font-medium">Zielposition</span>
            <input
              value={data.position}
              onChange={(e) => update("position", e.target.value)}
              className={inputClass}
              placeholder="Projektleiter"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Unternehmen</span>
            <input
              value={data.company}
              onChange={(e) => update("company", e.target.value)}
              className={inputClass}
              placeholder="Zürcher Kantonalbank"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Ansprechperson</span>
            <input
              value={data.contactPerson}
              onChange={(e) => update("contactPerson", e.target.value)}
              className={inputClass}
              placeholder="Frau Nimisha Kasamkattil"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Firmenstrasse</span>
            <input
              value={data.companyStreet}
              onChange={(e) => update("companyStreet", e.target.value)}
              className={inputClass}
              placeholder="Bahnhofstrasse 9"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Firmen-PLZ</span>
            <input
              value={data.companyZipCode}
              onChange={(e) => update("companyZipCode", e.target.value)}
              className={inputClass}
              placeholder="8001"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Firmenort</span>
            <input
              value={data.companyCity}
              onChange={(e) => update("companyCity", e.target.value)}
              className={inputClass}
              placeholder="Zürich"
            />
          </label>

          <label>
            <span className="text-sm font-medium">
              Absenderort / Datum-Ort
            </span>
            <input
              value={data.location}
              onChange={(e) => update("location", e.target.value)}
              className={inputClass}
              placeholder="Dietikon"
            />
          </label>

          <label>
            <span className="text-sm font-medium">Datum</span>
            <input
              value={data.date}
              onChange={(e) => update("date", e.target.value)}
              className={inputClass}
              placeholder="26.06.2026"
            />
          </label>
        </div>
      </div>

      {/* 5. DESIGN */}
      <div className="mt-8 border-t border-[#0A1F44]/10 pt-6">
        <h3 className="text-lg font-semibold text-[#0A1F44]">
          Design
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <label>
            <span className="text-sm font-medium">Farbe</span>
            <select
              value={data.themeColor}
              onChange={(e) =>
                update(
                  "themeColor",
                  e.target.value as LetterThemeColor
                )
              }
              className={inputClass}
            >
              <option value="gray">Grau</option>
              <option value="navy">Navy</option>
              <option value="blue">Blau</option>
              <option value="green">Grün</option>
              <option value="burgundy">Bordeaux</option>
              <option value="teal">Teal</option>
              <option value="charcoal">Anthrazit</option>
            </select>
          </label>

          <label>
            <span className="text-sm font-medium">Layout</span>
            <select
              value={data.layout}
              onChange={(e) =>
                update(
                  "layout",
                  e.target.value as LetterLayout
                )
              }
              className={inputClass}
            >
              <option value="professional">Professional</option>
              <option value="executive">Executive</option>
              <option value="modern">Modern</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}