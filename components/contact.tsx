"use client";
import { motion } from "framer-motion";
import { MessageCircle, Mail, ArrowUpRight } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-32 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity
        }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600/20 blur-[150px] rounded-full"
      />

      <div className="relative max-w-6xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-500 uppercase tracking-[0.4em] text-sm"
        >
          Start A Conversation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl md:text-8xl font-bold leading-tight"
        >
          Have An Idea?
          <br />
          <span className="text-blue-500">Let's Build It.</span>
        </motion.h2>

        <p className="max-w-2xl mx-auto mt-8 text-gray-400 text-lg">
          Tell us about your project and we will help transform your vision
          into a powerful digital solution.
        </p>

        <div className="mt-12 flex justify-center gap-5 flex-wrap">
          <a
            href="https://wa.me/233XXXXXXXXX"
            target="_blank"
            className="flex items-center gap-3 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
          >
            Start Project
            <ArrowUpRight size={20} />
          </a>
        </div>

        {/* Contact Cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="border border-white/10 bg-white/5 rounded-3xl p-8 flex items-center gap-5 text-left">
            <Mail className="text-blue-500" size={35} />
            <div>
              <h3 className="font-bold text-xl">Email</h3>
              <p className="text-gray-400">info@christarlumina.com</p>
            </div>
          </div>

          <div className="border border-white/10 bg-white/5 rounded-3xl p-8 flex items-center gap-5 text-left">
            <MessageCircle className="text-blue-500" size={35} />
            <div>
              <h3 className="font-bold text-xl">WhatsApp</h3>
              <p className="text-gray-400">Chat directly with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
