import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="#contact"
        className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-700"
      >
        Start a Project
        <ArrowRight className="transition group-hover:translate-x-1" size={18} />
      </Link>

      <Link
        href="#portfolio"
        className="rounded-full border border-white/10 px-7 py-4 transition hover:border-blue-500 hover:bg-white/5"
      >
        View Our Work
      </Link>
    </div>
  );
}
