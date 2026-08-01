import { NextRequest, NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  generateAccessCode,
  hashAccessCode,
  normalizeEmail,
} from "@/lib/access-codes";

type AccessLevel = "professional" | "executive" | "partner" | "admin";

type CreateAccessCodeRequest = {
  email?: string;
  accessLevel?: AccessLevel;
  englishAccess?: boolean;
  coverLetterAccess?: boolean;
  professionalLayoutAccess?: boolean;
  executiveLayoutAccess?: boolean;
  validDays?: number;
  maxUsageCount?: number | null;
  notes?: string;
};

export async function POST(request: NextRequest) {
  try {
    const suppliedApiKey = request.headers.get("x-api-key")?.trim();
    const expectedApiKey = process.env.ELITECV_ADMIN_API_KEY?.trim();

    if (!expectedApiKey) {
      console.error("ELITECV_ADMIN_API_KEY ist nicht konfiguriert.");

      return NextResponse.json(
        { error: "Admin-Konfiguration fehlt." },
        { status: 500 }
      );
    }

    console.log("Admin-Key vorhanden:", Boolean(expectedApiKey));
    console.log("Eingegebene Länge:", suppliedApiKey?.length);
    console.log("Erwartete Länge:", expectedApiKey?.length);

    if (!suppliedApiKey || !expectedApiKey || suppliedApiKey !== expectedApiKey) {
      console.log("Admin-Key-Prüfung:", {
        suppliedKeyExists: Boolean(suppliedApiKey),
        expectedKeyExists: Boolean(expectedApiKey),
        suppliedLength: suppliedApiKey?.length ?? 0,
        expectedLength: expectedApiKey?.length ?? 0,
        keysMatch: suppliedApiKey === expectedApiKey,
      });

      return NextResponse.json(
        { error: "Nicht autorisiert." },
        { status: 401 }
      );
    }

    const body = (await request.json()) as CreateAccessCodeRequest;

    const email = normalizeEmail(body.email ?? "");
    const accessLevel = body.accessLevel ?? "professional";

    if (!email) {
      return NextResponse.json(
        { error: "Bitte eine gültige E-Mail-Adresse angeben." },
        { status: 400 }
      );
    }

    const validDays =
      typeof body.validDays === "number" &&
        body.validDays >= 1 &&
        body.validDays <= 3650
        ? body.validDays
        : 4;

    const maxUsageCount =
      typeof body.maxUsageCount === "number" &&
        body.maxUsageCount >= 1
        ? body.maxUsageCount
        : null;

    const englishAccess = Boolean(body.englishAccess);
    const coverLetterAccess = Boolean(body.coverLetterAccess);

    const professionalLayoutAccess =
      body.professionalLayoutAccess !== false;

    const executiveLayoutAccess =
      Boolean(body.executiveLayoutAccess);

    const accessCode = generateAccessCode();
    const codeHash = hashAccessCode(accessCode);

    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + validDays);

    const { data, error } = await supabaseAdmin
      .from("cv_access_codes")
      .insert({
        code_hash: codeHash,
        customer_email: email,
        access_level: accessLevel,
        english_access: englishAccess,
        cover_letter_access: coverLetterAccess,
        professional_layout_access: professionalLayoutAccess,
        executive_layout_access: executiveLayoutAccess,
        expires_at: expiresAt.toISOString(),
        is_active: true,
        max_usage_count: maxUsageCount,
        notes: body.notes?.trim() || null,
      })
      .select(`
        id,
        customer_email,
        access_level,
        english_access,
        cover_letter_access,
        professional_layout_access,
        executive_layout_access,
        expires_at,
        max_usage_count,
        notes
      `)
      .single();

    if (error) {
      console.error("Zugangscode konnte nicht gespeichert werden:", error);

      return NextResponse.json(
        { error: "Zugangscode konnte nicht erstellt werden." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      accessCode,
      access: data,
    });
  } catch (error) {
    console.error("Fehler beim Erstellen des Zugangscodes:", error);

    return NextResponse.json(
      { error: "Interner Serverfehler." },
      { status: 500 }
    );
  }
}