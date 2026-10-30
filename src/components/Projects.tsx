import Image from "next/image";
import Link from "next/link";
import TypingTerminal from "./TypingTerminal";

interface Project {
  title: string;
  tag: string;
  problem: string;
  built: string;
  result: string;
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
  image?: { src: string; alt: string };
  terminal?: string[];
  accent: string;
}

const projects: Project[] = [
  {
    title: "Pimenta — Pizzeria & Burgers",
    tag: "Client project · freelance",
    problem: "A Birmingham halal takeaway with no website; most customers arrive on phones and just want to call or find the shop.",
    built: "A fast, fully static, mobile-first site: sticky tap-to-call bar, one-tap directions, a live open/closed status computed from opening hours, and a tabbed menu driven by structured JSON.",
    result: "Delivered as a live demo for the owner's review.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Vercel"],
    links: [{ label: "Live demo", href: "https://pimenta-psi.vercel.app/" }],
    image: { src: "/projects/pimenta.webp", alt: "Pimenta website hero with Call to order button and live opening status" },
    accent: "bg-brand-orange",
  },
  {
    title: "Job Market Data Pipeline",
    tag: "Python · LLM agents",
    problem: "Job boards are full of stale and ghost listings, and checking each employer's visa sponsorship by hand doesn't scale.",
    built: "A Python pipeline that polls public Greenhouse, Lever and Ashby APIs across 60+ companies, deduplicates and filters postings, and enriches employers with UK Home Office sponsor-register data. A scheduled cloud LLM agent scores the shortlist and emails a digest. Built with AI-assisted development, human in the loop.",
    result: "~11,000 postings per run reduced to a scored shortlist, twice a day, with no manual searching.",
    stack: ["Python", "REST APIs", "LLM agents", "Gmail API", "Cron"],
    links: [],
    note: "Private repo · walkthrough on request",
    terminal: [
      "$ python scripts/scan_jobs.py",
      "fetched 11,299 postings from 68 sources",
      "shortlisted 152 → data/candidates/…json",
      "[UK] Granola | Product Engineer | sponsor: yes",
      "[UK] Deliveroo | Insights Associate | sponsor: yes",
    ],
    accent: "bg-brand-purple",
  },
  {
    title: "Praj Travels",
    tag: "Concept site · live",
    problem: "South Asian weekend-trip organisers in the UK need a way to show their trips online and win trust.",
    built: "A demo website for a weekend-trips business, taken from design to deployment: trip listings, gallery, about and contact pages.",
    result: "Live on Vercel as a pitch piece for travel businesses.",
    stack: ["Web", "Responsive design", "Vercel"],
    links: [{ label: "Live site", href: "https://desi-travellers.vercel.app/" }],
    image: { src: "/projects/praj-travels.webp", alt: "Praj Travels homepage: Trips that feel like home" },
    accent: "bg-brand-yellow",
  },
  {
    title: "Cypress + Next.js",
    tag: "Testing",
    problem: "UI regressions slip through when a Next.js app has no end-to-end tests.",
    built: "A Next.js project demonstrating end-to-end and component testing with Cypress — the approach I used in production at SCALA.",
    result: "Written up on Medium as a guide to E2E and component testing with Cypress.",
    stack: ["Cypress", "Next.js", "TypeScript"],
    links: [{ label: "Code", href: "https://github.com/Prajeet7x/cypress-next" }],
    terminal: [
      "$ npx cypress run",
      "Running: app.cy.ts",
      "  Navigation",
      "    ✓ should navigate to the about page",
    ],
    accent: "bg-brand-pink",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">
      <div className="fade-up mb-12 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">
            What I&apos;ve built
          </p>
          <h2
            className="font-syne font-extrabold tracking-tighter leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Projects
          </h2>
        </div>
        <Link
          href="https://github.com/Prajeet7x?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center min-h-[44px] text-sm font-medium text-[#1f5fc4] dark:text-brand-blue hover:underline"
        >
          More on GitHub →
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className={`fade-up delay-${(i % 2) + 1} flex flex-col bg-cream border-[1.5px] border-ink/10 rounded-2xl overflow-hidden hover:border-ink/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-200`}
          >
            <Visual project={p} />

            <div className="flex flex-col flex-1 p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className={`w-2.5 h-2.5 rounded-full ${p.accent}`} />
                <span className="text-xs font-medium uppercase tracking-widest text-ink/60">{p.tag}</span>
              </div>
              <h3 className="font-syne font-bold text-lg mb-3">{p.title}</h3>

              <dl className="space-y-2 text-sm leading-relaxed mb-4">
                <Row label="Problem" text={p.problem} />
                <Row label="Built" text={p.built} />
                <Row label="Result" text={p.result} />
              </dl>

              <div className="flex flex-wrap gap-2 mb-5">
                {p.stack.map((s) => (
                  <span key={s} className="text-xs px-3 py-1 rounded-full border border-ink/15 text-ink/70">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-1">
                {p.note && <span className="text-xs text-ink/60">{p.note}</span>}
                {p.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center min-h-[44px] text-sm font-medium text-[#1f5fc4] dark:text-brand-blue hover:underline"
                  >
                    {l.label} →
                  </Link>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Row({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <dt className="inline font-semibold text-ink">{label}: </dt>
      <dd className="inline text-ink/75">{text}</dd>
    </div>
  );
}

function Visual({ project: p }: { project: Project }) {
  if (p.image) {
    return (
      <div className="relative aspect-video bg-ink/5 border-b border-ink/10">
        <Image src={p.image.src} alt={p.image.alt} fill sizes="(min-width: 768px) 460px, 100vw" className="object-cover object-top" />
      </div>
    );
  }
  if (p.terminal) {
    return <TypingTerminal lines={p.terminal} />;
  }
  return null;
}
