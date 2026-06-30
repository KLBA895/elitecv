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


export function ProfessionalLetter({ data, previewRef }: Props) {
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
      className="elitecv-letter-page grid h-[297mm] w-[210mm] grid-cols-[66mm_144mm] overflow-hidden bg-white shadow-xl"
    >
      <aside
        className="elitecv-letter-sidebar px-7 py-10 text-white"
        style={{ backgroundColor: themeColor }}
      >
        <div className="elitecv-letter-photo mx-auto mb-10 flex h-[40mm] w-[40mm] items-center justify-center overflow-hidden rounded-full border-2 border-white/90 text-[10px] font-semibold tracking-[0.16em]">
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

        {(senderName || data.street || senderAddress) && (
          <div className="space-y-1.5 text-[13px] leading-5">
            {senderName && (
              <p className="text-[16px] font-semibold leading-6">
                {senderName}
              </p>
            )}
            {data.street && <p>{data.street}</p>}
            {senderAddress && <p>{senderAddress}</p>}
          </div>
        )}

        {(data.senderEmail || data.senderPhone || data.senderLinkedin) && (
          <>
            <div className="elitecv-letter-divider my-8 h-[2px] w-20 bg-white" />

            <div className="space-y-2 text-[13px] leading-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">
                Kontakt
              </p>
              {data.senderEmail && (
                <p className="break-all text-[12px]">{data.senderEmail}</p>
              )}
              {data.senderPhone && <p>{data.senderPhone}</p>}
              {data.senderLinkedin && (
                <p className="break-all">{data.senderLinkedin}</p>
              )}
            </div>
          </>
        )}
      </aside>

      <main
        className="elitecv-letter-main px-11 py-9 text-[#151922]"
        style={{
          hyphens: "auto",
          WebkitHyphens: "auto",
          msHyphens: "auto",
        }}
      >
        {locationDate && (
          <p className="elitecv-letter-date text-right text-[13px] text-[#151922]/75">
            {locationDate}
          </p>
        )}

        <div className="elitecv-letter-content mt-10">
          {hasRecipient && (
            <div className="elitecv-letter-recipient mb-10 space-y-1 text-[13px] leading-5 text-[#151922]/80">
              {data.company && <p className="font-semibold">{data.company}</p>}
              {data.contactPerson && <p>{data.contactPerson}</p>}
              {data.companyStreet && <p>{data.companyStreet}</p>}
              {companyAddress && <p>{companyAddress}</p>}
            </div>
          )}

          <h1 className="elitecv-letter-subject text-[16px] font-bold leading-snug text-[#0A1F44]">
            {subject}
          </h1>

          <div className="elitecv-letter-body mt-6 text-[12.6px] leading-[1.62] text-[#151922] text-justify">
            <p>{greeting}</p>

            <div className="mt-5 space-y-4">
              {bodyParagraphs.length > 0 ? (
                bodyParagraphs.flatMap(splitParagraphs).map((paragraph, index) => (
                  <p key={`${paragraph}-${index}`}>{paragraph}</p>
                ))
              ) : (
                <p className="text-[#151922]/45">
                  Sobald Sie Ihre Angaben erfassen, erscheint hier Ihr
                  professionelles Motivationsschreiben.
                </p>
              )}
            </div>

            <div className="mt-7">
              <p>{data.language === "de" ? "Freundliche Grüsse" : "Kind regards"}</p>
              {senderName && <p className="mt-5 font-semibold">{senderName}</p>}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}