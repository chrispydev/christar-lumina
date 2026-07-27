"use client";

import { motion } from "framer-motion";

export default function HeroGlow() {
  return (
    <motion.div
      animate={{
        x: [-80, 80, -80],
        y: [-40, 40, -40],
      }}
      transition={{
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[180px]"
    />
  );
}
