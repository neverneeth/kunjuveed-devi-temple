import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Development Plans | Kunjuveedu Devi Temple",
  description:
    "Explore the future development activities and expansion plans for the Kunjuveedu Durga Bhagavathi Temple.",
};

const projects = [
  {
    id: 1,
    icon: "🏛️",
    title: "Main Sanctum Renovation",
    status: "In Progress",
    statusColor: "#e8620b",
    targetDate: "December 2025",
    budget: "₹ 15,00,000",
    description:
      "Complete renovation and expansion of the main sanctum (Sreekovil), including new granite flooring, traditional Kerala-style wood carvings on the walls and ceiling, and installation of an ornate brass lamp (nilavilakku) at the entrance.",
    milestones: ["Foundation work complete", "Granite flooring 60% done", "Wood carving in progress"],
    category: "Construction",
  },
  {
    id: 2,
    icon: "🔔",
    title: "New Temple Bell Tower",
    status: "Planning",
    statusColor: "#d4a017",
    targetDate: "March 2026",
    budget: "₹ 8,00,000",
    description:
      "Construction of a traditional Kerala-style bell tower (Vilakkumadam) at the temple entrance. The tower will house three bells of varying sizes, and the casting of the main bell will follow ancient Panchalohya (five-metal alloy) traditions.",
    milestones: ["Design finalised", "Permits pending", "Fundraising underway"],
    category: "Construction",
  },
  {
    id: 3,
    icon: "🌿",
    title: "Sacred Garden & Meditation Space",
    status: "Planning",
    statusColor: "#d4a017",
    targetDate: "June 2026",
    budget: "₹ 5,00,000",
    description:
      "Development of a serene garden around the temple with tulsi plants, sacred herbs, and a meditation pavilion (Mandapam) where devotees can sit in quiet reflection. The space will also host yoga and Vedic chanting sessions.",
    milestones: ["Land clearance complete", "Landscape design approved"],
    category: "Landscaping",
  },
  {
    id: 4,
    icon: "🏫",
    title: "Community Hall & Kitchen",
    status: "Fundraising",
    statusColor: "#c0392b",
    targetDate: "September 2026",
    budget: "₹ 25,00,000",
    description:
      "A multi-purpose community hall to host cultural events, Vedic classes, and the annual feast (Sadya) after major festivals. The hall will include a modern kitchen facility capable of serving over 500 devotees.",
    milestones: ["Site survey done", "Architecture drawings in review"],
    category: "Community",
  },
  {
    id: 5,
    icon: "💡",
    title: "Solar Power Installation",
    status: "In Progress",
    statusColor: "#e8620b",
    targetDate: "October 2025",
    budget: "₹ 3,50,000",
    description:
      "Installation of a 10 kW rooftop solar power system to make the temple energy self-sufficient and reduce electricity costs. The surplus energy will be donated to the temple's immediate neighbourhood.",
    milestones: ["Vendor selected", "Panels ordered", "Installation 30% complete"],
    category: "Sustainability",
  },
  {
    id: 6,
    icon: "🎓",
    title: "Vedic Studies Centre",
    status: "Concept",
    statusColor: "#8b6f47",
    targetDate: "2027",
    budget: "₹ 40,00,000",
    description:
      "A dedicated centre for the preservation and teaching of traditional Vedic knowledge, including Sanskrit, astrology (Jyotisha), and classical temple arts. The centre will offer residential programs for young scholars.",
    milestones: ["Concept paper drafted"],
    category: "Education",
  },
];

const categoryColors: Record<string, string> = {
  Construction: "#7b1c1c",
  Landscaping: "#2d6a4f",
  Community: "#e8620b",
  Sustainability: "#1e6091",
  Education: "#5a189a",
};

const statusOrder: Record<string, number> = {
  "In Progress": 1,
  Planning: 2,
  Fundraising: 3,
  Concept: 4,
};

