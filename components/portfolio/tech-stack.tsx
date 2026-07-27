type Props = {
  technologies: string[];
};

export default function TechStack({
  technologies,
}: Props) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-3xl font-bold">
          Technologies Used
        </h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
