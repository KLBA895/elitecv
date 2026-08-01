export default function PaymentCancelledPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl items-center px-6 py-16">
      <div className="w-full rounded-2xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-[#0A1F44]">
          Zahlung abgebrochen
        </h1>

        <p className="mt-4 text-[#0A1F44]/70">
          Die Zahlung wurde abgebrochen. Es wurde noch kein Zugangscode
          erstellt.
        </p>

        <a
          href="/#preise"
          className="mt-7 inline-flex rounded-xl bg-[#0A1F44] px-5 py-3 text-sm font-semibold text-white"
        >
          Zurück zur Bestellung
        </a>
      </div>
    </main>
  );
}