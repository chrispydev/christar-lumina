"use client";

import { motion } from "framer-motion";
import { Code2, Smartphone, Palette, Database, Bot } from "lucide-react";

const services = [
  {
    number: "01",
    icon: Code2,
    title: "Web Development",
    description: "We build modern, scalable, and high-performance websites that help businesses establish a powerful digital presence.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Applications",
    description: "We create intuitive mobile applications designed to solve real-world problems and deliver exceptional user experiences.",
    tags: ["Android", "iOS", "Cross Platform"]
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description: "We design beautiful and functional digital experiences focused on usability, creativity, and user satisfaction.",
    tags: ["Figma", "Prototyping", "Design Systems"]
  },
  {
    number: "04",
    icon: Database,
    title: "Data Science",
    description: "We transform complex data into meaningful insights through analysis, visualization, and intelligent solutions.",
    tags: ["Analytics", "Machine Learning", "Data Visualization"]
  },
  {
    number: "05",
    icon: Bot,
    title: "Automation Solutions",
    description: "We develop intelligent automation systems that improve productivity and optimize business processes.",
    tags: ["Automation", "APIs", "Workflow Systems"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 uppercase tracking-[0.4em] text-sm mb-6">
            What We Do
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Digital Solutions <br />
            That Create Impact
          </h2>
        </motion.div>

        {/* Services */}
        <div className="mt-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group border-t border-white/10 py-10 grid md:grid-cols-12 gap-6 items-center hover:border-blue-500/50 transition"
              >
                {/* Number */}
                <div className="md:col-span-2">
                  <span className="text-blue-500 text-3xl font-bold">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="md:col-span-4 flex items-center gap-4">
                  <Icon
                    size={35}
                    className="text-white group-hover:text-blue-500 transition"
                  />
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                </div>

                {/* Description */}
                <div className="md:col-span-6">
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-4 py-1 rounded-full border border-white/10 text-sm text-gray-400 group-hover:border-blue-500/40 transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
