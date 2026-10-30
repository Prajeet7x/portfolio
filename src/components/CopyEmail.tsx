"use client";

import { useState } from "react";

const EMAIL = "prajeet.thakur20@gmail.com";

// Shows the address as text with a copy button, for visitors whose
// mailto: links don't open anything (webmail, work laptops).
export default function CopyEmail() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked: the address is still visible to select by hand.
    }
  }

  return (
    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-sm text-[#0d0d0d]/75">
      <span className="select-all">{EMAIL}</span>
      <button
        type="button"
        onClick={copy}
        className="inline-flex items-center min-h-[44px] px-3 rounded-full font-medium text-[#0d0d0d] underline underline-offset-4 hover:no-underline"
      >
        {copied ? "Copied ✓" : "Copy"}
      </button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </div>
  );
}
