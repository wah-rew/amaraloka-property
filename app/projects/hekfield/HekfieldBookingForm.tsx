"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  phone: z.string().min(8, "Nomor WhatsApp tidak valid"),
  tier: z.enum(["Standard", "Suite", "Signature"]).refine((val) => val !== undefined, {
    message: "Pilih tipe unit",
  }),
  moveIn: z.string().min(1, "Pilih tanggal rencana pindah"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function HekfieldBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const waNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "6281234567890";

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const buildWAText = (data: FormData) =>
    encodeURIComponent(
      `Halo Hekfield, saya ingin mereservasi unit.\n\nNama: ${data.name}\nEmail: ${data.email}\nWA: ${data.phone}\nTipe: ${data.tier}\nRencana pindah: ${data.moveIn}${data.message ? `\nPesan: ${data.message}` : ""}`
    );

  const onSubmit = (data: FormData) => {
    console.log("Hekfield reservation:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <CheckCircle2 size={40} className="text-sage mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-playfair text-2xl text-navy mb-3">
          Terima kasih.
        </h3>
        <p className="font-inter text-sm text-navy/60 leading-relaxed">
          Kami akan menghubungi Anda dalam 24 jam untuk mengonfirmasi
          ketersediaan unit.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              NAMA LENGKAP *
            </label>
            <input
              {...register("name")}
              placeholder="Budi Santoso"
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
            />
            {errors.name && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              EMAIL *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="budi@email.com"
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
            />
            {errors.email && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              NOMOR WHATSAPP *
            </label>
            <input
              {...register("phone")}
              type="tel"
              placeholder="08123456789"
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
            />
            {errors.phone && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.phone.message}
              </p>
            )}
          </div>

          {/* Tier */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              TIPE UNIT *
            </label>
            <select
              {...register("tier")}
              className="w-full bg-cream border border-navy/20 px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-brass transition-colors appearance-none"
            >
              <option value="">Pilih tipe...</option>
              <option value="Standard">Standard (IDR 2.500.000/bulan)</option>
              <option value="Suite">Suite (IDR 3.200.000/bulan)</option>
              <option value="Signature">Signature (IDR 4.000.000/bulan)</option>
            </select>
            {errors.tier && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.tier.message}
              </p>
            )}
          </div>

          {/* Move-in date */}
          <div className="sm:col-span-2">
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              RENCANA TANGGAL MASUK *
            </label>
            <input
              {...register("moveIn")}
              type="date"
              className="w-full sm:w-1/2 bg-cream border border-navy/20 px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-brass transition-colors"
            />
            {errors.moveIn && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.moveIn.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              PESAN (OPSIONAL)
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Ada pertanyaan? Tulis di sini..."
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors resize-none"
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 px-6 py-3 bg-brass text-cream font-inter text-sm tracking-wide hover:bg-brass/90 disabled:opacity-50 transition-colors duration-200"
          >
            {isSubmitting ? "Mengirim..." : "Submit Reservation"}
          </button>

          <a
            href={`https://wa.me/${waNumber}?text=${buildWAText(getValues())}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 border border-sage text-sage font-inter text-sm hover:bg-sage hover:text-cream transition-colors duration-200"
          >
            <MessageCircle size={15} />
            Continue on WhatsApp
          </a>
        </div>

        <p className="font-inter text-xs text-navy/35 text-center">
          Kami menghargai privasi Anda. Data Anda hanya digunakan untuk
          keperluan reservasi.
        </p>
      </form>
    </div>
  );
}
