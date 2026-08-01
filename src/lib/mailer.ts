import nodemailer from "nodemailer";

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

if (!smtpHost) {
  throw new Error("SMTP_HOST fehlt.");
}

if (!smtpUser) {
  throw new Error("SMTP_USER fehlt.");
}

if (!smtpPass) {
  throw new Error("SMTP_PASS fehlt.");
}

export const mailTransporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

export const mailFrom = `"EliteCV" <${smtpUser}>`;