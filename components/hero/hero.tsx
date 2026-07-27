import HeroBackground from "./hero-background";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <HeroContent />
      </div>

      <ScrollIndicator />
    </section>
  );
}
