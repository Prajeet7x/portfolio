import Link from "next/link";
import CopyEmail from "./CopyEmail";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 sm:px-10 pb-24">
      <div className="fade-up bg-brand-yellow text-[#0d0d0d] rounded-3xl p-8 sm:p-16 text-center">
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Let&apos;s build something together.
        </h2>
        <p className="text-[#0d0d0d]/70 text-base mb-8 max-w-md mx-auto">
          Open to software engineering, data and AI roles in the UK. I&apos;d
          love to hear what you&apos;re building.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="mailto:prajeet.thakur20@gmail.com"
            className="inline-flex items-center gap-2 bg-[#0d0d0d] text-[#faf8f3] px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-blue transition-colors duration-200"
          >
            ✉ Email me
          </Link>
          <Link
            href="https://www.linkedin.com/in/prajeet-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-[#0d0d0d] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0d0d0d] hover:text-[#faf8f3] transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Prajeet7x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-[#0d0d0d] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0d0d0d] hover:text-[#faf8f3] transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://medium.com/@prajeet.thakur20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-[#0d0d0d] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#0d0d0d] hover:text-[#faf8f3] transition-colors duration-200"
          >
            Medium
          </Link>
        </div>

        <CopyEmail />
      </div>
    </section>
  );
}
