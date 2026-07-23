"use client";

import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  FolderKanban,
  Home,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

import { useTheme } from "./theme-provider";

const navigationItems = [
  { href: "#top", id: "top", label: "Home", icon: Home },
  { href: "#projects", id: "projects", label: "Projects", icon: FolderKanban },
  {
    href: "#experience",
    id: "experience",
    label: "Experience",
    icon: BriefcaseBusiness,
  },
  { href: "#contact", id: "contact", label: "Contact", icon: Mail },
] as const;

export function MobileNavigation() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("top");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.4;
      let currentSection = "top";

      for (const item of navigationItems) {
        const section = document.getElementById(item.id);
        if (section && section.getBoundingClientRect().top <= marker) {
          currentSection = item.id;
        }
      }

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const resolvedTheme = mounted ? theme : "dark";

  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-3 bottom-3 z-50 rounded-[1.4rem] border border-slate-200/90 bg-white/92 px-1.5 pb-[max(0.375rem,env(safe-area-inset-bottom))] pt-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.2)] backdrop-blur-xl dark:border-slate-700/80 dark:bg-slate-950/92 md:hidden"
    >
      <div className="grid grid-cols-5 items-stretch">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;

          return (
            <a
              key={item.id}
              href={item.href}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-11 items-center justify-center rounded-2xl px-1 transition ${
                isActive
                  ? "accent-text bg-slate-100 dark:bg-slate-900"
                  : "text-slate-500 dark:text-slate-400"
              }`}
            >
              <Icon size={18} strokeWidth={isActive ? 2.4 : 2} aria-hidden />
            </a>
          );
        })}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
          className="flex min-h-11 items-center justify-center rounded-2xl px-1 text-slate-500 transition active:bg-slate-100 dark:text-slate-400 dark:active:bg-slate-900"
        >
          <span suppressHydrationWarning>
            {resolvedTheme === "dark" ? (
              <Sun size={18} aria-hidden />
            ) : (
              <Moon size={18} aria-hidden />
            )}
          </span>
        </button>
      </div>
    </nav>
  );
}
