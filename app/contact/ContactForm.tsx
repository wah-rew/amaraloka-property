"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { useLeadCaptureForm } from "../components/LeadCaptureForm";

const schema = z.object({
  name: z.string().min(2, "Nama minimal 2 karakter"),
  email: z.string().email("Masukkan email yang valid"),
  subject: z.string().min(3, "Subjek wajib diisi"),
  message: z.string().min(10, "Pesan minimal 10 karakter"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
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
        source: "contact",
        name: data.name,
        email: data.email,
        subject: data.subject,
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
      <div className="py-16 text-center">
        <CheckCircle2 size={40} className="text-sage mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-playfair text-2xl text-navy mb-3">
          Pesan diterima.
        </h3>
        <p className="font-inter text-sm text-navy/60">
          {submitSuccess || "Kami akan menghubungi Anda secepatnya, maksimal satu hari kerja."}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {submitError && (
        <div className="rounded-sm border border-driftwood/30 bg-driftwood/10 px-4 py-3 font-inter text-sm text-driftwood">
          {submitError}
        </div>
      )}
      {[
        { id: "name", label: "FULL NAME", type: "text", placeholder: "Nama Anda" },
        { id: "email", label: "EMAIL", type: "email", placeholder: "nama@email.com" },
        { id: "subject", label: "SUBJECT", type: "text", placeholder: "Ada yang bisa kami bantu?" },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
            {label} *
          </label>
          <input
            {...register(id as keyof FormData)}
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
          />
          {errors[id as keyof FormData] && (
            <p className="mt-1 font-inter text-xs text-driftwood">
              {errors[id as keyof FormData]?.message}
            </p>
          )}
        </div>
      ))}

      <div>
        <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
          MESSAGE *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Ceritakan kebutuhan atau pertanyaan Anda..."
          className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 font-inter text-xs text-driftwood">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-brass text-cream font-inter text-sm tracking-wide hover:bg-brass/90 disabled:opacity-50 transition-colors duration-200"
      >
        {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
      </button>
    </form>
  );
}
