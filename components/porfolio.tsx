"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch('/api/projects');
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <section id="portfolio" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-gray-400">Loading projects...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-500 uppercase tracking-[0.3em] text-xs font-semibold">
            Selected Work
          </p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Projects That Bring Ideas To Life
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const image = project.images?.[0];
            return (
              <motion.article
                key={project._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${project.slug.current}`}>
                  {/* Image */}
                  <div className="relative h-[240px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {image ? (
                      <Image
                        src={urlFor(image).width(600).height(400).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="h-full flex items-center justify-center text-gray-500 text-sm">
                        No Image
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  </div>

                  {/* Content */}
                  <div className="mt-5">
                    <p className="text-blue-500 text-xs font-medium uppercase tracking-wide">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-lg font-bold text-white line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-sm line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-blue-500 text-sm font-medium group-hover:gap-3 transition-all">
                      View Project
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
