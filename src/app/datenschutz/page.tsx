"use client";

import Link from "next/link";
import { useState } from "react";

export default function DatenschutzPage() {
  const [lang, setLang] = useState<"de" | "en">("de");

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#0A1F44]">
      <div className="mx-auto w-full max-w-4xl px-6 py-16 sm:py-20">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "← Zurück zur Startseite" : "← Back to homepage"}
          </Link>

          <div className="inline-flex rounded-full border border-[#0A1F44]/10 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setLang("de")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${lang === "de"
                ? "bg-[#0A1F44] text-white"
                : "text-[#0A1F44]/60 hover:text-[#0A1F44]"
                }`}
            >
              DE
            </button>

            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${lang === "en"
                ? "bg-[#0A1F44] text-white"
                : "text-[#0A1F44]/60 hover:text-[#0A1F44]"
                }`}
            >
              EN
            </button>
          </div>
        </div>

        {lang === "de" ? (
          <>
            <header className="mt-12">
              <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
                Rechtliche Informationen
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
                Datenschutzerklärung
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#0A1F44]/70">
                Diese Datenschutzerklärung informiert darüber, wie EliteCV
                personenbezogene Daten im Zusammenhang mit der Website und
                unseren Dienstleistungen verarbeitet.
              </p>
            </header>

            <section className="mt-10 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-9 leading-8 text-[#0A1F44]/80">
                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    1. Verantwortliche Stelle
                  </h2>
                  <p className="mt-3">
                    EliteCV
                    <br />
                    Inhaber: Klaudio Batinić
                    <br />
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Schweiz
                    <br />
                    E-Mail:{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    2. Welche Daten wir verarbeiten
                  </h2>
                  <p className="mt-3">
                    Je nach Nutzung unserer Website und Dienstleistungen
                    verarbeiten wir insbesondere Kontakt- und Bestelldaten wie
                    Name, E-Mail-Adresse und Telefonnummer sowie die von Ihnen
                    übermittelten Bewerbungsunterlagen und Informationen.
                  </p>
                  <p className="mt-3">
                    Bei der Nutzung des EliteCV Generators können zudem die von
                    Ihnen eingegebenen beruflichen und persönlichen Angaben
                    verarbeitet werden, soweit dies für die Erstellung Ihres CV
                    erforderlich ist.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    3. Zweck der Datenverarbeitung
                  </h2>
                  <p className="mt-3">
                    Wir verarbeiten personenbezogene Daten insbesondere zur
                    Bearbeitung von Anfragen, Durchführung von Bestellungen,
                    Erbringung unserer Dienstleistungen, Bereitstellung des
                    EliteCV Generators, Zahlungsabwicklung sowie zur
                    technischen Bereitstellung und Verbesserung unserer
                    Website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    4. Kontaktformular und E-Mail
                  </h2>
                  <p className="mt-3">
                    Wenn Sie uns über das Kontaktformular oder per E-Mail
                    kontaktieren, verarbeiten wir die von Ihnen übermittelten
                    Angaben, um Ihre Anfrage zu beantworten und die damit
                    verbundene Kommunikation abzuwickeln.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    5. Bewerbungsunterlagen und Dokumente
                  </h2>
                  <p className="mt-3">
                    Wenn Sie Dokumente wie Lebensläufe, Arbeitszeugnisse oder
                    andere Bewerbungsunterlagen übermitteln, werden diese zur
                    Durchführung der von Ihnen gewünschten Dienstleistung
                    verarbeitet.
                  </p>
                  <p className="mt-3">
                    Bewerbungsunterlagen können besonders persönliche
                    Informationen enthalten. Übermitteln Sie deshalb nur
                    Informationen, die für die gewünschte Dienstleistung
                    erforderlich sind.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    6. Zahlungsabwicklung
                  </h2>
                  <p className="mt-3">
                    Für kostenpflichtige Dienstleistungen nutzen wir Stripe zur
                    Zahlungsabwicklung. Bei einer Zahlung werden die für die
                    Zahlungsabwicklung erforderlichen Informationen durch
                    Stripe verarbeitet. EliteCV erhält dabei die für die
                    Bestätigung und Abwicklung der Bestellung erforderlichen
                    Zahlungsinformationen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    7. Webanalyse
                  </h2>
                  <p className="mt-3">
                    Wir können Analysedienste wie Google Analytics einsetzen,
                    um die Nutzung unserer Website statistisch auszuwerten und
                    unser Angebot zu verbessern. Dabei können technische
                    Informationen über die Nutzung der Website verarbeitet
                    werden.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    8. Weitergabe an Dienstleister
                  </h2>
                  <p className="mt-3">
                    Personenbezogene Daten können an technische oder
                    organisatorische Dienstleister übermittelt werden, soweit
                    dies für den Betrieb der Website, die Zahlungsabwicklung
                    oder die Erbringung unserer Dienstleistungen erforderlich
                    ist. Eine darüber hinausgehende Weitergabe erfolgt nur,
                    wenn eine rechtliche Grundlage besteht oder Sie
                    eingewilligt haben.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    9. Aufbewahrung und Löschung
                  </h2>
                  <p className="mt-3">
                    Personenbezogene Daten werden nur so lange aufbewahrt, wie
                    dies für den jeweiligen Zweck erforderlich ist oder
                    gesetzliche Aufbewahrungspflichten bestehen. Danach werden
                    die Daten gelöscht oder anonymisiert, soweit keine
                    rechtlichen Gründe für eine weitere Aufbewahrung bestehen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    10. Ihre Rechte
                  </h2>
                  <p className="mt-3">
                    Im Rahmen des anwendbaren Datenschutzrechts können Sie
                    insbesondere Auskunft über Ihre personenbezogenen Daten
                    sowie deren Berichtigung oder Löschung verlangen. Je nach
                    anwendbarem Recht können weitere Rechte bestehen.
                  </p>
                  <p className="mt-3">
                    Datenschutzanfragen können Sie an{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>{" "}
                    richten.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    11. Datensicherheit
                  </h2>
                  <p className="mt-3">
                    Wir treffen angemessene technische und organisatorische
                    Massnahmen, um personenbezogene Daten vor unbefugtem
                    Zugriff, Verlust, Missbrauch oder Veränderung zu schützen.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    12. Änderungen dieser Datenschutzerklärung
                  </h2>
                  <p className="mt-3">
                    Wir können diese Datenschutzerklärung anpassen, wenn sich
                    unsere Dienstleistungen, eingesetzte Technologien oder
                    rechtliche Anforderungen ändern. Es gilt die jeweils auf
                    dieser Website veröffentlichte Fassung.
                  </p>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <header className="mt-12">
              <span className="inline-flex rounded-full bg-[#C9A95A]/15 px-4 py-2 text-sm font-semibold text-[#8A6A22]">
                Legal Information
              </span>

              <h1 className="mt-6 text-4xl font-bold tracking-[-0.02em] sm:text-5xl">
                Privacy Policy
              </h1>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-[#0A1F44]/70">
                This Privacy Policy explains how EliteCV processes personal
                data in connection with our website and services.
              </p>
            </header>

            <section className="mt-10 rounded-3xl border border-[#0A1F44]/10 bg-white p-7 shadow-sm sm:p-9">
              <div className="space-y-9 leading-8 text-[#0A1F44]/80">
                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    1. Data Controller
                  </h2>
                  <p className="mt-3">
                    EliteCV
                    <br />
                    Owner: Klaudio Batinić
                    <br />
                    Schulgutstrasse 1
                    <br />
                    8953 Dietikon
                    <br />
                    Switzerland
                    <br />
                    Email:{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    2. Personal Data We Process
                  </h2>
                  <p className="mt-3">
                    Depending on how you use our website and services, we may
                    process contact and order information such as your name,
                    email address and telephone number, as well as CVs,
                    employment references and other information you provide to
                    us.
                  </p>
                  <p className="mt-3">
                    When using the EliteCV Generator, professional and personal
                    information entered by you may also be processed where
                    necessary to create your CV.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    3. Purposes of Processing
                  </h2>
                  <p className="mt-3">
                    We process personal data to respond to enquiries, process
                    orders, provide our services, operate the EliteCV Generator,
                    process payments and technically operate and improve our
                    website.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    4. Contact Form and Email
                  </h2>
                  <p className="mt-3">
                    If you contact us through our contact form or by email, we
                    process the information you provide in order to respond to
                    your enquiry and manage the related communication.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    5. CVs and Application Documents
                  </h2>
                  <p className="mt-3">
                    If you submit CVs, employment references or other
                    application documents, we process these documents to
                    provide the service you have requested.
                  </p>
                  <p className="mt-3">
                    Application documents may contain particularly personal
                    information. You should therefore only provide information
                    necessary for the requested service.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    6. Payment Processing
                  </h2>
                  <p className="mt-3">
                    We use Stripe to process payments for paid services. When
                    you make a payment, Stripe processes the information
                    required for the transaction. EliteCV receives the payment
                    information necessary to confirm and process your order.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    7. Web Analytics
                  </h2>
                  <p className="mt-3">
                    We may use analytics services such as Google Analytics to
                    evaluate website usage and improve our services. Technical
                    information relating to your use of the website may be
                    processed for this purpose.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    8. Service Providers
                  </h2>
                  <p className="mt-3">
                    Personal data may be shared with technical or
                    organisational service providers where necessary to
                    operate the website, process payments or provide our
                    services. Other disclosures are made only where there is an
                    applicable legal basis or you have provided consent.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    9. Retention and Deletion
                  </h2>
                  <p className="mt-3">
                    Personal data is retained only for as long as necessary for
                    the relevant purpose or where legal retention requirements
                    apply. Data is subsequently deleted or anonymised unless
                    there are legal reasons for further retention.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    10. Your Rights
                  </h2>
                  <p className="mt-3">
                    Subject to applicable data protection law, you may request
                    access to your personal data and request its correction or
                    deletion. Additional rights may apply depending on the
                    applicable law.
                  </p>
                  <p className="mt-3">
                    Privacy requests can be sent to{" "}
                    <a
                      href="mailto:info@elitecv.ch"
                      className="font-semibold text-[#8A6A22] hover:underline"
                    >
                      info@elitecv.ch
                    </a>
                    .
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    11. Data Security
                  </h2>
                  <p className="mt-3">
                    We take appropriate technical and organisational measures
                    to protect personal data against unauthorised access, loss,
                    misuse or alteration.
                  </p>
                </div>

                <div>
                  <h2 className="text-xl font-bold text-[#0A1F44]">
                    12. Changes to this Privacy Policy
                  </h2>
                  <p className="mt-3">
                    We may update this Privacy Policy if our services,
                    technologies or legal requirements change. The version
                    published on this website at the relevant time applies.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          <Link
            href="/impressum"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "Impressum" : "Imprint"}
          </Link>

          <Link
            href="/agb"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "AGB" : "Terms & Conditions"}
          </Link>

          <Link
            href="/kontakt"
            className="font-semibold text-[#8A6A22] hover:underline"
          >
            {lang === "de" ? "Kontakt" : "Contact"}
          </Link>
        </div>
      </div>
    </main>
  );
}