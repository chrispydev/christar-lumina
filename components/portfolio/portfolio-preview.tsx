import Image from "next/image";
import Link from "next/link";
import { client } from "@/lib/sanity";
import { featuredProjectsQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity-image";

export default async function PortfolioPreview() {
  const projects = await client.fetch(featuredProjectsQuery);

  return (
    <section id="portfolio" className="py-32 px-6 overflow-hidden">
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
        {/* Horizontal Carousel */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-10 scrollbar-hide">
          {projects.map((project: any) => {
            const image = project.coverImage || project.images?.[0];
            return (
              <Link
                key={project._id}
                href={`/work/${project.slug.current}`}
                className="group min-w-[85%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[32%] snap-start"
              >
                <article>
                  <div className="relative h-[280px] overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    {image && (
                      <Image
                        src={urlFor(image).width(700).height(500).url()}
                        alt={project.title}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 32vw"
                      />
                    )}
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="mt-5">
                    <p className="text-blue-500 text-xs uppercase tracking-wider">
                      {project.category || "Web Project"}
                    </p>
                    <h3 className="mt-2 text-xl font-bold">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-gray-400 text-sm line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
