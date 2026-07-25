"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}
        className="w-20 h-20 rounded-full bg-blue-500 blur-xl"
      />
    </div>
  );
}
