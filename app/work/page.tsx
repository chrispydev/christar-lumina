import Portfolio from "@/components/porfolio";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Christar Lumina",
  description:
    "Selected web applications, corporate sites and digital products built by Christar Lumina - from requirement to deployment.",
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen bg-[#030303] text-white">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-[-340px] h-[720px] w-[1040px] -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,.12),transparent_70%)]" />
      </div>

      <div className="relative">
        <Portfolio />
      </div>
    </main>
  );
}
