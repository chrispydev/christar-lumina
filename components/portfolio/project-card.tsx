import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { featuredProjectsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity-image";

export default async function PortfolioPreview() {
  const projects = await client.fetch(featuredProjectsQuery);

  return (
    <section id="portfolio" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-blue-500 uppercase tracking-[0.4em] text-sm">
            Selected Work
          </p>
          <h2 className="mt-5 text-5xl md:text-7xl font-bold">
            Projects That
            <br />
            Bring Ideas To Life
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project: any) => (
            <Link
              key={project._id}
              href={`/work/${project.slug.current}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                {project.coverImage && (
                  <Image
                    src={urlFor(project.coverImage).width(800).url()}
                    alt={project.title}
                    width={800}
                    height={600}
                    className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                )}
              </div>
              <p className="mt-5 text-blue-500">
                {project.category}
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                {project.title}
              </h3>
              <p className="mt-3 text-gray-400">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
