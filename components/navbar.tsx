"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useScrollSpy } from "@/hook/useScrollSpy";
import Logo from "./layout/logo";
import MobileMenu from "./layout/mobile-menu";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", section: "home" },
  { name: "About", href: "/#about", section: "about" },
  { name: "Services", href: "/#services", section: "services" },
  { name: "Work", href: "/work", section: "portfolio" },
  { name: "Insights", href: "/#blog", section: "blog" },
  { name: "Contact", href: "/#contact", section: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const active = useScrollSpy(
    links.map((link) => link.section)
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled
          ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
          : "bg-transparent"
          }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />

          <div className="hidden items-center gap-8 lg:flex">
            {links.map((link) => {
              const isWorkPage =
                pathname.startsWith("/work");

              const isActive =
                link.name === "Work"
                  ? isWorkPage
                  : active === link.section;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="group relative text-sm text-gray-300 transition hover:text-white"
                >
                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-0.5 bg-blue-500 transition-all ${isActive
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              );
            })}

            <Link
              href="/#contact"
              className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold transition hover:bg-blue-700 hover:shadow-[0_0_40px_rgba(37,99,235,.4)]"
            >
              Start Project →
            </Link>
          </div>

          <button
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      <MobileMenu
        open={open}
        close={() => setOpen(false)}
        links={links}
      />
    </>
  );
}
