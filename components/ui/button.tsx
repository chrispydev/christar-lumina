import Link from "next/link";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export default function Button({ children, href }: Props) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(37,99,235,0.5)]"
    >
      {children}
      <span className="transition group-hover:translate-x-1">→</span>
    </Link>
  );
}
