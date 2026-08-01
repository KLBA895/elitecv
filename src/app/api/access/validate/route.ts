import { NextResponse } from "next/server";

import { supabaseAdmin } from "@/lib/supabase/admin";
import {
  hashAccessCode,
  normalizeAccessCode,
  normalizeEmail,
} from "@/lib/access-codes";

type ValidateAccessRequest = {
  code?: string;
  email?: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ValidateAccessRequest;

    const code = normalizeAccessCode(body.code ?? "");
    const email = normalizeEmail(body.email ?? "");

    if (!code || !email) {
      return NextResponse.json(
        {
          error: "Bitte Zugangscode und E-Mail-Adresse eingeben.",
        },
        {
          status: 400,
        }
      );
    }

    const codeHash = hashAccessCode(code);
    const now = new Date();

    const { data: access, error } = await supabaseAdmin
      .from("cv_access_codes")
      .select(`
    id,
    customer_email,
    access_level,
    english_access,
    cover_letter_access,
    expires_at,
    is_active,
    usage_count,
    max_usage_count,
    activated_at
  `)
      .eq("code_hash", codeHash)
      .maybeSingle();

    if (error) {
      console.error("Zugangscode-Abfrage fehlgeschlagen:", error);

      return NextResponse.json(
        {
          error: "Der Zugang konnte nicht geprüft werden.",
        },
        {
          status: 500,
        }
      );
    }

    if (!access) {
      return NextResponse.json(
        {
          error: "Ungültiger Zugangscode.",
        },
        {
          status: 401,
        }
      );
    }

    if (!access.is_active) {
      return NextResponse.json(
        {
          error: "Dieser Zugang wurde deaktiviert.",
        },
        {
          status: 403,
        }
      );
    }

    if (normalizeEmail(access.customer_email) !== email) {
      return NextResponse.json(
        {
          error:
            "Der Zugangscode ist nicht mit dieser E-Mail-Adresse verknüpft.",
        },
        {
          status: 403,
        }
      );
    }

    const expiresAt = new Date(access.expires_at);

    if (
      Number.isNaN(expiresAt.getTime()) ||
      expiresAt.getTime() <= now.getTime()
    ) {
      await supabaseAdmin
        .from("cv_access_codes")
        .update({
          is_active: false,
        })
        .eq("id", access.id);

      return NextResponse.json(
        {
          error: "Dieser Zugangscode ist abgelaufen.",
        },
        {
          status: 403,
        }
      );
    }

    if (access.usage_count >= access.max_usage_count) {
      return NextResponse.json(
        {
          error: "Das Nutzungslimit dieses Zugangs wurde erreicht.",
        },
        {
          status: 403,
        }
      );
    }

    const { error: updateError } = await supabaseAdmin
      .from("cv_access_codes")
      .update({
        activated_at: access.activated_at ?? now.toISOString(),
        last_used_at: now.toISOString(),
        usage_count: access.usage_count + 1,
      })
      .eq("id", access.id);

    if (updateError) {
      console.error(
        "Zugangsnutzung konnte nicht aktualisiert werden:",
        updateError
      );
    }

    return NextResponse.json({
      valid: true,
      accessLevel: access.access_level,
      englishAccess: Boolean(access.english_access),
      coverLetterAccess: Boolean(
        access.cover_letter_access
      ),
      expiresAt: access.expires_at,
    });

  } catch (error) {
    console.error("Zugangscode-Validierung fehlgeschlagen:", error);

    return NextResponse.json(
      {
        error: "Unerwarteter Fehler bei der Zugangsprüfung.",
      },
      {
        status: 500,
      }
    );
  }
}