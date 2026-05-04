import { NextResponse } from "next/server";
import { ZodError } from "zod";
import { getSupabaseConfig } from "../../../lib/env";
import {
  getLeadValidationMessage,
  leadInsertSchema,
  mapLeadInputToRow,
} from "../../../lib/leads";
import { getSupabaseAdminClient } from "../../../lib/supabase/server";

export async function POST(request: Request) {
  const { isServerConfigured } = getSupabaseConfig();

  if (!isServerConfigured) {
    return NextResponse.json(
      {
        error:
          "Form lead belum tersambung. Tambahkan NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY terlebih dulu.",
      },
      { status: 503 }
    );
  }

  try {
    const json = await request.json();
    const input = leadInsertSchema.parse(json);
    const supabase = getSupabaseAdminClient();

    if (!supabase) {
      return NextResponse.json(
        { error: "Konfigurasi Supabase belum lengkap di server." },
        { status: 503 }
      );
    }

    const { error } = await supabase.from("leads").insert(mapLeadInputToRow(input));

    if (error) {
      console.error("Failed to insert lead", error);
      return NextResponse.json(
        { error: "Lead gagal disimpan. Silakan coba lagi." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        input.source === "hekfield"
          ? "Terima kasih. Tim Amaraloka akan segera menghubungi Anda."
          : "Pesan Anda sudah kami terima. Kami akan segera menghubungi Anda.",
    });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: getLeadValidationMessage(error) },
        { status: 400 }
      );
    }

    console.error("Unexpected lead API error", error);
    return NextResponse.json(
      { error: "Terjadi kendala pada server. Silakan coba lagi." },
      { status: 500 }
    );
  }
}
