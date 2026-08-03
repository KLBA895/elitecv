"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  Briefcase,
  Clock,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";

type Lang = "de" | "en";

const content = {
  de: {
    back: "← Zurück zu EliteCV",
    badge: "EliteCV Support",
    title: "Kontakt",
    intro:
      "Haben Sie Fragen zu unseren Dienstleistungen, Ihrer Bestellung oder zum EliteCV Generator? Nutzen Sie das Kontaktformular oder kontaktieren Sie uns direkt.",
    directContact: "Direkter Kontakt",
    directText:
      "Wir beantworten Anfragen zu Paketen, Bestellungen und technischen Fragen in der Regel innerhalb von 1–2 Werktagen.",
    contactPerson: "Ansprechpartner",
    owner: "Inhaber von EliteCV",
    email: "E-Mail",
    phone: "Telefon",
    businessAddress: "Geschäftsadresse",
    responseTime: "Antwortzeit",
    responseText: "In der Regel innerhalb von 1–2 Werktagen.",
    services: "Unsere Dienstleistungen",
    serviceItems: [
      "ATS-orientierte Lebensläufe",
      "CV- und LinkedIn-Optimierung",
      "Motivationsschreiben",
      "Arbeitszeugnis-Analyse",
      "EliteCV Generator",
    ],
    digitalDelivery: "Digitale Lieferung",
    digitalDeliveryText:
      "Zugangscodes für den EliteCV Generator werden nach erfolgreicher Zahlung automatisch per E-Mail zugestellt. Persönliche Dienstleistungen werden innerhalb der vereinbarten Bearbeitungszeit elektronisch geliefert.",
    sendMessage: "Nachricht senden",
    formIntro:
      "Beschreiben Sie kurz Ihr Anliegen. Wir melden uns so bald wie möglich bei Ihnen.",
    salutation: "Anrede",
    selectSalutation: "Anrede auswählen",
    salutations: [
      { value: "Frau", label: "Frau" },
      { value: "Herr", label: "Herr" },
      { value: "Divers", label: "Divers" },
    ],
    firstName: "Vorname",
    lastName: "Nachname",
    phoneOptional: "Telefon (optional)",
    subject: "Betreff",
    selectSubject: "Betreff auswählen",
    subjects: [
      "Allgemeine Anfrage",
      "EliteCV Generator",
      "CV Optimierung",
      "LinkedIn Optimierung",
      "Motivationsschreiben",
      "Arbeitszeugnis Analyse",
      "Technischer Support",
      "Sonstiges",
    ],
    message: "Nachricht",
    messagePlaceholder: "Wie können wir Ihnen helfen?",
    privacyStart: "Ich habe die",
    privacyLink: "Datenschutzerklärung",
    privacyEnd:
      "gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung meiner Anfrage zu.",
    sending: "Nachricht wird gesendet...",
    submit: "Anfrage senden",
    success:
      "Vielen Dank. Ihre Nachricht wurde erfolgreich übermittelt. Wir melden uns per E-Mail.",
    error:
      "Die Nachricht konnte leider nicht versendet werden. Bitte kontaktieren Sie uns direkt unter info@elitecv.ch.",
  },

  en: {
    back: "← Back to EliteCV",
    badge: "EliteCV Support",
    title: "Contact",
    intro:
      "Do you have questions about our services, your order, or the EliteCV Generator? Use the contact form below or get in touch with us directly.",
    directContact: "Direct contact",
    directText:
      "We usually respond to enquiries regarding our services, orders and technical support within 1–2 business days.",
    contactPerson: "Contact person",
    owner: "Founder of EliteCV",
    email: "Email",
    phone: "Phone",
    businessAddress: "Business address",
    responseTime: "Response time",
    responseText: "Usually within 1–2 business days.",
    services: "Our services",
    serviceItems: [
      "ATS-oriented CVs",
      "CV and LinkedIn optimisation",
      "Cover letters",
      "Employment reference analysis",
      "EliteCV Generator",
    ],
    digitalDelivery: "Digital delivery",
    digitalDeliveryText:
      "Access codes for the EliteCV Generator are automatically delivered by email after successful payment. Personal services are delivered electronically within the agreed processing time.",
    sendMessage: "Send a message",
    formIntro:
      "Briefly describe your request. We will get back to you as soon as possible.",
    salutation: "Salutation",
    selectSalutation: "Select salutation",
    salutations: [
      { value: "Ms.", label: "Ms." },
      { value: "Mr.", label: "Mr." },
      { value: "Mx.", label: "Mx." },
    ],
    firstName: "First name",
    lastName: "Last name",
    phoneOptional: "Phone (optional)",
    subject: "Subject",
    selectSubject: "Select subject",
    subjects: [
      "General enquiry",
      "EliteCV Generator",
      "CV optimisation",
      "LinkedIn optimisation",
      "Cover letter",
      "Employment reference analysis",
      "Technical support",
      "Other",
    ],
    message: "Message",
    messagePlaceholder: "How can we help you?",
    privacyStart: "I have read the",
    privacyLink: "Privacy Policy",
    privacyEnd:
      "and agree to the processing of my information for the purpose of handling my request.",
    sending: "Sending message...",
    submit: "Send request",
    success:
      "Thank you. Your message has been sent successfully. We will get back to you by email.",
    error:
      "Unfortunately, your message could not be sent. Please contact us directly at info@elitecv.ch.",
  },
} as const;

