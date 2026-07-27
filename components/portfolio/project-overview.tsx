import { Project } from "@/types/project";

type Props = {
  project: Project;
};

export default function ProjectOverview({
  project,
}: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">

        <div>
          <h3 className="text-xl font-semibold">
            Overview
          </h3>

          <p className="mt-4 text-gray-400">
            {project.overview}
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold">
            Challenge
          </h3>

          <p className="mt-4 text-gray-400">
            {project.challenge}
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold">
            Solution
          </h3>

          <p className="mt-4 text-gray-400">
            {project.solution}
          </p>
        </div>

      </div>
    </section>
  );
}
