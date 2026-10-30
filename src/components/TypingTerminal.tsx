"use client";

import { useEffect, useRef, useState } from "react";

// Terminal card that "runs" when it scrolls into view: command lines ($ ...)
// type out character by character, output lines appear one after another.
// Server render and reduced-motion users get the finished output straight away.
export default function TypingTerminal({ lines }: { lines: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState<string[]>(lines);

  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((r) => {
        timers.push(setTimeout(r, ms));
      });

    async function play() {
      const out: string[] = [];
      for (const line of lines) {
        if (cancelled) return;
        if (line.startsWith("$")) {
          out.push("");
          for (let c = 1; c <= line.length; c++) {
            if (cancelled) return;
            out[out.length - 1] = line.slice(0, c);
            setShown([...out]);
            await wait(38);
          }
          await wait(450); // the command "runs"
        } else {
          out.push(line);
          setShown([...out]);
          await wait(260);
        }
      }
    }

    setShown([]);
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          io.disconnect();
          play();
        }
      },
      { threshold: 0.5 }
    );
    io.observe(el);

    return () => {
      cancelled = true;
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [lines]);

  return (
    <div
      ref={ref}
      className="aspect-video bg-[#0d0d0d] border-b border-ink/10 p-5 font-mono text-[12px] sm:text-[13px] leading-relaxed overflow-hidden"
      aria-hidden
    >
      <div className="flex gap-1.5 mb-4">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      {shown.map((line, i) => (
        <p key={i} className={`${line.startsWith("$") ? "text-[#f5c842]" : "text-[#d8d5cd]"}`}>
          {line}
          {i === shown.length - 1 && <span className="term-caret" />}
        </p>
      ))}
      {shown.length === 0 && <span className="term-caret" />}
    </div>
  );
}
