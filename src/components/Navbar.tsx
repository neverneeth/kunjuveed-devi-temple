"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/family-tree", label: "Family Tree" },
  { href: "/development", label: "Development" },
  { href: "/poojas", label: "Poojas & Cost" },
  { href: "/booking", label: "Booking & Payment" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-md" style={{ background: "var(--primary)" }}>
      {/* Top decorative strip */}
      <div className="h-1" style={{ background: "linear-gradient(90deg, var(--gold), var(--saffron), var(--gold))" }} />

      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo / Title */}
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl" aria-hidden="true">🕉️</span>
          <div>
            <div className="text-lg font-bold leading-tight" style={{ color: "var(--gold)" }}>
              Kunjuveedu Devi Temple
            </div>
            <div className="text-xs tracking-widest font-malayalam" style={{ color: "#f0c040aa" }}>
              കുഞ്ഞുവീട് ദേവി ക്ഷേത്രം
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  color: isActive ? "#2d1b00" : "#f0c040",
                  background: isActive ? "var(--gold)" : "transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "rgba(240,192,64,0.15)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = "transparent";
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded"
          style={{ color: "var(--gold)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="text-2xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4" style={{ background: "var(--primary)" }}>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 rounded-lg mb-1 text-sm font-medium transition-all"
                style={{
                  color: isActive ? "#2d1b00" : "#f0c040",
                  background: isActive ? "var(--gold)" : "rgba(240,192,64,0.08)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}

      {/* Bottom decorative strip */}
      <div className="h-0.5" style={{ background: "rgba(240,192,64,0.3)" }} />
    </header>
  );
}
