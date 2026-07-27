import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectSidebar({
  project,
}: Props) {
  return (
    <aside className="sticky top-28 space-y-10 rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500">
          Client
        </p>

        <p className="mt-3 text-lg font-medium">
          {project.client}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500">
          Year
        </p>

        <p className="mt-3">
          {project.year}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500">
          Duration
        </p>

        <p className="mt-3">
          {project.duration}
        </p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-blue-500">
          Services
        </p>

        <div className="mt-4 space-y-2">
          {project.services.map((service) => (
            <p key={service}>
              {service}
            </p>
          ))}
        </div>
      </div>

    </aside>
  );
}
