"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Mail,
  ArrowUpRight,
  Send
} from "lucide-react";

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
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute 
          top-20 
          left-1/2 
          -translate-x-1/2
          w-[500px]
          h-[500px]
          bg-blue-600/20
          blur-[150px]
          rounded-full
        "
      />


      <div className="relative max-w-6xl mx-auto text-center">


        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            text-blue-500
            uppercase
            tracking-[0.4em]
            text-sm
          "
        >
          Start A Conversation
        </motion.p>



        <motion.h2
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
            mt-8
            text-5xl
            md:text-8xl
            font-bold
            leading-tight
          "
        >
          Have An Idea?
          <br />

          <span className="text-blue-500">
            Let's Build It.
          </span>

        </motion.h2>



        <motion.p
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true
          }}
          className="
            max-w-2xl
            mx-auto
            mt-8
            text-gray-400
            text-lg
          "
        >
          Tell us about your project and we will help transform
          your vision into a powerful digital solution.
        </motion.p>



        {/* Main CTA */}

        <div className="mt-12 flex justify-center">

          <a
            href="https://wa.me/233553782097"
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex
              items-center
              gap-3
              px-10
              py-5
              rounded-full
              bg-blue-600
              hover:bg-blue-700
              transition
              font-semibold
              shadow-[0_0_40px_rgba(37,99,235,.35)]
            "
          >

            Start Project

            <ArrowUpRight size={20} />

          </a>

        </div>




        {/* Contact Cards */}

        <div
          className="
            mt-20
            grid
            md:grid-cols-2
            gap-6
            max-w-3xl
            mx-auto
          "
        >


          {/* Email */}

          <a
            href="mailto:christianowusu44@gmail.com"
            className="
              group
              border
              border-white/10
              bg-white/5
              rounded-3xl
              p-8
              flex
              items-center
              gap-5
              text-left
              hover:border-blue-500/40
              transition
            "
          >

            <div
              className="
                p-4
                rounded-2xl
                bg-blue-500/10
              "
            >
              <Mail
                className="text-blue-500"
                size={35}
              />
            </div>


            <div>

              <h3 className="font-bold text-xl">
                Email
              </h3>

              <p className="
                text-gray-400
                group-hover:text-white
                transition
              ">
                christianowusu44@gmail.com
              </p>

            </div>


          </a>




          {/* WhatsApp */}

          <a
            href="https://wa.me/233553782097"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              border
              border-white/10
              bg-white/5
              rounded-3xl
              p-8
              flex
              items-center
              gap-5
              text-left
              hover:border-blue-500/40
              transition
            "
          >

            <div
              className="
                p-4
                rounded-2xl
                bg-blue-500/10
              "
            >

              <MessageCircle
                className="text-blue-500"
                size={35}
              />

            </div>


            <div>

              <h3 className="font-bold text-xl">
                WhatsApp
              </h3>

              <p className="
                text-gray-400
                group-hover:text-white
                transition
              ">
                Chat directly with us
              </p>

            </div>


          </a>


        </div>



        {/* Small footer message */}

        <div className="mt-16 flex justify-center">

          <div
            className="
              flex
              items-center
              gap-3
              text-gray-500
              text-sm
            "
          >

            <Send size={15} />

            Available for freelance projects,
            collaborations and digital solutions.

          </div>

        </div>


      </div>

    </section>
  );
}
