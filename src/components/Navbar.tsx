"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-ink/10"
          : "bg-transparent"
      }`}
    >
      <span className="font-syne font-extrabold text-lg tracking-tight">
        PKT<span className="text-brand-blue">.</span>
      </span>

      <div className="flex items-center gap-6">
        <ul className="flex gap-8 list-none">
          {[
            { label: "About",      href: "#about"      },
            { label: "Skills",     href: "#skills"     },
            { label: "Experience", href: "#experience" },
            { label: "Contact",    href: "#contact"    },
          ].map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-xs font-medium uppercase tracking-widest text-ink hover:text-brand-blue transition-colors duration-200"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </nav>
  );
}
