"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectFilter from "./project-filter";
import FeaturedProject from "./featured-project";
import ProjectCard from "./project-card";

export default function Portfolio() {
  const [category, setCategory] = useState("All");

  const featured = projects.find(
    (project) => project.featured
  );

  const filteredProjects =
    category === "All"
      ? projects.filter((project) => !project.featured)
      : projects.filter(
        (project) =>
          project.category === category &&
          !project.featured
      );

  return (
    <section id="portfolio" className="py-32">
      <div className="mx-auto max-w-7xl px-6">
        <span className="text-sm uppercase tracking-[0.4em] text-blue-500">
          Selected Work
        </span>

        <h2 className="mt-6 text-5xl font-bold md:text-7xl">
          Building products
          <br />
          that solve real problems.
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          We create digital experiences combining strategy,
          design, and engineering to help ideas become
          successful products.
        </p>

        <ProjectFilter
          active={category}
          setActive={setCategory}
        />

        {category === "All" && featured && (
          <div className="mt-20">
            <FeaturedProject project={featured} />
          </div>
        )}

        <motion.div
          layout
          className="mt-12 grid gap-8 lg:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.4,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
