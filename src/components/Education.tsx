export default function Education() {
  return (
    <section className="max-w-5xl mx-auto px-10 pb-24">
      <div className="fade-up mb-12">
        <p className="text-xs font-medium uppercase tracking-widest text-ink/40 mb-2">
          Education
        </p>
        <h2
          className="font-syne font-extrabold tracking-tighter leading-tight"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
        >
          Academic background
        </h2>
      </div>

      <div className="fade-up delay-1 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* MSc Card */}
        <div className="relative overflow-hidden rounded-3xl p-10 text-white"
             style={{ background: "linear-gradient(135deg, #7c4dff 0%, #2d7ef7 100%)" }}>
          <span
            className="absolute right-8 top-1/2 -translate-y-1/2 font-syne font-extrabold select-none pointer-events-none"
            style={{ fontSize: "5rem", opacity: 0.12, letterSpacing: "-3px" }}
          >
            MSc
          </span>

          <h3 className="font-syne font-extrabold text-2xl mb-1">
            MSc Business Analytics
          </h3>
          <p className="text-white/75 text-base mb-1">
            Aston University, Birmingham, United Kingdom 🇬🇧
          </p>
          <p className="text-white/50 text-sm mb-4">
            International Student · Graduated 2024
          </p>
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full">
            📊 Data · Strategy · Analytics
          </span>
        </div>

        {/* BSc Card */}
        <div className="relative overflow-hidden rounded-3xl p-10 text-white"
             style={{ background: "linear-gradient(135deg, #0f9b58 0%, #00c9a7 100%)" }}>
          <span
            className="absolute right-8 top-1/2 -translate-y-1/2 font-syne font-extrabold select-none pointer-events-none"
            style={{ fontSize: "5rem", opacity: 0.12, letterSpacing: "-3px" }}
          >
            BSc
          </span>

          <h3 className="font-syne font-extrabold text-2xl mb-1">
            BSc (Hons) Computing
          </h3>
          <p className="text-white/75 text-base mb-1">
            London Metropolitan University, Islington College 🇬🇧
          </p>
          <p className="text-white/50 text-sm mb-4">
            First Class Honours
          </p>
          <span className="inline-block bg-white/20 border border-white/30 text-white text-xs font-medium px-4 py-1.5 rounded-full">
            💻 Computing · Software · Technology
          </span>
        </div>
      </div>
    </section>
  );
}
