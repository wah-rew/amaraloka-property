import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import { PUBLIC_WHATSAPP_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi Amaraloka Property untuk menjadwalkan kunjungan ke Hekfield Rempoa atau mendiskusikan peluang investasi.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-navy min-h-[40vh] flex items-end px-6 pt-16">
        <div className="max-w-6xl mx-auto pb-16 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-brass mb-4 tracking-[0.25em]">
              KONTAK
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl md:text-6xl text-white leading-tight">
              Mari berbicara.
            </h1>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="border border-navy/10 bg-white p-10 md:p-14 text-center">
              <p className="eyebrow text-brass text-[10px] mb-4 tracking-[0.2em]">
                MULAI DARI PERCAPAKAN
              </p>
              <h2 className="font-playfair text-4xl text-navy mb-5 leading-tight">
                Langsung hubungi kami via WhatsApp.
              </h2>
              <p className="font-inter text-sm text-slate leading-relaxed max-w-xl mx-auto mb-8">
                Untuk saat ini kami fokus pada percakapan langsung agar proses tanya jawab,
                penjadwalan kunjungan, dan diskusi investasi terasa lebih cepat dan personal.
              </p>
              <a
                href={PUBLIC_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-inter text-sm hover:bg-navyLight transition-colors"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
