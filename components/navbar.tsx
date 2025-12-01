"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ResumeDownloadLink } from "./resume-download-link";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/95 dark:border-slate-800/70 dark:bg-slate-950/90">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm">
          <Link
            href="/"
            className="font-semibold tracking-tight text-slate-900 hover:text-sky-600 dark:text-sky-300 dark:hover:text-sky-200"
          >
            pratyush.dev
          </Link>

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

          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              className="text-slate-700 dark:text-slate-200 focus:outline-none"
              onClick={() => setOpen((prev) => !prev)}
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              {open ? <X aria-hidden size={26} /> : <Menu aria-hidden size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {open && (
        <div
          id="mobile-navigation"
          className="fixed top-14 inset-x-0 z-40 border-b border-slate-200 bg-white text-slate-900 shadow-lg dark:border-slate-800/70 dark:bg-slate-950 dark:text-slate-100 md:hidden"
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
        </div>
      )}
    </>
  );
}
