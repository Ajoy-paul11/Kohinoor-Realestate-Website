import Image from "next/image";
import Hero from "./components/Hero";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";
import Experience from "./components/Experience";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <Aboutus />
      <Projects />
      <Services />
      <WhyChooseUs />
      <Experience />
      <FAQ />
      <Contact />
    </main>
  );
}
