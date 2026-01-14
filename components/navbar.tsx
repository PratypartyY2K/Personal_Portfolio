"use client";

import { useEffect, useState } from "react";
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
  const [activeHref, setActiveHref] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      if (!mediaQuery.matches) {
        setActiveHref("");
        if (observer) observer.disconnect();
        observer = null;
        return;
      }

      const sections = links
        .map((link) => document.getElementById(link.href.slice(1)))
        .filter((section): section is HTMLElement => Boolean(section));

      if (!sections.length) return;

      const ratioById = new Map<string, number>();

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            ratioById.set(entry.target.id, entry.intersectionRatio);
          });

          const mostVisible = sections.reduce((prev, current) => {
            const prevRatio = ratioById.get(prev.id) ?? 0;
            const currentRatio = ratioById.get(current.id) ?? 0;
            return currentRatio > prevRatio ? current : prev;
          }, sections[0]);

          if (mostVisible?.id) {
            setActiveHref(`#${mostVisible.id}`);
          }
        },
        {
          rootMargin: "-25% 0px -55% 0px",
          threshold: [0, 0.2, 0.4, 0.6, 0.8],
        }
      );

      sections.forEach((section) => observer?.observe(section));
    };

    setupObserver();

    const handleChange = () => {
      if (observer) observer.disconnect();
      observer = null;
      setupObserver();
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      if (observer) observer.disconnect();
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 border-b border-slate-200 bg-white/95 dark:border-slate-800/70 dark:bg-slate-950/90">
        <nav className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 text-sm">
          <Link
            href="/"
            className="font-semibold tracking-tight text-slate-900 hover:text-sky-700 dark:text-sky-200 dark:hover:text-sky-100"
          >
            pratyush.dev
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {links.map((l) => {
              const isActive = activeHref === l.href;

              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
                    isActive
                      ? "bg-sky-100 font-semibold text-sky-700 dark:bg-sky-500/20 dark:text-sky-200"
                      : "text-slate-700 hover:text-sky-700 dark:text-slate-200/90 dark:hover:text-sky-200"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <ResumeDownloadLink className="rounded-full border border-sky-200/70 px-3 py-1 text-sky-700 transition hover:border-sky-400 hover:bg-sky-50 hover:text-slate-900 dark:border-sky-500/40 dark:text-sky-300 dark:hover:border-sky-400 dark:hover:bg-sky-500/10">
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
