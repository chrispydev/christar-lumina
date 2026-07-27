"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/styles/animations";

const values = [
  {
    icon: Sparkles,
    title: "Innovation",
    description:
      "We embrace creativity and emerging technologies to build meaningful digital solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Excellence",
    description:
      "Every solution is crafted with precision, quality, and attention to detail.",
  },
  {
    icon: HeartHandshake,
    title: "Integrity",
    description:
      "We build trust through honesty, transparency, and Christian principles.",
  },
];

const reasons = [
  "Modern technologies and best practices",
  "Scalable and future-ready solutions",
  "Clean UI/UX with exceptional performance",
  "Reliable support and long-term partnership",
];

export default function About() {
  return (
    <section id="about" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-blue-500">
            Who We Are
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Engineering technology
            <br />
            with purpose.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Christar Lumina is a technology company dedicated to transforming
            ideas into reality through innovative digital solutions. We help
            businesses, organizations, and individuals build modern websites,
            mobile applications, intelligent automation systems, and
            data-driven solutions that create measurable impact.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 rounded-3xl border border-white/10 bg-gradient-to-br from-blue-600/10 to-transparent p-10 md:p-14"
        >
          <div className="flex items-center gap-4">
            <Target className="text-blue-500" size={34} />

            <h3 className="text-3xl font-bold md:text-4xl">
              Our Mission
            </h3>
          </div>

          <p className="mt-8 max-w-4xl text-xl leading-9 text-gray-300">
            To transform ideas into impactful digital solutions through
            innovation, excellence, and technology that empowers people,
            businesses, and communities to achieve more.
          </p>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid gap-8 md:grid-cols-3"
        >
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <motion.div
                key={value.title}
                variants={fadeUp}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/40"
              >
                <Icon
                  size={36}
                  className="mb-6 text-blue-500 transition group-hover:scale-110"
                />

                <h3 className="text-2xl font-semibold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {value.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Why Choose Us */}
        <div className="mt-24 grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <span className="text-sm uppercase tracking-[0.4em] text-blue-500">
              Why Choose Us
            </span>

            <h3 className="mt-6 text-4xl font-bold md:text-5xl">
              Technology built
              <br />
              for lasting impact.
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              We don't just build software. We partner with our clients to
              understand their goals, solve real problems, and create digital
              products that continue delivering value long after launch.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-5"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason}
                variants={fadeUp}
                className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <CheckCircle2
                  className="text-blue-500"
                  size={24}
                />

                <span className="text-lg">{reason}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 grid grid-cols-2 gap-10 border-t border-white/10 pt-14 md:grid-cols-4"
        >
          <Stat number="5+" label="Core Services" />
          <Stat number="100%" label="Commitment" />
          <Stat number="24/7" label="Support" />
          <Stat number="∞" label="Innovation" />
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-start justify-between gap-8 rounded-3xl border border-white/10 bg-white/5 p-10 md:flex-row md:items-center"
        >
          <div>
            <h3 className="text-3xl font-bold">
              Ready to build something amazing?
            </h3>

            <p className="mt-3 text-gray-400">
              Let's transform your vision into a powerful digital product.
            </p>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
          >
            Start Your Project

            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

type StatProps = {
  number: string;
  label: string;
};

function Stat({ number, label }: StatProps) {
  return (
    <div className="text-center">
      <h3 className="text-5xl font-bold text-blue-500">
        {number}
      </h3>

      <p className="mt-3 text-sm uppercase tracking-[0.3em] text-gray-500">
        {label}
      </p>
    </div>
  );
}
