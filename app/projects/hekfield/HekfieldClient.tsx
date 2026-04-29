"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  FileText,
  Download,
  ExternalLink,
  BedDouble,
  Bath,
  SquareCode,
  Car,
  Wind,
  Droplets,
  Sofa,
  ParkingCircle,
  FlameKindling,
  BookMarked,
  Thermometer,
  ShirtIcon,
  ShowerHead,
  UtensilsCrossed,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

// ─── Types ──────────────────────────────────────────────────────────────────

type Facility = { icon: React.ElementType; label: string };

interface Unit {
  id: string;
  label: string;
  size: string;
  bed: string;
  bath: string;
  price: string;
  period: string;
  units: number;
  available: number;
  image: string;
  description: string;
  extras: string[];
  unitFacilities: Facility[];
  roomFacilities: Facility[];
}

// ─── Shared facility definitions ────────────────────────────────────────────

const BASE_UNIT_FACILITIES: Facility[] = [
  { icon: Car, label: "Car Port" },
  { icon: FlameKindling, label: "Balkon" },
  { icon: Droplets, label: "Toren Air" },
  { icon: Sofa, label: "Ruang Tamu" },
  { icon: ParkingCircle, label: "Parkir Motor" },
];

const BASE_ROOM_FACILITIES: Facility[] = [
  { icon: BedDouble, label: "Kasur" },
  { icon: Wind, label: "AC" },
  { icon: BookMarked, label: "Meja Belajar" },
  { icon: Thermometer, label: "Water Heater" },
  { icon: ShirtIcon, label: "Lemari Pakaian" },
  { icon: ShowerHead, label: "Kamar Mandi Dalam" },
];

// ─── Units ──────────────────────────────────────────────────────────────────

const units: Unit[] = [
  {
    id: "standard",
    label: "Standard",
    size: "12 to 15 sqm",
    bed: "Single bed",
    bath: "Shared bathroom",
    price: "IDR 2.500.000",
    period: "/bulan",
    units: 8,
    available: 3,
    image: "/images/hekfield/facade-front.jpg",
    description:
      "An efficiently designed room with a single bed and access to shared bathrooms on each floor. Ideal for those who spend most of their day out and want a quiet, well-kept space to come home to.",
    extras: ["Weekly housekeeping", "High-speed WiFi", "Shared pantry access"],
    unitFacilities: BASE_UNIT_FACILITIES,
    roomFacilities: BASE_ROOM_FACILITIES,
  },
  {
    id: "suite",
    label: "Suite",
    size: "18 to 20 sqm",
    bed: "Queen bed",
    bath: "Private en-suite + balkon",
    price: "IDR 3.200.000",
    period: "/bulan",
    units: 4,
    available: 2,
    image: "/images/hekfield/facade.jpg",
    description:
      "A generously proportioned room with a queen bed, private en-suite, and a private balcony overlooking the garden courtyard. Includes a kitchenette for those who prefer cooking in.",
    extras: [
      "Private en-suite",
      "Private balkon",
      "Dapur (kitchenette)",
      "Weekly housekeeping",
      "High-speed WiFi",
    ],
    unitFacilities: BASE_UNIT_FACILITIES,
    roomFacilities: [
      ...BASE_ROOM_FACILITIES,
      { icon: UtensilsCrossed, label: "Dapur (Kitchenette)" },
    ],
  },
  {
    id: "signature",
    label: "Signature",
    size: "22+ sqm",
    bed: "Queen bed",
    bath: "Premium private bathroom",
    price: "IDR 4.000.000",
    period: "/bulan",
    units: 2,
    available: 1,
    image: "/images/hekfield/facade.jpg",
    description:
      "Hekfield at its finest. The largest rooms in the estate, finished with premium fixtures, an oversized queen bed, and a private bathroom. Only two units exist. It shows.",
    extras: [
      "Premium private bathroom",
      "Premium furnishing",
      "Weekly housekeeping + linen change",
      "Priority concierge",
      "High-speed WiFi",
    ],
    unitFacilities: BASE_UNIT_FACILITIES,
    roomFacilities: [
      ...BASE_ROOM_FACILITIES,
      { icon: UtensilsCrossed, label: "Dapur (Kitchenette)" },
    ],
  },
];

// ─── Investment data ─────────────────────────────────────────────────────────

const investmentBenefits = [
  "Kepemilikan SHM",
  "Pengelolaan Auto Pilot",
  "Full Furnished",
  "3 Tipe Kamar Premium",
  "NOI Tumbuh 5%/Tahun",
  "Lokasi Koridor MRT",
];

