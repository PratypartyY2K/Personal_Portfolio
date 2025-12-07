"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const HINT_TIMEOUT_MS = 6000;

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  // tooltip hidden by default to avoid unexpected overlays; it can be enabled programmatically
  const [showHint, setShowHint] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const raf = window.requestAnimationFrame(() => setMounted(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (!showHint || typeof window === "undefined") return;
    const timer = window.setTimeout(() => {
      setShowHint(false);
    }, HINT_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [showHint]);

  const handleToggle = () => {
    setShowHint(false);
    toggleTheme();
  };

  const resolvedTheme = mounted ? theme : "dark";
  const hintMessage = resolvedTheme === "dark" ? "Change to light Mode" : "Change to dark Mode";

  return (
    <div className="relative inline-flex">
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Toggle color theme"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 shadow-sm transition-all hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100 dark:hover:border-sky-400"
      >
        <span suppressHydrationWarning>
          {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </span>
      </button>
      {showHint && (
        <div className="pointer-events-none absolute right-0 top-full mt-2 max-w-[240px] rounded-full bg-slate-900 px-3 py-1 text-left text-xs font-medium leading-snug text-white shadow-lg ring-1 ring-black/10 dark:bg-slate-100 dark:text-slate-900 dark:ring-white/30 xl:left-1/2 xl:right-auto xl:-translate-x-1/2 xl:text-center">
          {hintMessage}
        </div>
      )}
      <div aria-live="polite" className="sr-only">
        {showHint ? hintMessage : ""}
      </div>
    </div>
  );
}
