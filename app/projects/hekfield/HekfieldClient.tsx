"use client";

import { motion } from "framer-motion";
import { Shield, TrendingUp, Landmark, BadgeCheck } from "lucide-react";

const tierPricing = [
  {
    tier: "Tier Founding",
    units: "Unit 1-2",
    price: "Rp 1,85 M",
    capRate: "7,1%",
    irr: "10,0%",
    multiple: "2,18x",
    benefits: [
      "Guaranteed minimum NOI Rp 110 jt di Year 1",
      "First right of refusal untuk Hekfield Phase 2",
      "Laporan investor triwulanan",
      "Harga terkunci sebelum tier berikutnya naik",
    ],
  },
  {
    tier: "Tahap 1",
    units: "Unit 3-4",
    price: "Rp 1,95 M",
    capRate: "6,7%",
    irr: "9,3%",
    multiple: "2,07x",
    benefits: [
      "Management fee gratis untuk 6 bulan pertama",
      "Furnitur premium standar",
      "Laporan investor triwulanan",
      "Masuk pada fase harga publik pertama",
    ],
  },
  {
    tier: "Tahap Final",
    units: "Unit 5",
    price: "Rp 2,10 M",
    capRate: "6,3%",
    irr: "8,3%",
    multiple: "1,92x",
    benefits: [
      "Harga mengikuti milestone konstruksi terakhir",
      "Unit tetap dikelola penuh",
      "Laporan investor triwulanan",
      "Tetap mendapat struktur legal SHM yang sama",
    ],
  },
];

const conservativeProjection = [
  { label: "Pendapatan Kotor Potensial", value: "Rp 188,4 jt / tahun" },
  { label: "Vacancy & Loss (10%)", value: "(Rp 18,84 jt)" },
  { label: "Pendapatan Kotor Efektif", value: "Rp 169,56 jt" },
  { label: "Biaya Operasional (22%)", value: "(Rp 37,303 jt)" },
  { label: "Net Operating Income", value: "Rp 132,257 jt / tahun" },
  { label: "Cadangan CapEx (5%)", value: "(Rp 8,478 jt)" },
];

const conservativeMilestones = [
  { label: "Year 1 (Ramp-up)", value: "Rp 102 jt" },
  { label: "Year 3+ (Stabil)", value: "Rp 131 jt" },
  { label: "Year 10", value: "Rp 174 jt" },
];

