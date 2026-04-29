"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log("Contact form:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-16 text-center">
        <CheckCircle2 size={40} className="text-sage mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-playfair text-2xl text-charcoal mb-3">
          Message received.
        </h3>
        <p className="font-inter text-sm text-charcoal/60">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {[
        { id: "name", label: "FULL NAME", type: "text", placeholder: "Your name" },
        { id: "email", label: "EMAIL", type: "email", placeholder: "your@email.com" },
        { id: "subject", label: "SUBJECT", type: "text", placeholder: "How can we help?" },
      ].map(({ id, label, type, placeholder }) => (
        <div key={id}>
          <label className="eyebrow text-charcoal/50 text-[10px] tracking-[0.18em] block mb-2">
            {label} *
          </label>
          <input
            {...register(id as keyof FormData)}
            type={type}
            placeholder={placeholder}
            className="w-full bg-transparent border border-charcoal/20 px-4 py-3 font-inter text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-brass transition-colors"
          />
          {errors[id as keyof FormData] && (
            <p className="mt-1 font-inter text-xs text-terracotta">
              {errors[id as keyof FormData]?.message}
            </p>
          )}
        </div>
      ))}

      <div>
        <label className="eyebrow text-charcoal/50 text-[10px] tracking-[0.18em] block mb-2">
          MESSAGE *
        </label>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="Tell us about your enquiry..."
          className="w-full bg-transparent border border-charcoal/20 px-4 py-3 font-inter text-sm text-charcoal placeholder:text-charcoal/30 focus:outline-none focus:border-brass transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 font-inter text-xs text-terracotta">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full px-6 py-3 bg-brass text-ivory font-inter text-sm tracking-wide hover:bg-brass/90 disabled:opacity-50 transition-colors duration-200"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
