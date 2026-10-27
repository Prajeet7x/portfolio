// Grouped by evidence so production experience reads differently from side projects.
const groups = [
  {
    title: "Used in production",
    note: "SCALA Inc., BUY ME ONCE and client work",
    accent: "bg-brand-blue",
    skills: [
      "React", "TypeScript", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Golang",
      "REST APIs", "React Query", "MySQL", "SQL", "Python & Pandas", "Google Analytics",
      "Cypress", "GitHub Actions CI/CD", "Turborepo", "Figma", "Agile Scrum", "Jira",
    ],
  },
  {
    title: "Used in projects",
    note: "Personal and learning builds on GitHub",
    accent: "bg-brand-teal",
    skills: ["Node.js", "Express", "MongoDB", "tRPC", "Redux", "Zustand", "Vite", "LLM agents"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 sm:px-10 py-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">
          What I know
        </p>
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Skills &amp; tools
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6">
        {groups.map((g, i) => (
          <div
            key={g.title}
            className={`fade-up delay-${i + 1} bg-cream border-[1.5px] border-ink/10 rounded-2xl p-6`}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className={`w-2.5 h-2.5 rounded-full ${g.accent}`} />
              <h3 className="font-syne font-bold text-base">{g.title}</h3>
            </div>
            <p className="text-xs text-ink/60 mb-5 ml-[22px]">{g.note}</p>
            <ul className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li
                  key={s}
                  className="text-sm px-3.5 py-1.5 rounded-full border-[1.5px] border-ink/15 text-ink/80"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
