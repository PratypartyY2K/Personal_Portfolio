"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 shadow-sm transition-all hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-400"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
