import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function CaseStudyHero({
  project,
}: Props) {
  return (
    <section className="relative overflow-hidden pt-36">

      <div className="absolute left-1/2 top-24 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl px-6">

        <p className="text-sm uppercase tracking-[0.4em] text-blue-500">
          Case Study
        </p>

        <h1 className="mt-8 max-w-4xl text-6xl font-bold tracking-tight md:text-8xl">
          {project.title}
        </h1>

        <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-400">
          {project.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="rounded-full bg-blue-600 px-6 py-3 transition hover:bg-blue-500"
            >
              Live Demo
            </Link>
          )}

          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 hover:border-blue-500"
            >
              GitHub

              <ArrowUpRight size={18} />
            </Link>
          )}

        </div>

        <div className="relative mt-20 overflow-hidden rounded-[32px] border border-white/10">

          <Image
            src={project.image}
            alt={project.title}
            width={1600}
            height={900}
            className="w-full transition duration-700 hover:scale-105"
          />

        </div>

      </div>

    </section>
  );
}
