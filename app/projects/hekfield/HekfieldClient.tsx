"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Building2,
  CheckCircle2,
} from "lucide-react";

// ─── Unit data ────────────────────────────────────────────────────────────────

// ─── Investment data ──────────────────────────────────────────────────────────

const noiProjection = [
  { year: "Year 1", noi: "Rp 139 jt" },
  { year: "Year 3", noi: "Rp 152 jt" },
  { year: "Year 5", noi: "Rp 169 jt" },
  { year: "Year 10", noi: "Rp 215 jt" },
];

const highlights = [
  "SHM Ownership",
  "Auto-Pilot Management",
  "Full Furnished",
  "NOI +5%/Year",
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function HekfieldClient() {
  return (
    <>
      {/* ── The Investment Case for Hekfield Rempoa ─────────────────────────────── */}
      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl mb-16"
          >
            <p className="eyebrow text-brass/70 mb-4 tracking-[0.25em]">
              INVESTMENT ANALYSIS
            </p>
            <h2 className="font-playfair text-4xl text-cream mb-4 leading-snug">
              The Investment Case for Hekfield Rempoa
            </h2>
            <p className="font-inter text-sm text-cream/55 leading-relaxed">
              Owning a Hekfield Rempoa unit means owning an income-generating asset
              with strata title. Here is what that looks like over time.
            </p>
          </motion.div>

          {/* 4 Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {/* Card 1: Annual Income Projection dark navy with brass numbers */}
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
                  ANNUAL INCOME PROJECTION
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Target Occupancy", value: "92%" },
                  { label: "Average Room Rate", value: "Rp 2.600.000/month" },
                  { label: "Gross Income/year", value: "Rp 187.200.000" },
                  { label: "Operating Cost (18%)", value: "Rp 33.696.000" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="flex items-center justify-between border-b border-cream/8 pb-3"
                  >
                    <span className="font-inter text-xs text-cream/50">
                      {label}
                    </span>
                    <span className="font-inter text-sm text-cream/80">
                      {value}
                    </span>
                  </div>
                ))}
                <div className="flex items-center justify-between pt-2">
                  <span className="font-inter text-xs text-cream/60 font-medium">
                    Net Operating Income
                  </span>
                  <span className="font-playfair text-xl text-brass">
                    Rp 153.504.000/year
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Card 2: NOI Growth Over Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-navy/60 border border-cream/10 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-cream/30 text-[10px] tracking-[0.2em]">
                  NOI GROWTH OVER TIME
                </p>
              </div>
              <div className="border border-cream/10">
                <div className="grid grid-cols-2 border-b border-cream/10">
                  <div className="px-4 py-3">
                    <span className="eyebrow text-cream/30 text-[10px] tracking-[0.12em]">
                      YEAR
                    </span>
                  </div>
                  <div className="px-4 py-3 border-l border-cream/10">
                    <span className="eyebrow text-cream/30 text-[10px] tracking-[0.12em]">
                      NOI/YEAR
                    </span>
                  </div>
                </div>
                {noiProjection.map((row, i) => (
                  <div
                    key={row.year}
                    className={`grid grid-cols-2 ${
                      i < noiProjection.length - 1
                        ? "border-b border-cream/10"
                        : ""
                    }`}
                  >
                    <div className="px-4 py-3.5">
                      <span className="font-inter text-sm text-cream/60">
                        {row.year}
                      </span>
                    </div>
                    <div className="px-4 py-3.5 border-l border-cream/10">
                      <span className="font-playfair text-base text-brass">
                        {row.noi}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-inter text-[10px] text-cream/25 mt-4 leading-relaxed">
                Assumes 5% annual rent growth, consistent with Jakarta premium
                kost market.
              </p>
            </motion.div>

            {/* Card 3: Why SHM Matters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-navy/60 border border-cream/10 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Shield size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-cream/30 text-[10px] tracking-[0.2em]">
                  WHY SHM MATTERS
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Full legal ownership, not leasehold",
                  "Can be sold, inherited, or used as collateral",
                  "No annual license renewal required",
                  "Asset appreciates with property value",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-sage shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="font-inter text-sm text-cream/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Card 4: The Passive Income Advantage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-navy/60 border border-cream/10 p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <Building2 size={16} className="text-brass" strokeWidth={1.5} />
                <p className="eyebrow text-cream/30 text-[10px] tracking-[0.2em]">
                  THE PASSIVE INCOME ADVANTAGE
                </p>
              </div>
              <ul className="space-y-4">
                {[
                  "Property managed by Amaraloka (auto-pilot)",
                  "Full furnishing included, no CapEx after purchase",
                  "Monthly income distributed to owner",
                  "Minimal owner involvement required",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={15}
                      className="text-sage shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="font-inter text-sm text-cream/70">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Investment Highlights strip 4 items in a row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 border border-cream/10"
          >
            {highlights.map((item, i) => (
              <div
                key={item}
                className={`px-6 py-5 text-center ${
                  i < highlights.length - 1
                    ? "border-b md:border-b-0 border-r-0 md:border-r border-cream/10"
                    : ""
                }`}
              >
                <p className="font-playfair text-sm text-cream/80">{item}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
