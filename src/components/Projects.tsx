import Link from "next/link";

interface Project {
  title: string;
  tag: string;
  desc: string;
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
  accent: string;
}

const projects: Project[] = [
  {
    title: "Pimenta — Pizzeria & Burgers",
    tag: "Client project · freelance",
    desc: "A fast, mobile-first marketing site for a halal pizzeria and burger takeaway in Birmingham. Built around the two things customers need: a sticky tap-to-call bar and one-tap directions. Includes a live open/closed status computed from opening hours, a tabbed menu driven by structured JSON, delivery info, offers and an embedded map, all statically generated.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [],
    note: "Live demo link coming soon",
    accent: "bg-brand-orange",
  },
  {
    title: "Job Market Data Pipeline",
    tag: "Python · LLM agents",
    desc: "Polls public Greenhouse, Lever and Ashby APIs across 60+ companies (~11,000 postings per run), deduplicates and filters them, and enriches employers with UK Home Office sponsor-register data. A scheduled cloud LLM agent then scores postings and emails a digest. Built with AI-assisted development, human in the loop: I directed the design and reviewed and tested the code.",
    stack: ["Python", "REST APIs", "LLM agents", "Gmail API", "Cron"],
    links: [],
    note: "Private repo · walkthrough on request",
    accent: "bg-brand-purple",
  },
  {
    title: "Desi Travellers",
    tag: "Personal build · live",
    desc: "A travel website taken from design to deployment, version-controlled with Git and deployed on Vercel.",
    stack: ["Web", "Responsive design", "Vercel"],
    links: [{ label: "Live site", href: "https://desi-travellers.vercel.app/" }],
    accent: "bg-brand-yellow",
  },
  {
    title: "MERN App",
    tag: "Full stack",
    desc: "A CRUD application on the MERN stack: MongoDB, Express, React and Node.js.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    links: [{ label: "Code", href: "https://github.com/Prajeet7x/MERN-app" }],
    accent: "bg-brand-teal",
  },
  {
    title: "tRPC + Next.js App Router",
    tag: "Type-safe APIs",
    desc: "Research projects exploring end-to-end type-safe APIs with tRPC and TypeScript on the Next.js App Router.",
    stack: ["tRPC", "TypeScript", "Next.js"],
    links: [
      { label: "App Router", href: "https://github.com/Prajeet7x/trpc-appRouter" },
      { label: "tRPC R&D", href: "https://github.com/Prajeet7x/trpc" },
    ],
    accent: "bg-brand-blue",
  },
  {
    title: "Cypress + Next.js",
    tag: "Testing",
    desc: "A Next.js project demonstrating end-to-end testing with Cypress, the approach I used in production at SCALA.",
    stack: ["Cypress", "Next.js", "TypeScript"],
    links: [{ label: "Code", href: "https://github.com/Prajeet7x/cypress-next" }],
    accent: "bg-brand-pink",
  },
  {
    title: "Go CRUD",
    tag: "Backend",
    desc: "A simple Go application with CRUD functionality.",
    stack: ["Golang"],
    links: [{ label: "Code", href: "https://github.com/Prajeet7x/go-crud" }],
    accent: "bg-brand-orange",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">
          What I&apos;ve built
        </p>
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Projects
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`fade-up delay-${(i % 2) + 1} flex flex-col bg-cream border-[1.5px] border-ink/10 rounded-2xl p-6 hover:border-ink/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className={`w-2.5 h-2.5 rounded-full ${p.accent}`} />
              <span className="text-xs font-medium uppercase tracking-widest text-ink/40">
                {p.tag}
              </span>
            </div>
            <h3 className="font-syne font-bold text-lg mb-2">{p.title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed mb-4">{p.desc}</p>

            <div className="flex flex-wrap gap-2 mb-5">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-3 py-1 rounded-full border border-ink/15 text-ink/60">
                  {s}
                </span>
              ))}
            </div>

            <div className="mt-auto flex flex-wrap gap-4">
              {p.note && <span className="text-xs text-ink/40">{p.note}</span>}
              {p.links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-blue hover:underline"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
