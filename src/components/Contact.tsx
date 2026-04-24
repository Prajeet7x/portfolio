import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-10 pb-24">
      <div className="fade-up bg-brand-yellow rounded-3xl p-16 text-center">
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
        >
          Let&apos;s build something together.
        </h2>
        <p className="text-ink/60 text-base mb-8 max-w-md mx-auto">
          Whether it&apos;s a data project, a frontend build, or a voice job —
          I&apos;m open to conversations.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="mailto:prajeet.thakur20@gmail.com"
            className="inline-flex items-center gap-2 bg-ink text-cream px-6 py-3 rounded-full text-sm font-medium hover:bg-brand-orange transition-colors duration-200"
          >
            ✉ Email me
          </Link>
          <Link
            href="https://www.linkedin.com/in/prajeet-kumar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-ink text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors duration-200"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Prajeet7x"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-ink text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors duration-200"
          >
            GitHub
          </Link>
          <Link
            href="https://medium.com/@prajeet.thakur20"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-[1.5px] border-ink text-ink px-6 py-3 rounded-full text-sm font-medium hover:bg-ink hover:text-cream transition-colors duration-200"
          >
            Medium
          </Link>
        </div>
      </div>
    </section>
  );
}
