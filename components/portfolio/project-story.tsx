import { Project } from "@/types/project";

type Props = {
  project: Project;
};

const sections = [
  {
    key: "overview",
    title: "Overview",
  },
  {
    key: "challenge",
    title: "The Challenge",
  },
  {
    key: "solution",
    title: "Our Solution",
  },
  {
    key: "results",
    title: "The Results",
  },
] as const;

export default function ProjectStory({
  project,
}: Props) {
  return (
    <div className="space-y-24">
      {sections.map((section) => (
        <section
          key={section.key}
          className="border-b border-white/10 pb-20 last:border-none"
        >
          <h2 className="text-4xl font-bold">
            {section.title}
          </h2>

          <p className="mt-8 text-lg leading-9 text-gray-400">
            {project[section.key]}
          </p>
        </section>
      ))}
    </div>
  );
}
