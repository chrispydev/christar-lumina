import { notFound } from "next/navigation";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { client } from "@/lib/sanity";
import { projectQuery } from "@/lib/queries";
import { urlFor } from "@/lib/sanity-image";
import Link from "next/link";

type Asset = {
  _id?: string;
  _ref?: string;
  url?: string;
};

type ImageRef = {
  _key?: string;
  asset?: Asset;
};

type Project = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  featured?: boolean;
  category?: string;
  client?: string;
  year?: string;
  duration?: string;
  link?: string;
  github?: string;
  description?: string;
  technologies?: string[];
  coverImage?: ImageRef;
  images?: ImageRef[];
  body?: any;
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

function assetUrl(image: ImageRef | undefined, width: number, height: number) {
  if (!image?.asset) return null;

  if (image.asset._ref) {
    return urlFor(image as any).width(width).height(height).url();
  }

  if (image.asset.url) {
    return urlFor(image).width(width).height(height).url();
  }

  return null;
}

const hasImage = (image?: ImageRef) =>
  Boolean(image?.asset?._ref || image?.asset?.url);

function Frame({
  src,
  alt,
  width = 1600,
  height = 1000,
  priority = false,
}: {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  return (
    <div className="group overflow-hidden rounded-[20px] border border-white/10 bg-[#101014] shadow-[0_40px_90px_-40px_rgba(0,0,0,.95)]">
      <div className="flex items-center gap-2 border-b border-white/[.07] bg-[#0C0C10] px-4 py-3">
        <i className="size-2 rounded-full bg-white/15" />
        <i className="size-2 rounded-full bg-white/15" />
        <i className="size-2 rounded-full bg-white/15" />
      </div>
      <div className="aspect-16/10">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          sizes="(min-width: 1160px) 1112px, 100vw"
          className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.015]"
        />
      </div>
    </div>
  );
}

