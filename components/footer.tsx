import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 py-20 px-6">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold">
              Christar<span className="text-blue-500">Lumina</span>
            </h2>
            <p className="mt-6 max-w-md text-gray-400 leading-relaxed">
              We design and build modern digital experiences, websites,
              applications, and software solutions that help businesses grow.
            </p>
            <Link
              href="/#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Start A Project
              <ArrowUpRight size={18} />
            </Link>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              {/* Github */}
              <a
                href="https://github.com/chrispydev"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaGithub size={22} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/christian-owusu-1209121a4/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaLinkedin size={22} />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/233553782097"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <FaWhatsapp size={22} />
              </a>

              {/* Email */}
              <a
                href="mailto:info@christianowusu44@gmail.com"
                className="rounded-full border border-white/10 p-3 transition hover:border-blue-500 hover:text-blue-500"
              >
                <HiOutlineMail size={22} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Explore</h3>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/#about" className="transition hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/work" className="transition hover:text-white">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="transition hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Web Development</li>
              <li>Mobile Applications</li>
              <li>UI/UX Design</li>
              <li>Automation</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-sm text-gray-500 md:flex-row">
          <p>© {new Date().getFullYear()} Christar Lumina. All Rights Reserved.</p>
          <p>Built with Next.js, TailwindCSS & Sanity CMS</p>
        </div>
      </div>
    </footer>
  );
}
