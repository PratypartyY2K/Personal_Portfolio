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
type Accent = "sky" | "emerald" | "amber" | "rose";

interface ThemeContextValue {
  theme: Theme;
  accent: Accent;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  setAccent: (accent: Accent) => void;
}

const THEME_STORAGE_KEY = "pk-theme";
const ACCENT_STORAGE_KEY = "pk-accent";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function getPreferredTheme(): Theme {
  if (typeof window === "undefined") {
    return "dark";
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return "dark";
}

function getPreferredAccent(): Accent {
  if (typeof window === "undefined") {
    return "sky";
  }

  const stored = window.localStorage.getItem(ACCENT_STORAGE_KEY) as Accent | null;
  if (stored === "sky" || stored === "emerald" || stored === "amber" || stored === "rose") {
    return stored;
  }

  return "sky";
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

function getInitialAccent(): Accent {
  if (typeof document === "undefined") {
    return "sky";
  }

  const datasetAccent = document.documentElement.dataset.accent as Accent | undefined;
  if (datasetAccent === "sky" || datasetAccent === "emerald" || datasetAccent === "amber" || datasetAccent === "rose") {
    return datasetAccent;
  }

  return getPreferredAccent();
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());
  const [accent, setAccent] = useState<Accent>(() => getInitialAccent());

  const applyTheme = useCallback((value: Theme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(value);
    root.dataset.theme = value;
    window.localStorage.setItem(THEME_STORAGE_KEY, value);
  }, []);

  const applyAccent = useCallback((value: Accent) => {
    const root = document.documentElement;
    root.dataset.accent = value;
    window.localStorage.setItem(ACCENT_STORAGE_KEY, value);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    applyTheme(theme);
  }, [theme, applyTheme]);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }
    applyAccent(accent);
  }, [accent, applyAccent]);

  const value = useMemo(
    () => ({
      theme,
      accent,
      toggleTheme: () => setTheme((prev) => (prev === "dark" ? "light" : "dark")),
      setTheme,
      setAccent,
    }),
    [accent, theme]
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
