import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Poojas & Cost | Kunjuveedu Devi Temple",
  description:
    "View the complete list of poojas performed at Kunjuveedu Durga Bhagavathi Temple along with their costs and descriptions.",
};

interface Pooja {
  name: string;
  malayalamName?: string;
  cost: string;
  duration: string;
  description: string;
  category: string;
  significance: string;
}

const poojas: Pooja[] = [
  // ── Daily ──
  {
    name: "Udayasthamana Pooja",
    malayalamName: "ഉദയാസ്തമന പൂജ",
    cost: "₹ 5,001",
    duration: "Full day (sunrise to sunset)",
    description:
      "A comprehensive day-long pooja performed from sunrise to sunset. Involves elaborate rituals, flower offerings, and continuous lamp lighting.",
    category: "Special",
    significance: "Grants the patron and family long-lasting prosperity and health.",
  },
  {
    name: "Nirmalyam",
    malayalamName: "നിർമ്മാല്യം",
    cost: "Free",
    duration: "5:30 AM – 6:00 AM",
    description:
      "The first pooja of the day. Removal of the previous night's flower offerings and bathing of the deity.",
    category: "Daily",
    significance: "Opens the temple for the day with purity.",
  },
  {
    name: "Panchamrutabhishekam",
    malayalamName: "പഞ്ചാമൃതാഭിഷേകം",
    cost: "₹ 501",
    duration: "45 minutes",
    description:
      "Ritual bath of the deity with five sacred ingredients — milk, curd, honey, ghee, and banana.",
    category: "Archana",
    significance: "Bestows good health, wealth, and spiritual purification.",
  },
  {
    name: "Pushpanjali",
    malayalamName: "പുഷ്പാഞ്ജലി",
    cost: "₹ 101",
    duration: "20 minutes",
    description:
      "Offering of flowers to the deity with the chanting of Vedic hymns. One of the most popular daily rituals.",
    category: "Archana",
    significance: "Fulfils wishes and brings peace to the devotee's family.",
  },
  {
    name: "Archana",
    malayalamName: "അർച്ചന",
    cost: "₹ 51",
    duration: "15 minutes",
    description:
      "Personalised chanting of 108 names of the goddess with bilva leaves or flowers offered in the devotee's name.",
    category: "Archana",
    significance: "Personal blessings, fulfilment of specific prayers.",
  },
  {
    name: "Deeparadhana",
    malayalamName: "ദീപാരാധന",
    cost: "₹ 201",
    duration: "30 minutes",
    description:
      "Ritual waving of oil lamps in front of the deity, performed in the evenings. Accompanied by temple music and devotional songs.",
    category: "Daily",
    significance: "Removes negativity and brings divine light into devotees' lives.",
  },
  // ── Special ──
  {
    name: "Ganapathi Homam",
    malayalamName: "ഗണപതി ഹോമം",
    cost: "₹ 3,001",
    duration: "2 hours",
    description:
      "Fire ritual invoking Lord Ganesha for the removal of obstacles before any major endeavour or ceremony.",
    category: "Homam",
    significance: "Removes obstacles; ideal before new ventures, travel, or exams.",
  },
  {
    name: "Devi Mahatmya Homam",
    malayalamName: "ദേവീ മഹാത്മ്യ ഹോമം",
    cost: "₹ 11,001",
    duration: "Half day",
    description:
      "A grand fire ritual with recitation of the complete Devi Mahatmyam text and offerings of ghee, sesame, and sacred herbs.",
    category: "Homam",
    significance: "Powerful for protection, courage, and fulfilment of desires.",
  },
  {
    name: "Sahasranamarchana",
    malayalamName: "സഹസ്രനാമാർച്ചന",
    cost: "₹ 1,001",
    duration: "1.5 hours",
    description:
      "Chanting of the 1,000 names of the goddess (Devi Sahasranama) with flowers offered for each name.",
    category: "Special",
    significance: "Grants all-round blessings and fulfilment of heartfelt prayers.",
  },
  {
    name: "Kalasabhishekam",
    malayalamName: "കലശാഭിഷേകം",
    cost: "₹ 2,501",
    duration: "1 hour",
    description:
      "Ritual consecrated water poured over the deity from a decorated golden vessel (kalasam) with Vedic chanting.",
    category: "Special",
    significance: "Purification, healing from illness, and auspicious new beginnings.",
  },
  {
    name: "Ayilyam Pooja",
    malayalamName: "ആയില്യം പൂജ",
    cost: "₹ 551",
    duration: "45 minutes",
    description:
      "Pooja performed on the Ayilyam star day, particularly important for the serpent deity and for honouring Naga devatas.",
    category: "Nakshatra",
    significance: "Removes sarpa dosham (serpent affliction) from the horoscope.",
  },
  {
    name: "Birthday Archana & Blessing",
    malayalamName: "ജന്മദിന അർച്ചന",
    cost: "₹ 251",
    duration: "30 minutes",
    description:
      "Special archana performed on a devotee's birthday or star day (Janma Nakshatram) for divine blessings for the year ahead.",
    category: "Nakshatra",
    significance: "Long life, good health, and prosperity for the coming year.",
  },
  {
    name: "Mandala Pooja",
    malayalamName: "മണ്ഡല പൂജ",
    cost: "₹ 45,001",
    duration: "41 days",
    description:
      "A 41-day continuous ritual cycle culminating in a grand celebration. Performed once a year by the temple committee.",
    category: "Annual",
    significance: "Cosmic renewal, community blessings, and divine grace for all devotees.",
  },
  {
    name: "Utsavam (Annual Festival)",
    malayalamName: "ഉത്സവം",
    cost: "Community funded",
    duration: "7 days",
    description:
      "The grand annual temple festival celebrated with processions, cultural performances, Kathakali, and elaborate poojas over seven days.",
    category: "Annual",
    significance: "The pinnacle of devotional celebration for the entire community.",
  },
];

