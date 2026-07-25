"use client";

import {
  Heart,
  ShieldCheck,
  Lightbulb,
  Rocket,
  Users,
  TrendingUp
} from "lucide-react";

import { motion } from "framer-motion";

const values = [
  {
    icon: Heart,
    title: "Faith",
    text: "We use our talents and abilities responsibly to create solutions that positively impact lives."
  },
  {
    icon: Rocket,
    title: "Excellence",
    text: "We pursue quality and deliver technology solutions that exceed expectations."
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    text: "We operate with honesty, transparency, and strong ethical principles."
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    text: "We embrace creativity and explore better ways to solve problems."
  },
  {
    icon: Users,
    title: "Service",
    text: "We prioritize understanding people's needs and creating valuable solutions."
  },
  {
    icon: TrendingUp,
    title: "Growth",
    text: "We continuously learn, improve, and adapt to emerging technologies."
  }
];

export default function Values() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-12">
          Our Core <span className="text-blue-500">Values</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition"
              >
                <Icon className="text-blue-500 mb-5" size={40} />
                <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