const ptComponents = {
  block: {
    normal: ({ children }: any) => (
      <p className="mb-5 max-w-[68ch] text-[17px] leading-[1.75] text-white/65">
        {children}
      </p>
    ),
    h1: ({ children }: any) => (
      <h3 className="mb-3 mt-14 text-[26px] font-bold tracking-tight text-white first:mt-0">
        {children}
      </h3>
    ),
    h2: ({ children }: any) => (
      <h3 className="mb-3 mt-14 text-[26px] font-bold tracking-tight text-white first:mt-0">
        {children}
      </h3>
    ),
    h3: ({ children }: any) => (
      <h4 className="mb-2 mt-10 text-[19px] font-semibold tracking-tight text-white">
        {children}
      </h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="my-9 max-w-[30ch] border-l-2 border-blue-500 pl-6 text-[24px] italic leading-snug text-white/90">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="mb-7 grid max-w-[72ch] gap-x-10 gap-y-3 marker:text-blue-500 sm:grid-cols-2">
        {children}
      </ul>
    ),
    number: ({ children }: any) => (
      <ol className="mb-7 grid max-w-[68ch] gap-2.5 marker:text-blue-500">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => (
      <li className="text-[16.5px] leading-relaxed text-white/65 [&>strong]:mb-1 [&>strong]:block [&>strong]:font-semibold [&>strong]:text-white">
        {children}
      </li>
    ),
    number: ({ children }: any) => (
      <li className="text-[16.5px] leading-relaxed text-white/65">
        {children}
      </li>
    ),
  },
  marks: {
    strong: ({ children }: any) => (
      <strong className="font-semibold text-white">{children}</strong>
    ),
    code: ({ children }: any) => (
      <code className="rounded bg-white/[.07] px-1.5 py-0.5 font-mono text-[.86em] text-blue-300">
        {children}
      </code>
    ),
    link: ({ value, children }: any) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline decoration-blue-500/40 underline-offset-4 hover:decoration-blue-400"
      >
        {children}
      </a>
    ),
  },
};

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  const project = await client.fetch<Project | null>(projectQuery, { slug });

  if (!project) {
    notFound();
  }

  const images = (project.images ?? []).filter(hasImage);

  const mainImage = hasImage(project.coverImage) ? project.coverImage : images[0];

  const gallery = images.filter(
    (image) => image._key !== mainImage?._key
  );

  const heroSrc = assetUrl(mainImage, 1800, 1125);


  const facts = [
    { label: "Client", value: project.client },
    { label: "Year", value: project.year },
    { label: "Duration", value: project.duration },
  ].filter((fact) => fact.value);

  return (
    <main className="bg-[#030303] text-white">
      {/* BACKGROUND */}
      <div aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 -top-75 h-190 w-270 -translate-x-1/2 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,.13),transparent_70%)]" />
        <div className="absolute -bottom-55 -right-40 h-170 w-170 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,.08),transparent_70%)]" />
      </div>

      {/* HERO */}
      <header className="relative px-6 pb-14 pt-32 md:pt-40">
        <div className="mx-auto max-w-290">
          <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_290px]">
            <div>
              {project.category && (
                <p className="text-[12px] uppercase tracking-[0.16em] text-blue-400">
                  {project.category}
                </p>
              )}

              <h1 className="mt-6 max-w-[18ch] text-[clamp(38px,6.6vw,74px)] font-bold leading-[1.06] tracking-tight">
                {project.title}
              </h1>

              {project.description && (
                <p className="mt-6 max-w-[62ch] text-[clamp(18px,2vw,21px)] leading-[1.6] text-white/60">
                  {project.description}
                </p>
              )}

              <div className="mt-8 flex flex-wrap gap-3">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3.5 text-[15px] font-semibold transition hover:bg-blue-500"
                  >
                    Visit project
                    <span aria-hidden>&rarr;</span>
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center rounded-full border border-white/20 px-6 py-3.5 text-[15px] font-medium transition hover:border-white/45"
                  >
                    View source
                  </a>
                )}
              </div>
            </div>

            {/* PROJECT INFORMATION */}
            {(facts.length > 0 || project.technologies?.length) && (
              <aside className="border-t border-white/20 pt-5 lg:sticky lg:top-28">
                {facts.length > 0 && (
                  <dl className="grid gap-3 text-sm">
                    {facts.map((fact) => (
                      <div
                        key={fact.label}
                        className="flex items-baseline justify-between gap-4"
                      >
                        <dt className="text-white/40">{fact.label}</dt>
                        <dd className="text-right font-medium text-white">
                          {fact.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                {project.technologies?.length ? (
                  <div className="mt-6">
                    <p className="text-[11px] uppercase tracking-[0.14em] text-white/35">
                      Stack
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-[12.5px] text-blue-200"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </aside>
            )}
          </div>

          {/* HERO IMAGE */}
          {heroSrc && (
            <div className="relative mt-14">
              <div
                aria-hidden
                className="absolute inset-x-0 -inset-y-14 bg-[radial-gradient(50%_60%_at_50%_45%,rgba(37,99,235,.16),transparent_70%)]"
              />
              <div className="relative">
                <Frame
                  src={heroSrc}
                  priority
                  width={1800}
                  height={1125}
                  alt={`${project.title} - delivered interface`}
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {/* PROJECT DETAILS */}
      {project.body?.length ? (
        <section
          id="details"
          className="scroll-mt-28 border-t border-white/10 py-16"
        >
          <div className="mx-auto grid max-w-290 gap-x-20 gap-y-8 px-6 lg:grid-cols-[260px_1fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-[12px] uppercase tracking-[0.16em] text-blue-400">
                01 &mdash; Project details
              </p>
              <h2 className="mt-3 text-[clamp(22px,2.5vw,30px)] font-bold leading-tight tracking-tight text-white">
                What the platform includes
              </h2>
            </div>
            <div className="min-w-0">
              <PortableText value={project.body} components={ptComponents} />
            </div>
          </div>
        </section>
      ) : null}

      {/* SHOWCASE */}
      {gallery.length > 0 ? (
        <section
          aria-labelledby="showcase"
          className="border-y border-white/10 bg-white/2 py-20"
        >
          <div className="mx-auto max-w-290 px-6">
            <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[12px] uppercase tracking-[0.16em] text-blue-400">
                  02 &mdash; Showcase
                </p>
                <h2
                  id="showcase"
                  className="mt-3 text-[clamp(22px,2.5vw,30px)] font-bold tracking-tight"
                >
                  Selected screens
                </h2>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {gallery.map((image, index) => {
                const src = assetUrl(image, 1200, 750);
                if (!src) return null;

                return (
                  <Frame
                    key={image._key ?? `${project._id}-${index}`}
                    src={src}
                    width={1200}
                    height={750}
                    alt={`${project.title} - interface detail ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="relative mx-auto max-w-250 overflow-hidden rounded-[20px] border border-white/10 bg-white/4 p-10 text-center md:p-16">
          <div
            aria-hidden
            className="absolute inset-x-[-20%] bottom-[-70%] h-[120%] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(37,99,235,.16),transparent_70%)]"
          />
          <h2 className="relative text-[clamp(28px,4.4vw,46px)] font-bold tracking-tight">
            Have an idea worth building?
          </h2>
          <p className="relative mx-auto mt-5 max-w-[46ch] text-[16.5px] leading-relaxed text-white/55">
            I build modern websites, web applications and digital solutions for
            businesses.
          </p>
          <Link
            href="/#contact"
            className="relative mt-10 inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-500"
          >
            Start a Project
          </Link>
        </div>
      </section>
    </main>
  );
}
