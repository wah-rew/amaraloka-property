"use client";

import { createClient } from "@supabase/supabase-js";
import { getSupabaseConfig } from "../env";

let browserClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseBrowserClient() {
  const { url, anonKey, isClientConfigured } = getSupabaseConfig();

  if (!isClientConfigured || !url || !anonKey) {
    return null;
  }

  if (!browserClient) {
    browserClient = createClient(url, anonKey);
  }

  return browserClient;
}