export default function DevelopmentPage() {
  const sorted = [...projects].sort(
    (a, b) => (statusOrder[a.status] ?? 99) - (statusOrder[b.status] ?? 99)
  );

  const totalBudget = "₹ 96,50,000";
  const completedCount = projects.filter((p) => p.status === "In Progress").length;

  return (
    <div>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, #7b1c1c 0%, #5a1010 100%)",
        }}
      >
        <p className="text-4xl mb-3">🏗️</p>
        <h1 className="text-4xl font-bold" style={{ color: "var(--gold)" }}>
          Future Development
        </h1>
        <p
          className="mt-3 text-sm opacity-75 max-w-lg mx-auto"
          style={{ color: "#fdf6e3" }}
        >
          Our vision to grow the temple into a complete centre of spiritual,
          cultural, and community life — one project at a time.
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

      {/* Stats */}
      <section
        className="py-10 px-4"
        style={{ background: "#fff8f0" }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { icon: "📋", label: "Total Projects", value: projects.length.toString() },
            { icon: "🔨", label: "Active", value: completedCount.toString() },
            { icon: "💰", label: "Total Budget", value: totalBudget },
            { icon: "🎯", label: "Latest Target", value: "Oct 2025" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-5 border shadow-sm"
              style={{ background: "#fffaf4", borderColor: "rgba(212,160,23,0.3)" }}
            >
              <div className="text-3xl">{s.icon}</div>
              <div className="text-xl font-extrabold mt-1" style={{ color: "var(--primary)" }}>
                {s.value}
              </div>
              <div className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-bold text-center mb-2" style={{ color: "var(--primary)" }}>
          Development Projects
        </h2>
        <div
          className="mx-auto mb-10 h-1 w-16 rounded-full"
          style={{ background: "var(--gold)" }}
        />

        <div className="grid gap-8">
          {sorted.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border shadow-sm overflow-hidden"
              style={{ borderColor: "rgba(212,160,23,0.25)", background: "#fffaf4" }}
            >
              {/* Card header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ background: "#fff8f0", borderBottom: "1px solid rgba(212,160,23,0.2)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{project.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg leading-tight" style={{ color: "var(--primary)" }}>
                      {project.title}
                    </h3>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-semibold text-white"
                      style={{ background: categoryColors[project.category] ?? "#666" }}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full border"
                  style={{ borderColor: project.statusColor, color: project.statusColor }}
                >
                  {project.status}
                </span>
              </div>

              {/* Card body */}
              <div className="px-6 py-5">
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--dark-text)" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-6 text-sm mb-4">
                  <div>
                    <span style={{ color: "var(--muted)" }}>🗓 Target Date: </span>
                    <strong style={{ color: "var(--primary)" }}>{project.targetDate}</strong>
                  </div>
                  <div>
                    <span style={{ color: "var(--muted)" }}>💰 Budget: </span>
                    <strong style={{ color: "var(--primary)" }}>{project.budget}</strong>
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
                    Milestones
                  </p>
                  <ul className="space-y-1">
                    {project.milestones.map((m) => (
                      <li key={m} className="flex items-center gap-2 text-sm" style={{ color: "var(--dark-text)" }}>
                        <span
                          className="w-2 h-2 rounded-full flex-shrink-0"
                          style={{ background: project.statusColor }}
                        />
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA – Donate */}
      <section
        className="py-14 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, #7b1c1c 0%, #5a1010 100%)",
        }}
      >
        <h2 className="text-2xl font-bold mb-3" style={{ color: "var(--gold)" }}>
          Support Our Vision
        </h2>
        <p
          className="max-w-md mx-auto text-sm leading-relaxed mb-6"
          style={{ color: "#fdf6e3bb" }}
        >
          Every contribution, big or small, brings us closer to transforming
          this sacred space for future generations. Make a donation today.
        </p>
        <Link
          href="/booking"
          className="inline-block px-8 py-3 rounded-full font-semibold text-sm transition-transform hover:scale-105 shadow-lg"
          style={{ background: "var(--gold)", color: "#2d1b00" }}
        >
          Donate Now 🙏
        </Link>
      </section>
    </div>
  );
}
