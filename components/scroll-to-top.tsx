"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="accent-outline fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white/90 p-3 shadow-lg transition dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-700"
    >
      <ArrowUp size={20} className="accent-text" />
      <span className="sr-only">Scroll back to top</span>
    </button>
  );
}
