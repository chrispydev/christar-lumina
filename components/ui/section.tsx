import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Section({ children, className = "" }: Props) {
  return (
    <section className={`py-32 px-6 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
