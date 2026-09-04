"use client";
import { useEffect } from "react";
export function ProgressBar() {
  useEffect(() => {
    const bar = document.getElementById("reading-bar"); if (!bar) return;
    const root = document.documentElement;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const max = root.scrollHeight - root.clientHeight;
      bar.style.transform = `scaleX(${max > 0 ? root.scrollTop / max : 0})`;
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    addEventListener("scroll", onScroll, { passive: true }); tick();
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return <div id="reading-bar" aria-hidden
    className="fixed inset-x-0 top-0 z-[70] h-[3px] origin-left scale-x-0
      bg-gradient-to-r from-lumina to-[#FFD98A]" />;
}
