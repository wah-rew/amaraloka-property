import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "./components/FadeIn";
import { ArrowRight, MapPin } from "lucide-react";
import { PUBLIC_WHATSAPP_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Amaraloka Property: Merancang Hunian yang Tenang",
  description:
    "Kami membangun hunian yang menghormati craftsmanship, ketenangan, dan ritme hidup sehari-hari.",
};

const philosophyItems = [
  {
    title: "Desain yang Dipikirkan Matang",
    body: "Setiap detail, dari fasad hingga finishing, dipilih dengan sengaja dan dibuat untuk bertahan lama.",
  },
  {
    title: "Kemewahan yang Tenang",
    body: "Material dan pengerjaan yang refined. Substansi lebih penting daripada kemeriahan.",
  },
  {
    title: "Dibangun untuk Waktu yang Panjang",
    body: "Properti yang dirancang untuk puluhan tahun, bukan untuk mengikuti tren sesaat.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="min-h-screen bg-navy flex flex-col items-center justify-center px-6 text-center pt-16">
        <FadeIn delay={0.1} direction="none">
          <p className="eyebrow text-brass mb-6 tracking-[0.25em]">
            AMARALOKA PROPERTY
          </p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl text-white max-w-3xl leading-tight">
            Merancang hunian yang tenang untuk hidup modern.
          </h1>
        </FadeIn>
        <FadeIn delay={0.4}>
          <p className="mt-6 font-inter text-lg text-cream/70 max-w-xl leading-relaxed">
            Kami membangun hunian yang menghormati craftsmanship, ketenangan, dan ritme hidup sehari-hari.
          </p>
        </FadeIn>
        <FadeIn delay={0.55} className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link
            href="/projects/hekfield"
            className="px-7 py-3 bg-white text-navy font-inter text-sm tracking-wide hover:bg-cream transition-colors duration-200"
          >
            Lihat Proyek
          </Link>
          <Link
            href="/about"
            className="px-7 py-3 border border-cream/40 text-cream font-inter text-sm tracking-wide hover:border-cream hover:text-white transition-colors duration-200"
          >
            Filosofi Kami
          </Link>
        </FadeIn>

        <FadeIn delay={0.9} className="mt-20 flex flex-col items-center gap-2">
          <span className="eyebrow text-cream/30 text-[10px]">GULIR</span>
          <div className="w-px h-10 bg-cream/20" />
        </FadeIn>
      </section>

      <section className="bg-cream py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-16 tracking-[0.25em]">
              FILOSOFI KAMI
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

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-3 tracking-[0.25em]">
              PROYEK KAMI
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-16">
              Hunian dari Amaraloka
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Link href="/projects/hekfield" className="group block">
                <div className="relative overflow-hidden aspect-[4/3] bg-navy">
                  <Image
                    src="/images/hekfield/facade-front.jpg"
                    alt="Tampak depan Hekfield Rempoa dengan townhouse bergaya Eropa berwarna putih dan atap mansard gelap"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-2xl text-white mb-1">
                      Hekfield Rempoa
                    </h3>
                    <p className="font-inter text-sm text-cream/80 mb-3">
                      Hunian tenang untuk mereka yang punya standar tinggi.
                    </p>
                    <span className="flex items-center gap-1 text-cream/60 font-inter text-xs">
                      <MapPin size={11} />
                      Jakarta, Indonesia
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-inter text-sm text-slate">
                    Kost eksklusif
                  </span>
                  <span className="flex items-center gap-1 text-brass font-inter text-sm group-hover:gap-2 transition-all duration-200">
                    Lihat Proyek <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src="/images/arlington/facade.jpg"
                    alt="Arlington Rempoa oleh Amaraloka Property"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-driftwood text-cream eyebrow text-[10px] px-3 py-1 tracking-[0.15em]">
                    TERJUAL
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-playfair text-2xl text-white mb-1">Arlington Rempoa</h3>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="font-inter text-sm text-slate italic">Rumah tenang untuk mereka yang sudah sampai.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-navy py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <p className="eyebrow text-brass mb-4 tracking-[0.25em]">
              TENTANG AMARALOKA
            </p>
            <h2 className="font-playfair text-4xl text-white mb-6 leading-snug">
              Membangun dengan niat sejak 2025.
            </h2>
            <p className="font-inter text-sm text-cream/65 leading-relaxed mb-4">
              Amaraloka lahir dari keyakinan sederhana bahwa tempat tinggal membentuk siapa kita. Kami merancang dengan restraint, membangun dengan presisi, dan menghadirkan komunitas yang layak dihuni.
            </p>
            <p className="font-inter text-sm text-cream/65 leading-relaxed mb-8">
              Setiap properti mencerminkan komitmen kami pada hal-hal yang dipikirkan matang, dikerjakan cermat, dan layak bertahan lama.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-inter text-sm text-brass border-b border-brass pb-0.5 hover:text-rattan hover:border-rattan transition-colors duration-200"
            >
              Baca Nilai Kami <ArrowRight size={14} />
            </Link>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="aspect-[4/5] relative overflow-hidden">
              <Image
                src="/images/amaraloka/interior.jpg"
                alt="Interior Amaraloka Property dengan ruang yang ditata penuh pertimbangan"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-navy py-20 px-6 text-center border-t border-cream/10">
        <FadeIn>
          <p className="eyebrow text-brass/70 mb-4 tracking-[0.25em]">
            HUBUNGI KAMI
          </p>
          <h2 className="font-playfair text-4xl text-cream mb-8">
            Mari membangun sesuatu yang bertahan lama.
          </h2>
          <a
            href={PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 border border-brass text-brass font-inter text-sm tracking-wide hover:bg-brass hover:text-white transition-colors duration-200"
          >
            Hubungi via WhatsApp
          </a>
        </FadeIn>
      </section>
    </>
  );
}
