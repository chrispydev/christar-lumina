"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity-image";
import type { Project } from "@/types/project";

/** Editorial column widths - each row sums to 12 at lg. */
const SPAN_PATTERN = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-5",
  "lg:col-span-7",
];

function spanFor(index: number, total: number) {
  if (total === 1) return "lg:col-span-12";
  if (total === 2) return "lg:col-span-6";
  if (total === 3) return "lg:col-span-4";
  return SPAN_PATTERN[index % SPAN_PATTERN.length];
}

function mdSpanFor(index: number, total: number) {
  if (total === 1) return "md:col-span-2";
  return index === 0 ? "md:col-span-2" : "md:col-span-1";
}

function thumbFor(project: Project, width: number, height: number) {
  const image = (project.coverImage ?? project.images?.[0]) as
    | Parameters<typeof urlFor>[0]
    | undefined;

  if (!image?.asset) return null;
  return urlFor(image).width(width).height(height).url();
}

function Chrome({ slug, featured }: { slug?: string; featured: boolean }) {
  return (
    <div className="flex shrink-0 items-center gap-2.5 border-b border-white/7 bg-#0C0C10 px-3 py-2 sm:gap-3 sm:px-3.5 sm:py-2.5">
      <div className="flex shrink-0 items-center gap-1.5">
        <i className="size-1.5 rounded-full bg-white/20" />
        <i className="size-1.5 rounded-full bg-white/20" />
        <i className="size-1.5 rounded-full bg-white/20" />
      </div>

      {/* min-w-0 is what makes truncate work inside a flex row */}
      <span className="min-w-0 flex-1 truncate font-mono text-10px tracking-tight text-white/30 sm:text-11px">
        christarlumina.com{slug ? `/work/${slug}` : "/work"}
      </span>

      {featured && (
        <span className="shrink-0 rounded-full border border-blue-500/30 bg-blue-500/10 px-2 py-0.5 text-9px font-semibold uppercase tracking-0.14em text-blue-300 sm:ml-auto sm:text-9.5px">
          Featured
        </span>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const featured = index === 0 && total > 2;
  const src = thumbFor(project, featured ? 1400 : 900, featured ? 875 : 675);
  const stack = (project.technologies ?? []).slice(0, featured ? 5 : 3);
  const extra = (project.technologies?.length ?? 0) - stack.length;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -14, scale: 0.98 }}
      transition={{ duration: 0.45, delay: Math.min(index * 0.05, 0.3) }}
      className={`col-span-1 ${mdSpanFor(index, total)} ${spanFor(index, total)}`}
    >
      <Link
        href={`/work/${project.slug.current}`}
        className="group block focus-visible:outline-none"
        aria-label={`View project: ${project.title}`}
      >
        {/* Thumbnail */}
        <div className="relative overflow-hidden rounded-[20px] border border-white/10 bg-#101014 shadow-[0_30px_70px_-45px_rgba(0,0,0,.95)] transition duration-500 group-hover:border-white/25 group-hover:shadow-[0_45px_100px_-45px_rgba(37,99,235,.35)] group-focus-visible:border-white/25">
          <Chrome slug={project.slug.current} featured={featured} />

          <div className="aspect-4/3 sm:aspect-16/10">
            <div className="relative h-full w-full">
              {src ? (
                <Image
                  src={src}
                  alt={`${project.title} interface`}
                  fill
                  priority={index < 2}
                  sizes={
                    featured
                      ? "(min-width:1160px) 656px, (min-width:1024px) 58vw, (min-width:640px) 1088px, 100vw"
                      : "(min-width:1160px) 368px, (min-width:1024px) 33vw, (min-width:640px) 536px, 100vw"
                  }
                  className="object-cover object-top transition-transform duration-900 ease-out group-hover:scale-1.04"
                />
              ) : (
                <div className="flex h-full items-center justify-center bg-[radial-gradient(60%_60%_at_50%_50%,rgba(37,99,235,.12),transparent_70%)] font-mono text-11px uppercase tracking-0.2em text-white/25">
                  No preview
                </div>
              )}

              {/* Scrim + CTA - always visible where hover is unavailable */}
              <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100 group-focus-visible:opacity-100 [@media(hover:none)]:opacity-80" />

              <span className="pointer-events-none absolute bottom-3 left-4 translate-y-3 font-mono text-10px uppercase tracking-0.22em text-white/70 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="pointer-events-none absolute bottom-3 right-3 flex translate-y-3 items-center gap-2 rounded-full bg-white px-3 py-1.5 text-12px font-semibold text-black shadow-lg transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 sm:px-3.5 sm:py-2 sm:text-12.5px [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100">
                View project
                <ArrowUpRight size={14} />
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-5">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-11px uppercase tracking-0.16em">
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
            className={`mt-2.5 break-pretty font-bold tracking-tight text-white transition-colors group-hover:text-blue-200 ${featured ? "text-22px sm:text-26px lg:text-30px" : "text-19px"
              }`}
          >
            {project.title}
          </h3>

          <p className="mt-2 line-clamp-2 max-w-58ch text-14.5px leading-relaxed text-white/50">
            {project.description}
          </p>

          {stack.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-1.5">
              {stack.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/4 px-2.5 py-1 text-11.5px text-white/55"
                >
                  {technology}
                </span>
              ))}
              {extra > 0 && (
                <span className="px-1 text-11.5px text-white/30">+{extra}</span>
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
      {/* Scrollable row on phones instead of a 6-line wrap */}
      <div className="-mx-5 flex min-w-0 flex-1 items-center gap-2 overflow-x-auto px-5 pb-1 [-ms-overflow-style:none] [scrollbar-none] sm:mx-0 sm:overflow-visible sm:px-0 sm:pb-0 [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const isActive = item === active;

          return (
            <button
              key={item}
              type="button"
              onClick={() => onChange(item)}
              aria-pressed={isActive}
              className={`relative shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-12.5px font-medium transition ${isActive
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
      </div>

      <span className="w-full shrink-0 text-right font-mono text-11.5px tracking-0.14em text-white/30 sm:w-auto sm:ml-auto">
        {String(shown).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </span>
    </div>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12">
      {SPAN_PATTERN.map((span, index) => (
        <div
          key={index}
          className={`animate-pulse ${index === 0 ? "md:col-span-2" : "md:col-span-1"
            } ${span}`}
        >
          <div className="aspect-4/3 rounded-[20px] border border-white/7 bg-white/3 sm:aspect-16/10" />
          <div className="mt-5 h-2.5 w-20 rounded-full bg-white/6" />
          <div className="mt-3.5 h-4 w-3/4 rounded-full bg-white/8" />
          <div className="mt-3 h-2.5 w-full rounded-full bg-white/5" />
          <div className="mt-2 h-2.5 w-2/3 rounded-full bg-white/5" />
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
      className="scroll-mt-28 px-5 py-16 sm:px-6 sm:py-24"
    >
      <div className="mx-auto w-full max-w-290">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 border-b border-white/10 pb-8 sm:mb-12 sm:pb-10"
        >
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="min-w-0">
              <p className="text-12px font-semibold uppercase tracking-0.2em text-blue-400">
                Selected work
              </p>
              <h2
                id="portfolio-heading"
                className="mt-4 max-w-16ch text-balance text-34px font-bold leading-1.05 tracking-tight sm:text-44px lg:text-64px"
              >
                Projects that bring{" "}
                <span className="font-serif italic text-white/40">ideas</span>{" "}
                to life
              </h2>
              <p className="mt-5 max-w-54ch text-15px leading-relaxed text-white/50 sm:text-16px">
                Interfaces, platforms and internal tools - designed, built and
                shipped end to end. Each project below was solved for a real
                business problem.
              </p>
            </div>

            <Link
              href="/#contact"
              className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-14px font-medium transition hover:border-blue-400/60 hover:bg-blue-500/10 hover:text-white"
            >
              Start a project
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </motion.div>

        {/* Controls */}
        {!loading && !error && projects.length > 0 && (
          <div className="mb-10 sm:mb-12">
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
          <div className="rounded-[20px] border border-white/10 bg-white/3 px-6 py-12 text-center sm:px-8 sm:py-14">
            <p className="text-white/60">{error}</p>
            <button
              type="button"
              onClick={() => window.location.reload()}
              className="mt-6 rounded-full bg-blue-600 px-5 py-2.5 text-14px font-semibold transition hover:bg-blue-500"
            >
              Try again
            </button>
          </div>
        ) : visible.length === 0 ? (
          <div className="rounded-[20px] border border-white/10 bg-white/3 px-6 py-12 text-center sm:px-8 sm:py-14">
            <p className="text-white/60">No projects in this category yet.</p>
            <button
              type="button"
              onClick={() => setFilter("All")}
              className="mt-6 rounded-full border border-white/20 px-5 py-2.5 text-14px font-medium transition hover:border-white/45"
            >
              Show all work
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-flow-row-dense grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-12"
          >
            <AnimatePresence mode="popLayout">
              {visible.map((project, index) => (
                <ProjectCard
                  key={project._id}
                  project={project}
                  index={index}
                  total={visible.length}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </section>
  );
}
