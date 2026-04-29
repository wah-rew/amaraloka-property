import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import ContactForm from "./ContactForm";


export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amaraloka Property. Schedule a visit to Hekfield Rempoa or discuss an investment opportunity.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy min-h-[40vh] flex items-end px-6 pt-16">
        <div className="max-w-6xl mx-auto pb-16 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-brass mb-4 tracking-[0.25em]">
              CONTACT
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl md:text-6xl text-white leading-tight">
              Let&apos;s talk.
            </h1>
          </FadeIn>
        </div>
      </section>

      {/* Form + Info */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Form */}
          <FadeIn>
            <ContactForm />
          </FadeIn>

          {/* Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-10">
              <div className="">
                <p className="eyebrow text-brass text-[10px] mb-4 tracking-[0.2em]">
                  SCHEDULE A VISIT
                </p>
                <p className="font-inter text-sm text-slate leading-relaxed mb-4">
                  We offer private viewings of Hekfield Rempoa by appointment. Bring
                  your questions. We will bring the coffee.
                </p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to schedule a visit to Hekfield Rempoa.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-navy text-white font-inter text-xs hover:bg-navyLight transition-colors"
                >
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


    </>
  );
}
