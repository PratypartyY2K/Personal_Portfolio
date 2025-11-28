"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ResumeDownloadLink } from "./resume-download-link";

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
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm">
          {/* Logo */}
          <Link
            href="/"
            className="font-semibold tracking-tight text-sky-300 hover:text-sky-200"
          >
            pratyush.dev
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-6 text-slate-200/90">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="hover:text-sky-300">
                {l.label}
              </a>
            ))}
            <ResumeDownloadLink className="hover:text-sky-300">
              Resume
            </ResumeDownloadLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-slate-200 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
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
            className="fixed top-14 inset-x-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/70 md:hidden"
          >
            <div className="flex flex-col px-6 py-4 space-y-4 text-slate-100">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-base hover:text-sky-300"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <ResumeDownloadLink
                className="text-base hover:text-sky-300"
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
