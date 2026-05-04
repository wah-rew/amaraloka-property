import type { Metadata } from "next";
import FadeIn from "../components/FadeIn";
import { ArrowRight } from "lucide-react";
import { PUBLIC_WHATSAPP_LINK } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Amaraloka Property adalah developer butik yang membangun hunian dengan craftsmanship, ketenangan, dan ritme hidup sehari-hari sebagai dasar.",
};

const values = [
  {
    word: "Ketelitian Kriya",
    desc: "Kami memberi perhatian pada detail yang sering terlewat, dari material dan proporsi hingga rasa saat sebuah ruang digunakan.",
  },
  {
    word: "Ketenangan",
    desc: "Properti kami dirancang sebagai penyeimbang dari kebisingan. Tenang adalah keputusan desain.",
  },
  {
    word: "Komunitas",
    desc: "Tetangga yang tepat membuat sebuah tempat terasa utuh. Kami memilih penghuni seteliti kami memilih ruang.",
  },
  {
    word: "Keberlanjutan",
    desc: "Kami membangun untuk waktu yang panjang. Setiap keputusan diuji dengan satu pertanyaan, apakah ini akan menua dengan baik?",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy min-h-[60vh] flex items-center px-6 pt-16">
        <div className="max-w-6xl mx-auto py-24 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-brass mb-6 tracking-[0.25em]">
              TENTANG AMARALOKA
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl md:text-6xl text-white max-w-2xl leading-tight mb-6">
              Kami membangun tempat yang layak dimiliki.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="font-inter text-lg text-cream/60 max-w-lg leading-relaxed">
              Developer properti butik yang lahir dari keyakinan bahwa tempat tinggal ikut membentuk arah hidup seseorang.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              NILAI KAMI
            </p>
            <h2 className="font-playfair text-4xl text-navy text-center mb-16">
              Empat hal yang kami pegang.
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

      <section className="bg-navy py-20 px-6 text-center">
        <FadeIn>
          <h2 className="font-playfair text-4xl text-cream mb-8">
            Tertarik dengan yang sedang kami bangun?
          </h2>
          <a
            href={PUBLIC_WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-brass text-brass font-inter text-sm tracking-wide hover:bg-brass hover:text-white transition-colors duration-200"
          >
            Hubungi via WhatsApp <ArrowRight size={14} />
          </a>
        </FadeIn>
      </section>
    </>
  );
}
