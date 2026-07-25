"use client";

import { motion } from "framer-motion";
import { Code2, Rocket, Lightbulb, Sparkles } from "lucide-react";

const stats = [
  { number: "5+", label: "Technology Areas" },
  { number: "10+", label: "Projects Built" },
  { number: "100%", label: "Commitment" },
];

const principles = [
  { icon: Lightbulb, title: "Ideas", text: "Every great solution starts with a vision." },
  { icon: Code2, title: "Technology", text: "We use modern tools to build powerful digital experiences." },
  { icon: Rocket, title: "Impact", text: "We create solutions that solve real problems." },
  { icon: Sparkles, title: "Excellence", text: "We pursue quality in everything we deliver." },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-32 px-6 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 uppercase tracking-[0.4em] text-sm mb-6">
            Who We Are
          </p>
          <h2 className="text-5xl md:text-7xl font-bold max-w-5xl leading-tight">
            We don't just build <br />
            <span className="text-blue-500">software.</span> <br />
            We transform ideas into reality.
          </h2>
        </motion.div>

        {/* Story */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-400 text-lg leading-relaxed">
              Christar Lumina is a technology company dedicated to transforming
              ideas into reality through innovative digital solutions.
            </p>
            <p className="mt-6 text-gray-400 text-lg leading-relaxed">
              We specialize in web development, mobile applications, UI/UX
              design, data science, and automation solutions. Our goal is to
              help individuals, businesses, and organizations bring their
              visions to life through technology.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
              >
                <h3 className="text-4xl font-bold text-blue-500">{stat.number}</h3>
                <p className="mt-3 text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Principles */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                whileHover={{ y: -10 }}
                className="border border-white/10 bg-white/5 rounded-3xl p-7 transition"
              >
                <Icon className="text-blue-500 mb-5" size={35} />
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
