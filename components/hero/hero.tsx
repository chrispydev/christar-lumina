import HeroBackground from "./hero-background";
import HeroContent from "./hero-content";
import ScrollIndicator from "./scroll-indicator";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 overflow-hidden">

      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}
