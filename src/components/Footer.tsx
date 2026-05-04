import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "var(--primary)", color: "var(--gold)" }}>
      <div className="h-0.5" style={{ background: "rgba(240,192,64,0.3)" }} />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - Temple info */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl">🕉️</span>
              <span className="font-bold text-lg">Kunjuveedu Devi Temple</span>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              A sacred abode of Durga Bhagavathi, devoted to divine blessings,
              tradition, and community service.
            </p>
          </div>

          {/* Column 2 - Quick links */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/", label: "Home & About" },
                { href: "/family-tree", label: "Family Tree" },
                { href: "/development", label: "Development Plans" },
                { href: "/poojas", label: "Poojas & Cost" },
                { href: "/booking", label: "Booking & Payment" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider opacity-70">
              Contact
            </h4>
            <address className="not-italic text-sm space-y-2 opacity-80">
              <p>📍 Kunjuveedu, Kerala, India</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ info@kunjuveedudevi.in</p>
              <p>🕐 Temple Hours: 5:30 AM – 12:00 PM &amp; 5:00 PM – 8:00 PM</p>
            </address>
          </div>
        </div>

        <div
          className="mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm opacity-60 gap-2"
          style={{ borderTop: "1px solid rgba(240,192,64,0.2)" }}
        >
          <p>© {new Date().getFullYear()} Kunjuveedu Devi Temple. All rights reserved.</p>
          <p className="text-xs font-malayalam">ഓം ദുർഗ്ഗ ഭഗവതി | Om Durga Bhagavathi 🙏</p>
        </div>
      </div>
    </footer>
  );
}
