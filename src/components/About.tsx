export default function About() {
  return (
    <section id="about" className="mx-4 lg:mx-auto max-w-5xl">
      <div className="bg-[#0d0d0d] rounded-3xl px-6 sm:px-10 py-16">
        {/* Header */}
        <div className="fade-up mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-yellow mb-2">
            Who I am
          </p>
          <h2 className="font-syne font-extrabold text-[#faf8f3] leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Engineer first,
            <br />
            analyst by training.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="fade-up delay-1 text-[#faf8f3]/75 leading-relaxed space-y-4 text-base">
            <p>
              I&apos;m Prajeet, a{" "}
              <strong className="text-brand-yellow font-medium">
                software engineer and data analyst
              </strong>{" "}
              based in Birmingham. I spent 18 months as an Associate Software
              Engineer at SCALA Inc., building features across{" "}
              <strong className="text-brand-yellow font-medium">
                5 production applications
              </strong>{" "}
              with React, Next.js, TypeScript and Golang in an Agile team.
            </p>
            <p>
              I then completed an{" "}
              <strong className="text-brand-yellow font-medium">
                MSc in Business Analytics at Aston University
              </strong>{" "}
              and worked as a business analyst, using Python and SQL to find
              what customers actually needed. Today I build websites for small
              businesses and experiment with LLM agents. Before tech, I
              recorded 100+ lesson scripts as a voice-over artist, which is
              where I learned to explain things clearly.
            </p>
          </div>

          {/* Chapter cards */}
          <div className="fade-up delay-2 flex flex-col gap-4">
            {chapters.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/15 bg-white/5"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${c.bg}`}>
                  {c.icon}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-[#faf8f3] text-sm">
                    {c.title}
                  </h4>
                  <p className="text-[#faf8f3]/50 text-xs mt-1">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const chapters = [
  {
    icon: "💻",
    title: "Engineer",
    desc: "React, Next.js, TypeScript and Golang across 5 production apps",
    bg: "bg-brand-blue/30",
  },
  {
    icon: "📊",
    title: "Analyst",
    desc: "First Class BSc Computing, MSc Business Analytics; Python and SQL on real customer data",
    bg: "bg-brand-teal/30",
  },
  {
    icon: "🤖",
    title: "Builder",
    desc: "Freelance websites, plus an LLM agent pipeline built with AI-assisted development",
    bg: "bg-brand-pink/30",
  },
];
