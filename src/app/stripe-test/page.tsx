"use client";

import { FormEvent, useState } from "react";

type CheckoutResponse = {
  success: boolean;
  checkoutUrl?: string;
  error?: string;
};

export default function StripeTestPage() {
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function startCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch(
        "/api/stripe/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            customerName,
            customerEmail,
          }),
        }
      );

      const data = (await response.json()) as CheckoutResponse;

      if (!response.ok || !data.success || !data.checkoutUrl) {
        throw new Error(
          data.error ?? "Stripe Checkout konnte nicht geöffnet werden."
        );
      }

      window.location.href = data.checkoutUrl;
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Ein unbekannter Fehler ist aufgetreten."
      );

      setLoading(false);
    }
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-xl items-center px-6 py-16">
      <div className="w-full rounded-2xl border border-[#0A1F44]/10 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-[#0A1F44]">
          Stripe testen
        </h1>

        <p className="mt-3 text-[#0A1F44]/65">
          Testbetrag: CHF 1.00
        </p>

        <form onSubmit={startCheckout} className="mt-7 space-y-5">
          <label className="block text-sm font-medium text-[#0A1F44]">
            Name

            <input
              type="text"
              value={customerName}
              onChange={(event) => setCustomerName(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
              placeholder="Max Muster"
            />
          </label>

          <label className="block text-sm font-medium text-[#0A1F44]">
            E-Mail

            <input
              required
              type="email"
              value={customerEmail}
              onChange={(event) => setCustomerEmail(event.target.value)}
              className="mt-2 w-full rounded-xl border border-[#0A1F44]/15 px-4 py-3"
              placeholder="max@example.com"
            />
          </label>

          {errorMessage && (
            <p className="rounded-xl bg-red-50 p-3 text-sm text-red-700">
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#0A1F44] px-5 py-3 font-semibold text-white disabled:opacity-60"
          >
            {loading
              ? "Stripe wird geöffnet..."
              : "CHF 1.00 bezahlen"}
          </button>
        </form>
      </div>
    </main>
  );
}