import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="w-full min-w-0">
        <div className="flex w-full min-w-0 flex-col gap-16 pb-16 md:gap-24 md:pb-24">
          <Hero />
          <About />
          <Experience />
          <Projects/>
          <Skills />
        </div>
      </main>
    </>
  );
}
