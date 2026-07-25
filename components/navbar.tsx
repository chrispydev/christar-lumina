"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Insights", href: "/blog" },
];

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto mt-5 px-6">
        <div className="rounded-full border border-white/10 bg-black/60 backdrop-blur-xl px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="font-bold text-xl tracking-tight"
          >
            Christar <span className="text-blue-500">Lumina</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-white text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition"
            >
              Start Project →
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