export default function HekfieldClient() {
  return (
    <>
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <p className="eyebrow text-brass mb-4 tracking-[0.25em]">
              HARGA UNIT
            </p>
            <h2 className="font-playfair text-4xl text-navy mb-4 leading-snug">
              Harga Unit &amp; Keunggulan Pemilik Founding
            </h2>
            <p className="font-inter text-sm text-slate leading-relaxed">
              Struktur harga dipublikasikan bertahap dan transparan. Kenaikan mengikuti milestone konstruksi, bukan tekanan artifisial.
            </p>
          </motion.div>

          <div className="hidden md:block overflow-x-auto border border-navy/10">
            <table className="w-full text-left bg-white">
              <caption className="sr-only">
                Tabel tier pricing Hekfield Rempoa beserta cap rate, IRR, dan total return 10 tahun.
              </caption>
              <thead className="bg-cream">
                <tr>
                  <th scope="col" className="px-5 py-4 font-inter text-xs uppercase tracking-[0.18em] text-navy/50">Tier</th>
                  <th scope="col" className="px-5 py-4 font-inter text-xs uppercase tracking-[0.18em] text-navy/50">Unit</th>
                  <th scope="col" className="px-5 py-4 font-inter text-xs uppercase tracking-[0.18em] text-navy/50">Harga</th>
                  <th scope="col" className="px-5 py-4 font-inter text-xs uppercase tracking-[0.18em] text-navy/50">Cap Rate</th>
                  <th scope="col" className="px-5 py-4 font-inter text-xs uppercase tracking-[0.18em] text-navy/50">IRR 10 Tahun</th>
                  <th scope="col" className="px-5 py-4 font-inter text-xs uppercase tracking-[0.18em] text-navy/50">Multiple 10 Tahun</th>
                </tr>
              </thead>
              <tbody>
                {tierPricing.map((item, index) => (
                  <tr key={item.tier} className={index < tierPricing.length - 1 ? "border-b border-navy/10" : ""}>
                    <th scope="row" className="px-5 py-5 font-playfair text-xl text-navy font-normal">{item.tier}</th>
                    <td className="px-5 py-5 font-inter text-sm text-slate">{item.units}</td>
                    <td className="px-5 py-5 font-playfair text-lg text-brass">{item.price}</td>
                    <td className="px-5 py-5 font-inter text-sm text-slate">{item.capRate}</td>
                    <td className="px-5 py-5 font-inter text-sm text-slate">{item.irr}</td>
                    <td className="px-5 py-5 font-inter text-sm text-slate">{item.multiple}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:hidden">
            {tierPricing.map((item) => (
              <div key={item.tier} className="border border-navy/10 bg-white p-6">
                <p className="eyebrow text-brass text-[10px] tracking-[0.18em] mb-3">{item.tier}</p>
                <h3 className="font-playfair text-2xl text-navy mb-2">{item.price}</h3>
                <p className="font-inter text-sm text-slate mb-4">{item.units}</p>
                <div className="space-y-2 font-inter text-sm text-slate">
                  <p>Cap Rate: {item.capRate}</p>
                  <p>IRR 10 tahun: {item.irr}</p>
                  <p>Multiple 10 tahun: {item.multiple}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {tierPricing.map((item, index) => (
              <motion.div
                key={item.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="border border-navy/10 bg-cream p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BadgeCheck size={16} className="text-brass" strokeWidth={1.5} />
                  <p className="eyebrow text-navy/45 text-[10px] tracking-[0.2em]">{item.tier}</p>
                </div>
                <h3 className="font-playfair text-2xl text-navy mb-4">Keuntungan</h3>
                <ul className="space-y-3">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="font-inter text-sm text-slate leading-relaxed flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <p className="eyebrow text-brass/70 mb-4 tracking-[0.25em]">
              ANALISIS INVESTASI
            </p>
            <h2 className="font-playfair text-4xl text-cream mb-4 leading-snug">
              Konservatif lebih dulu.
            </h2>
            <p className="font-inter text-sm text-cream/55 leading-relaxed">
              Metrik utama di halaman ini menggunakan skenario konservatif agar pembacaan return tetap disiplin dan dapat dipertanggungjawabkan.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.85fr] gap-6 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#101d38] border border-brass/30 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-brass/70 text-[10px] tracking-[0.2em]">
                  PROYEKSI PENDAPATAN TAHUNAN, SKENARIO KONSERVATIF
                </p>
              </div>
              <div className="space-y-3">
                {conservativeProjection.map(({ label, value }) => (
                  <div key={label} className="flex items-center justify-between border-b border-cream/8 pb-3 gap-4">
                    <span className="font-inter text-xs text-cream/50">{label}</span>
                    <span className="font-inter text-sm text-cream/80 text-right">{value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2 gap-4">
                  <span className="font-inter text-xs text-cream/60 font-medium">
                    Arus kas setelah pencadangan
                  </span>
                  <span className="font-playfair text-xl text-brass">
                    Rp 123,779 jt / tahun
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-navy/60 border border-cream/10 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Landmark size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-cream/30 text-[10px] tracking-[0.2em]">
                  MILESTONE NOI STABIL
                </p>
              </div>
              <div className="border border-cream/10">
                {conservativeMilestones.map((row, i) => (
                  <div
                    key={row.label}
                    className={`grid grid-cols-2 ${i < conservativeMilestones.length - 1 ? "border-b border-cream/10" : ""}`}
                  >
                    <div className="px-4 py-4">
                      <span className="font-inter text-sm text-cream/60">{row.label}</span>
                    </div>
                    <div className="px-4 py-4 border-l border-cream/10">
                      <span className="font-playfair text-base text-brass">{row.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-inter text-[10px] text-cream/25 mt-4 leading-relaxed">
                Asumsi: occupancy 75% di Year 1, naik ke 90% saat stabil, OPEX 22%, pertumbuhan sewa 4%, CapEx reserve 5%.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 mb-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="bg-navy/60 border border-cream/10 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Shield size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-cream/30 text-[10px] tracking-[0.2em]">
                  MENGAPA SHM PENTING
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Hak milik paling kuat untuk properti residensial",
                  "Dapat dijual, diwariskan, atau dijaminkan",
                  "Lebih mudah dipahami investor domestik dibanding struktur turunan",
                  "Menambah kualitas narasi exit ketika aset matang",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brass shrink-0" />
                    <span className="font-inter text-sm text-cream/70">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
