import Link from "next/link";

import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#skills", label: "Skills" },
];

export function Navbar() {
  return (
      <header className="fixed inset-x-0 top-0 z-50 hidden px-6 pt-3 md:block">
        <nav className="mx-auto grid h-[4.5rem] max-w-[90rem] grid-cols-[auto,1fr,auto] items-center rounded-[1.7rem] border border-slate-200/90 bg-white/92 px-4 text-sm shadow-[0_22px_60px_rgba(15,23,42,0.12)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/88 xl:px-6">
          <Link
            href="#top"
            className="inline-flex items-center gap-3 rounded-full pr-3 transition hover:bg-slate-100/90 dark:hover:bg-slate-900/70"
            aria-label="Pratyush Kumar home"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white shadow-md dark:bg-slate-100 dark:text-slate-900">
              PK
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-slate-900 dark:text-slate-100">Pratyush Kumar</span>
            </span>
          </Link>

          <div className="flex items-center justify-center gap-3">
            <span className="rounded-full border border-slate-200/80 bg-slate-50/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500 dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-400">
              Jump to
            </span>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="accent-outline rounded-full border border-transparent px-3.5 py-2 text-slate-800 transition-all duration-300 dark:text-slate-100"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-end gap-2">
            <ThemeToggle />
          </div>
        </nav>
      </header>
  );
}
