"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Main Blue Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-150px]
          left-1/2
          -translate-x-1/2
          h-[600px]
          w-[600px]
          rounded-full
          bg-blue-600/30
          blur-[160px]
        "
      />

      {/* Secondary Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-150px]
          top-[200px]
          h-[500px]
          w-[500px]
          rounded-full
          bg-indigo-500/20
          blur-[140px]
        "
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-200px]
          left-[-100px]
          h-[450px]
          w-[450px]
          rounded-full
          bg-cyan-500/10
          blur-[130px]
        "
      />

      {/* Grid Pattern */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030303]/40 to-[#030303]" />
    </div>
  );
}
