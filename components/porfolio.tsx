"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Hostel Airbnb Platform",
    category: "Web Application",
    description: "A modern accommodation platform designed to connect property owners and users through a seamless digital booking experience.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    image: "/projects/hostel-airbnb.png",
    link: "#"
  },
  {
    number: "02",
    title: "AESL Website Redesign",
    category: "Corporate Website",
    description: "A modern company website redesigned to improve user experience, performance, and digital presence.",
    technologies: ["Django", "Python", "JavaScript"],
    image: "/projects/aesl.png",
    link: "#"
  },
  {
    number: "03",
    title: "Church Digital Management System",
    category: "Digital Solution",
    description: "A digital platform created to streamline church activities, records management, and administrative processes.",
    technologies: ["React", "Database", "Cloud"],
    image: "/projects/church.png",
    link: "#"
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-blue-500 uppercase tracking-[0.4em] text-sm mb-6">
            Selected Work
          </p>
          <h2 className="text-5xl md:text-7xl font-bold">
            Projects That <br />
            Bring Ideas To Life
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="mt-20 space-y-20">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="group grid lg:grid-cols-2 gap-10 items-center"
            >
              {/* Image */}
              <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                <div className="absolute inset-0 bg-blue-600/10 group-hover:bg-blue-600/20 transition" />
                <div className="h-full flex items-center justify-center text-gray-500">
                  Project Preview
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-blue-500 text-xl font-bold">{project.number}</p>
                <p className="mt-3 text-gray-400">{project.category}</p>
                <h3 className="mt-4 text-4xl font-bold">{project.title}</h3>
                <p className="mt-5 text-gray-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map(item => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 group-hover:border-blue-500/50 transition"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <button className="mt-8 flex items-center gap-3 text-white hover:text-blue-500 transition">
                  View Case Study
                  <ArrowUpRight size={20} />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
