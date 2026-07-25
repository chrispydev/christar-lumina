import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import MissionVision from "@/components/missionvision";
import Portfolio from "@/components/porfolio";
import Services from "@/components/service";
import Values from "@/components/value";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <MissionVision />
      <Values />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
