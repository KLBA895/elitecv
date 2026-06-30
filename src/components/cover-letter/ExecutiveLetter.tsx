"use client";

import React from "react";
import type { CoverLetterData } from "./types";
import { THEME_COLORS } from "@/theme/themeColors";
import {
  buildGreeting,
  buildSubject,
  getSenderAddress,
  getSenderName,
} from "./utils";

type Props = {
  data: CoverLetterData;
  previewRef?: React.RefObject<HTMLDivElement | null>;
};

const splitParagraphs = (text: string) =>
  text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

    import { LETTER_THEME_COLORS } from "./theme";

export function ExecutiveLetter({ data, previewRef }: Props) {
  const subject = buildSubject(data);
  const greeting = buildGreeting(data);
  const senderName = getSenderName(data);
  const senderAddress = getSenderAddress(data);
  const themeColor =
  THEME_COLORS[data.themeColor] ?? THEME_COLORS.gray;

  const locationDate = [data.location, data.date].filter(Boolean).join(", ");
  const companyAddress = [data.companyZipCode, data.companyCity]
    .filter(Boolean)
    .join(" ");

  const hasRecipient =
    data.company || data.contactPerson || data.companyStreet || companyAddress;

  const bodyParagraphs = [
    data.why,
    data.howExperience,
    data.howAchievements,
    data.howSkills,
    data.whatValue,
    data.whatClosing,
  ].filter((item) => item.trim());

  return (
    <div
      ref={previewRef}
      className="elitecv-letter-page h-[297mm] w-[210mm] overflow-hidden bg-white shadow-xl"
    >
      <header
        className="flex h-[58mm] items-center justify-between px-[14mm] text-white"
        style={{ backgroundColor: themeColor }}
      >
        <div className="flex items-center gap-[8mm]">
          <div className="flex h-[40mm] w-[40mm] shrink-0 items-center justify-center overflow-hidden rounded-full border-2 border-white/90 text-[9px] font-semibold tracking-[0.16em]">
            {data.photo ? (
              <img
                src={data.photo}
                alt="Bewerbungsfoto"
                className="h-full w-full object-cover"
                style={{ objectPosition: "center 20%" }}
              />
            ) : (
              <span>FOTO</span>
            )}
          </div>

          <div>
            {senderName && (
              <h1 className="text-[25px] font-extrabold leading-tight tracking-[-0.03em]">
                {senderName}
              </h1>
            )}
            {data.position && (
              <p className="mt-1 text-[13px] font-semibold text-white/85">
                {data.position}
              </p>
            )}
          </div>
        </div>

        <div className="max-w-[62mm] space-y-1 text-right text-[11.5px] leading-5 text-white/90">
          {data.senderEmail && <p className="break-all">{data.senderEmail}</p>}
          {data.senderPhone && <p>{data.senderPhone}</p>}
          {senderAddress && <p>{senderAddress}</p>}
          {data.senderLinkedin && <p className="break-all">{data.senderLinkedin}</p>}
        </div>
      </header>

      <main
        className="px-[18mm] py-[14mm] text-[#151922]"
        style={{
          hyphens: "auto",
          WebkitHyphens: "auto",
          msHyphens: "auto",
        }}
      >
        <div className="flex items-start justify-between gap-[16mm] text-[12.5px] leading-5 text-[#151922]/75">
          {hasRecipient ? (
            <div>
              {data.company && (
                <p className="font-semibold text-[#151922]">{data.company}</p>
              )}
              {data.contactPerson && <p>{data.contactPerson}</p>}
              {data.companyStreet && <p>{data.companyStreet}</p>}
              {companyAddress && <p>{companyAddress}</p>}
            </div>
          ) : (
            <div />
          )}

          {locationDate && (
            <p className="min-w-[45mm] text-right text-[#151922]/70">
              {locationDate}
            </p>
          )}
        </div>

        <h2 className="mt-[12mm] border-b border-[#151922]/20 pb-3 text-[20px] font-extrabold leading-snug tracking-[-0.02em] text-[#0A1F44]">
          {subject}
        </h2>

        <div className="mt-[7mm] text-[12.5px] leading-[1.58] text-[#151922] text-justify">
          <p>{greeting}</p>

          <div className="mt-[5mm] space-y-[4.2mm]">
            {bodyParagraphs.length > 0 ? (
              bodyParagraphs.flatMap(splitParagraphs).map((paragraph, index) => (
                <p key={`${paragraph}-${index}`}>{paragraph}</p>
              ))
            ) : (
              <p className="text-[#151922]/45">
                Sobald Sie Ihre Angaben erfassen, erscheint hier Ihr professionelles
                Motivationsschreiben.
              </p>
            )}
          </div>

          <div className="mt-[8mm]">
            <p>{data.language === "de" ? "Freundliche Grüsse" : "Kind regards"}</p>
            {senderName && <p className="mt-[5mm] font-semibold">{senderName}</p>}
          </div>
        </div>
      </main>
    </div>
  );
}