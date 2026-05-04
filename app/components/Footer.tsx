import Link from "next/link";
import { MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
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
            Merancang hunian yang tenang untuk hidup modern. Setiap properti dibangun dengan niat, ketenangan, dan kualitas yang bertahan lama.
          </p>
        </div>

        <div className="space-y-4">
          <p className="eyebrow text-cream/40 text-xs">Navigasi</p>
          <nav className="flex flex-col gap-3">
            {[
              { href: "/", label: "Beranda" },
              { href: "/projects/hekfield", label: "Hekfield Rempoa" },
              { href: "/blog", label: "Artikel" },
              { href: "/about", label: "Tentang Kami" },
              { href: "/contact", label: "Kontak" },
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

        <div className="space-y-4">
          <p className="eyebrow text-cream/40 text-xs">Hubungi Kami</p>
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
          © {new Date().getFullYear()} Amaraloka Property. Seluruh hak cipta dilindungi.
        </p>
        <p className="font-inter text-xs text-cream/30">
          Dibuat dengan penuh pertimbangan.
        </p>
      </div>
    </footer>
  );
}
