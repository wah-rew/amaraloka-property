import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "../env";

export function getSupabaseAdminClient() {
  const { url, serviceRoleKey, isServerConfigured } = getSupabaseConfig();

  if (!isServerConfigured || !url || !serviceRoleKey) {
    return null;
  }

  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
