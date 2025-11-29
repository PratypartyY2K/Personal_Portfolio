"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const STORAGE_KEY = "pk-theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches ?? true;
  return prefersDark ? "dark" : "light";
}

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  const datasetTheme = document.documentElement.dataset.theme;
  if (datasetTheme === "light" || datasetTheme === "dark") {
    return datasetTheme;
  }

  return getPreferredTheme();
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  const applyTheme = useCallback((value: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    applyTheme(theme);
  }, [theme, applyTheme]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      setTheme,
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
