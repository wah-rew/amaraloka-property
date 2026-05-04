import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import { ArrowRight } from "lucide-react";
import { PUBLIC_WHATSAPP_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "About",
  description:
    "Amaraloka Property is a boutique developer building residences that honor craftsmanship, calm, and the rituals of everyday life.",
};

const values = [
  {
    word: "Craftsmanship",
    desc: "We sweat the details others overlook: materials, proportions, the weight of a door handle.",
  },
  {
    word: "Calm",
    desc: "Our properties are designed as antidotes to noise. Quiet is a design choice.",
  },
  {
    word: "Community",
    desc: "The right neighbours make a home. We curate residents as carefully as we curate spaces.",
  },
  {
    word: "Continuity",
    desc: "We build for decades. Every decision is tested against one question: will this age well?",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy min-h-[60vh] flex items-center px-6 pt-16">
        <div className="max-w-6xl mx-auto py-24 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-brass mb-6 tracking-[0.25em]">
              ABOUT AMARALOKA
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl md:text-6xl text-white max-w-2xl leading-tight mb-6">
              We build places worth belonging to.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="font-inter text-lg text-cream/60 max-w-lg leading-relaxed">
              A boutique property developer founded on the belief that where you
              live shapes who you become.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              OUR VALUES
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-16">
              Four words we live by.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.word} delay={i * 0.1}>
                <div className="border-t border-sand pt-6">
                  <h3 className="font-playfair text-xl text-navy mb-3">
                    {v.word}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20 px-6 text-center">
        <FadeIn>
          <h2 className="font-playfair text-4xl text-cream mb-8">
            Interested in what we&apos;re building?
          </h2>
          <a
            href={PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-brass text-brass font-inter text-sm tracking-wide hover:bg-brass hover:text-white transition-colors duration-200"
          >
            Chat via WhatsApp <ArrowRight size={14} />
          </a>
        </FadeIn>
      </section>
    </>
  );
}
