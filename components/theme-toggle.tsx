"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const HINT_STORAGE_KEY = "pk-theme-toggle-hint";
const HINT_TIMEOUT_MS = 6000;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    const hasSeenHint = window.localStorage.getItem(HINT_STORAGE_KEY);
    if (hasSeenHint) {
      return;
    }
    setShowHint(true);
    const timer = window.setTimeout(() => {
      window.localStorage.setItem(HINT_STORAGE_KEY, "1");
      setShowHint(false);
    }, HINT_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const handleToggle = () => {
    if (typeof window !== "undefined" && showHint) {
      window.localStorage.setItem(HINT_STORAGE_KEY, "1");
    }
    setShowHint(false);
    toggleTheme();
  };

  const hintMessage = "Use this button to switch between light and dark themes.";

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Toggle color theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 shadow-sm transition-all hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-400"
      >
        <span suppressHydrationWarning>
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </span>
      </button>
      {showHint && (
        <div className="pointer-events-none absolute -bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white shadow-lg ring-1 ring-black/10 dark:bg-slate-100 dark:text-slate-900 dark:ring-white/30">
          {hintMessage}
        </div>
      )}
      <div aria-live="polite" className="sr-only">
        {showHint ? hintMessage : ""}
      </div>
    </div>
  );
}
