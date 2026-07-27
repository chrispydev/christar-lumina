import { ArrowUpRight } from "lucide-react";

type Props = {
  liveUrl?: string;
  githubUrl?: string;
};

export default function ProjectButtons({
  liveUrl,
  githubUrl,
}: Props) {
  return (
    <div className="mt-8 flex flex-wrap gap-4">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-400"
        >
          Live Demo
          <ArrowUpRight size={18} />
        </a>
      )}

      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          className="inline-flex items-center gap-2 text-gray-300 hover:text-white"
        >
          GitHub
          <ArrowUpRight size={18} />
        </a>
      )}
    </div>
  );
}
