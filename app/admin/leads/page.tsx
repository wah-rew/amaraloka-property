import Link from "next/link";
import { MessageCircle, Mail, Phone } from "lucide-react";
import LogoutButton from "./LogoutButton";
import { requireAdminAuth } from "../../../lib/admin-auth";
import { getAdminWhatsAppNumber, getSupabaseConfig } from "../../../lib/env";
import {
  buildAdminWhatsAppLeadUrl,
  formatLeadSource,
  formatLeadStatus,
  type LeadRecord,
} from "../../../lib/leads";
import { getSupabaseAdminClient } from "../../../lib/supabase/server";

async function getLeads() {
  const supabase = getSupabaseAdminClient();
  if (!supabase) return { leads: [] as LeadRecord[], error: null };

  const { data, error } = await supabase
    .from("leads")
    .select("id, created_at, source, name, email, phone, payment_preference, subject, message, status, notes")
    .order("created_at", { ascending: false });

  return {
    leads: (data ?? []) as LeadRecord[],
    error,
  };
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}

export default async function AdminLeadsPage() {
  await requireAdminAuth();

  const supabaseConfig = getSupabaseConfig();
  const adminWhatsAppNumber = getAdminWhatsAppNumber();
  const { leads, error } = await getLeads();

  const supabaseReady = supabaseConfig.isServerConfigured;
  const adminWhatsAppReady = Boolean(adminWhatsAppNumber);

  return (
    <section className="min-h-screen bg-[#f8f4ee] px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow text-brass mb-3 tracking-[0.25em]">ADMIN DASHBOARD</p>
            <h1 className="font-playfair text-4xl text-navy mb-2">Lead Inbox</h1>
            <p className="font-inter text-sm text-slate leading-relaxed max-w-2xl">
              Semua lead dari Hekfield dan contact form masuk ke sini. Tombol WhatsApp membuka chat ke nomor admin dengan detail lead yang sudah terisi.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="px-4 py-2 border border-navy/15 text-navy font-inter text-sm hover:border-brass hover:text-brass transition-colors"
            >
              Lihat website
            </Link>
            <LogoutButton />
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 mb-8">
          <div className={`border p-5 ${supabaseReady ? "border-sage/30 bg-white" : "border-driftwood/30 bg-driftwood/10"}`}>
            <p className="eyebrow text-[10px] text-navy/45 mb-2 tracking-[0.2em]">SUPABASE</p>
            <p className="font-inter text-sm text-navy">
              {supabaseReady
                ? "Tersambung dan siap menyimpan lead."
                : "Belum siap. Tambahkan NEXT_PUBLIC_SUPABASE_URL dan SUPABASE_SERVICE_ROLE_KEY."}
            </p>
          </div>
          <div className={`border p-5 ${adminWhatsAppReady ? "border-sage/30 bg-white" : "border-driftwood/30 bg-driftwood/10"}`}>
            <p className="eyebrow text-[10px] text-navy/45 mb-2 tracking-[0.2em]">ADMIN WHATSAPP</p>
            <p className="font-inter text-sm text-navy">
              {adminWhatsAppReady
                ? `Follow-up akan diarahkan ke ${adminWhatsAppNumber}.`
                : "Belum siap. Tambahkan NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER agar CTA WhatsApp aktif."}
            </p>
          </div>
        </div>

        {!supabaseReady ? (
          <div className="border border-driftwood/30 bg-driftwood/10 p-6 font-inter text-sm text-driftwood">
            Dashboard bisa dibuka, tapi data lead belum tersedia karena Supabase belum dikonfigurasi.
          </div>
        ) : error ? (
          <div className="border border-driftwood/30 bg-driftwood/10 p-6 font-inter text-sm text-driftwood">
            Gagal mengambil data lead dari Supabase.
          </div>
        ) : leads.length === 0 ? (
          <div className="border border-navy/10 bg-white p-10 text-center">
            <p className="font-playfair text-2xl text-navy mb-3">Belum ada lead</p>
            <p className="font-inter text-sm text-slate">
              Setelah form website dikirim, lead akan muncul di sini.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {leads.map((lead) => {
              const whatsappUrl = buildAdminWhatsAppLeadUrl(lead);

              return (
                <article
                  key={lead.id}
                  className="border border-navy/10 bg-white p-6 shadow-sm"
                >
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div className="space-y-4 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="font-playfair text-2xl text-navy">{lead.name}</h2>
                        <span className="rounded-full bg-navy/5 px-3 py-1 font-inter text-xs text-navy/70">
                          {formatLeadSource(lead.source)}
                        </span>
                        <span className="rounded-full bg-brass/10 px-3 py-1 font-inter text-xs text-brass">
                          {formatLeadStatus(lead.status)}
                        </span>
                      </div>

                      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3 font-inter text-sm text-slate">
                        <div>
                          <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-1">Masuk</p>
                          <p>{formatDate(lead.created_at)}</p>
                        </div>
                        <div>
                          <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-1">Email</p>
                          <p>{lead.email || "-"}</p>
                        </div>
                        <div>
                          <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-1">Phone</p>
                          <p>{lead.phone || "-"}</p>
                        </div>
                        <div>
                          <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-1">Payment Preference</p>
                          <p>{lead.payment_preference || "-"}</p>
                        </div>
                        <div>
                          <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-1">Subject</p>
                          <p>{lead.subject || "-"}</p>
                        </div>
                        <div>
                          <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-1">Notes</p>
                          <p>{lead.notes || "-"}</p>
                        </div>
                      </div>

                      <div>
                        <p className="text-navy/40 text-xs uppercase tracking-[0.15em] mb-2">Message</p>
                        <p className="font-inter text-sm text-slate leading-relaxed whitespace-pre-wrap">
                          {lead.message || "-"}
                        </p>
                      </div>
                    </div>

                    <div className="lg:w-64 lg:pl-6 lg:border-l lg:border-navy/10">
                      <div className="space-y-3">
                        <a
                          href={lead.email ? `mailto:${lead.email}` : undefined}
                          className={`flex items-center justify-center gap-2 px-4 py-3 font-inter text-sm border transition-colors ${lead.email ? "border-navy/15 text-navy hover:border-brass hover:text-brass" : "border-navy/10 text-navy/30 cursor-not-allowed pointer-events-none"}`}
                        >
                          <Mail size={16} />
                          Email
                        </a>

                        <a
                          href={lead.phone ? `tel:${lead.phone}` : undefined}
                          className={`flex items-center justify-center gap-2 px-4 py-3 font-inter text-sm border transition-colors ${lead.phone ? "border-navy/15 text-navy hover:border-brass hover:text-brass" : "border-navy/10 text-navy/30 cursor-not-allowed pointer-events-none"}`}
                        >
                          <Phone size={16} />
                          Call
                        </a>

                        <a
                          href={whatsappUrl ?? undefined}
                          target={whatsappUrl ? "_blank" : undefined}
                          rel={whatsappUrl ? "noopener noreferrer" : undefined}
                          className={`flex items-center justify-center gap-2 px-4 py-3 font-inter text-sm transition-colors ${whatsappUrl ? "bg-[#25D366] text-white hover:bg-[#20bd5c]" : "bg-[#25D366]/20 text-[#25D366]/50 cursor-not-allowed pointer-events-none"}`}
                        >
                          <MessageCircle size={16} />
                          WhatsApp Follow-up
                        </a>

                        {!adminWhatsAppReady && (
                          <p className="font-inter text-xs text-driftwood leading-relaxed">
                            CTA dimatikan sampai NEXT_PUBLIC_ADMIN_WHATSAPP_NUMBER diisi.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
