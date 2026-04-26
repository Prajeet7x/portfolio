const skills = [
  { icon: "🌐", name: "HTML5",       hover: "hover:border-brand-blue hover:shadow-brand-blue/15" },
  { icon: "🎨", name: "CSS3",        hover: "hover:border-brand-blue   hover:shadow-brand-blue/15"   },
  { icon: "⚡", name: "JavaScript",  hover: "hover:border-brand-pink   hover:shadow-brand-pink/15"   },
  { icon: "🔷", name: "TypeScript",  hover: "hover:border-brand-teal   hover:shadow-brand-teal/15"   },
  { icon: "▲",  name: "Next.js",     hover: "hover:border-brand-purple hover:shadow-brand-purple/15" },
  { icon: "💨", name: "Tailwind CSS",hover: "hover:border-brand-yellow hover:shadow-brand-yellow/20" },
  { icon: "🐙", name: "Git & GitHub",hover: "hover:border-brand-blue hover:shadow-brand-blue/15" },
  { icon: "📊", name: "Analytics",   hover: "hover:border-brand-teal   hover:shadow-brand-teal/15"   },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-10 py-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">
          What I know
        </p>
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Skills &amp; tools
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, i) => (
          <div
            key={skill.name}
            className={`fade-up delay-${Math.min(i % 4 + 1, 4)} bg-cream border-[1.5px] border-ink/10 rounded-2xl p-5 text-center transition-all duration-250 cursor-default hover:-translate-y-1 hover:shadow-lg ${skill.hover}`}
          >
            <div className="text-2xl mb-2">{skill.icon}</div>
            <div className="font-syne font-bold text-sm">{skill.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
