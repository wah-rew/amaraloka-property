import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "../components/FadeIn";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Amaraloka Property is a boutique developer building residences that honor craftsmanship, calm, and the rituals of everyday life.",
};

const values = [
  {
    word: "Craftsmanship",
    desc: "We sweat the details others overlook — materials, proportions, the weight of a door handle.",
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
    desc: "We build for decades. Every decision is tested against the question: will this age well?",
  },
];

const team = [
  {
    role: "Founder & Principal",
    name: "Wahyu Rew",
    bio: "Architect, developer, and the quiet force behind Amaraloka's design philosophy.",
  },
  {
    role: "Head of Design",
    name: "—",
    bio: "Our design lead oversees every interior and exterior detail from concept to handover.",
  },
  {
    role: "Head of Operations",
    name: "—",
    bio: "Ensures every Amaraloka property runs with the precision of a boutique hotel.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-linen min-h-[60vh] flex items-center px-6 pt-16">
        <div className="max-w-6xl mx-auto py-24 w-full">
          <FadeIn delay={0.1} direction="none">
            <p className="eyebrow text-brass mb-6 tracking-[0.25em]">
              ABOUT AMARALOKA
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <h1 className="font-playfair text-5xl md:text-6xl text-charcoal max-w-2xl leading-tight mb-6">
              We build places worth belonging to.
            </h1>
          </FadeIn>
          <FadeIn delay={0.35}>
            <p className="font-inter text-lg text-charcoal/60 max-w-lg leading-relaxed">
              A boutique property developer founded on the belief that where you
              live shapes who you become.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <FadeIn>
            <div className="space-y-5 font-inter text-sm text-charcoal/65 leading-relaxed">
              <p>
                Amaraloka was founded in 2024 with a single, stubborn conviction:
                that the co-living market in Indonesia was underserving people who
                actually had taste. The category had become synonymous with
                identical rooms, thin walls, and the aesthetics of a budget
                airline.
              </p>
              <p>
                We set out to build something different — residences that felt
                like boutique hotels, operated like a home, and appreciated over
                time like a property should. The name Amaraloka comes from
                Sanskrit roots meaning &quot;a place of beauty&quot; — a small
                manifesto embedded in our identity.
              </p>
              <p>
                Our first project, Hekfield, takes its inspiration from the
                Georgian estates of Hampshire: restrained exteriors, thoughtful
                interiors, and an atmosphere of earned calm. It is the benchmark
                for everything we will build.
              </p>
              <p>
                We are deliberate. We are slow. We take on fewer projects so we
                can do each one properly. That&apos;s not a limitation — it&apos;s
                the point.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="aspect-[3/4] bg-linen border border-charcoal/10 flex items-center justify-center">
              <p className="font-inter text-xs text-charcoal/20 tracking-widest uppercase">
                Founder Portrait
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Values */}
      <section className="bg-linen py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              OUR VALUES
            </p>
            <h2 className="font-playfair text-4xl text-charcoal text-center mb-16">
              Four words we live by.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <FadeIn key={v.word} delay={i * 0.1}>
                <div className="border-t border-charcoal/20 pt-6">
                  <h3 className="font-playfair text-xl text-charcoal mb-3">
                    {v.word}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="eyebrow text-brass text-center mb-4 tracking-[0.25em]">
              THE TEAM
            </p>
            <h2 className="font-playfair text-4xl text-charcoal text-center mb-16">
              Small by design.
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <FadeIn key={member.role} delay={i * 0.12}>
                <div>
                  <div className="aspect-[4/3] bg-linen border border-charcoal/8 mb-5 flex items-center justify-center">
                    <span className="font-inter text-xs text-charcoal/20 tracking-widest uppercase">
                      Photo
                    </span>
                  </div>
                  <p className="eyebrow text-brass text-[10px] mb-1 tracking-[0.2em]">
                    {member.role}
                  </p>
                  <h3 className="font-playfair text-lg text-charcoal mb-2">
                    {member.name}
                  </h3>
                  <p className="font-inter text-sm text-charcoal/55 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 px-6 text-center">
        <FadeIn>
          <h2 className="font-playfair text-4xl text-ivory mb-8">
            Interested in what we&apos;re building?
          </h2>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-brass text-ivory font-inter text-sm tracking-wide hover:bg-brass/90 transition-colors duration-200"
          >
            Get in Touch <ArrowRight size={14} />
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
