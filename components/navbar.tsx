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
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/95 dark:border-slate-800/70 dark:bg-slate-950/90">
        <nav className="mx-auto grid h-14 max-w-6xl grid-cols-[auto,1fr,auto] items-center px-4 text-sm">
          <Link
            href="#top"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-md transition hover:shadow-lg dark:bg-slate-100 dark:text-slate-900"
            aria-label="Pratyush Kumar home"
          >
            PK
          </Link>

          <div className="hidden md:flex items-center justify-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-2.5 py-1 text-slate-700 transition-colors duration-300 hover:text-sky-700 dark:text-slate-200/90 dark:hover:text-sky-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end gap-2">
            <ResumeDownloadLink className="rounded-full border border-sky-200/70 px-3 py-1 text-sky-700 transition hover:border-sky-400 hover:bg-sky-50 hover:text-slate-900 dark:border-sky-500/40 dark:text-sky-300 dark:hover:border-sky-400 dark:hover:bg-sky-500/10">
              Resume
            </ResumeDownloadLink>
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center justify-end gap-3">
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
              className="rounded-full border border-sky-200/70 px-3 py-1 text-base font-semibold tracking-wide text-sky-700 transition hover:border-sky-400 hover:bg-sky-50 hover:text-slate-900 dark:border-sky-500/40 dark:text-sky-300 dark:hover:border-sky-400 dark:hover:bg-sky-500/10"
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
