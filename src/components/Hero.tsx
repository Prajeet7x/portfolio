import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "5",      label: "Production apps shipped" },
  { value: "2,500+", label: "Commits in an Agile team" },
  { value: "15%",    label: "Conversion lift from data" },
];

const socials = [
  { label: "GitHub",   href: "https://github.com/Prajeet7x",           icon: <GitHubIcon /> },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/prajeet-kumar/", icon: <LinkedInIcon /> },
  { label: "Medium",   href: "https://medium.com/@prajeet.thakur20",    icon: <MediumIcon /> },
  { label: "Email",    href: "mailto:prajeet.thakur20@gmail.com",       icon: <MailIcon /> },
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-28 pb-16 px-6 sm:px-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 lg:gap-14 items-center">
      <ProfileCard />

      <div>
        {/* Available tag */}
        <div className="inline-flex items-center gap-2 bg-brand-yellow text-[#0d0d0d] text-xs font-medium uppercase tracking-widest px-4 py-2 rounded-full mb-6 w-fit">
          <span className="w-2 h-2 rounded-full bg-[#0d0d0d]" />
          Available for opportunities
        </div>

        <p
          className="font-syne font-extrabold leading-[0.95] tracking-tighter mb-6"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.25rem)" }}
        >
          Software Engineer
          <br />
          <span className="text-ink/45">&amp; Data Analyst</span>
        </p>

        <p className="text-lg text-ink/70 max-w-xl leading-relaxed mb-10">
          Based in Birmingham, UK. I build web applications with React and
          TypeScript, dig into data with Python and SQL, and recently built an
          LLM agent pipeline that turns a flood of data into clear next steps.
        </p>

        {/* Proof stats */}
        <dl className="grid grid-cols-3 gap-4 sm:gap-10 max-w-xl mb-10">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-syne font-extrabold tracking-tight leading-none mb-2 text-[1.15rem] sm:text-3xl lg:text-[2.4rem]">
                {s.value}
              </dd>
              <dd aria-hidden className="text-[11px] sm:text-xs font-medium uppercase tracking-widest text-ink/60 leading-snug">
                {s.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 bg-ink text-cream px-7 py-4 rounded-full text-sm font-medium hover:bg-brand-blue transition-colors duration-200"
          >
            View my work →
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 border-[1.5px] border-ink text-ink px-7 py-4 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors duration-200"
          >
            Get in touch
          </Link>
          <a
            href="/Prajeet Kumar Thakur CV.pdf"
            download
            className="inline-flex items-center gap-2 border-[1.5px] border-ink/40 text-ink/80 px-7 py-4 rounded-full text-sm font-medium hover:border-ink hover:text-ink transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

function ProfileCard() {
  return (
    // Fixed light card in both themes so the photo panel always reads the same.
    <div className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto lg:mx-0 bg-[#faf8f3] text-[#0d0d0d] rounded-[2rem] p-6 pb-8 shadow-xl shadow-black/10 overflow-hidden">
      {/* Dashed accent arcs */}
      <svg className="absolute -top-12 -left-12 w-40 h-40 pointer-events-none opacity-80" viewBox="0 0 200 200" fill="none" aria-hidden>
        <circle cx="100" cy="100" r="90" stroke="#f06c2a" strokeWidth="3" strokeDasharray="10 9" />
      </svg>
      <svg className="absolute -bottom-16 -right-16 w-40 h-40 pointer-events-none opacity-80" viewBox="0 0 200 200" fill="none" aria-hidden>
        <circle cx="100" cy="100" r="90" stroke="#f06c2a" strokeWidth="3" strokeDasharray="10 9" />
      </svg>

      {/* Photo panel */}
      <div className="relative aspect-[4/5] rounded-3xl bg-brand-blue overflow-hidden">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(circle at 70% 20%, rgba(255,255,255,0.6), transparent 55%)" }}
          aria-hidden
        />
        <Image
          src="/profile.webp"
          alt="Prajeet Kumar Thakur"
          fill
          priority
          sizes="(min-width: 1024px) 332px, 90vw"
          className="object-contain object-bottom"
        />
      </div>

      <h1 className="relative font-syne font-extrabold text-2xl leading-tight tracking-tight text-center mt-6">
        Prajeet Kumar Thakur
      </h1>
      <p className="relative text-center text-sm text-[#0d0d0d]/70 mt-2 leading-relaxed px-2">
        Software engineer &amp; MSc Business Analytics graduate, Birmingham.
      </p>

      <ul className="relative flex justify-center gap-5 mt-6">
        {socials.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              className="block text-[#c2531c] hover:text-brand-blue transition-colors duration-200"
            >
              {s.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function GitHubIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.53-1.33-1.28-1.69-1.28-1.69-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.26 5.67.41.36.78 1.06.78 2.14v3.17c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

function MediumIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12Z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  );
}
