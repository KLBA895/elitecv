import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV Schweiz vs. Deutschland | EliteCV",
  description:
    "Die wichtigsten Unterschiede zwischen Lebenslauf, CV und Bewerbung in der Schweiz und Deutschland.",
};

export default function CVSchweizVsDeutschlandPage() {
  return (
    <main className="min-h-screen bg-white text-[#0A1F44]">
      <article className="mx-auto max-w-4xl px-6 py-20">
        <Link href="/ratgeber" className="text-sm font-semibold text-[#C9A95A]">
          ← Zurück zum Ratgeber
        </Link>

        <h1 className="mt-10 text-4xl font-semibold md:text-5xl">
          CV Schweiz vs. Deutschland: Die wichtigsten Unterschiede
        </h1>

        <p className="mt-6 text-lg leading-8 text-[#0A1F44]/72">
          Wer sich in der Schweiz bewirbt, sollte seinen Lebenslauf nicht
          einfach unverändert aus Deutschland übernehmen. Obwohl sich viele
          Bewerbungsstandards ähneln, gibt es wichtige Unterschiede bei Aufbau,
          Sprache, Erwartungen und professioneller Wirkung.
        </p>

        <section className="mt-10 space-y-6 leading-8 text-[#0A1F44]/78">
          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            1. Der Schweizer CV ist oft sachlicher und direkter
          </h2>
          <p>
            In der Schweiz zählt eine klare, übersichtliche und seriöse
            Darstellung. Der Lebenslauf sollte schnell erfassbar sein und die
            wichtigsten Informationen ohne lange Erklärungen vermitteln. Zu
            werbliche Formulierungen wirken oft weniger überzeugend als
            präzise, konkrete Aussagen.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            2. Sprachkenntnisse sind besonders wichtig
          </h2>
          <p>
            In der Schweiz spielen Sprachkenntnisse eine grosse Rolle. Deutsch,
            Englisch, Französisch oder Italienisch können je nach Region und
            Stelle entscheidend sein. Deshalb sollten Sprachen klar und
            nachvollziehbar angegeben werden, idealerweise mit Niveauangabe.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            3. Berufserfahrung sollte auf den Schweizer Markt ausgerichtet sein
          </h2>
          <p>
            Internationale Erfahrung ist wertvoll, muss aber für Schweizer
            Arbeitgeber verständlich eingeordnet werden. Wichtig ist, welche
            Verantwortung Sie übernommen haben, welche Ergebnisse erzielt wurden
            und wie diese Erfahrung zur Zielrolle in der Schweiz passt.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            4. Foto, Kontaktdaten und Struktur
          </h2>
          <p>
            Ein professionelles Foto ist in der Schweiz weiterhin häufig üblich,
            auch wenn es nicht zwingend vorgeschrieben ist. Kontaktdaten,
            Wohnort, E-Mail, Telefonnummer und LinkedIn-Profil sollten klar
            platziert sein. Die Struktur sollte modern, ruhig und gut lesbar
            wirken.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            5. Zeugnisse und Diplome haben hohe Bedeutung
          </h2>
          <p>
            Schweizer Arbeitgeber legen oft Wert auf vollständige und
            nachvollziehbare Bewerbungsunterlagen. Arbeitszeugnisse, Diplome
            und Zertifikate können je nach Stelle eine wichtige Rolle spielen.
            Der Lebenslauf sollte deshalb sauber mit den Unterlagen
            zusammenpassen.
          </p>

          <h2 className="text-2xl font-semibold text-[#0A1F44]">
            6. Fazit
          </h2>
          <p>
            Ein erfolgreicher CV für die Schweiz ist klar, präzise und auf die
            Zielrolle ausgerichtet. Wer sich aus Deutschland oder einem anderen
            Land in der Schweiz bewirbt, sollte den Lebenslauf gezielt an den
            Schweizer Arbeitsmarkt anpassen.
          </p>
        </section>

        <div className="mt-12 rounded-2xl border border-[#0A1F44]/10 bg-[#FCFCFB] p-7 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Bewerben Sie sich in der Schweiz?
          </h2>
          <p className="mt-4 text-[#0A1F44]/72">
            EliteCV unterstützt Sie bei der professionellen Anpassung Ihres
            Lebenslaufs an den Schweizer Arbeitsmarkt – inklusive CV-Optimierung,
            LinkedIn-Optimierung und klarer Karrierepositionierung.
          </p>
          <Link
            href="/#preise"
            className="mt-6 inline-block rounded-full bg-[#0A1F44] px-6 py-3 text-sm font-semibold text-white hover:bg-[#102A5E]"
          >
            Angebote ansehen
          </Link>
        </div>
      </article>
    </main>
  );
}