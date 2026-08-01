"use client";

import { FormEvent, useState } from "react";

type CreatedAccess = {
  accessCode: string;
  access: {
    id: string;
    customer_email: string;
    access_level: string;
    english_access: boolean;
    cover_letter_access: boolean;
    professional_layout_access: boolean;
    executive_layout_access: boolean;
    expires_at: string;
    max_usage_count: number | null;
    notes: string | null;
  };
};

export default function AccessCodesAdminPage() {
  const [adminApiKey, setAdminApiKey] = useState("");
  const [email, setEmail] = useState("");

  const [accessLevel, setAccessLevel] = useState<
    "professional" | "executive" | "partner" | "admin"
  >("professional");

  const [englishAccess, setEnglishAccess] = useState(false);
  const [coverLetterAccess, setCoverLetterAccess] = useState(false);

  const [professionalLayoutAccess, setProfessionalLayoutAccess] =
    useState(true);

  const [executiveLayoutAccess, setExecutiveLayoutAccess] =
    useState(false);

  const [validDays, setValidDays] = useState(4);
  const [maxUsageCount, setMaxUsageCount] = useState("");
  const [notes, setNotes] = useState("");

  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState("");
  const [createdAccess, setCreatedAccess] =
    useState<CreatedAccess | null>(null);

  const applyPackagePreset = (
    packageName: "professional" | "executive" | "partner" | "admin"
  ) => {
    setAccessLevel(packageName);

    if (packageName === "professional") {
      setProfessionalLayoutAccess(true);
      setExecutiveLayoutAccess(false);
      setEnglishAccess(false);
      setCoverLetterAccess(false);
      setValidDays(4);
    }

    if (packageName === "executive") {
      setProfessionalLayoutAccess(true);
      setExecutiveLayoutAccess(true);
      setEnglishAccess(true);
      setCoverLetterAccess(true);
      setValidDays(4);
    }

    if (packageName === "partner") {
      setProfessionalLayoutAccess(true);
      setExecutiveLayoutAccess(true);
      setEnglishAccess(true);
      setCoverLetterAccess(true);
      setValidDays(365);
    }

    if (packageName === "admin") {
      setProfessionalLayoutAccess(true);
      setExecutiveLayoutAccess(true);
      setEnglishAccess(true);
      setCoverLetterAccess(true);
      setValidDays(3650);
    }
  };

  const createAccessCode = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!adminApiKey.trim()) {
      setError("Bitte den Admin-API-Schlüssel eingeben.");
      return;
    }

    if (!email.trim()) {
      setError("Bitte eine E-Mail-Adresse eingeben.");
      return;
    }

    try {
      setIsCreating(true);
      setError("");
      setCreatedAccess(null);

      const parsedMaxUsageCount = maxUsageCount.trim()
        ? Number(maxUsageCount)
        : null;

      const response = await fetch("/api/admin/access-codes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": adminApiKey.trim(),
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          accessLevel,
          englishAccess,
          coverLetterAccess,
          professionalLayoutAccess,
          executiveLayoutAccess,
          validDays,
          maxUsageCount: parsedMaxUsageCount,
          notes,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(
          typeof result.error === "string"
            ? result.error
            : "Der Zugangscode konnte nicht erstellt werden."
        );
        return;
      }

      setCreatedAccess(result);
    } catch (requestError) {
      console.error(requestError);
      setError("Die Verbindung zum Server ist fehlgeschlagen.");
    } finally {
      setIsCreating(false);
    }
  };

  const copyAccessCode = async () => {
    if (!createdAccess?.accessCode) {
      return;
    }

    await navigator.clipboard.writeText(createdAccess.accessCode);
  };

  return (
    <main
      style={{
        maxWidth: "760px",
        margin: "40px auto",
        padding: "24px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>EliteCV Admin</h1>

      <p>
        Hier kannst du persönliche Zugangscodes für Kunden, Partner und
        Administratoren erstellen.
      </p>

      <form
        onSubmit={createAccessCode}
        style={{
          display: "grid",
          gap: "18px",
          marginTop: "30px",
        }}
      >
        <label>
          <strong>Admin-API-Schlüssel</strong>

          <input
            type="password"
            value={adminApiKey}
            onChange={(event) => setAdminApiKey(event.target.value)}
            placeholder="ELITECV_ADMIN_API_KEY"
            autoComplete="off"
            style={inputStyle}
          />
        </label>

        <label>
          <strong>Kunden-E-Mail</strong>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="kunde@example.com"
            required
            style={inputStyle}
          />
        </label>

        <label>
          <strong>Paket / Zugangsart</strong>

          <select
            value={accessLevel}
            onChange={(event) =>
              applyPackagePreset(
                event.target.value as
                | "professional"
                | "executive"
                | "partner"
                | "admin"
              )
            }
            style={inputStyle}
          >
            <option value="professional">Professional</option>
            <option value="executive">Executive</option>
            <option value="partner">Partner</option>
            <option value="admin">Admin</option>
          </select>
        </label>

        <fieldset
          style={{
            border: "1px solid #d5dbe5",
            borderRadius: "10px",
            padding: "18px",
          }}
        >
          <legend>
            <strong>Berechtigungen</strong>
          </legend>

          <Checkbox
            label="Professional-Layout"
            checked={professionalLayoutAccess}
            onChange={setProfessionalLayoutAccess}
          />

          <Checkbox
            label="Executive-Layout"
            checked={executiveLayoutAccess}
            onChange={setExecutiveLayoutAccess}
          />

          <Checkbox
            label="Englisch-Funktion"
            checked={englishAccess}
            onChange={setEnglishAccess}
          />

          <Checkbox
            label="Motivationsschreiben"
            checked={coverLetterAccess}
            onChange={setCoverLetterAccess}
          />
        </fieldset>

        <label>
          <strong>Gültigkeit in Tagen</strong>

          <input
            type="number"
            min="1"
            max="3650"
            value={validDays}
            onChange={(event) =>
              setValidDays(Number(event.target.value))
            }
            style={inputStyle}
          />
        </label>

        <label>
          <strong>Maximale Nutzungen</strong>

          <input
            type="number"
            min="1"
            value={maxUsageCount}
            onChange={(event) =>
              setMaxUsageCount(event.target.value)
            }
            placeholder="Leer = unbegrenzt"
            style={inputStyle}
          />
        </label>

        <label>
          <strong>Notiz</strong>

          <textarea
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            placeholder="Zum Beispiel: Auftrag Simona Gilardi"
            rows={3}
            style={inputStyle}
          />
        </label>

        <button
          type="submit"
          disabled={isCreating}
          style={{
            minHeight: "52px",
            border: "none",
            borderRadius: "10px",
            background: "#173f70",
            color: "white",
            fontSize: "17px",
            fontWeight: 700,
            cursor: isCreating ? "wait" : "pointer",
          }}
        >
          {isCreating
            ? "Code wird erstellt..."
            : "Zugangscode erstellen"}
        </button>
      </form>

      {error && (
        <p
          role="alert"
          style={{
            marginTop: "20px",
            padding: "14px",
            borderRadius: "8px",
            background: "#feecec",
            color: "#a71919",
          }}
        >
          {error}
        </p>
      )}

      {createdAccess && (
        <section
          style={{
            marginTop: "30px",
            padding: "22px",
            border: "2px solid #1f6f45",
            borderRadius: "12px",
            background: "#f2fbf6",
          }}
        >
          <h2>Zugangscode erstellt</h2>

          <p>
            Der Klartext-Code wird nur hier angezeigt. In Supabase wird
            ausschließlich der Hash gespeichert.
          </p>

          <div
            style={{
              padding: "16px",
              margin: "18px 0",
              borderRadius: "8px",
              background: "white",
              fontSize: "24px",
              fontWeight: 800,
              letterSpacing: "1px",
              wordBreak: "break-all",
            }}
          >
            {createdAccess.accessCode}
          </div>

          <button
            type="button"
            onClick={copyAccessCode}
            style={{
              padding: "12px 18px",
              border: "none",
              borderRadius: "8px",
              background: "#173f70",
              color: "white",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Code kopieren
          </button>

          <p style={{ marginTop: "18px" }}>
            <strong>E-Mail:</strong>{" "}
            {createdAccess.access.customer_email}
          </p>

          <p>
            <strong>Paket:</strong>{" "}
            {createdAccess.access.access_level}
          </p>

          <p>
            <strong>Gültig bis:</strong>{" "}
            {new Date(
              createdAccess.access.expires_at
            ).toLocaleString("de-CH")}
          </p>
        </section>
      )}
    </main>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  boxSizing: "border-box" as const,
  marginTop: "8px",
  padding: "13px 14px",
  border: "1px solid #cbd3df",
  borderRadius: "8px",
  fontSize: "16px",
};

type CheckboxProps = {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <label
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        margin: "12px 0",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />

      <span>{label}</span>
    </label>
  );
}