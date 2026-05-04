import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getAdminPassword, isProduction } from "./env";

export const ADMIN_COOKIE_NAME = "amaraloka_admin_session";
const ADMIN_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;

function sign(value: string, secret: string) {
  return createHmac("sha256", secret).update(value).digest("hex");
}

export function createAdminSessionValue(password: string) {
  const issuedAt = Date.now().toString();
  const payload = Buffer.from(issuedAt).toString("base64url");
  const signature = sign(payload, password);
  return `${payload}.${signature}`;
}

export function isAdminSessionValid(sessionValue: string | undefined, password: string) {
  if (!sessionValue || !password) return false;

  const [payload, signature] = sessionValue.split(".");
  if (!payload || !signature) return false;

  const expected = sign(payload, password);
  const signatureBuffer = Buffer.from(signature);
  const expectedBuffer = Buffer.from(expected);

  if (signatureBuffer.length !== expectedBuffer.length) return false;

  try {
    return timingSafeEqual(signatureBuffer, expectedBuffer);
  } catch {
    return false;
  }
}

export function getAdminSetupState() {
  const password = getAdminPassword();
  return {
    password,
    isConfigured: Boolean(password),
  };
}

export async function isAdminAuthenticated() {
  const { password, isConfigured } = getAdminSetupState();
  if (!isConfigured) return false;

  const sessionValue = cookies().get(ADMIN_COOKIE_NAME)?.value;
  return isAdminSessionValid(sessionValue, password);
}

export async function requireAdminAuth() {
  const authenticated = await isAdminAuthenticated();
  if (!authenticated) {
    redirect("/admin");
  }
}

export function getAdminCookieOptions() {
  return {
    httpOnly: true,
    sameSite: "lax" as const,
    secure: isProduction(),
    path: "/",
    maxAge: ADMIN_COOKIE_MAX_AGE,
  };
}
