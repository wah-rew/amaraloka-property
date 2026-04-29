import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex flex-col gap-[3px]">
            <p
              className="font-playfair text-ivory text-lg font-medium"
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
          <p className="font-inter text-ivory/60 text-sm leading-relaxed max-w-xs">
            Crafting quiet estates for modern living. Every property is built
            with intention, calm, and enduring quality.
          </p>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <p className="eyebrow text-ivory/40 text-xs">Navigation</p>
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
                className="font-inter text-sm text-ivory/70 hover:text-brass transition-colors duration-200"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <p className="eyebrow text-ivory/40 text-xs">Get in Touch</p>
          <div className="flex flex-col gap-3 text-sm text-ivory/70 font-inter">
            <a
              href="mailto:hello@amaraloka.id"
              className="flex items-center gap-2 hover:text-brass transition-colors"
            >
              <Mail size={14} />
              hello@amaraloka.id
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
              className="flex items-center gap-2 hover:text-brass transition-colors"
            >
              <Phone size={14} />
              +62 812 3456 7890
            </a>
            <span className="flex items-start gap-2">
              <MapPin size={14} className="mt-0.5 shrink-0" />
              Jakarta, Indonesia
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10 px-6 lg:px-10 py-5 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="font-inter text-xs text-ivory/40">
          © {new Date().getFullYear()} Amaraloka Property. All rights reserved.
        </p>
        <p className="font-inter text-xs text-ivory/30">
          Crafted with intention.
        </p>
      </div>
    </footer>
  );
}
