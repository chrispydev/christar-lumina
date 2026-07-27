"use client";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  open: boolean;
  close: () => void;
  links: {
    name: string;
    href: string;
  }[];
};

export default function MobileMenu({
  open,
  close,
  links,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl lg:hidden"
        >
          <motion.div
            initial={{
              y: -40,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: -40,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="flex h-full flex-col justify-center px-8"
          >
            <div className="space-y-8">
              {links.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={`#${link.href}`}
                  onClick={close}
                  initial={{
                    opacity: 0,
                    x: -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="block text-4xl font-semibold"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="#contact"
                onClick={close}
                className="inline-block rounded-full bg-blue-600 px-8 py-4 font-semibold"
              >
                Start Project →
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
