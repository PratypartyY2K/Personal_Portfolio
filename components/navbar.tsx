"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ResumeDownloadLink } from "./resume-download-link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/70">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold tracking-tight text-slate-900 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
          >
            pratyush.dev
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-4 text-slate-700 dark:text-slate-200/90">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-sky-500 dark:hover:text-sky-300">
                {l.label}
              </a>
            ))}
            <ResumeDownloadLink className="hover:text-sky-500 dark:hover:text-sky-300">
              Resume
            </ResumeDownloadLink>
            <ThemeToggle />
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-slate-700 dark:text-slate-200 focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 inset-x-0 z-40 border-b border-slate-200 bg-white/95 text-slate-900 backdrop-blur-md dark:border-slate-800/70 dark:bg-slate-950/90 dark:text-slate-100 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-base hover:text-sky-500 dark:hover:text-sky-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <ResumeDownloadLink
                className="text-base hover:text-sky-500 dark:hover:text-sky-300"
                onClick={() => setOpen(false)}
              >
                Resume
              </ResumeDownloadLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
