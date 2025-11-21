"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 inset-x-0 z-30 border-b border-slate-800/80 bg-slate-950/70 backdrop-blur"
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 text-sm">
        <Link href="/" className="font-semibold tracking-tight text-sky-200">
          pratyush.dev
        </Link>
        <div className="flex gap-5 text-slate-200/80">
          <a href="#projects" className="hover:text-sky-300">Projects</a>
          <a href="#experience" className="hover:text-sky-300">Experience</a>
          <a href="#skills" className="hover:text-sky-300">Skills</a>
          <a href="#blog" className="hover:text-sky-300">Blog</a>
          <a href="#contact" className="hover:text-sky-300">Contact</a>
        </div>
      </nav>
    </motion.header>
  );
}
