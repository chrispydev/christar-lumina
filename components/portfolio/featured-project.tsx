import Image from "next/image";
import { Project } from "@/types/project";
import TechBadge from "./TechBadge";
import ProjectButtons from "./ProjectButtons";

type Props = {
  project: Project;
};

export default function FeaturedProject({ project }: Props) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-blue-500">
          Featured Project
        </p>

        <h3 className="mt-4 text-4xl font-bold">
          {project.title}
        </h3>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <ProjectButtons
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
      </div>
    </article>
  );
}