const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
  Daily: { bg: "#fff8f0", text: "#7b1c1c", border: "#e8620b" },
  Archana: { bg: "#fef9e7", text: "#7d5a00", border: "#d4a017" },
  Homam: { bg: "#fdf0f0", text: "#7b1c1c", border: "#c0392b" },
  Special: { bg: "#f0fff4", text: "#1a5c3a", border: "#27ae60" },
  Nakshatra: { bg: "#f0f4ff", text: "#1a2e5c", border: "#3460d4" },
  Annual: { bg: "#fdf0ff", text: "#4a1070", border: "#8e44ad" },
};

const categories = ["All", ...Object.keys(categoryColors)];

export default function PoojasPage() {
  const grouped: Record<string, Pooja[]> = {};
  poojas.forEach((p) => {
    if (!grouped[p.category]) grouped[p.category] = [];
    grouped[p.category].push(p);
  });

  return (
    <div>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, #7b1c1c 0%, #5a1010 100%)",
        }}
      >
        <p className="text-4xl mb-3">🙏</p>
        <h1 className="text-4xl font-bold" style={{ color: "var(--gold)" }}>
          Poojas &amp; Cost
        </h1>
        <p
          className="mt-3 text-sm opacity-75 max-w-lg mx-auto"
          style={{ color: "#fdf6e3" }}
        >
          A complete guide to all rituals and offerings performed at the
          temple. Every pooja is a bridge between the devotee and the divine.
        </p>
      </section>

      {/* Decorative band */}
      <div
        className="h-2"
        style={{
          background:
            "linear-gradient(90deg, var(--primary), var(--saffron), var(--gold), var(--saffron), var(--primary))",
        }}
      />

      {/* Note */}
      <div className="max-w-5xl mx-auto px-4 pt-8">
        <div
          className="rounded-xl p-4 text-sm border flex gap-3"
          style={{
            background: "#fff8f0",
            borderColor: "rgba(232,98,11,0.4)",
            color: "var(--dark-text)",
          }}
        >
          <span className="text-xl flex-shrink-0">ℹ️</span>
          <p>
            All pooja costs listed are guidelines. Dakshina (offerings) are
            voluntary and always welcome. Please contact the temple office or
            use the{" "}
            <Link
              href="/booking"
              className="underline font-medium"
              style={{ color: "var(--saffron)" }}
            >
              Booking &amp; Payment
            </Link>{" "}
            page to reserve a date.
          </p>
        </div>
      </div>

      {/* Category legend */}
      <section className="max-w-5xl mx-auto px-4 pt-8 pb-2">
        <div className="flex flex-wrap gap-2">
          {categories.slice(1).map((cat) => {
            const c = categoryColors[cat];
            return (
              <span
                key={cat}
                className="px-3 py-1 rounded-full text-xs font-semibold border"
                style={{ background: c.bg, color: c.text, borderColor: c.border }}
              >
                {cat}
              </span>
            );
          })}
        </div>
      </section>

      {/* Poojas grouped by category */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {Object.entries(grouped).map(([category, items]) => {
          const c = categoryColors[category];
          return (
            <div key={category} className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <h2
                  className="text-xl font-bold"
                  style={{ color: "var(--primary)" }}
                >
                  {category} Rituals
                </h2>
                <span
                  className="px-3 py-0.5 rounded-full text-xs font-semibold border"
                  style={{ background: c.bg, color: c.text, borderColor: c.border }}
                >
                  {items.length} poojas
                </span>
              </div>

              <div className="grid gap-4">
                {items.map((pooja) => (
                  <div
                    key={pooja.name}
                    className="rounded-2xl border overflow-hidden shadow-sm"
                    style={{ borderColor: c.border + "55", background: "#fffaf4" }}
                  >
                    <div
                      className="flex items-center justify-between px-5 py-4"
                      style={{
                        background: c.bg,
                        borderBottom: `1px solid ${c.border}33`,
                      }}
                    >
                      <div>
                        <h3
                          className="font-bold text-base"
                          style={{ color: c.text }}
                        >
                          {pooja.name}
                        </h3>
                        {pooja.malayalamName && (
                          <p className="text-xs opacity-70 mt-0.5 font-malayalam" style={{ color: c.text }}>
                            {pooja.malayalamName}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <div
                          className="text-lg font-extrabold"
                          style={{ color: "var(--primary)" }}
                        >
                          {pooja.cost}
                        </div>
                        <div className="text-xs opacity-60" style={{ color: "var(--muted)" }}>
                          🕐 {pooja.duration}
                        </div>
                      </div>
                    </div>

                    <div className="px-5 py-4">
                      <p className="text-sm leading-relaxed mb-3" style={{ color: "var(--dark-text)" }}>
                        {pooja.description}
                      </p>
                      <div
                        className="flex items-start gap-2 text-xs rounded-lg px-3 py-2"
                        style={{ background: c.bg }}
                      >
                        <span className="text-base flex-shrink-0">✨</span>
                        <span style={{ color: c.text }}>
                          <strong>Significance:</strong> {pooja.significance}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section
        className="py-12 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, #7b1c1c 0%, #5a1010 100%)",
        }}
      >
        <h2 className="text-xl font-bold mb-2" style={{ color: "var(--gold)" }}>
          Ready to Book a Pooja?
        </h2>
        <p
          className="text-sm mb-5 opacity-75"
          style={{ color: "#fdf6e3" }}
        >
          Reserve your preferred date and make payment online.
        </p>
        <Link
          href="/booking"
          className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 shadow-lg"
          style={{ background: "var(--gold)", color: "#2d1b00" }}
        >
          Book a Pooja 🙏
        </Link>
      </section>
    </div>
  );
}
