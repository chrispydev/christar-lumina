"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden px-6"
    >
      {/* background glow */}
      <motion.div
        animate={{
          x: [-100, 100, -100],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
        className="absolute w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"
      />

      <div className="relative max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-blue-400 uppercase tracking-[0.4em] text-sm mb-8"
        >
          Technology Studio
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-bold leading-[0.9]"
        >
          Turning <br />
          <span className="bg-gradient-to-r from-white via-white to-blue-500 bg-clip-text text-transparent">
            Ideas Into Reality
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto mt-10 text-lg md:text-xl text-gray-400"
        >
          We create innovative digital solutions through web development, mobile
          applications, UI/UX design, data science, and automation.
        </motion.p>

        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          <button className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold">
            Start Your Project
          </button>
          <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
            Explore Work
          </button>
        </div>
      </div>
    </section>
  );
}
