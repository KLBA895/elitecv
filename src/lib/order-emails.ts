import {
  mailFrom,
  mailTransporter,
} from "@/lib/mailer";

type SendOrderConfirmationEmailParams = {
  customerName: string;
  customerEmail: string;
  packageKey: string;
  language: string;
  addons: string[];
  totalAmount: number;
  accessCode: string | null;
  expiresAt: string | null;
  stripeSessionId: string;
};

const packageLabels: Record<string, string> = {
  generatorProfessional:
    "EliteCV Professional Generator",
  generatorExecutive:
    "EliteCV Executive Generator",
  cvCheck:
    "CV Check",
  cvExecutive:
    "CV Executive",
  premium:
    "Premium",
  elite:
    "Elite",
};

const addonLabels: Record<string, string> = {
  linkedin:
    "LinkedIn-Profil Optimierung",
  coverLetter:
    "Motivationsschreiben Erstellung",
  translation:
    "CV Übersetzung DE ↔ EN",
  referenceAnalysis:
    "Arbeitszeugnis Analyse",
  express:
    "Express-Bearbeitung 24h",
};

function getPackageLabel(packageKey: string) {
  return packageLabels[packageKey] ?? packageKey;
}

function getAddonLabels(addons: string[]) {
  return addons
    .map((addon) => addonLabels[addon] ?? addon)
    .filter(Boolean);
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency: "CHF",
  }).format(amount);
}

function formatExpiryDate(
  expiresAt: string | null
) {
  if (!expiresAt) {
    return null;
  }

  return new Intl.DateTimeFormat("de-CH", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "Europe/Zurich",
  }).format(new Date(expiresAt));
}

export async function sendOrderConfirmationEmails({
  customerName,
  customerEmail,
  packageKey,
  language,
  addons,
  totalAmount,
  accessCode,
  expiresAt,
  stripeSessionId,
}: SendOrderConfirmationEmailParams) {
  const packageLabel =
    getPackageLabel(packageKey);

  const selectedAddonLabels =
    getAddonLabels(addons);

  const addonsText =
    selectedAddonLabels.length > 0
      ? selectedAddonLabels.join("\n")
      : "Keine Zusatzleistungen";

  const expiryText =
    formatExpiryDate(expiresAt);

  const customerGreeting =
    customerName.trim()
      ? `Guten Tag ${customerName.trim()}`
      : "Guten Tag";

  const internalRecipient =
    process.env.CONTACT_TO;

  if (!customerEmail) {
    throw new Error(
      "Kunden-E-Mail für Bestätigung fehlt."
    );
  }

  if (!internalRecipient) {
    throw new Error(
      "CONTACT_TO fehlt."
    );
  }

  const accessCodeSection =
    accessCode
      ? `
Ihr Zugangscode:
${accessCode}

Gültig bis:
${expiryText ?? "Nicht angegeben"}

Bitte bewahren Sie den Zugangscode sicher auf.
`
      : `
Ihre Zahlung wurde erfolgreich bestätigt.

Die weitere Bearbeitung Ihres Auftrags erfolgt persönlich.
`;

  await mailTransporter.sendMail({
    from: mailFrom,
    to: customerEmail,
    subject:
      accessCode
        ? "Ihre EliteCV-Bestellung – persönlicher Zugangscode"
        : "Ihre EliteCV-Bestellung wurde bestätigt",
    text: `
${customerGreeting}

vielen Dank für Ihre Bestellung bei EliteCV.

Paket:
${packageLabel}

Sprache:
${language === "en" ? "Englisch" : "Deutsch"}

Zusatzleistungen:
${addonsText}

Gesamtbetrag:
${formatCurrency(totalAmount)}
${accessCodeSection}
Freundliche Grüsse

EliteCV
www.elitecv.ch
    `.trim(),
  });

  await mailTransporter.sendMail({
    from: mailFrom,
    to: internalRecipient,
    replyTo: customerEmail,
    subject:
      `Neue bezahlte Bestellung – ${packageLabel}`,

    text: `
      Neue bezahlte EliteCV-Bestellung
      
      Status:
      Bezahlt
      
      Name:
      ${customerName || "Nicht angegeben"}
      
      E-Mail:
      ${customerEmail}

Paket:
${packageLabel}

Paket-Key:
${packageKey}

Sprache:
${language}

Zusatzleistungen:
${addonsText}

Gesamtbetrag:
${formatCurrency(totalAmount)}

Zugangscode:
${accessCode || "Kein Zugangscode"}

Gültig bis:
${expiryText || "Nicht zutreffend"}

Stripe Session:
${stripeSessionId}
    `.trim(),
  });
}