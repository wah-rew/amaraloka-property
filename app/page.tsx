import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "./components/FadeIn";
import { ArrowRight, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Amaraloka Property: Crafting Quiet Estates",
  description:
    "We build residences that honor craftsmanship, calm, and the rituals of everyday life.",
};

const philosophyItems = [
  {
    title: "Considered Design",
    body: "Every detail, from facade to fixtures, is intentional and timeless.",
  },
  {
    title: "Quiet Luxury",
    body: "Refined materials and craftsmanship. Substance over spectacle.",
  },
  {
    title: "Built to Last",
    body: "Properties designed for decades, not trends.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────── */}
      <section className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center pt-16">
        <FadeIn delay={0.1} direction="none">
          <p className="eyebrow text-brass mb-6 tracking-[0.25em]">
            AMARALOKA PROPERTY
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white max-w-3xl leading-tight">
            Crafting quiet estates for modern living.
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-6 font-inter text-lg text-cream/70 max-w-xl leading-relaxed">
            We build residences that honor craftsmanship, calm, and the rituals
            of everyday life.
          </p>
        </FadeIn>
        <FadeIn delay={0.55} className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects/hekfield"
            className="px-7 py-3 bg-white text-navy font-inter text-sm tracking-wide hover:bg-cream transition-colors duration-200"
          >
            Explore Projects
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 border border-cream/40 text-cream font-inter text-sm tracking-wide hover:border-cream hover:text-white transition-colors duration-200"
          >
            Our Philosophy
          </Link>
        </FadeIn>

        {/* Subtle scroll indicator */}
        <FadeIn delay={0.9} className="mt-20 flex flex-col items-center gap-2">
          <span className="eyebrow text-cream/30 text-[10px]">SCROLL</span>
          <div className="w-px h-10 bg-cream/20" />
        </FadeIn>
      </section>

      {/* ── Philosophy ────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-16 tracking-[0.25em]">
              OUR PHILOSOPHY
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {philosophyItems.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.12}>
                <div className="border-t border-sand pt-8">
                  <h3 className="font-playfair text-xl text-navy mb-3">
                    {item.title}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Projects ──────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-3 tracking-[0.25em]">
              OUR PROJECTS
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-16">
              Residences by Amaraloka
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Hekfield Card */}
            <FadeIn delay={0.1}>
              <Link href="/projects/hekfield" className="group block">
                <div className="relative overflow-hidden aspect-[4/3] bg-navy">
                  <Image
                    src="/images/hekfield/facade-front.jpg"
                    alt="Hekfield frontal view of the white European-style co-living townhouse with dark mansard roofs"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Subtle dark vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  {/* Tag */}
                  <span className="absolute top-4 left-4 bg-brass text-white eyebrow text-[10px] px-3 py-1">
                    NOW LEASING
                  </span>
                  {/* Bottom content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-2xl text-white mb-1">
                      Hekfield
                    </h3>
                    <p className="font-inter text-sm text-cream/80 mb-3">
                      A quiet estate for people with high standards.
                    </p>
                    <span className="flex items-center gap-1 text-cream/60 font-inter text-xs">
                      <MapPin size={11} />
                      Jakarta, Indonesia
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-inter text-sm text-slate">
                    Co-living Rental
                  </span>
                  <span className="flex items-center gap-1 text-brass font-inter text-sm group-hover:gap-2 transition-all duration-200">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>

            {/* Coming Soon */}
            <FadeIn delay={0.2}>
              <div className="opacity-50 cursor-default">
                <div className="relative overflow-hidden aspect-[4/3] bg-sand flex items-center justify-center">
                  <span className="absolute top-4 left-4 bg-navy/20 text-navy/50 eyebrow text-[10px] px-3 py-1">
                    IN DEVELOPMENT
                  </span>
                  <div className="text-center p-8">
                    <p className="font-playfair text-4xl text-navy/20 mb-2">
                      ?
                    </p>
                    <p className="font-inter text-sm text-navy/30">
                      Something is taking shape.
                    </p>
                  </div>
                </div>
                <div className="mt-4">
                  <span className="font-inter text-sm text-slate/50">
                    Announcement coming soon
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── About Preview ─────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="eyebrow text-brass mb-4 tracking-[0.25em]">
              ABOUT AMARALOKA
            </p>
            <h2 className="font-playfair text-4xl text-white mb-6 leading-snug">
              Building with intention since 2024.
            </h2>
            <p className="font-inter text-sm text-cream/65 leading-relaxed mb-4">
              Amaraloka was founded on a simple belief: the places we live shape
              who we are. We design with restraint, build with precision, and
              curate communities worth belonging to.
            </p>
            <p className="font-inter text-sm text-cream/65 leading-relaxed mb-8">
              Every property reflects our commitment to the considered, the careful, and the enduring.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-inter text-sm text-brass border-b border-brass pb-0.5 hover:text-rattan hover:border-rattan transition-colors duration-200"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </FadeIn>

          {/* Placeholder visual */}
          <FadeIn delay={0.2}>
            <div className="aspect-[4/5] bg-navyLight border border-cream/10 flex items-center justify-center">
              <p className="font-inter text-xs text-cream/25 tracking-widest uppercase">
                Studio Portrait
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────── */}
      <section className="bg-navy py-20 px-6 text-center border-t border-cream/10">
        <FadeIn>
          <p className="eyebrow text-brass/70 mb-4 tracking-[0.25em]">
            GET IN TOUCH
          </p>
          <h2 className="font-playfair text-4xl text-cream mb-8">
            Let&apos;s build something lasting.
          </h2>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 border border-brass text-brass font-inter text-sm tracking-wide hover:bg-brass hover:text-white transition-colors duration-200"
          >
            Start a Conversation
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
