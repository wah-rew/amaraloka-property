import type { Metadata } from "next";
import Image from "next/image";
import { Coffee, Sparkles, HeadphonesIcon } from "lucide-react";
import FadeIn from "../../components/FadeIn";
import HekfieldClient from "./HekfieldClient";
import HekfieldBookingForm from "./HekfieldBookingForm";
import { PUBLIC_WHATSAPP_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Hekfield Rempoa Strata Title Kost Investment by Amaraloka",
  description:
    "5 strata-title units. Founding tier from Rp 1,85 M. 10,0% IRR conservative case for Hekfield Rempoa by Amaraloka.",
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
    desc: "Units professionally cleaned and maintained, fully managed for you.",
  },
  {
    icon: HeadphonesIcon,
    title: "Concierge Service",
    desc: "A responsive WhatsApp concierge handling tenant needs on your behalf.",
  },
];

const heroKpis = [
  { value: "Rp 1,85 M", label: "Founding Price" },
  { value: "Rp 131 jt", label: "NOI Stabilized" },
  { value: "10,0%", label: "10yr IRR" },
  { value: "2,18x", label: "10yr Total Return" },
];

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
    ],
  },
];

const exitPaths = [
  {
    title: "Hold Forever",
    summary: "Kumulatif NOI 10yr: Rp 1,29 M",
    details: [
      "NOI Year 10: Rp 174 jt / year",
      "Dapat diwariskan atau dijaminkan untuk akses kredit",
      "Cocok untuk investor yang ingin cashflow jangka panjang",
    ],
  },
  {
    title: "Jual Tahun ke-5",
    summary: "Exit Value: Rp 2,11 M",
    details: [
      "5yr Total Multiple: 1,57x",
      "Likuidasi setelah fase stabilized",
      "Masuk akal bila target holding period Anda menengah",
    ],
  },
  {
    title: "Jual Tahun ke-10",
    summary: "Exit Value: Rp 2,59 M",
    details: [
      "10yr Total Multiple: 2,18x",
      "Maksimasi capital gain dari apresiasi tanah",
      "Berbasis Founding price Rp 1,85 M dan Conservative Scenario",
    ],
  },
];

const risks = [
  {
    title: "Vacancy Risk",
    risk: "Year 1 ramp-up bisa lebih lambat dari proyeksi.",
    mitigation:
      "Founding tier mendapat guaranteed minimum NOI Rp 110 jt pada Year 1.",
  },
  {
    title: "Operasional & Management",
    risk: "Kualitas tenant management mempengaruhi retensi dan review tenant.",
    mitigation:
      "Tim concierge dedicated dan quarterly performance report menjaga disiplin operasional.",
  },
  {
    title: "Market Risk",
    risk: "Koridor MRT bisa menerima supply baru di segmen kost premium.",
    mitigation:
      "Pricing mid-premium memberi buffer terhadap kompetitor tanpa mengorbankan positioning.",
  },
  {
    title: "Likuiditas",
    risk: "Pasar resale strata kost Indonesia masih relatif thin.",
    mitigation:
      "Amaraloka memfasilitasi resale dan membuka jalur first right of refusal untuk ekosistem berikutnya.",
  },
  {
    title: "CapEx Maintenance",
    risk: "Furniture, AC, dan finishing perlu refresh setelah 5 sampai 7 tahun.",
    mitigation:
      "CapEx reserve 5% dibukukan dari NOI sejak periode stabilized.",
  },
  {
    title: "Regulatory",
    risk: "Perubahan zonasi atau pajak properti dapat memengaruhi return.",
    mitigation:
      "SHM adalah bentuk hak milik tertinggi dan paling protected untuk kepemilikan properti.",
  },
];