const noiProjection = [
  { year: "Tahun 1", noi: "~Rp 139 jt" },
  { year: "Tahun 5", noi: "~Rp 169 jt" },
  { year: "Tahun 10", noi: "~Rp 215 jt" },
];

// ─── Component ───────────────────────────────────────────────────────────────

export default function HekfieldClient() {
  const [active, setActive] = useState("standard");
  const [floorplanOpen, setFloorplanOpen] = useState(false);

  const unit = units.find((u) => u.id === active)!;

  return (
    <>
      {/* ── Unit Selector ─────────────────────────────────────────────────── */}
      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow text-brass mb-4 tracking-[0.25em]">
              UNIT TYPES
            </p>
            <h2 className="font-playfair text-4xl text-navy">
              Choose your space.
            </h2>
          </div>

          {/* Tab Bar */}
          <div className="flex border-b border-navy/15 mb-12">
            {units.map((u) => (
              <button
                key={u.id}
                onClick={() => setActive(u.id)}
                className={`flex-1 pb-4 font-inter text-sm transition-colors duration-200 relative ${
                  active === u.id
                    ? "text-navy"
                    : "text-navy/40 hover:text-navy/70"
                }`}
              >
                {u.label}
                {active === u.id && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute bottom-0 left-0 right-0 h-px bg-brass"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Unit Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
            >
              {/* Left: image + floor plan */}
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={unit.image}
                    alt={`Hekfield ${unit.label}, ${unit.size}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-3 left-3 bg-brass text-cream eyebrow text-[10px] px-3 py-1">
                    {unit.label.toUpperCase()}
                  </div>
                </div>

                {/* Floor Plan Block */}
                <div className="bg-sand border border-navy/10 p-6">
                  <div className="flex items-start gap-3 mb-4">
                    <FileText
                      size={18}
                      className="text-brass mt-0.5 shrink-0"
                      strokeWidth={1.5}
                    />
                    <div>
                      <p className="font-inter text-sm font-medium text-navy mb-1">
                        Denah Lantai (Tersedia)
                      </p>
                      <p className="font-inter text-xs text-navy/50 leading-relaxed">
                        3 lantai (Lantai 1, 2 &amp; 3). Hubungi kami untuk
                        detail lengkap denah unit pilihan Anda.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="/images/hekfield/floorplan.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 border border-navy/20 text-navy font-inter text-xs hover:border-brass hover:text-brass transition-colors duration-200"
                    >
                      <ExternalLink size={12} />
                      Lihat Denah
                    </a>
                    <a
                      href="/images/hekfield/floorplan.pdf"
                      download="Hekfield-Floorplan.pdf"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-navy text-cream font-inter text-xs hover:bg-navy/80 transition-colors duration-200"
                    >
                      <Download size={12} />
                      Unduh PDF
                    </a>
                  </div>
                  <button
                    onClick={() => setFloorplanOpen(!floorplanOpen)}
                    className="mt-3 font-inter text-xs text-navy/40 underline hover:text-brass transition-colors"
                  >
                    {floorplanOpen
                      ? "Sembunyikan preview"
                      : "Tampilkan preview denah"}
                  </button>
                  <AnimatePresence>
                    {floorplanOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 400, opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mt-4"
                      >
                        <iframe
                          src="/images/hekfield/floorplan.pdf#toolbar=0&navpanes=0"
                          className="w-full h-full border border-navy/10"
                          title="Hekfield Floor Plan"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Right: specs, facilities, CTA */}
              <div>
                <h3 className="font-playfair text-3xl text-navy mb-2">
                  {unit.label}
                </h3>
                <p className="font-inter text-sm text-navy/60 leading-relaxed mb-6">
                  {unit.description}
                </p>

                {/* Quick specs */}
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    { icon: SquareCode, label: "Area", val: unit.size },
                    {
                      icon: BedDouble,
                      label: "Bed",
                      val: unit.bed.split(" ")[0] + " bed",
                    },
                    {
                      icon: Bath,
                      label: "Bath",
                      val: unit.bath.startsWith("Private")
                        ? "Private"
                        : "Shared",
                    },
                  ].map(({ icon: Icon, label, val }) => (
                    <div
                      key={label}
                      className="bg-sand px-3 py-3 text-center border border-navy/8"
                    >
                      <Icon
                        size={14}
                        className="text-brass mx-auto mb-1"
                        strokeWidth={1.5}
                      />
                      <p className="font-inter text-[10px] text-navy/40 uppercase tracking-wide mb-0.5">
                        {label}
                      </p>
                      <p className="font-inter text-xs text-navy font-medium">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Fasilitas Unit */}
                <div className="mb-6">
                  <p className="eyebrow text-navy/40 text-[10px] mb-3 tracking-[0.18em]">
                    FASILITAS UNIT
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {unit.unitFacilities.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-1.5 bg-sand border border-navy/8 px-3 py-1.5"
                      >
                        <Icon
                          size={11}
                          className="text-brass shrink-0"
                          strokeWidth={1.5}
                        />
                        <span className="font-inter text-[11px] text-navy/70">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fasilitas Kamar */}
                <div className="mb-8">
                  <p className="eyebrow text-navy/40 text-[10px] mb-3 tracking-[0.18em]">
                    FASILITAS KAMAR
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {unit.roomFacilities.map(({ icon: Icon, label }) => (
                      <div
                        key={label}
                        className="flex items-center gap-1.5 bg-sand border border-navy/8 px-3 py-1.5"
                      >
                        <Icon
                          size={11}
                          className="text-sage shrink-0"
                          strokeWidth={1.5}
                        />
                        <span className="font-inter text-[11px] text-navy/70">
                          {label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Availability */}
                <div className="flex items-center gap-2 mb-8">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      unit.available > 0 ? "bg-sage" : "bg-driftwood"
                    }`}
                  />
                  <p className="font-inter text-xs text-navy/50">
                    {unit.available > 0
                      ? `${unit.available} of ${unit.units} units available`
                      : "Fully occupied. Join the waitlist."}
                  </p>
                </div>

                {/* Pricing + CTA */}
                <div className="border-t border-navy/10 pt-6">
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="font-playfair text-3xl text-navy">
                      {unit.price}
                    </span>
                    <span className="font-inter text-sm text-navy/50">
                      {unit.period}
                    </span>
                  </div>
                  <a
                    href="#reserve"
                    className="block w-full text-center px-6 py-3 bg-brass text-cream font-inter text-sm tracking-wide hover:bg-brass/90 transition-colors duration-200"
                  >
                    Reserve this unit
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Investasi yang Menghasilkan ───────────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl mb-16"
          >
            <p className="eyebrow text-brass/70 mb-4 tracking-[0.25em]">
              UNTUK INVESTOR
            </p>
            <h2 className="font-playfair text-4xl text-cream mb-4 leading-snug">
              Bukan sekadar tempat tinggal.{" "}
              <span className="text-brass">Sebuah aset.</span>
            </h2>
            <p className="font-inter text-sm text-cream/55 leading-relaxed">
              Hekfield dirancang untuk Anda yang ingin memiliki properti premium
              yang bekerja untuk Anda. Dengan pengelolaan penuh oleh tim
              Amaraloka, investasi ini bersifat pasif sepenuhnya.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Investment benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="eyebrow text-cream/30 text-[10px] mb-6 tracking-[0.2em]">
                KEUNGGULAN INVESTASI
              </p>
              <ul className="space-y-4">
                {investmentBenefits.map((benefit, i) => (
                  <motion.li
                    key={benefit}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.07 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-sage shrink-0"
                      strokeWidth={1.5}
                    />
                    <span className="font-inter text-sm text-cream/80">
                      {benefit}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* NOI Projection table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-cream/30 text-[10px] tracking-[0.2em]">
                  PROYEKSI NOI
                </p>
              </div>

              {/* Table */}
              <div className="border border-cream/10">
                <div className="grid grid-cols-2 border-b border-cream/10">
                  <div className="px-5 py-3">
                    <span className="eyebrow text-cream/30 text-[10px] tracking-[0.15em]">
                      PERIODE
                    </span>
                  </div>
                  <div className="px-5 py-3 border-l border-cream/10">
                    <span className="eyebrow text-cream/30 text-[10px] tracking-[0.15em]">
                      NET OPERATING INCOME
                    </span>
                  </div>
                </div>
                {noiProjection.map((row, i) => (
                  <motion.div
                    key={row.year}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className={`grid grid-cols-2 ${
                      i < noiProjection.length - 1 ? "border-b border-cream/10" : ""
                    }`}
                  >
                    <div className="px-5 py-4">
                      <span className="font-inter text-sm text-cream/60">
                        {row.year}
                      </span>
                    </div>
                    <div className="px-5 py-4 border-l border-cream/10">
                      <span className="font-playfair text-lg text-brass">
                        {row.noi}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>

              <p className="font-inter text-[11px] text-cream/25 mt-4 leading-relaxed">
                * Proyeksi berdasarkan occupancy 92% dan pertumbuhan sewa
                5%/tahun. Bukan merupakan janji imbal hasil.
              </p>

              {/* CTA */}
              <a
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 border border-brass/50 text-brass font-inter text-xs hover:bg-brass hover:text-cream transition-colors duration-200"
              >
                Diskusikan peluang investasi
                <ExternalLink size={11} />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
