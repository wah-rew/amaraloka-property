"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useLeadCaptureForm } from "../../components/LeadCaptureForm";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Masukkan email yang valid"),
  phone: z.string().min(8, "Masukkan nomor WhatsApp yang valid"),
  tierOfInterest: z.string().min(1, "Pilih tier yang diminati"),
  paymentPreference: z.string().min(1, "Pilih preferensi pembayaran"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function HekfieldBookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const { submitLead, submitError, submitSuccess, clearMessages } =
    useLeadCaptureForm();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    clearMessages();

    try {
      await submitLead({
        source: "hekfield",
        name: data.name,
        email: data.email,
        phone: data.phone,
        tierOfInterest: data.tierOfInterest,
        paymentPreference: data.paymentPreference,
        message: data.message,
      });
      setSubmitted(true);
      reset();
    } catch {
      return;
    }
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-12">
        <CheckCircle2
          size={40}
          className="text-sage mx-auto mb-4"
          strokeWidth={1.5}
        />
        <h3 className="font-playfair text-2xl text-navy mb-3">Terima kasih.</h3>
        <p className="font-inter text-sm text-navy/60 leading-relaxed">
          {submitSuccess ||
            "Minat Anda sudah kami terima. Tim Amaraloka akan segera menghubungi Anda untuk membahas tier, pricing, dan langkah berikutnya."}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {submitError && (
          <div className="rounded-sm border border-driftwood/30 bg-driftwood/10 px-4 py-3 font-inter text-sm text-driftwood">
            {submitError}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              NAMA LENGKAP *
            </label>
            <input
              {...register("name")}
              placeholder="Nama lengkap Anda"
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
            />
            {errors.name && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              EMAIL *
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="nama@email.com"
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
            />
            {errors.email && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.email.message}
              </p>
            )}
          </div>

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

          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              TIER YANG DIMINATI *
            </label>
            <select
              {...register("tierOfInterest")}
              className="w-full bg-white border border-navy/20 px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-brass transition-colors appearance-none"
            >
              <option value="">Pilih tier...</option>
              <option value="Founding">Founding</option>
              <option value="Phase 1">Phase 1</option>
              <option value="Final">Final</option>
              <option value="Belum menentukan">Belum menentukan</option>
            </select>
            {errors.tierOfInterest && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.tierOfInterest.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              PREFERENSI PEMBAYARAN *
            </label>
            <select
              {...register("paymentPreference")}
              className="w-full bg-white border border-navy/20 px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-brass transition-colors appearance-none"
            >
              <option value="">Pilih preferensi...</option>
              <option value="Hard Cash">Hard Cash</option>
              <option value="Installment Cash">Cicilan Bertahap</option>
            </select>
            {errors.paymentPreference && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.paymentPreference.message}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              PESAN (OPSIONAL)
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Jika ada pertanyaan soal pricing tier, skenario return, atau jadwal kunjungan, tulis di sini."
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors resize-none"
            />
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-4 bg-brass text-cream font-inter text-sm tracking-wide hover:bg-brass/90 disabled:opacity-50 transition-colors duration-200"
          >
            {isSubmitting ? "Mengirim..." : "Kirim Minat"}
          </button>
        </div>

        <p className="font-inter text-xs text-navy/35 text-center leading-relaxed">
          Data Anda hanya digunakan untuk menindaklanjuti minat ini dan tidak dibagikan ke pihak ketiga.
        </p>
      </form>
    </div>
  );
}
