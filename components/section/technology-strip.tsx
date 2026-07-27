"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "Django",
  "PostgreSQL",
  "Sanity",
  "Vercel",
];

export default function TechnologyStrip() {
  return (
    <section className="border-y border-white/10 py-10 overflow-hidden">
      <div className="mb-8 text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-500">
          Technologies We Use
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex shrink-0 gap-16 whitespace-nowrap"
        >
          {[...technologies, ...technologies].map(
            (tech, index) => (
              <span
                key={index}
                className="text-xl md:text-3xl font-semibold tracking-tight text-white/70 transition hover:text-blue-500"
              >
                {tech}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
