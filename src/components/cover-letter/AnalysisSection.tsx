"use client";

import { useState } from "react";
import type {
  CoverLetterData,
  LetterLanguage,
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

      const response = await fetch("/api/parse-job-pdf", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        alert("PDF konnte nicht gelesen werden.");
        return;
      }

      const result = await response.json();

      if (result.text) {
        update("jobAd", result.text);
      }
    } catch (error) {
      console.error(error);
      alert("PDF konnte nicht gelesen werden.");
    } finally {
      setIsReadingPdf(false);
      event.target.value = "";
    }
  };

  const analyseJobAd = () => {
    const text = data.jobAd.trim();

    if (!text) {
      alert("Bitte zuerst ein Stelleninserat einfügen.");
      return;
    }

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
  };

  return (
    <section className="rounded-2xl border border-[#0A1F44]/10 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-semibold text-[#0A1F44]">Analyse</h2>

      <p className="mt-2 text-sm text-[#0A1F44]/65">
        Erfassen Sie die wichtigsten Informationen zur Stelle.
      </p>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <label>
          <span className="text-sm font-medium">Farbe</span>
          <select
            value={data.themeColor}
            onChange={(e) =>
              update("themeColor", e.target.value as LetterThemeColor)
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
            onChange={(e) => update("layout", e.target.value as LetterLayout)}
            className={inputClass}
          >
            <option value="professional">Professional</option>
            <option value="executive">Executive</option>
            <option value="modern">Modern</option>
          </select>
        </label>

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
          <span className="text-sm font-medium">Absenderort / Datum-Ort</span>
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

      <div className="mt-6 rounded-2xl border border-[#0A1F44]/10 bg-[#F8FAFC] p-5">
        <p className="text-sm font-semibold text-[#0A1F44]">
          Stelleninserat als PDF hochladen
        </p>

        <p className="mt-1 text-xs text-[#0A1F44]/60">
          Laden Sie ein PDF-Stelleninserat hoch. Der Text wird automatisch übernommen.
        </p>

        <label className="mt-4 inline-flex cursor-pointer rounded-xl bg-[#0A1F44] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#12305f]">
          {isReadingPdf ? "PDF wird gelesen..." : "PDF auswählen"}

          <input
            type="file"
            accept="application/pdf"
            onChange={handleJobPdfUpload}
            className="hidden"
            disabled={isReadingPdf}
          />
        </label>
      </div>

      <label className="mt-6 block">
        <span className="text-sm font-medium">Stelleninserat</span>

        <textarea
          rows={10}
          value={data.jobAd}
          onChange={(e) => update("jobAd", e.target.value)}
          placeholder="Stelleninserat hier einfügen..."
          className={inputClass}
        />
      </label>

      <button
        type="button"
        onClick={analyseJobAd}
        className="mt-4 rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#12305f]"
      >
        📄 Angaben aus Inserat übernehmen
      </button>

      <p className="mt-2 text-xs text-[#0A1F44]/55">
        Übernimmt, soweit erkennbar, Position und Unternehmen aus dem Inserat.
        Das Anschreiben wird separat mit KI erstellt.
      </p>
    </section>
  );
}