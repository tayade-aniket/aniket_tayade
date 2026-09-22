import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SectionMorphDivider from "@/components/ui/SectionMorphDivider";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-[#F8F7F4]">
      {/* Ambient light orbs — warm tints, not dark blobs */}
      <div className="fixed top-1/4 -left-40 w-80 h-80 bg-[#B8860B]/6 rounded-full blur-[80px] pointer-events-none morph-blob -z-20" />
      <div className="fixed top-3/4 -right-40 w-80 h-80 bg-slate-300/30 rounded-full blur-[80px] pointer-events-none morph-blob -z-20" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#F5EDD0]/40 rounded-full blur-[100px] pointer-events-none morph-blob -z-20" />

      {/* ─── Sections ─── */}
      <Hero />

      {/* Hero → About */}
      <SectionMorphDivider variant="a" />

      <About />

      {/* About → Experience */}
      <SectionMorphDivider variant="b" flip />

      <Experience />

      {/* Experience → Skills */}
      <SectionMorphDivider variant="c" />

      <Skills />

      {/* Skills → Projects */}
      <SectionMorphDivider variant="d" flip />

      <Projects />

      {/* Projects → Contact */}
      <SectionMorphDivider variant="e" />

      <Contact />

      {/* Contact → Footer */}
      <SectionMorphDivider variant="a" flip />

      <Footer />
    </main>
  );
}
