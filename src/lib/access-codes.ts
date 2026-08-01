import crypto from "crypto";

const CODE_ALPHABET = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function normalizeAccessCode(code: string): string {
  return code
    .trim()
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, "");
}

export function normalizeEmail(email: string): string {
  return email.trim().toLowerCase();
}

export function generateAccessCode(): string {
  const randomPart = Array.from({ length: 10 }, () => {
    const randomIndex = crypto.randomInt(0, CODE_ALPHABET.length);
    return CODE_ALPHABET[randomIndex];
  }).join("");

  return `ECV-${randomPart.slice(0, 5)}-${randomPart.slice(5)}`;
}

export function hashAccessCode(code: string): string {
  const pepper = process.env.ACCESS_CODE_PEPPER;

  if (!pepper) {
    throw new Error("ACCESS_CODE_PEPPER fehlt in .env.local.");
  }

  const normalizedCode = normalizeAccessCode(code);

  return crypto
    .createHmac("sha256", pepper)
    .update(normalizedCode)
    .digest("hex");
}