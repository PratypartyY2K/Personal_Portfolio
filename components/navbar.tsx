"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6">
        <nav className="mx-auto grid h-16 max-w-[90rem] grid-cols-[auto,1fr,auto] items-center rounded-2xl border border-slate-200/80 bg-white/82 px-4 text-sm shadow-[0_16px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/72 xl:px-6">
          <Link
            href="#top"
            className="inline-flex items-center gap-3 rounded-full pr-3 transition hover:bg-slate-100/80 dark:hover:bg-slate-900/70"
            aria-label="Pratyush Kumar home"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-md dark:bg-slate-100 dark:text-slate-900">
              PK
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">Pratyush Kumar</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center justify-center gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-slate-700 transition-colors duration-300 hover:bg-slate-100 hover:text-sky-700 dark:text-slate-200/90 dark:hover:bg-slate-900/80 dark:hover:text-sky-200"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end gap-2">
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
          className="fixed inset-x-3 top-[4.75rem] z-40 rounded-2xl border border-slate-200 bg-white/96 text-slate-900 shadow-[0_16px_40px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/96 dark:text-slate-100 md:hidden"
        >
          <div className="flex flex-col space-y-4 px-6 py-5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-xl px-2 py-1 text-base transition hover:bg-slate-100 hover:text-sky-500 dark:hover:bg-slate-900 dark:hover:text-sky-300"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
