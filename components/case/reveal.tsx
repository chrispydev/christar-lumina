"use client";
import { useEffect, useRef, useState, type ReactNode } from "react";

export function Reveal({ children, as: Tag = "div", delay = 0, className = "" }:
  { children: ReactNode; as?: any; delay?: number; className?: string }) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { setShown(true); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -10% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref as any} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none
        ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </Tag>
  );
}
