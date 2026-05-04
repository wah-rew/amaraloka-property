export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim();

  return {
    url,
    serviceRoleKey,
    anonKey,
    isServerConfigured: Boolean(url && serviceRoleKey),
    isClientConfigured: Boolean(url && anonKey),
  };
}

export function getAdminPassword() {
  return process.env.ADMIN_PASSWORD?.trim() || "";
}

export function getAdminWhatsAppNumber() {
  return process.env.NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER?.trim() || "";
}

export function isProduction() {
  return process.env.NODE_ENV === "production";
}
