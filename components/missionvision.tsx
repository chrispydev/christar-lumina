"use client";

import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Mission",
    description:
      "Our mission is to empower individuals and organizations by transforming innovative ideas into meaningful digital solutions through creativity, excellence, integrity, and faith-driven values.",
  },
  {
    title: "Our Vision",
    description:
      "To become a leading technology company recognized for creating innovative digital solutions that inspire growth, improve lives, and shape the future through excellence and integrity.",
  },
];

export default function MissionVision() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-blue-500/50 transition"
          >
            <h3 className="text-3xl font-bold mb-5 text-blue-500">
              {card.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
