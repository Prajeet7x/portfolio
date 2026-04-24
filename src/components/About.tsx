export default function About() {
  return (
    <section id="about" className="mx-4 lg:mx-auto max-w-5xl">
      <div className="bg-ink rounded-3xl px-10 py-16">
        {/* Header */}
        <div className="fade-up mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-brand-yellow mb-2">
            Who I am
          </p>
          <h2 className="font-syne font-extrabold text-cream leading-tight tracking-tighter"
              style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            Three chapters,
            <br />
            one story.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="fade-up delay-1 text-cream/75 leading-relaxed space-y-4 text-base">
            <p>
              I&apos;m Prajeet — an{" "}
              <strong className="text-brand-yellow font-medium">
                international student in the UK
              </strong>{" "}
              with a background that spans code, creativity, and commerce. I
              started my career as a{" "}
              <strong className="text-brand-yellow font-medium">
                software engineer
              </strong>{" "}
              specialising in frontend development, sharpening my craft across
              HTML, CSS, JavaScript, TypeScript, and modern frameworks.
            </p>
            <p>
              Along the way, I discovered a passion for voice, spending time as
              a{" "}
              <strong className="text-brand-yellow font-medium">
                professional voice-over artist
              </strong>{" "}
              before returning to the world of data, graduating with an{" "}
              <strong className="text-brand-yellow font-medium">
                MSc in Business Analytics
              </strong>
              . I bring the best of all three worlds to everything I do.
            </p>
          </div>

          {/* Chapter cards */}
          <div className="fade-up delay-2 flex flex-col gap-4">
            {chapters.map((c) => (
              <div
                key={c.title}
                className="flex items-start gap-4 p-4 rounded-xl border border-white/10 bg-white/5"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0 ${c.bg}`}>
                  {c.icon}
                </div>
                <div>
                  <h4 className="font-syne font-bold text-cream text-sm">
                    {c.title}
                  </h4>
                  <p className="text-cream/50 text-xs mt-1">{c.desc}</p>
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
    title: "Chapter 1 — Engineer",
    desc: "Frontend dev with a love for clean UIs, TypeScript, and Next.js",
    bg: "bg-brand-blue/30",
  },
  {
    icon: "🎙",
    title: "Chapter 2 — Voice Artist",
    desc: "Professional VO work: narration, commercials, characters",
    bg: "bg-brand-pink/30",
  },
  {
    icon: "📊",
    title: "Chapter 3 — Analyst",
    desc: "MSc Business Analytics — turning data into decisions",
    bg: "bg-brand-teal/30",
  },
];
