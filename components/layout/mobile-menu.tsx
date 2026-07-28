"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useScrollSpy } from "@/hook/useScrollSpy";

type Props = {
  open: boolean;
  close: () => void;
  links: {
    name: string;
    href: string;
    section: string;
  }[];
};

export default function MobileMenu({
  open,
  close,
  links,
}: Props) {
  const pathname = usePathname();

  const active = useScrollSpy(
    links.map((link) => link.section)
  );

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl lg:hidden"
        >
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex h-full flex-col justify-center px-8"
          >
            <nav className="space-y-8">
              {links.map((link, index) => {
                const isWorkPage = pathname.startsWith("/work");

                const isActive =
                  link.name === "Work"
                    ? isWorkPage
                    : active === link.section;

                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <Link
                      href={link.href}
                      onClick={close}
                      className={`flex items-center justify-between text-4xl font-semibold transition ${isActive
                          ? "text-blue-500"
                          : "text-white hover:text-blue-500"
                        }`}
                    >
                      {link.name}

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-blue-500" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="mt-16">
              <Link
                href="/#contact"
                onClick={close}
                className="flex w-full items-center justify-center rounded-full bg-blue-600 px-6 py-4 text-lg font-semibold transition hover:bg-blue-700"
              >
                Start Project →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
