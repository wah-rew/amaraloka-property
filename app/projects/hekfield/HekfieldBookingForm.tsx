"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, MessageCircle } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Please enter a valid phone number"),
  unit: z.string().min(1, "Please select a preferred unit"),
  budget: z.string().min(1, "Please select a budget range"),
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
      `Halo Hekfield,\n\nSaya tertarik untuk berinvestasi di Hekfield.\n\nNama: ${data.name}\nEmail: ${data.email}\nWA/Phone: ${data.phone}\nPreferred Unit: ${data.unit}\nBudget: ${data.budget}${data.message ? `\n\nPesan: ${data.message}` : ""}`
    );

  const onSubmit = (data: FormData) => {
    console.log("Hekfield expression of interest:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto text-center py-16">
        <CheckCircle2
          size={40}
          className="text-sage mx-auto mb-4"
          strokeWidth={1.5}
        />
        <h3 className="font-playfair text-2xl text-navy mb-3">Thank you.</h3>
        <p className="font-inter text-sm text-navy/60 leading-relaxed">
          We have received your expression of interest. Our team will be in
          touch shortly to discuss unit availability, pricing, and next steps.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              FULL NAME *
            </label>
            <input
              {...register("name")}
              placeholder="Your full name"
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
              placeholder="you@email.com"
              className="w-full bg-transparent border border-navy/20 px-4 py-3 font-inter text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-brass transition-colors"
            />
            {errors.email && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Phone / WhatsApp */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              PHONE / WHATSAPP *
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

          {/* Preferred Unit */}
          <div>
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              PREFERRED UNIT *
            </label>
            <select
              {...register("unit")}
              className="w-full bg-cream border border-navy/20 px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-brass transition-colors appearance-none"
            >
              <option value="">Select unit...</option>
              <option value="Unit 01">Unit 01</option>
              <option value="Unit 02">Unit 02</option>
              <option value="Unit 03">Unit 03</option>
              <option value="Unit 04">Unit 04</option>
              <option value="Unit 05">Unit 05</option>
              <option value="No preference">No preference</option>
            </select>
            {errors.unit && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.unit.message}
              </p>
            )}
          </div>

          {/* Investment Budget Range */}
          <div className="sm:col-span-2">
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              INVESTMENT BUDGET RANGE *
            </label>
            <select
              {...register("budget")}
              className="w-full bg-cream border border-navy/20 px-4 py-3 font-inter text-sm text-navy focus:outline-none focus:border-brass transition-colors appearance-none"
            >
              <option value="">Select range...</option>
              <option value="Under Rp 500jt">Under Rp 500jt</option>
              <option value="Rp 500jt - 1M">Rp 500jt – 1M</option>
              <option value="Rp 1M - 2M">Rp 1M – 2M</option>
              <option value="Above Rp 2M">Above Rp 2M</option>
              <option value="Prefer not to say">Prefer not to say</option>
            </select>
            {errors.budget && (
              <p className="mt-1 font-inter text-xs text-driftwood">
                {errors.budget.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label className="eyebrow text-navy/50 text-[10px] tracking-[0.18em] block mb-2">
              MESSAGE (OPTIONAL)
            </label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Any questions about the investment structure, ROI, or unit availability?"
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
            {isSubmitting ? "Submitting..." : "Submit Expression of Interest"}
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
          Your details are used solely to follow up on this inquiry. We do not
          share your information with third parties.
        </p>
      </form>
    </div>
  );
}
