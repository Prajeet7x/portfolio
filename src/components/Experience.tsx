const experiences = [
  {
    role: "MSc Business Analytics Graduate",
    company: "Aston University, Birmingham 🇬🇧",
    period: "2023 – 2024",
    desc: "Graduated with an MSc in Business Analytics, gaining expertise in data-driven decision making, statistical modelling, and analytical tools. Developed strong capability to translate complex data into strategic business insights.",
    dot: "bg-brand-teal",
  },
  {
    role: "Voice Over Artist",
    company: "Freelance / Various Clients",
    period: "Previous",
    desc: "Delivered professional voice-over work across a range of formats — corporate narration, commercials, e-learning, and character work. Developed strong communication skills and attention to tone, pacing, and audience.",
    dot: "bg-brand-pink",
  },
  {
    role: "Frontend Software Engineer",
    company: "Software Industry",
    period: "Earlier",
    desc: "Built responsive, accessible web interfaces using HTML5, CSS3, JavaScript, TypeScript, and Next.js. Experienced in component-based architecture, TailwindCSS, and Git-based team workflows.",
    dot: "bg-brand-blue",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-10 py-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">
          Where I&apos;ve been
        </p>
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Experience
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative pl-8">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-0.5 timeline-line rounded-full" />

        {experiences.map((exp, i) => (
          <div key={exp.role} className={`fade-up delay-${i + 1} relative mb-10 last:mb-0`}>
            {/* Dot */}
            <div
              className={`absolute -left-[2.45rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cream ${exp.dot}`}
            />

            {/* Card */}
            <div className="bg-cream border-[1.5px] border-ink/10 rounded-2xl p-6">
              <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                <h3 className="font-syne font-bold text-base">{exp.role}</h3>
                <span className="text-xs font-medium bg-cream text-ink/60 px-3 py-1 rounded-full">
                  {exp.period}
                </span>
              </div>
              <p className="text-sm text-ink/50 mb-3">{exp.company}</p>
              <p className="text-sm text-ink/60 leading-relaxed">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
