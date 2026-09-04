"use client";

import { useMemo, useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";
import type { Project } from "@/types/project";

/** Editorial column widths - sums of 12 per row at lg. */
const SPANS = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
];

function thumbFor(project: Project, width: number, height: number) {
  const image = (project.coverImage ?? project.images?.[0]) as
    | Parameters<typeof urlFor>[0]
    | undefined;

  if (!image?.asset) return null;
  return urlFor(image).width(width).height(height).url();
}

function Chrome({ slug, featured }: { slug?: string; featured: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-3 border-b border-white/[.07] bg-[#0C0C10] px-3.5 py-2.5">
      <div className="flex items-center gap-1.5">
        <i className="size-1.5 rounded-full bg-white/20" />
        <i className="size-1.5 rounded-full bg-white/20" />
        <i className="size-1.5 rounded-full bg-white/20" />
      </div>
      <span className="truncate font-mono text-[10px] tracking-tight text-white/30">
        christarlumina.com{slug ? `/work/${slug}` : "/work"}
      </span>
      {featured && (
        <span className="ml-auto shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-[9.5px] font-semibold uppercase tracking-[0.14em] text-blue-300">
          Featured
        </span>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const featured = index === 0;
  const src = thumbFor(project, featured ? 1400 : 900, featured ? 875 : 675);
  const stack = (project.technologies ?? []).slice(0, featured ? 5 : 3);
  const extra = (project.technologies?.length ?? 0) - stack.length;
  const span = SPANS[index % SPANS.length];

  console.log(stack)

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14, scale: 0.98 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className={`col-span-1 md:col-span-1 ${span}`}
    >
      <Link
        href={`/work/${project.slug.current}`}
        className="group block"
        aria-label={`View project: ${project.title}`}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#101014] shadow-[0_30px_70px_-45px_rgba(0,0,0,.95)] transition duration-500 group-hover:border-white/25 group-hover:shadow-[0_45px_100px_-45px_rgba(37,99,235,.35)]">
          <Chrome slug={project.slug.current} featured={featured} />

          <div
            className={
              featured ? "aspect-[16/10]" : "aspect-[4/3] lg:[.lg\\:col-span-4_&]:aspect-[16/10]"
            }
          >
            <div className="relative h-full w-full">
              {src ? (
                <Image
                  src={src}
                  alt={`${project.title} interface`}
                  fill
                  priority={index < 2}
                  sizes={
                    featured
                      ? "(min-width:1024px) 58vw, 100vw"
                      : "(min-width:1024px) 33vw, (min-width:768px) 50vw, 100vw"
                  }
                  className="object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,.12),transparent_70%)] font-mono text-[11px] uppercase tracking-[0.2em] text-white/25">
                  No preview
                </div>
              )}

              {/* Legibility scrim + hover CTA */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              <span className="absolute bottom-3 left-4 translate-y-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/70 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="absolute bottom-3 right-3 flex translate-y-3 items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[12.5px] font-semibold text-black opacity-0 shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                View project
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.16em]">
            {project.category && (
              <span className="font-semibold text-blue-400">
                {project.category}
              </span>
            )}
            {project.year && (
              <>
                <span className="text-white/20">/</span>
                <span className="font-mono text-white/35">{project.year}</span>
              </>
            )}
          </div>

          <h3
            className={`mt-2.5 font-bold tracking-tight text-white transition-colors group-hover:text-blue-200 ${featured ? "text-[clamp(22px,2.6vw,30px)]" : "text-[19px]"
              }`}
          >
            {project.title}
          </h3>

          <p className="mt-2 max-w-[58ch] text-[14.5px] leading-relaxed text-white/50 line-clamp-2">
            {project.description}
          </p>

          {stack.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {stack.map((technology, index) => (
                <span
                  key={index}
                  className="rounded-full border border-white/10 bg-white/[.04] px-2.5 py-1 text-[11.5px] text-white/55"
                >
                  {technology}
                </span>
              ))}
              {extra > 0 && (
                <span className="px-1 text-[11.5px] text-white/30">
                  +{extra}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
}

function FilterBar({
  categories,
  active,
  onChange,
  shown,
  total,
}: {
  categories: string[];
  active: string;
  onChange: (value: string) => void;
  shown: number;
  total: number;
}) {
  const items = ["All", ...categories];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => {
        const isActive = item === active;

        return (
          <button
            key={item}
            type="button"
            onClick={() => onChange(item)}
            aria-pressed={isActive}
            className={`relative rounded-full border px-4 py-2 text-[12.5px] font-medium transition ${isActive
              ? "border-transparent text-white"
              : "border-white/12 text-white/50 hover:border-white/30 hover:text-white/80"
              }`}
          >
            {isActive && (
              <motion.span
                layoutId="filter-pill"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
                className="absolute inset-0 rounded-full bg-blue-600"
              />
            )}
            <span className="relative">{item}</span>
          </button>
        );
      })}

      <span className="ml-auto font-mono text-[11.5px] tracking-[0.14em] text-white/30">
        {String(shown).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
      {SPANS.map((span, index) => (
        <div key={index} className={`animate-pulse md:col-span-1 ${span}`}>
          <div className="aspect-[16/10] rounded-[20px] border border-white/[.07] bg-white/[.03]" />
          <div className="mt-5 h-2.5 w-20 rounded-full bg-white/[.06]" />
          <div className="mt-3.5 h-4 w-3/4 rounded-full bg-white/[.08]" />
          <div className="mt-3 h-2.5 w-full rounded-full bg-white/[.05]" />
          <div className="mt-2 h-2.5 w-2/3 rounded-full bg-white/[.05]" />
        </div>
      ))}
    </div>
  );
}

export default function Portfolio() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    let active = true;

    (async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) throw new Error(`Request failed: ${response.status}`);
        const data = (await response.json()) as Project[];
        if (active) setProjects(data);
      } catch (fetchError) {
        console.error("Error fetching projects:", fetchError);
        if (active) setError("Could not load projects right now.");
      } finally {
        if (active) setLoading(false);
      }
    })();

    return () => {
      active = false;
    };
  }, []);

  const categories = useMemo(
    () =>
      Array.from(
        new Set(projects.map((project) => project.category).filter(Boolean))
      ) as string[],
    [projects]
  );

  const visible = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((project) => project.category === filter),
    [projects, filter]
  );

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="scroll-mt-28 px-6 py-24"
    >
      <div className="mx-auto max-w-[1160px]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 border-b border-white/10 pb-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="min-w-0">
              <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-blue-400">
                Selected work
              </p>
              <h2
                id="portfolio-heading"
                className="mt-4 max-w-[16ch] text-[clamp(34px,6vw,64px)] font-bold leading-[1.05] tracking-tight"
              >
                Projects that bring{" "}
                <span className="font-serif italic text-white/40">
                  ideas
                </span>{" "}
                to life
              </h2>
              <p className="mt-5 max-w-[54ch] text-[16px] leading-relaxed text-white/50">
                Interfaces, platforms and internal tools - designed, built and
                shipped end to end. Each project below was solved for a real
                business problem.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex shrink-0 items-center gap-2 self-start rounded-full border border-white/20 px-5 py-3 text-[14px] font-medium transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white lg:self-end"
            >
              Start a project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Controls */}
        {!loading && !error && projects.length > 0 && (
          <div className="mb-12">
            <FilterBar
              categories={categories}
              active={filter}
              onChange={setFilter}
              shown={visible.length}
              total={projects.length}
            />
          </div>
        )}

        {/* States */}
        {loading ? (
          <SkeletonGrid />
        ) : error ? (
          <div className="rounded-[20px] border border-white/10 bg-white/[.03] px-8 py-14 text-center">
            <p className="text-white/60">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-blue-600 px-5 py-2.5 text-[14px] font-semibold transition hover:bg-blue-500"
            >
              Try again
            </button>
          </div>
        ) : visible.length === 0 ? (
          <div className="rounded-[20px] border border-white/10 bg-white/[.03] px-8 py-14 text-center">
            <p className="text-white/60">
              No projects in this category yet.
            </p>
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-[14px] font-medium transition hover:border-white/45"
            >
              Show all work
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-12"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <ProjectCard key={project._id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
