import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export const runtime = "nodejs";

type PlanKey =
  | "basic"
  | "generatorProfessional"
  | "generatorExecutive"
  | "professional"
  | "premium"
  | "elite";

type Language = "de" | "en";

type AddonKey =
  | "linkedin"
  | "coverLetter"
  | "translation"
  | "referenceAnalysis"
  | "express";

type CheckoutRequestBody = {
  customerName?: unknown;
  customerEmail?: unknown;
  planKey?: unknown;
  language?: unknown;
  addons?: unknown;
  message?: unknown;
  linkedinUrl?: unknown;
  termsAccepted?: unknown;
};

type ProductData = {
  name: string;
  price: number;
};

const PACKAGE_DATA: Record<PlanKey, ProductData> = {
  basic: {
    name: "CV Check",
    price: 7900,
  },
  generatorProfessional: {
    name: "EliteCV Professional Generator",
    price: 9900,
  },
  generatorExecutive: {
    name: "EliteCV Executive Generator",
    price: 14900,
  },
  professional: {
    name: "CV Executive",
    price: 17900,
  },
  premium: {
    name: "Premium",
    price: 24900,
  },
  elite: {
    name: "Elite",
    price: 39900,
  },
};

const ADDON_DATA: Record<AddonKey, ProductData> = {
  linkedin: {
    name: "LinkedIn-Profil Optimierung",
    price: 9900,
  },
  coverLetter: {
    name: "Motivationsschreiben Erstellung",
    price: 8900,
  },
  translation: {
    name: "CV Übersetzung DE ↔ EN",
    price: 5900,
  },
  referenceAnalysis: {
    name: "Arbeitszeugnis Analyse",
    price: 3900,
  },
  express: {
    name: "Express-Bearbeitung 24h",
    price: 5900,
  },
};

const VALID_PLAN_KEYS = Object.keys(PACKAGE_DATA) as PlanKey[];
const VALID_ADDON_KEYS = Object.keys(ADDON_DATA) as AddonKey[];

function isValidPlanKey(value: unknown): value is PlanKey {
  return (
    typeof value === "string" &&
    VALID_PLAN_KEYS.includes(value as PlanKey)
  );
}

function isValidLanguage(value: unknown): value is Language {
  return value === "de" || value === "en";
}

function isValidAddonKey(value: unknown): value is AddonKey {
  return (
    typeof value === "string" &&
    VALID_ADDON_KEYS.includes(value as AddonKey)
  );
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function cleanMetadataText(
  value: unknown,
  maxLength = 450
): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as CheckoutRequestBody;

    const customerName = cleanMetadataText(
      body.customerName,
      150
    );

    const customerEmail =
      typeof body.customerEmail === "string"
        ? body.customerEmail.trim().toLowerCase()
        : "";

    const language: Language = isValidLanguage(body.language)
      ? body.language
      : "de";

    const message = cleanMetadataText(body.message);

    const linkedinUrl = cleanMetadataText(
      body.linkedinUrl,
      300
    );

    const termsAccepted =
      body.termsAccepted === true;

    if (!customerName) {
      return NextResponse.json(
        {
          success: false,
          error: "Bitte geben Sie Ihren Namen ein.",
        },
        { status: 400 }
      );
    }

    if (!customerEmail || !isValidEmail(customerEmail)) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        },
        { status: 400 }
      );
    }

    if (!isValidPlanKey(body.planKey)) {
      return NextResponse.json(
        {
          success: false,
          error: "Das ausgewählte Paket ist ungültig.",
        },
        { status: 400 }
      );
    }

    if (!termsAccepted) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Bitte akzeptieren Sie die AGB, die Datenschutzbestimmungen und das Widerrufsrecht.",
        },
        { status: 400 }
      );
    }

    const planKey = body.planKey;
    const selectedPackage = PACKAGE_DATA[planKey];

    const submittedAddons = Array.isArray(body.addons)
      ? body.addons
      : [];

    const validAddons = [
      ...new Set(
        submittedAddons.filter(isValidAddonKey)
      ),
    ];

    const lineItems = [
      {
        quantity: 1,
        price_data: {
          currency: "chf",
          unit_amount: selectedPackage.price,
          product_data: {
            name: selectedPackage.name,
          },
        },
      },
    ];

    if (language === "en") {
      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "chf",
          unit_amount: 2900,
          product_data: {
            name: "Englische Version",
          },
        },
      });
    }

    for (const addonKey of validAddons) {
      const addon = ADDON_DATA[addonKey];

      lineItems.push({
        quantity: 1,
        price_data: {
          currency: "chf",
          unit_amount: addon.price,
          product_data: {
            name: addon.name,
          },
        },
      });
    }

    const siteUrl =
      process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");

    if (!siteUrl) {
      throw new Error(
        "NEXT_PUBLIC_SITE_URL ist nicht konfiguriert."
      );
    }

    const hasCoverLetterAccess =
      planKey === "generatorExecutive" ||
      validAddons.includes("coverLetter");

    const hasEnglishAccess =
      language === "en" ||
      validAddons.includes("translation");

    const accessLevel =
      planKey === "generatorExecutive"
        ? "executive"
        : planKey === "generatorProfessional"
          ? "professional"
          : "none";

    const session =
      await stripe.checkout.sessions.create({
        mode: "payment",

        payment_method_types: ["card", "twint"],

        customer_email: customerEmail,

        line_items: lineItems,

        metadata: {
          source: "elitecv_order",
          customer_name: customerName,
          customer_email: customerEmail,

          plan_key: planKey,
          access_level: accessLevel,

          language,
          addons: validAddons.join(","),

          message,
          linkedin_url: linkedinUrl,

          terms_accepted: "true",
          terms_accepted_at: new Date().toISOString(),

          english_access: String(hasEnglishAccess),
          cover_letter_access: String(hasCoverLetterAccess),
        },

        success_url:
          `${siteUrl}/zahlung-erfolgreich` +
          "?session_id={CHECKOUT_SESSION_ID}",

        cancel_url:
          `${siteUrl}/zahlung-abgebrochen`,
      });

    if (!session.url) {
      throw new Error(
        "Stripe hat keine Checkout-URL zurückgegeben."
      );
    }

    return NextResponse.json({
      success: true,
      checkoutUrl: session.url,
      sessionId: session.id,
    });
  } catch (error) {
    console.error("Stripe Checkout Fehler:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          error instanceof Error
            ? error.message
            : "Stripe Checkout konnte nicht erstellt werden.",
      },
      { status: 500 }
    );
  }
}