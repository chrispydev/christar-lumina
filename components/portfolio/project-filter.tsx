"use client";

const categories = [
  "All",
  "Web",
  "Mobile",
  "UI/UX",
  "Automation",
  "Data Science",
];

type Props = {
  active: string;
  setActive: (category: string) => void;
};

export default function ProjectFilter({
  active,
  setActive,
}: Props) {
  return (
    <div className="mt-12 flex flex-wrap gap-3">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActive(category)}
          className={`rounded-full border px-6 py-3 text-sm transition ${active === category
              ? "border-blue-500 bg-blue-600 text-white"
              : "border-white/10 bg-white/5 text-gray-400 hover:border-blue-500/40 hover:text-white"
            }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
