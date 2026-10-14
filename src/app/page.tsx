import { Background } from "@/components/background";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/sections/hero";
import { Manifesto } from "@/components/sections/manifesto";
import { About } from "@/components/sections/about";
import { Brands } from "@/components/sections/brands";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { Services } from "@/components/sections/services";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main id="main">
        <Hero />
        <Manifesto />
        <Brands />
        <Projects />
        <Services />
        <Experience />
        <Skills />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
