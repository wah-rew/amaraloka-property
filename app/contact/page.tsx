import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import ContactForm from "./ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Amaraloka Property. Schedule a visit to Hekfield or discuss an investment opportunity.",
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
              <div>
                <p className="eyebrow text-brass text-[10px] mb-5 tracking-[0.2em]">
                  GET IN TOUCH
                </p>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "hello@amaraloka.id",
                      href: "mailto:hello@amaraloka.id",
                    },
                    {
                      icon: Phone,
                      label: "WhatsApp",
                      value: "+62 812 3456 7890",
                      href: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: "Jakarta Selatan, Indonesia",
                      href: null,
                    },
                    {
                      icon: Clock,
                      label: "Hours",
                      value: "Mon to Sat, 09:00 to 17:00 WIB",
                      href: null,
                    },
                  ].map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-3">
                      <Icon
                        size={15}
                        className="text-brass mt-0.5 shrink-0"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="font-inter text-[10px] text-navy/40 uppercase tracking-wide mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="font-inter text-sm text-slate hover:text-brass transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="font-inter text-sm text-slate">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-sand pt-8">
                <p className="eyebrow text-brass text-[10px] mb-4 tracking-[0.2em]">
                  SCHEDULE A VISIT
                </p>
                <p className="font-inter text-sm text-slate leading-relaxed mb-4">
                  We offer private viewings of Hekfield by appointment. Bring
                  your questions. We will bring the coffee.
                </p>
                <a
                  href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I'd like to schedule a visit to Hekfield.")}`}
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

      {/* Map placeholder */}
      <section className="bg-white h-64 flex items-center justify-center border-t border-sand">
        <div className="text-center">
          <MapPin size={24} className="text-navy/20 mx-auto mb-2" strokeWidth={1} />
          <p className="font-inter text-xs text-navy/25 tracking-widest uppercase">
            Map coming soon
          </p>
        </div>
      </section>
    </>
  );
}
