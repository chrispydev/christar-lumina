"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "@/lib/sanity-image";
import { Project } from "@/types/project";

interface FeaturedProjectProps {
  project: Project;
}

export default function FeaturedProject({
  project,
}: FeaturedProjectProps) {
  const imageUrl = project.coverImage
    ? urlFor(project.coverImage).width(1200).height(700).url()
    : "/placeholder.jpg";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5"
    >
      <Link href={`/work/${project.slug.current}`}>
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={imageUrl}
            alt={project.coverImageAlt || project.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 800px"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8">
          {project.industry && (
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400">
              {project.industry}
            </p>
          )}

          <h2 className="mt-4 text-3xl font-bold text-white">
            {project.title}
          </h2>

          {project.description && (
            <p className="mt-4 leading-8 text-gray-400">
              {project.description}
            </p>
          )}

          <div className="mt-6 flex items-center gap-2 text-blue-400 font-medium">
            View Case Study
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
