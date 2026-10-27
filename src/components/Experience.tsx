const experiences = [
  {
    role: "Freelance Web Developer",
    company: "Self-employed · Birmingham, UK 🇬🇧",
    period: "2025 – Present",
    desc: "Design and build responsive websites for small businesses, working with marketing partner The Social Signal on client delivery from brief to launch. Built and deployed a travel website end to end, covering design, development and deployment.",
    dot: "bg-brand-yellow",
  },
  {
    role: "Business Analyst",
    company: "BUY ME ONCE · London, UK 🇬🇧",
    period: "Apr 2025 – Aug 2025",
    desc: "Analysed Google Analytics and Shopify datasets (50K+ user sessions) to identify optimisation opportunities, contributing to a 15% increase in conversion rates. Used Python and SQL to analyse 10K+ customer records, generating insights for customer segmentation and product performance improvements.",
    dot: "bg-brand-teal",
  },
  {
    role: "Associate Software Engineer",
    company: "SCALA Inc. · Remote, Kathmandu, Nepal",
    period: "Dec 2022 – Jun 2024",
    desc: "Built backend and frontend features across 5 production applications, integrating MySQL with a Golang backend serving a Next.js and TypeScript frontend. Integrated 20+ REST API endpoints via 8 reusable React Query hooks, cutting redundant API calls by 40%. Translated Figma designs into responsive interfaces with TailwindCSS (25% faster UI delivery), wrote Cypress end-to-end tests and shipped through GitHub Actions CI/CD: 2,500+ commits and 200+ pull request reviews in an Agile team.",
    dot: "bg-brand-blue",
  },
  {
    role: "Voice-over Artist",
    company: "Innovate Tech · Kathmandu, Nepal",
    period: "Apr 2021 – Dec 2022",
    desc: "Recorded 100+ lesson scripts for the online education platform \"My Second Teacher\".",
    dot: "bg-brand-pink",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-6 sm:px-10 py-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/60 mb-2">
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
              <p className="text-sm text-ink/60 mb-3">{exp.company}</p>
              <p className="text-sm text-ink/75 leading-relaxed">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
