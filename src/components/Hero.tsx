import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-32 pb-16 px-10 max-w-6xl mx-auto">
      {/* Available tag */}
      <div className="inline-flex items-center gap-2 bg-brand-yellow text-ink text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-fit">
        <span className="w-2 h-2 rounded-full bg-ink" />
        Available for opportunities
      </div>

      {/* Name */}
      <h1 className="font-syne font-extrabold leading-none tracking-tighter mb-6"
          style={{ fontSize: "clamp(3.2rem, 7vw, 6rem)" }}>
        Prajeet
        <br />
        <span className="text-brand-orange">Kumar</span>
        <br />
        <span className="text-outline">Thakur</span>
      </h1>

      {/* Description */}
      <p className="text-lg text-ink/60 max-w-xl leading-relaxed mb-8">
        Frontend Engineer turned Voice Artist turned Data Analyst — a rare
        triple-threat based in the UK. I build things, tell stories, and find
        patterns in data.
      </p>

      {/* Identity chips */}
      <div className="flex flex-wrap gap-3 mb-10">
        <Chip color="blue"   label="⚙ Frontend Dev"       />
        <Chip color="pink"   label="🎙 Voice Artist"       />
        <Chip color="teal"   label="📊 Business Analytics" />
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4">
        <Link
          href="#contact"
          className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full text-sm font-medium hover:bg-brand-orange transition-colors duration-200"
        >
          Get in touch →
        </Link>
        <Link
          href="#experience"
          className="inline-flex items-center gap-2 border-[1.5px] border-ink text-ink px-7 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors duration-200"
        >
          View my work
        </Link>
        <a
          href="/Prajeet Kumar Thakur CV.pdf"
          download
          className="inline-flex items-center gap-2 border-[1.5px] border-ink/40 text-ink/70 px-7 py-4 rounded-full text-sm font-medium hover:border-ink hover:text-ink transition-colors duration-200"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>
    </section>
  );
}

function Chip({ color, label }: { color: "blue" | "pink" | "teal"; label: string }) {
  const styles = {
    blue: "text-brand-blue border-brand-blue bg-brand-blue/10",
    pink: "text-brand-pink border-brand-pink bg-brand-pink/10",
    teal: "text-brand-teal border-brand-teal bg-brand-teal/10",
  };
  return (
    <span className={`px-5 py-2 rounded-full text-sm font-medium border-[1.5px] ${styles[color]}`}>
      {label}
    </span>
  );
}
