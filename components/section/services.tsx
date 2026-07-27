"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Database,
  Bot,
} from "lucide-react";
import { fadeUp, staggerContainer } from "@/styles/animations";

const services = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "We build fast, scalable, and modern web applications that deliver exceptional user experiences.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description:
      "We create powerful mobile experiences that help businesses connect with their customers anywhere.",
    technologies: [
      "React Native",
      "Flutter",
      "Mobile APIs",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "We design intuitive digital experiences focused on usability, aesthetics, and user satisfaction.",
    technologies: [
      "Figma",
      "Design Systems",
      "Prototyping",
    ],
  },
  {
    icon: Database,
    title: "Data Science",
    description:
      "We transform data into meaningful insights through analytics, visualization, and intelligent solutions.",
    technologies: [
      "Python",
      "Machine Learning",
      "Analytics",
    ],
  },
  {
    icon: Bot,
    title: "Automation Solutions",
    description:
      "We automate repetitive processes and build smart systems that improve efficiency and productivity.",
    technologies: [
      "AI",
      "APIs",
      "Workflow Automation",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-blue-500">
            What We Do
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight md:text-7xl">
            Building digital
            <br />
            solutions that matter.
          </h2>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            We combine creativity, engineering, and emerging
            technologies to create solutions that help businesses
            grow and operate smarter.
          </p>
        </motion.div>


        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid gap-8 md:grid-cols-2"
        >
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-500 hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/10"
              >
                <div className="flex items-center justify-between">
                  <Icon
                    size={42}
                    className="text-blue-500 transition duration-500 group-hover:scale-110"
                  />

                  <span className="text-sm text-gray-600">
                    0{services.indexOf(service) + 1}
                  </span>
                </div>


                <h3 className="mt-8 text-3xl font-semibold">
                  {service.title}
                </h3>


                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>


                <div className="mt-8 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-sm text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
