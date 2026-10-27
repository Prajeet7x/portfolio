const blue   = "hover:border-brand-blue   hover:shadow-brand-blue/15";
const teal   = "hover:border-brand-teal   hover:shadow-brand-teal/15";
const pink   = "hover:border-brand-pink   hover:shadow-brand-pink/15";
const purple = "hover:border-brand-purple hover:shadow-brand-purple/15";
const yellow = "hover:border-brand-yellow hover:shadow-brand-yellow/20";

const skills = [
  { icon: "⚛",  name: "React",               hover: blue   },
  { icon: "🔷", name: "TypeScript",          hover: blue   },
  { icon: "▲",  name: "Next.js",             hover: purple },
  { icon: "⚡", name: "JavaScript (ES6+)",   hover: yellow },
  { icon: "💨", name: "Tailwind CSS",        hover: teal   },
  { icon: "🟢", name: "Node.js & Express",   hover: teal   },
  { icon: "🐹", name: "Golang",              hover: blue   },
  { icon: "🔌", name: "REST APIs & tRPC",    hover: purple },
  { icon: "🐍", name: "Python & Pandas",     hover: yellow },
  { icon: "🗄", name: "SQL & MySQL",          hover: teal   },
  { icon: "🍃", name: "MongoDB",             hover: teal   },
  { icon: "📊", name: "Google Analytics",    hover: pink   },
  { icon: "🧪", name: "Cypress testing",     hover: pink   },
  { icon: "🔁", name: "GitHub Actions CI/CD",hover: blue   },
  { icon: "🎨", name: "Figma",               hover: pink   },
  { icon: "🤖", name: "LLM agents",          hover: purple },
];

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 sm:px-10 py-24">
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