export default function KontaktPage() {
  const [lang, setLang] = useState<Lang>("de");
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [loading, setLoading] = useState(false);

  const t = content[lang];

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setLoading(true);
    setSubmitted(false);
    setSubmitError(false);

    const form = event.currentTarget;
    const formData = new FormData(form);

    const salutation = String(
      formData.get("salutation") ?? ""
    ).trim();

    const firstName = String(
      formData.get("firstName") ?? ""
    ).trim();

    const lastName = String(
      formData.get("lastName") ?? ""
    ).trim();

    /*
     * Die bestehende Kontakt-API erwartet weiterhin
     * ein Feld namens "name".
     */
    formData.set(
      "name",
      `${salutation} ${firstName} ${lastName}`.trim()
    );

    formData.append("type", "Kontakt");
    formData.append("language", lang);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(
          lang === "de"
            ? "Die Nachricht konnte nicht versendet werden."
            : "The message could not be sent."
        );
      }

      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error("Kontaktformular Fehler:", error);
      setSubmitError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0A1F44]">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#C9A95A] hover:underline"
          >
            {t.back}
          </Link>

          <div className="flex rounded-full border border-[#0A1F44]/12 bg-white p-1 text-xs font-semibold shadow-sm">
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`rounded-full px-4 py-2 transition ${lang === "de"
                ? "bg-[#0A1F44] text-white"
                : "text-[#0A1F44]/65 hover:text-[#0A1F44]"
                }`}
            >
              DE
            </button>

            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-2 transition ${lang === "en"
                ? "bg-[#0A1F44] text-white"
                : "text-[#0A1F44]/65 hover:text-[#0A1F44]"
                }`}
            >
              EN
            </button>
          </div>
        </div>

        <div className="mt-10 max-w-3xl">
          <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#8A6A22]">
            {t.badge}
          </span>

          <h1 className="mt-5 text-4xl font-bold tracking-[-0.03em] md:text-5xl">
            {t.title}
          </h1>

          <p className="mt-5 text-lg leading-8 text-[#0A1F44]/72">
            {t.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
            <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8A6A22]">
              EliteCV
            </span>

            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em]">
              {t.directContact}
            </h2>

            <p className="mt-4 leading-7 text-[#0A1F44]/72">
              {t.directText}
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <User className="mt-1 h-5 w-5 shrink-0 text-[#C9A95A]" />

                <div>
                  <p className="font-semibold">{t.contactPerson}</p>
                  <p className="mt-1 text-[#0A1F44]/70">
                    Klaudio Batinić
                  </p>
                  <p className="text-sm text-[#0A1F44]/55">
                    {t.owner}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 shrink-0 text-[#C9A95A]" />

                <div>
                  <p className="font-semibold">{t.email}</p>
                  <a
                    href="mailto:info@elitecv.ch"
                    className="mt-1 inline-block text-[#0A1F44]/70 transition hover:text-[#C9A95A]"
                  >
                    info@elitecv.ch
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-[#C9A95A]" />

                <div>
                  <p className="font-semibold">{t.phone}</p>
                  <a
                    href="tel:+41763314624"
                    className="mt-1 inline-block text-[#0A1F44]/70 transition hover:text-[#C9A95A]"
                  >
                    +41 76 331 46 24
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#C9A95A]" />

                <div>
                  <p className="font-semibold">
                    {t.businessAddress}
                  </p>

                  <address className="mt-1 not-italic leading-7 text-[#0A1F44]/70">
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Switzerland
                  </address>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-[#C9A95A]" />

                <div>
                  <p className="font-semibold">
                    {t.responseTime}
                  </p>
                  <p className="mt-1 text-[#0A1F44]/70">
                    {t.responseText}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-[#C9A95A]/30 bg-[#FFFDF7] p-5">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-[#C9A95A]" />
                <h3 className="font-semibold">{t.services}</h3>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-[#0A1F44]/75">
                {t.serviceItems.map((item) => (
                  <li key={item}>✓ {item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-5 rounded-2xl border border-[#0A1F44]/10 p-5">
              <p className="font-semibold">
                {t.digitalDelivery}
              </p>

              <p className="mt-2 text-sm leading-6 text-[#0A1F44]/70">
                {t.digitalDeliveryText}
              </p>
            </div>
          </article>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm"
          >
            <h2 className="text-3xl font-semibold tracking-[-0.02em]">
              {t.sendMessage}
            </h2>

            <p className="mt-3 leading-7 text-[#0A1F44]/70">
              {t.formIntro}
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2">

              <label className="text-sm font-medium text-[#0A1F44]/85">
                {t.salutation}

                <select
                  name="salutation"
                  required
                  defaultValue=""
                  autoComplete="honorific-prefix"
                  className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                >
                  <option value="" disabled>
                    {t.selectSalutation}
                  </option>

                  {t.salutations.map((item) => (
                    <option key={item.value} value={item.value}>
                      {item.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-medium text-[#0A1F44]/85">
                {t.firstName}

                <input
                  name="firstName"
                  required
                  type="text"
                  autoComplete="given-name"
                  className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                />
              </label>

              <label className="text-sm font-medium text-[#0A1F44]/85">
                {t.lastName}

                <input
                  name="lastName"
                  required
                  type="text"
                  autoComplete="family-name"
                  className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                />
              </label>

              <label className="text-sm font-medium text-[#0A1F44]/85">
                {t.email}
                <input
                  name="email"
                  required
                  type="email"
                  autoComplete="email"
                  className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                />
              </label>

              <label className="text-sm font-medium text-[#0A1F44]/85">
                {t.phoneOptional}
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+41 79 123 45 67"
                  className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                />
              </label>

              <label className="text-sm font-medium text-[#0A1F44]/85">
                {t.subject}
                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 bg-white px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                >
                  <option value="" disabled>
                    {t.selectSubject}
                  </option>

                  {t.subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </label>

              <label className="text-sm font-medium text-[#0A1F44]/85 md:col-span-2">
                {t.message}

                <textarea
                  name="message"
                  required
                  rows={9}
                  placeholder={t.messagePlaceholder}
                  className="mt-2 w-full resize-y rounded-xl border border-[#0A1F44]/15 px-4 py-3 outline-none transition focus:border-[#C9A95A]"
                />
              </label>
            </div>

            <div className="mt-5 rounded-xl border border-[#C9A95A]/25 bg-[#FFFDF7] px-4 py-3 text-sm leading-6 text-[#0A1F44]/75">
              <span className="font-semibold">
                🔒{" "}
                {lang === "de"
                  ? "Ihre Angaben werden vertraulich behandelt."
                  : "Your information is treated confidentially."}
              </span>

              <p className="mt-1">
                {lang === "de"
                  ? "Wir verwenden Ihre Daten ausschliesslich zur Bearbeitung Ihrer Anfrage und geben sie nicht an Dritte weiter."
                  : "We use your information solely to process your enquiry and do not share it with third parties."}
              </p>
            </div>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[#0A1F44]/75">
              <input
                name="privacyAccepted"
                type="checkbox"
                required
                className="mt-1 h-4 w-4 shrink-0"
              />

              <span>
                {t.privacyStart}{" "}
                <Link
                  href="/datenschutz"
                  className="font-semibold text-[#C9A95A] hover:underline"
                >
                  {t.privacyLink}
                </Link>{" "}
                {t.privacyEnd}
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_-16px_rgba(10,31,68,0.65)] transition-all hover:-translate-y-0.5 hover:bg-[#12305F] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/25 border-t-white" />
                  {t.sending}
                </>
              ) : (
                <>
                  <span>📩</span>
                  {t.submit}
                </>
              )}
            </button>

            {submitted && (
              <p className="mt-5 rounded-xl border border-emerald-600/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-800">
                {t.success}
              </p>
            )}

            {submitError && (
              <p className="mt-5 rounded-xl border border-red-600/25 bg-red-500/10 px-4 py-3 text-sm text-red-800">
                {t.error}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}