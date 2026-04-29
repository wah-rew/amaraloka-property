import type { Metadata } from "next";
import Image from "next/image";
import {
  BookOpen,
  Trees,
  Wifi,
  Coffee,
  Sparkles,
  HeadphonesIcon,
  MapPin,
} from "lucide-react";
import FadeIn from "../../components/FadeIn";
import HekfieldClient from "./HekfieldClient";

export const metadata: Metadata = {
  title: "Hekfield — Co-living by Amaraloka Property",
  description:
    "A quiet estate for the quietly ambitious. Premium co-living in Jakarta with thoughtfully designed spaces, weekly housekeeping, and a community of like-minded residents.",
  openGraph: {
    images: ["/images/hekfield/facade.jpg"],
  },
};

const amenities = [
  {
    icon: BookOpen,
    title: "The Reading Room",
    desc: "A library lounge stocked with curated books, complimentary coffee, and soft lighting.",
  },
  {
    icon: Trees,
    title: "The Garden",
    desc: "A private outdoor courtyard — calm, shaded, and unhurried.",
  },
  {
    icon: Wifi,
    title: "Co-working Lounge",
    desc: "Ergonomic seating, high-speed fiber, and dedicated focus zones.",
  },
  {
    icon: Coffee,
    title: "The Pantry",
    desc: "A shared kitchen equipped with espresso, induction cooktops, and premium cookware.",
  },
  {
    icon: Sparkles,
    title: "Weekly Housekeeping",
    desc: "Rooms cleaned weekly, fresh linens included.",
  },
  {
    icon: HeadphonesIcon,
    title: "Concierge Service",
    desc: "A responsive WhatsApp concierge ready for anything you need.",
  },
];

// NOTE: Exact distances to be confirmed by Wahyu for Hekfield's final address
const nearbyPOIs = [
  {
    category: "Transportasi",
    places: [
      "MRT Lebak Bulus (±8 menit)",
      "KRL Pondok Ranji (±6 menit)",
      "Akses Tol JORR Pondok Aren",
    ],
  },
  {
    category: "Pendidikan & Kesehatan",
    places: [
      "UIN Syarif Hidayatullah",
      "RS Suyoto Jakarta",
      "RS Pondok Indah",
    ],
  },
  {
    category: "Perbelanjaan",
    places: [
      "Pondok Indah Mall",
      "Bintaro Xchange Mall",
      "Lippo Mall Puri",
    ],
  },
  {
    category: "Dining & Leisure",
    places: [
      "Restoran & kafe koridor Kemang",
      "Bintaro Plaza",
      "Taman Kota Bintaro",
    ],
  },
];

