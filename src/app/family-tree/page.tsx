import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Tree | Kunjuveedu Devi Temple",
  description:
    "Explore the sacred lineage of the Kunjuveedu family — the custodians of the Durga Bhagavathi Temple through generations.",
};

// ── Data ──────────────────────────────────────────────────────────────────────

interface Member {
  id: string;
  name: string;
  role?: string;
  generation: number;
  children?: string[]; // ids
  spouse?: string;
  description?: string;
}

const members: Member[] = [
  {
    id: "root",
    name: "Founding Ancestor",
    role: "Temple Founder",
    generation: 0,
    description: "The revered ancestor who consecrated the temple land upon receiving a divine vision of Goddess Durga Bhagavathi.",
    children: ["g2a", "g2b"],
  },
  {
    id: "g2a",
    name: "Raman Nair",
    role: "Head Trustee",
    generation: 1,
    spouse: "Saraswathi",
    children: ["g3a", "g3b"],
  },
  {
    id: "g2b",
    name: "Krishnan Nair",
    role: "Head Priest",
    generation: 1,
    spouse: "Kamalam",
    children: ["g3c", "g3d"],
  },
  {
    id: "g3a",
    name: "Govindan",
    role: "Trustee",
    generation: 2,
    spouse: "Devaki",
    children: ["g4a", "g4b"],
  },
  {
    id: "g3b",
    name: "Kumari",
    role: "Devotee",
    generation: 2,
    children: [],
  },
  {
    id: "g3c",
    name: "Suresh",
    role: "Chief Priest",
    generation: 2,
    spouse: "Radha",
    children: ["g4c"],
  },
  {
    id: "g3d",
    name: "Sindhu",
    role: "Temple Volunteer",
    generation: 2,
    children: [],
  },
  {
    id: "g4a",
    name: "Arun",
    role: "Secretary",
    generation: 3,
    children: [],
  },
  {
    id: "g4b",
    name: "Priya",
    role: "Volunteer",
    generation: 3,
    children: [],
  },
  {
    id: "g4c",
    name: "Vishnu",
    role: "Apprentice Priest",
    generation: 3,
    children: [],
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

function getMemberById(id: string): Member | undefined {
  return members.find((m) => m.id === id);
}

const generationColors: Record<number, { bg: string; border: string; text: string; badge: string }> = {
  0: { bg: "#7b1c1c", border: "#d4a017", text: "#f0c040", badge: "#d4a017" },
  1: { bg: "#9b2226", border: "#e8620b", text: "#fdf6e3", badge: "#e8620b" },
  2: { bg: "#fff8f0", border: "#c0392b", text: "#2d1b00", badge: "#c0392b" },
  3: { bg: "#fdf6e3", border: "#8b6f47", text: "#2d1b00", badge: "#8b6f47" },
};

const generationLabels: Record<number, string> = {
  0: "1st Generation",
  1: "2nd Generation",
  2: "3rd Generation",
  3: "4th Generation",
};

// ── Components ────────────────────────────────────────────────────────────────

function MemberCard({ member }: { member: Member }) {
  const colors = generationColors[member.generation];
  return (
    <div
      className="flex flex-col items-center px-5 py-4 rounded-2xl shadow-md border-2 min-w-[140px] max-w-[180px] text-center transition-transform hover:-translate-y-1 hover:shadow-xl"
      style={{
        background: colors.bg,
        borderColor: colors.border,
        color: colors.text,
      }}
    >
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center text-2xl mb-2 border-2"
        style={{ borderColor: colors.border, background: "rgba(255,255,255,0.15)" }}
      >
        {member.generation === 0 ? "👑" : member.role?.includes("Priest") ? "🙏" : member.role?.includes("Trustee") || member.role?.includes("Secretary") ? "⚖️" : "🌸"}
      </div>
      <div className="font-bold text-sm leading-tight">{member.name}</div>
      {member.spouse && (
        <div className="text-xs mt-0.5 opacity-75">& {member.spouse}</div>
      )}
      {member.role && (
        <span
          className="mt-2 px-2 py-0.5 rounded-full text-[10px] font-semibold"
          style={{ background: colors.badge, color: member.generation <= 1 ? "#2d1b00" : "#fdf6e3" }}
        >
          {member.role}
        </span>
      )}
    </div>
  );
}

function GenerationRow({ generation, ids }: { generation: number; ids: string[] }) {
  const resolvedMembers = ids.map(getMemberById).filter(Boolean) as Member[];
  if (resolvedMembers.length === 0) return null;

  return (
    <div className="relative flex flex-col items-center gap-3">
      {/* Generation label */}
      <div
        className="text-xs font-bold tracking-[0.2em] uppercase px-4 py-1 rounded-full"
        style={{ background: "rgba(212,160,23,0.15)", color: "var(--saffron)" }}
      >
        {generationLabels[generation]}
      </div>

      {/* Members row */}
      <div className="flex flex-wrap justify-center gap-4">
        {resolvedMembers.map((m) => (
          <MemberCard key={m.id} member={m} />
        ))}
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function FamilyTreePage() {
  // Group members by generation
  const byGen: Record<number, string[]> = {};
  members.forEach((m) => {
    if (!byGen[m.generation]) byGen[m.generation] = [];
    byGen[m.generation].push(m.id);
  });

  const generations = Object.keys(byGen)
    .map(Number)
    .sort((a, b) => a - b);

  return (
    <div>
      {/* Header */}
      <section
        className="py-16 px-4 text-center"
        style={{
          background: "linear-gradient(160deg, #7b1c1c 0%, #5a1010 100%)",
        }}
      >
        <p className="text-4xl mb-3">🌳</p>
        <h1 className="text-4xl font-bold" style={{ color: "var(--gold)" }}>
          Family Tree
        </h1>
        <p className="mt-3 text-sm opacity-75 max-w-lg mx-auto" style={{ color: "#fdf6e3" }}>
          The sacred lineage of the Kunjuveedu family — custodians of the
          Durga Bhagavathi Temple through generations of devotion and service.
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

      {/* Legend */}
      <section className="max-w-3xl mx-auto px-4 pt-10 pb-0">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(generationColors).map(([gen, colors]) => (
            <div key={gen} className="flex items-center gap-2 text-sm">
              <div
                className="w-5 h-5 rounded-full border-2"
                style={{ background: colors.bg, borderColor: colors.border }}
              />
              <span style={{ color: "var(--muted)" }}>
                {generationLabels[Number(gen)]}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Tree visualization */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col items-center gap-0">
          {generations.map((gen, idx) => (
            <div key={gen} className="flex flex-col items-center w-full">
              <GenerationRow generation={gen} ids={byGen[gen]} />

              {/* Connector arrow */}
              {idx < generations.length - 1 && (
                <div className="flex flex-col items-center my-3" aria-hidden="true">
                  <div
                    className="w-0.5 h-8"
                    style={{ background: "var(--gold)" }}
                  />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: "8px solid transparent",
                      borderRight: "8px solid transparent",
                      borderTop: "10px solid var(--gold)",
                    }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Radial overview */}
      <section
        className="py-14 px-4"
        style={{ background: "linear-gradient(135deg, #fff8f0 0%, #fdf6e3 100%)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2" style={{ color: "var(--primary)" }}>
            Heritage at a Glance
          </h2>
          <div
            className="mx-auto mb-8 h-1 w-16 rounded-full"
            style={{ background: "var(--gold)" }}
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { icon: "👑", label: "Generations", value: `${generations.length}` },
              { icon: "👨‍👩‍👧‍👦", label: "Family Members", value: `${members.length}+` },
              { icon: "⚖️", label: "Trustees", value: members.filter((m) => m.role?.includes("Trustee") || m.role?.includes("Secretary")).length.toString() },
              { icon: "🙏", label: "Priests", value: members.filter((m) => m.role?.includes("Priest")).length.toString() },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl p-6 border shadow-sm"
                style={{
                  background: "#fff8f0",
                  borderColor: "rgba(212,160,23,0.3)",
                }}
              >
                <div className="text-3xl">{stat.icon}</div>
                <div
                  className="mt-2 text-2xl font-extrabold"
                  style={{ color: "var(--primary)" }}
                >
                  {stat.value}
                </div>
                <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founding story */}
      <section className="max-w-3xl mx-auto px-4 py-14 text-center">
        <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>
          The Founding Story
        </h2>
        <div
          className="mx-auto mb-6 h-1 w-16 rounded-full"
          style={{ background: "var(--gold)" }}
        />
        <blockquote
          className="relative text-base leading-relaxed italic p-8 rounded-3xl border-l-4 shadow-inner"
          style={{
            background: "#fff8f0",
            borderLeftColor: "var(--saffron)",
            color: "var(--dark-text)",
          }}
        >
          <span className="text-5xl absolute top-3 left-5 opacity-20" aria-hidden="true">
            ❝
          </span>
          The founding ancestor of the Kunjuveedu family received a divine
          vision of Goddess Durga Bhagavathi on a moonlit night beside a
          sacred pond. Guided by the goddess herself, the family consecrated
          the land and built a small shrine that grew into the magnificent
          temple it is today — a living testament to generations of
          unwavering faith.
        </blockquote>
      </section>
    </div>
  );
}
