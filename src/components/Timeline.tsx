"use client";

import { useEffect, useRef } from "react";

export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  desc: string;
  color: string; // hex, used for the dot and its glow
}

// Career timeline whose line "fills in" with a glowing gradient as you scroll,
// lighting each role's dot as the glow reaches it. With reduced motion the line
// is shown fully lit and nothing moves.
export default function Timeline({ items }: { items: TimelineItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    const head = headRef.current;
    if (!wrap || !fill || !head) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const rect = wrap.getBoundingClientRect();
      // The glow's tip sits 60% of the way down the screen.
      const tip = window.innerHeight * 0.6 - rect.top;
      const progress = reduce.matches ? 1 : Math.min(1, Math.max(0, tip / rect.height));
      const px = progress * rect.height;

      fill.style.clipPath = `inset(0 0 ${(1 - progress) * 100}% 0)`;
      head.style.transform = `translateY(${px}px)`;
      head.style.opacity = progress > 0 && progress < 1 ? "1" : "0";

      itemRefs.current.forEach((el) => {
        if (!el) return;
        const dotY = el.offsetTop + 12; // roughly where the dot sits in the card
        el.dataset.lit = px >= dotY ? "true" : "false";
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    reduce.addEventListener("change", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      reduce.removeEventListener("change", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative pl-8">
      {/* Unlit track */}
      <div className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full bg-ink/10" aria-hidden />
      {/* Lit gradient, revealed from the top as you scroll */}
      <div
        ref={fillRef}
        className="absolute left-0 top-2 bottom-2 w-0.5 rounded-full timeline-line timeline-glow"
        style={{ clipPath: "inset(0 0 0 0)" }}
        aria-hidden
      />
      {/* Bright head that rides the tip of the glow */}
      <div
        ref={headRef}
        className="timeline-head absolute left-[1px] top-2 w-2.5 h-2.5 -ml-[5px] -mt-[5px] rounded-full pointer-events-none"
        style={{ opacity: 0 }}
        aria-hidden
      />

      {items.map((exp, i) => (
        <div
          key={exp.role}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          data-lit="true"
          className={`timeline-item fade-up delay-${i + 1} relative mb-10 last:mb-0`}
          style={{ "--dot": exp.color } as React.CSSProperties}
        >
          <div
            className="timeline-dot absolute -left-[2.45rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-cream"
            aria-hidden
          />

          <div className="timeline-card bg-cream border-[1.5px] border-ink/10 rounded-2xl p-6">
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
  );
}
