import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Sparkles, HeadphonesIcon } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import HekfieldClient from "./HekfieldClient";
import HekfieldBookingForm from "./HekfieldBookingForm";

export const metadata: Metadata = {
  title: "Hekfield Rempoa Strata Title Kost Investment by Amaraloka",
  description:
    "5 units. SHM ownership. Passive income managed by Amaraloka. Hekfield Rempoa is a premium kost investment property in Jakarta not a rental.",
  openGraph: {
    images: ["/images/hekfield/facade.jpg"],
  },
};

const amenities = [
  {
    icon: Coffee,
    title: "The Pantry",
    desc: "A shared kitchen equipped with espresso, induction cooktops, and premium cookware.",
  },
  {
    icon: Sparkles,
    title: "Housekeeping Included",
    desc: "Units professionally cleaned and maintained fully managed for you.",
  },
  {
    icon: HeadphonesIcon,
    title: "Concierge Service",
    desc: "A responsive WhatsApp concierge handling tenant needs on your behalf.",
  },
];

// NOTE: Exact distances to be confirmed by Wahyu for Hekfield Rempoa's final address
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
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src="/images/hekfield/facade.jpg"
          alt="Hekfield Rempoa angle view of the white European-style townhouse with dark mansard roofs and climbing vines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Navy overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(27,43,75,0.88) 0%, rgba(27,43,75,0.3) 50%, rgba(27,43,75,0.1) 100%)",
          }}
        />

        {/* Content, bottom left */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-20 pt-32 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-cream/60 mb-4 tracking-[0.25em]">
              AN AMARALOKA PROPERTY
            </p>
          </FadeIn>
          <FadeIn delay={0.25}>
            <h1 className="font-playfair text-7xl md:text-8xl lg:text-9xl text-white leading-none mb-4">
              Hekfield Rempoa
            </h1>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="font-inter text-xl text-cream/75 max-w-md leading-relaxed mb-3">
              A quiet estate for the quietly ambitious.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="font-inter text-xs text-cream/50 tracking-[0.22em] uppercase">
              5 units.&nbsp;&nbsp;Strata title.&nbsp;&nbsp;Passive income.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── The Story ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-brass mb-8 tracking-[0.25em]">
              THE STORY
            </p>
            <h2 className="font-playfair text-4xl text-navy mb-8 leading-snug">
              Inspired by the English countryside. Built for Jakarta.
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="font-inter text-sm text-slate leading-relaxed mb-5">
              Hekfield Rempoa takes its name from the Georgian estate in Hampshire, a
              place defined by restraint, nature, and the quiet habits of a life
              well-lived. We brought that spirit to Jakarta, translating it into
              a premium kost property that feels less like accommodation and more
              like an asset worth owning.
            </p>
          </FadeIn>
          <FadeIn delay={0.15}>
            <p className="font-inter text-sm text-slate leading-relaxed mb-5">
              Phase 1 offers exactly five units each transferred under SHM
              (Sertifikat Hak Milik), the highest form of property title in
              Indonesia. Fully managed by Amaraloka, owners receive monthly
              income without involvement.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="font-inter text-sm text-slate leading-relaxed">
              Understated elegance runs through every decision, from the mansard
              silhouette and climbing vines of the facade to the hand-selected
              fixtures inside. This is a place designed for people who appreciate
              the difference and understand the value of owning it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── Floor Plan ───────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              FLOOR PLAN
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-3">
              Floor Plan
            </h2>
            <p className="font-inter text-sm text-slate text-center mb-12 max-w-md mx-auto">
              Denah tersedia untuk ditinjau. Hubungi kami untuk detail lengkap.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="border border-navy/10 overflow-hidden">
              <Image
                src="/images/hekfield/floorplan.jpg"
                alt="Denah Hekfield Rempoa: Lantai 1, 2, dan 3"
                width={1200}
                height={800}
                className="w-full h-auto object-contain p-8 bg-white"
                quality={95}
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Amenities ────────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              AMENITIES
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-16">
              Everything you need. Nothing you don&apos;t.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.08}>
                <div className="border-t border-sand pt-6">
                  <a.icon size={20} className="text-brass mb-4" strokeWidth={1.5} />
                  <h3 className="font-playfair text-lg text-navy mb-2">
                    {a.title}
                  </h3>
                  <p className="font-inter text-sm text-slate leading-relaxed">
                    {a.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── Reserve Your Unit + Investment Analysis ───────────────────────── */}
      <HekfieldClient />

      {/* ── Location ─────────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              LOCATION
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-4">
              Quietly central.
            </h2>
            <p className="font-inter text-sm text-slate text-center mb-16 max-w-md mx-auto">
              Di koridor MRT Lebak Bulus. Terhubung ke seluruh kota, tanpa
              kehilangan ketenangan.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
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
                          className="font-inter text-sm text-slate flex items-center gap-2"
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

      {/* ── Express Interest Form ─────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6" id="reserve">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              EXPRESS INTEREST
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-4">
              Express Interest in Hekfield Rempoa
            </h2>
            <p className="font-inter text-sm text-slate text-center mb-16 max-w-md mx-auto leading-relaxed">
              We will contact you to discuss unit availability, pricing, and
              next steps. No commitment required.
            </p>
          </FadeIn>
          <HekfieldBookingForm />
        </div>
      </section>
    </>
  );
}
