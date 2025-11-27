"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-md"
    >
      <div className="flex flex-col items-center">
        {/* Glowing profile image */}
        <div className="relative h-40 w-40">
          <Image
            src="/pratyush_profile_glow.webp"
            alt="Pratyush Kumar"
            fill
            className="object-cover"
          />
        </div>

        <h3 className="mt-4 text-xl font-semibold text-white">
          Pratyush Kumar
        </h3>

        <p className="mt-1 text-sm text-slate-300 text-center">
          MSCS @ Penn State <br />
          Backend • Distributed Systems • Full Stack
        </p>

        <div className="mt-4 flex gap-4 text-sm">
          <a
            href="mailto:kinshuk048@gmail.com"
            className="text-sky-300 hover:text-sky-200"
          >
            Email
          </a>
          <a
            href="https://linkedin.com/in/pratyushkumar123"
            className="text-sky-300 hover:text-sky-200"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </motion.div>
  );
}
