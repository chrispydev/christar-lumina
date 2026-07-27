import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero/hero";
// import Hero from "@/components/hero";
import PortfolioPreview from "@/components/portfolio/portfolio-preview";
import Services from "@/components/section/services";
import TechnologyStrip from "@/components/section/technology-strip";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechnologyStrip />
      <About />
      <Services />
      <PortfolioPreview />
      <Contact />
      <Footer />
    </main>
  );
}