export default function HekfieldPage() {
  const isLeadCaptureEnabled = Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL?.trim() &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY?.trim() &&
      process.env.SUPABASE_SERVICE_ROLE_KEY?.trim()
  );

  return (
    <>
      <section className="relative min-h-screen flex items-end overflow-hidden">
        <Image
          src="/images/hekfield/facade.jpg"
          alt="Hekfield Rempoa angle view of the white European-style townhouse with dark mansard roofs and climbing vines"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(27,43,75,0.9) 0%, rgba(27,43,75,0.32) 50%, rgba(27,43,75,0.08) 100%)",
          }}
        />

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
            <p className="font-inter text-xl text-cream/75 max-w-2xl leading-relaxed mb-4">
              A quiet estate for the quietly ambitious.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="font-inter text-sm text-cream/60 max-w-2xl leading-relaxed mb-8">
              5 strata-title units. Founding tier from Rp 1,85 M. 10,0% IRR conservative case.
            </p>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl">
              {heroKpis.map((item) => (
                <div key={item.label} className="border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-4">
                  <p className="font-playfair text-2xl md:text-3xl text-white mb-1">{item.value}</p>
                  <p className="font-inter text-[11px] uppercase tracking-[0.18em] text-cream/55">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-cream py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <p className="eyebrow text-brass mb-8 tracking-[0.25em]">THE STORY</p>
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
              income without daily involvement.
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

      <HekfieldClient />

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
                  <h3 className="font-playfair text-lg text-navy mb-2">{a.title}</h3>
                  <p className="font-inter text-sm text-slate leading-relaxed">{a.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

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
              Di koridor MRT Lebak Bulus. Terhubung ke seluruh kota, tanpa kehilangan ketenangan.
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

            <FadeIn delay={0.25}>
              <div className="w-full aspect-[4/3] border border-navy/10 overflow-hidden">
                <iframe
                  src="https://maps.google.com/maps?q=-6.290863849532357,106.75763239429325&output=embed&z=17"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokasi Hekfield Rempoa"
                />
              </div>
              <a
                href="https://maps.app.goo.gl/JofDF5iCMBHvcW1h8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 font-inter text-xs text-brass border-b border-brass/40 pb-0.5 hover:border-brass transition-colors duration-200"
              >
                Buka di Google Maps
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass mb-4 tracking-[0.25em] text-center">
              EXIT SCENARIOS
            </p>
            <h2 className="font-playfair text-4xl text-navy mb-4 leading-snug text-center">
              Tiga path likuiditas.
            </h2>
            <p className="font-inter text-sm text-slate leading-relaxed max-w-3xl mx-auto text-center mb-16">
              Berbasis Founding price Rp 1,85 M dan Conservative Scenario. SHM memberi fleksibilitas untuk hold, dijual, diwariskan, atau dijaminkan.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exitPaths.map((path, index) => (
              <FadeIn key={path.title} delay={index * 0.08}>
                <div className="border border-navy/10 bg-cream p-6 h-full">
                  <p className="eyebrow text-brass text-[10px] tracking-[0.2em] mb-3">{path.title}</p>
                  <h3 className="font-playfair text-2xl text-navy mb-4 leading-snug">{path.summary}</h3>
                  <ul className="space-y-3">
                    {path.details.map((detail) => (
                      <li key={detail} className="font-inter text-sm text-slate leading-relaxed flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass mb-4 tracking-[0.25em] text-center">
              RISIKO &amp; MITIGASI
            </p>
            <h2 className="font-playfair text-4xl text-navy mb-4 leading-snug text-center">
              Transparansi terlebih dulu.
            </h2>
            <p className="font-inter text-sm text-slate leading-relaxed max-w-3xl mx-auto text-center mb-16">
              Setiap investasi punya risiko. Kami sajikan secara terbuka agar ekspektasi tetap rasional dan keputusan tetap nyaman dipertanggungjawabkan.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {risks.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <div className="border border-navy/10 bg-white p-6 h-full">
                  <h3 className="font-playfair text-2xl text-navy mb-4">{item.title}</h3>
                  <div className="space-y-3">
                    <p className="font-inter text-sm text-slate leading-relaxed">
                      <span className="text-navy font-medium">Risk:</span> {item.risk}
                    </p>
                    <p className="font-inter text-sm text-slate leading-relaxed">
                      <span className="text-navy font-medium">Mitigasi:</span> {item.mitigation}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 px-6" id="reserve">
        {isLeadCaptureEnabled ? (
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 items-start">
            <FadeIn>
              <p className="eyebrow text-brass mb-4 tracking-[0.25em]">EXPRESS INTEREST</p>
              <h2 className="font-playfair text-4xl text-navy mb-4 leading-snug">
                Bicara dulu, hitung pelan-pelan.
              </h2>
              <p className="font-inter text-sm text-slate leading-relaxed mb-5">
                Isi form ini bila Anda ingin menerima penjelasan tier, pricing, dan skenario return dengan ritme yang lebih tenang.
              </p>
              <p className="font-inter text-sm text-slate leading-relaxed mb-8">
                Jika Anda lebih nyaman memulai lewat percakapan singkat, WhatsApp tetap terbuka sebagai jalur yang lebih cepat.
              </p>
              <a
                href={PUBLIC_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-inter text-sm hover:bg-navyLight transition-colors duration-200"
              >
                Chat via WhatsApp
              </a>
            </FadeIn>

            <FadeIn delay={0.12}>
              <div className="border border-navy/10 bg-cream px-6 py-8 md:px-10 md:py-10">
                <HekfieldBookingForm />
              </div>
            </FadeIn>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center">
            <FadeIn>
              <p className="eyebrow text-brass mb-4 tracking-[0.25em]">EXPRESS INTEREST</p>
              <h2 className="font-playfair text-4xl text-navy mb-4 leading-snug">
                Mulai dari percakapan yang sederhana.
              </h2>
              <p className="font-inter text-sm text-slate leading-relaxed max-w-2xl mx-auto mb-10">
                Untuk saat ini kami melayani enquiry Hekfield Rempoa langsung via WhatsApp. Ini jalur tercepat untuk mendiskusikan Founding tier, pricing ladder, skema pembayaran, atau menjadwalkan visit.
              </p>
              <a
                href={PUBLIC_WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-inter text-sm hover:bg-navyLight transition-colors duration-200"
              >
                Chat via WhatsApp
              </a>
            </FadeIn>
          </div>
        )}
      </section>
    </>
  );
}
