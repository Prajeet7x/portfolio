"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape, and if the screen grows past the breakpoint.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const mq = window.matchMedia("(min-width: 768px)");
    const onMq = () => mq.matches && setOpen(false);
    window.addEventListener("keydown", onKey);
    mq.addEventListener("change", onMq);
    return () => {
      window.removeEventListener("keydown", onKey);
      mq.removeEventListener("change", onMq);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <nav
      aria-label="Main"
      className={`fixed top-0 left-0 right-0 z-50 px-6 sm:px-10 py-4 transition-all duration-300 ${
        solid
          ? "bg-cream/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <Link
          href="#top"
          onClick={() => setOpen(false)}
          aria-label="Back to top"
          className="font-syne font-extrabold text-lg tracking-tight py-2"
        >
          PKT<span className="text-brand-blue">.</span>
        </Link>

        <div className="flex items-center gap-3 md:gap-6">
          <ul className="hidden md:flex gap-8 list-none">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="inline-flex items-center min-h-[44px] text-xs font-medium uppercase tracking-widest text-ink hover:text-brand-blue transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border-[1.5px] border-ink/20 hover:border-ink/50 text-ink transition-colors duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
              {open ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="7" x2="20" y2="7" />
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="17" x2="20" y2="17" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <ul
        id="mobile-menu"
        hidden={!open}
        className="md:hidden list-none mt-3 pb-2 border-t border-ink/10"
      >
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              onClick={() => setOpen(false)}
              className="flex items-center min-h-[48px] text-sm font-medium uppercase tracking-widest text-ink hover:text-brand-blue transition-colors duration-200 border-b border-ink/5"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
