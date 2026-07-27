import HeroButtons from "./hero-buttons";

export default function HeroContent() {
  return (
    <div className="max-w-4xl">
      <span className="text-sm uppercase tracking-[0.4em] text-blue-500">
        Technology Studio
      </span>

      <h1 className="mt-8 text-6xl font-bold leading-[0.9] tracking-[-0.05em] md:text-8xl">
        Engineering
        <br />
        digital products
        <br />
        that turn ideas
        <br />
        into reality.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
        Christar Lumina builds modern websites, mobile applications,
        automation systems, UI/UX experiences, and intelligent software
        solutions for businesses and organizations.
      </p>

      <HeroButtons />
    </div>
  );
}
