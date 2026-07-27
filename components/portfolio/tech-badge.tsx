type Props = {
  label: string;
};

export default function TechBadge({ label }: Props) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300">
      {label}
    </span>
  );
}
