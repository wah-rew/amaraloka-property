import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex flex-col gap-[3px]">
            <p
              className="font-playfair text-white text-lg font-medium"
              style={{ letterSpacing: "0.15em" }}
            >
              AMARALOKA
            </p>
            <p
              className="font-inter text-brass text-[10px] uppercase font-normal"
              style={{ letterSpacing: "0.3em" }}
            >
              PROPERTY
            </p>
          </div>
          <p className="font-inter text-cream/60 text-sm leading-relaxed max-w-xs">
            Crafting quiet estates for modern living. Every property is built
            with intention, calm, and enduring quality.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <p className="eyebrow text-cream/40 text-xs">Navigation</p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Home" },
              { href: "/projects/hekfield", label: "Hekfield" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact" },
            ].map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="font-inter text-sm text-cream/70 hover:text-brass transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="eyebrow text-cream/40 text-xs">Get in Touch</p>
          <div className="flex flex-col gap-3 text-sm text-cream/70 font-inter">
            <span className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Jakarta, Indonesia
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 px-6 lg:px-10 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-inter text-xs text-cream/40">
          © {new Date().getFullYear()} Amaraloka Property. All rights reserved.
        </p>
        <p className="font-inter text-xs text-cream/30">
          Crafted with intention.
        </p>
      </div>
    </footer>
  );
}
