import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Home() {
  return (
    <main>
      {/* Background blobs */}
      <div
        className="blob w-[420px] h-[420px] top-[-100px] right-[-80px]"
        style={{ background: "#f5c842" }}
      />
      <div
        className="blob w-[320px] h-[320px] bottom-[10%] left-[-100px]"
        style={{ background: "#e83e8c" }}
      />
      <div
        className="blob w-[260px] h-[260px] top-[40%] right-[5%]"
        style={{ background: "#1abcaa" }}
      />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Articles />
      <Contact />
      <Footer />

      {/* Client component that handles scroll-reveal logic */}
      <ScrollReveal />
    </main>
  );
}
