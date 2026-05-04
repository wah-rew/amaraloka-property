import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { z } from "zod";
import {
  createAdminSessionValue,
  getAdminCookieOptions,
  getAdminSetupState,
} from "../../../../lib/admin-auth";

const loginSchema = z.object({
  password: z.string().min(1, "Password wajib diisi"),
});

export async function POST(request: Request) {
  const { password: configuredPassword, isConfigured } = getAdminSetupState();

  if (!isConfigured) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD belum diatur di environment." },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = loginSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Input tidak valid" },
      { status: 400 }
    );
  }

  if (parsed.data.password !== configuredPassword) {
    return NextResponse.json(
      { error: "Password admin tidak cocok." },
      { status: 401 }
    );
  }

  cookies().set(
    "amaraloka_admin_session",
    createAdminSessionValue(configuredPassword),
    getAdminCookieOptions()
  );

  return NextResponse.json({ success: true });
}
