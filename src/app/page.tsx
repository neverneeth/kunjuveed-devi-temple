import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      {/* ── Hero ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-4 py-28 overflow-hidden"
        style={{
          background:
            "linear-gradient(160deg, #7b1c1c 0%, #5a1010 40%, #2d0a0a 100%)",
        }}
      >
        {/* decorative concentric rings */}
        <div
          className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none"
          aria-hidden="true"
        >
          {[500, 380, 260, 150].map((size) => (
            <div
              key={size}
              className="absolute rounded-full border"
              style={{
                width: size,
                height: size,
                borderColor: "var(--gold)",
              }}
            />
          ))}
        </div>

        <p className="text-5xl mb-4 drop-shadow-lg">🕉️</p>
        <h1
          className="text-4xl sm:text-6xl font-extrabold mb-3 drop-shadow-xl"
          style={{ color: "var(--gold)" }}
        >
          Kunjuveedu Devi Temple
        </h1>
        <p className="text-xl sm:text-2xl mb-2 font-malayalam" style={{ color: "#f0c04099" }}>
          കുഞ്ഞുവീട് ദേവി ക്ഷേത്രം
        </p>
        <p
          className="max-w-xl text-lg leading-relaxed mt-4 mb-8"
          style={{ color: "#fdf6e3cc" }}
        >
          Abode of Durga Bhagavathi — where devotion meets tradition, and every
          prayer finds its answer.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/poojas"
            className="px-6 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 shadow-lg"
            style={{ background: "var(--gold)", color: "#2d1b00" }}
          >
            View Poojas &amp; Cost
          </Link>
          <Link
            href="/booking"
            className="px-6 py-3 rounded-full font-semibold text-sm border transition-transform hover:scale-105"
            style={{ borderColor: "var(--gold)", color: "var(--gold)" }}
          >
            Book a Pooja
          </Link>
        </div>
      </section>

      {/* ── Ornamental divider ── */}
      <div
        className="h-2"
        style={{
          background:
            "linear-gradient(90deg, var(--primary), var(--saffron), var(--gold), var(--saffron), var(--primary))",
        }}
      />

      {/* ── About / History ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "var(--saffron)" }}
          >
            Our Story
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold mt-2"
            style={{ color: "var(--primary)" }}
          >
            About the Temple
          </h2>
          <div
            className="mx-auto mt-3 h-1 w-16 rounded-full"
            style={{ background: "var(--gold)" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div className="space-y-4 text-base leading-relaxed" style={{ color: "var(--dark-text)" }}>
            <p>
              Nestled in the heart of Kerala, the{" "}
              <strong>Kunjuveedu Durga Bhagavathi Temple</strong> is a
              centuries-old sacred shrine dedicated to Goddess Durga
              Bhagavathi — the divine mother of strength, protection, and
              grace.
            </p>
            <p>
              The temple has been the spiritual nucleus of the Kunjuveedu
              family and the surrounding community for generations. Its
              founding is rooted in a sacred vision received by the
              forebears of the Kunjuveedu lineage, who consecrated this
              land as a place of worship and community gathering.
            </p>
            <p>
              Every year, thousands of devotees visit to seek blessings,
              participate in elaborate poojas, and celebrate the grand
              annual festival (Utsavam) with deep fervour and community
              spirit.
            </p>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏛️", label: "Ancient Heritage", desc: "Centuries of unbroken tradition" },
              { icon: "🔥", label: "Daily Poojas", desc: "Three services every day" },
              { icon: "🎉", label: "Annual Utsavam", desc: "Grand festival each year" },
              { icon: "🤝", label: "Community Service", desc: "Serving devotees year-round" },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl p-5 text-center shadow-sm border"
                style={{
                  background: "#fff8f0",
                  borderColor: "rgba(212,160,23,0.25)",
                }}
              >
                <span className="text-3xl">{item.icon}</span>
                <div
                  className="mt-2 font-semibold text-sm"
                  style={{ color: "var(--primary)" }}
                >
                  {item.label}
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Presiding deity ── */}
      <section
        className="py-14 px-4"
        style={{
          background:
            "linear-gradient(135deg, #fff8f0 0%, #fdf6e3 50%, #fff8f0 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "var(--saffron)" }}
          >
            Presiding Deity
          </span>
          <h2
            className="text-3xl font-bold mt-2 mb-6"
            style={{ color: "var(--primary)" }}
          >
            Durga Bhagavathi
          </h2>
          <div
            className="mx-auto mb-8 h-1 w-16 rounded-full"
            style={{ background: "var(--gold)" }}
          />
          <div
            className="mx-auto w-32 h-32 rounded-full flex items-center justify-center text-6xl shadow-xl border-4 mb-6"
            style={{
              background:
                "linear-gradient(135deg, #7b1c1c 0%, #c0392b 100%)",
              borderColor: "var(--gold)",
            }}
          >
            🪔
          </div>
          <p
            className="max-w-2xl mx-auto text-base leading-relaxed"
            style={{ color: "var(--dark-text)" }}
          >
            Goddess Durga Bhagavathi is the supreme manifestation of
            Shakti — the divine feminine energy. She is the protector of
            dharma and the destroyer of evil, bestowing her devotees with
            courage, prosperity, and liberation. The temple&apos;s idol, carved
            in the traditional Kerala style, radiates an aura of divine
            grace and infinite compassion.
          </p>
        </div>
      </section>

      {/* ── Quick links ── */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2
          className="text-2xl font-bold text-center mb-10"
          style={{ color: "var(--primary)" }}
        >
          Explore
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              href: "/family-tree",
              icon: "🌳",
              title: "Family Tree",
              desc: "Explore the lineage and heritage of Kunjuveedu families",
            },
            {
              href: "/development",
              icon: "🏗️",
              title: "Development Plans",
              desc: "Upcoming projects and expansion of our sacred temple",
            },
            {
              href: "/poojas",
              icon: "🙏",
              title: "Poojas & Cost",
              desc: "Browse all offerings and their associated costs",
            },
            {
              href: "/booking",
              icon: "📅",
              title: "Book & Pay",
              desc: "Book a pooja and make your donation online",
            },
          ].map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="group rounded-2xl p-6 border shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              style={{
                background: "#fff8f0",
                borderColor: "rgba(212,160,23,0.25)",
              }}
            >
              <span className="text-4xl">{card.icon}</span>
              <h3
                className="mt-3 font-bold text-base group-hover:underline"
                style={{ color: "var(--primary)" }}
              >
                {card.title}
              </h3>
              <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                {card.desc}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Temple hours banner ── */}
      <section
        className="py-10 px-4 text-center"
        style={{ background: "var(--primary)" }}
      >
        <p className="text-lg font-semibold" style={{ color: "var(--gold)" }}>
          🕐 Temple Hours: 5:30 AM – 12:00 PM &nbsp;|&nbsp; 5:00 PM – 8:00 PM
        </p>
        <p className="text-sm mt-1 opacity-70" style={{ color: "var(--gold)" }}>
          Open every day including festivals &amp; auspicious occasions
        </p>
      </section>
    </div>
  );
}