export default function HekfieldPage() {
  return (
    <>
      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        {/* Real facade image */}
        <Image
          src="/images/hekfield/facade.jpg"
          alt="Hekfield — angle view of the white European-style townhouse with dark mansard roofs and climbing vines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark overlay — stronger at bottom for legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/30 to-charcoal/10" />

        {/* Content — bottom left */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-ivory/60 mb-4 tracking-[0.25em]">
              AN AMARALOKA PROPERTY
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl text-ivory leading-none mb-4">
              Hekfield
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="font-inter text-xl text-ivory/75 max-w-md leading-relaxed">
              A quiet estate for the quietly ambitious.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── The Story ───────────────────────────────────────── */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-brass mb-8 tracking-[0.25em]">
              THE STORY
            </p>
            <h2 className="font-playfair text-4xl text-charcoal mb-8 leading-snug">
              Inspired by the English countryside. Built for Jakarta.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-inter text-sm text-charcoal/65 leading-relaxed mb-5">
              Hekfield takes its name from the Georgian estate in Hampshire — a
              place defined by restraint, nature, and the quiet rituals of a
              life well-lived. We brought that spirit to Jakarta, translating it
              into a co-living residence that feels less like accommodation and
              more like a home worth coming back to.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-inter text-sm text-charcoal/65 leading-relaxed mb-5">
              Designed as a sanctuary for young professionals who have outgrown
              the noise of conventional rentals, Hekfield offers something rarer
              than square metres: atmosphere. Rooms are quiet, common spaces are
              considered, and neighbours are people who care about the same
              things you do.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-inter text-sm text-charcoal/65 leading-relaxed">
              Understated elegance runs through every decision — from the
              mansard silhouette and climbing vines of the facade to the
              hand-selected books in the reading room. This is a place designed
              for people who appreciate the difference.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Amenities ───────────────────────────────────────── */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              AMENITIES
            </p>
            <h2 className="font-playfair text-4xl text-charcoal text-center mb-16">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.08}>
                <div className="border-t border-charcoal/15 pt-6">
                  <a.icon
                    size={20}
                    className="text-brass mb-4"
                    strokeWidth={1.5}
                  />
                  <h3 className="font-playfair text-lg text-charcoal mb-2">
                    {a.title}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Unit Selector + Floor Plan ──────────────────────── */}
      <HekfieldClient />

      {/* ── Gallery ─────────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              GALLERY
            </p>
            <h2 className="font-playfair text-4xl text-charcoal text-center mb-16">
              A glimpse inside Hekfield
            </h2>
          </FadeIn>

          {/* Facade images — real photos */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-3">
            <FadeIn delay={0} className="col-span-2 md:col-span-2">
              <div className="relative aspect-[16/9] overflow-hidden group">
                <Image
                  src="/images/hekfield/facade.jpg"
                  alt="Hekfield — angle view of the facade"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 66vw"
                />
                <div className="absolute bottom-3 left-3 bg-charcoal/60 backdrop-blur-sm px-3 py-1">
                  <span className="eyebrow text-ivory text-[10px]">
                    FACADE — ANGLE VIEW
                  </span>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="relative aspect-[4/5] overflow-hidden group">
                <Image
                  src="/images/hekfield/facade-front.jpg"
                  alt="Hekfield — frontal view of the facade"
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute bottom-3 left-3 bg-charcoal/60 backdrop-blur-sm px-3 py-1">
                  <span className="eyebrow text-ivory text-[10px]">
                    FACADE — FRONT VIEW
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Placeholder blocks for interior renders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Bedroom 01",
              "Common Area",
              "Pantry",
              "Garden View",
              "Reading Room",
              "Bathroom Detail",
            ].map((label, i) => (
              <FadeIn key={label} delay={i * 0.06}>
                <div className="aspect-square bg-linen border border-charcoal/8 flex items-center justify-center">
                  <span className="eyebrow text-charcoal/30 text-[10px] text-center px-3">
                    {label}
                  </span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Location ────────────────────────────────────────── */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              LOCATION
            </p>
            <h2 className="font-playfair text-4xl text-charcoal text-center mb-4">
              Quietly central.
            </h2>
            <p className="font-inter text-sm text-charcoal/50 text-center mb-16 max-w-md mx-auto">
              Di koridor MRT Lebak Bulus — terhubung ke seluruh kota, tanpa
              kehilangan ketenangan.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Map placeholder */}
            <FadeIn>
              <div className="aspect-[4/3] bg-charcoal/8 border border-charcoal/10 flex flex-col items-center justify-center gap-3">
                <MapPin size={28} className="text-charcoal/25" strokeWidth={1} />
                <p className="font-inter text-xs text-charcoal/30 tracking-widest uppercase">
                  Koridor MRT Lebak Bulus
                </p>
                <p className="font-inter text-[11px] text-charcoal/20">
                  Jakarta Selatan, Indonesia
                </p>
                <p className="font-inter text-[10px] text-charcoal/15 mt-1">
                  {/* TODO: Embed Google Maps iframe with exact address */}
                  Peta interaktif — segera hadir
                </p>
              </div>
            </FadeIn>

            {/* POIs */}
            <FadeIn delay={0.15}>
              <div className="space-y-8">
                {nearbyPOIs.map((group) => (
                  <div key={group.category}>
                    <p className="eyebrow text-brass text-xs mb-3 tracking-[0.2em]">
                      {group.category}
                    </p>
                    <ul className="space-y-2">
                      {group.places.map((place) => (
                        <li
                          key={place}
                          className="font-inter text-sm text-charcoal/65 flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-brass/60 shrink-0" />
                          {place}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── Booking Form ────────────────────────────────────── */}
      <section className="bg-ivory py-24 px-6" id="reserve">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              RESERVE A UNIT
            </p>
            <h2 className="font-playfair text-4xl text-charcoal text-center mb-4">
              Begin your residency.
            </h2>
            <p className="font-inter text-sm text-charcoal/55 text-center mb-16 max-w-md mx-auto leading-relaxed">
              Complete the form below and we&apos;ll be in touch within 24
              hours, or continue directly on WhatsApp.
            </p>
          </FadeIn>
          {/* Client-side form */}
          <HekfieldBookingForm />
        </div>
      </section>
    </>
  );
}

// Lazy import so this file stays a server component
import HekfieldBookingForm from "./HekfieldBookingForm";
