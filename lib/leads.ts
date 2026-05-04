import { getAdminWhatsAppNumber } from "./env";
import { z } from "zod";

const baseLeadSchema = z.object({
  name: z.string().trim().min(2, "Nama minimal 2 karakter"),
  email: z
    .string()
    .trim()
    .email("Email tidak valid")
    .optional()
    .or(z.literal(""))
    .transform((value) => value || null),
  phone: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .transform((value) => value || null),
  paymentPreference: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .transform((value) => value || null),
  subject: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .transform((value) => value || null),
  message: z
    .string()
    .trim()
    .optional()
    .or(z.literal(""))
    .transform((value) => value || null),
});

const hekfieldLeadSchema = baseLeadSchema.extend({
  source: z.literal("hekfield"),
  email: z.string().trim().email("Email tidak valid"),
  phone: z.string().trim().min(8, "Nomor WhatsApp tidak valid"),
  paymentPreference: z
    .string()
    .trim()
    .min(1, "Pilih preferensi pembayaran"),
});

const contactLeadSchema = baseLeadSchema.extend({
  source: z.literal("contact"),
  email: z.string().trim().email("Email tidak valid"),
  subject: z.string().trim().min(3, "Subjek wajib diisi"),
  message: z.string().trim().min(10, "Pesan minimal 10 karakter"),
});

export const leadInsertSchema = z.discriminatedUnion("source", [
  hekfieldLeadSchema,
  contactLeadSchema,
]);

export type LeadInsertInput = z.infer<typeof leadInsertSchema>;

export type LeadRecord = {
  id: string;
  created_at: string;
  source: "hekfield" | "contact";
  name: string;
  email: string | null;
  phone: string | null;
  payment_preference: string | null;
  subject: string | null;
  message: string | null;
  status: "new" | "contacted" | "qualified" | "closed";
  notes: string | null;
};

export function mapLeadInputToRow(input: LeadInsertInput) {
  return {
    source: input.source,
    name: input.name,
    email: input.email ?? null,
    phone: input.phone ?? null,
    payment_preference: input.paymentPreference ?? null,
    subject: input.subject ?? null,
    message: input.message ?? null,
  };
}

export function getLeadValidationMessage(error: z.ZodError) {
  return error.issues[0]?.message ?? "Data tidak valid";
}

export function formatLeadSource(source: LeadRecord["source"]) {
  return source === "hekfield" ? "Hekfield" : "Contact";
}

export function formatLeadStatus(status: LeadRecord["status"]) {
  return {
    new: "Baru",
    contacted: "Sudah dihubungi",
    qualified: "Terkualifikasi",
    closed: "Selesai",
  }[status];
}

export function normalizePhoneForWhatsApp(phone: string | null) {
  if (!phone) return null;

  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;

  if (digits.startsWith("62")) return digits;
  if (digits.startsWith("0")) return `62${digits.slice(1)}`;
  return digits;
}

export function buildAdminWhatsAppLeadUrl(lead: Pick<LeadRecord, "name" | "phone" | "email" | "source" | "payment_preference" | "subject" | "message">) {
  const adminNumber = normalizePhoneForWhatsApp(getAdminWhatsAppNumber());
  if (!adminNumber) return null;

  const details = [
    "Lead baru Amaraloka",
    `Nama: ${lead.name}`,
    `Source: ${formatLeadSource(lead.source)}`,
    `Phone: ${lead.phone || "-"}`,
    `Email: ${lead.email || "-"}`,
    `Payment preference: ${lead.payment_preference || "-"}`,
    `Subject: ${lead.subject || "-"}`,
    `Message: ${lead.message || "-"}`,
  ];

  return `https://wa.me/${adminNumber}?text=${encodeURIComponent(details.join("\n"))}`;
}
