"use client";

import { useState, useEffect } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      style={{
        left: position.x,
        top: position.y
      }}
      className="hidden md:block fixed w-6 h-6 rounded-full bg-blue-500 mix-blend-screen pointer-events-none z-50"
    />
  );
}
