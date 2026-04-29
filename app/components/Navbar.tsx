"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Non-hero pages always show cream bg
  const alwaysOpaque = pathname !== "/" && !pathname.startsWith("/projects") || pathname.startsWith("/blog");
  const opaque = alwaysOpaque || scrolled;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        opaque ? "bg-cream shadow-sm border-b border-sand" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none gap-[3px]">
          <span
            className={`font-playfair text-lg font-medium transition-colors duration-500 ${
              opaque ? "text-navy" : "text-white"
            }`}
            style={{ letterSpacing: "0.15em" }}
          >
            AMARALOKA
          </span>
          <span
            className="font-inter text-brass text-[10px] uppercase font-normal"
            style={{ letterSpacing: "0.3em" }}
          >
            PROPERTY
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { href: "/projects/hekfield", label: "Projects" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`font-inter text-sm transition-colors duration-200 ${
                opaque
                  ? "text-navy hover:text-brass"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-2 px-5 py-2 bg-navy text-white text-sm font-inter tracking-wide hover:bg-navyLight transition-colors duration-200"
          >
            Schedule a Visit
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-500 ${opaque ? "text-navy" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream border-t border-sand px-6 py-4 flex flex-col gap-4">
          {[
            { href: "/projects/hekfield", label: "Projects" },
            { href: "/blog", label: "Blog" },
            { href: "/about", label: "About" },
            { href: "/contact", label: "Contact" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-inter text-sm text-navy hover:text-brass transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-5 py-2 bg-navy text-white text-sm font-inter text-center hover:bg-navyLight transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Schedule a Visit
          </Link>
        </div>
      )}
    </header>
  );
}
