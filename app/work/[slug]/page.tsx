import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity";
import { projectQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity-image";

type Project = {
  title: string;
  description: string;
  body?: any;
  coverImage?: {
    asset?: {
      _ref: string;
    };
  };
  images?: Array<{
    asset?: {
      _ref: string;
    };
  }>;
  link?: string;
};

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  const projects = await client.fetch(`
    *[_type == "works" && defined(slug.current)]{
      slug
    }
  `);

  return projects.map((project: any) => ({
    slug: project.slug.current,
  }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await client.fetch<Project | null>(projectQuery, { slug });

  if (!project) {
    notFound();
  }

  const mainImage =
    project.coverImage?.asset?._ref
      ? project.coverImage
      : project.images?.find((img) => img?.asset?._ref);

  return (
    <main className="min-h-screen overflow-hidden bg-[#030303] text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[450px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/5 blur-[160px]" />
      </div>

      {/* HERO */}
      <section className="pt-36">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <p className="text-sm uppercase tracking-[0.45em] text-blue-400">
              Case Study
            </p>
            <h1 className="mt-8 text-5xl font-bold leading-tight md:text-7xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-400">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      {/* MAIN IMAGE */}
      {mainImage?.asset?._ref && (
        <section className="py-20">
          <div className="mx-auto max-w-5xl px-6">
            <div className="overflow-hidden rounded-[36px] border border-white/10 shadow-[0_40px_100px_rgba(0,0,0,.45)]">
              <Image
                src={
                  urlFor(mainImage)
                    .width(1800)
                    .height(1100)
                    .fit("crop")
                    .url()
                }
                alt={project.title || "Project image"}
                width={1800}
                height={1100}
                priority
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="py-28">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid gap-20 lg:grid-cols-[300px_1fr]">
            {/* SIDEBAR */}
            <aside className="space-y-10">
              <div>
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  Description
                </p>
                <p className="mt-5 leading-8 text-gray-400">
                  {project.description}
                </p>
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
                >
                  Visit Project →
                </a>
              )}
            </aside>

            {/* BODY */}
            <div>
              {project.body && (
                <article
                  className="
                    prose
                    prose-invert
                    prose-xl
                    max-w-none
                    prose-headings:text-white
                    prose-p:text-gray-400
                    prose-li:text-gray-400
                    prose-strong:text-white
                  "
                >
                  <PortableText value={project.body} />
                </article>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      {project.images && project.images.length > 0 && (
        <section className="border-y border-white/10 bg-white/[0.02] py-28">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-12 text-4xl font-bold">
              Project Showcase
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-[28px] border border-white/10"
                >
                  <Image
                    src={
                      urlFor(image)
                        .width(1200)
                        .height(800)
                        .url()
                    }
                    alt={`${project.title} - Image ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-32">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-[36px] border border-white/10 bg-white/5 p-14 text-center">
            <h2 className="text-4xl font-bold">
              Have an idea worth building?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-gray-400">
              I build modern websites, web applications and digital solutions for businesses.
            </p>
            <a
              href="/#contact"
              className="mt-10 inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold hover:bg-blue-500"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
