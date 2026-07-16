"use client";

import { useEffect, useState } from "react";
import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

const HINT_TIMEOUT_MS = 6000;
const accents = [
  { value: "sky", label: "Sky", swatch: "bg-sky-500" },
  { value: "emerald", label: "Emerald", swatch: "bg-emerald-500" },
  { value: "amber", label: "Amber", swatch: "bg-amber-500" },
  { value: "rose", label: "Rose", swatch: "bg-rose-500" },
] as const;

export function ThemeToggle() {
  const { accent, setAccent, theme, toggleTheme } = useTheme();
  // tooltip hidden by default to avoid unexpected overlays; it can be enabled programmatically
  const [showHint, setShowHint] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showAccentPicker, setShowAccentPicker] = useState(false);

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
    <div className="relative inline-flex items-center gap-2">
      <div className="relative">
        <button
          type="button"
          onClick={() => setShowAccentPicker((prev) => !prev)}
          aria-label="Change accent color"
          aria-expanded={showAccentPicker}
          className="accent-outline inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
        >
          <Palette size={17} className="accent-text" />
        </button>
        {showAccentPicker && (
          <div className="absolute right-0 top-full mt-2 flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-2 py-2 shadow-[0_18px_40px_rgba(15,23,42,0.16)] backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/95">
            {accents.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  setAccent(option.value);
                  setShowAccentPicker(false);
                }}
                aria-label={`Use ${option.label.toLowerCase()} accent`}
                className={`inline-flex h-7 w-7 items-center justify-center rounded-full border transition ${
                  accent === option.value
                    ? "border-slate-900 ring-2 ring-slate-300 dark:border-white dark:ring-slate-600"
                    : "border-white/60 ring-1 ring-slate-200/80 dark:border-slate-800 dark:ring-slate-700"
                }`}
              >
                <span className={`h-4 w-4 rounded-full ${option.swatch}`} />
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        type="button"
        onClick={handleToggle}
        aria-label="Toggle color theme"
        className="accent-outline inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300/70 bg-white/70 text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-100"
      >
        <span suppressHydrationWarning>
          {resolvedTheme === "dark" ? <Sun size={18} className="accent-text" /> : <Moon size={18} className="accent-text" />}
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
