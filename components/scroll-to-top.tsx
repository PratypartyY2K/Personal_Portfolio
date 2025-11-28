"use client";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white/80 p-3 shadow-lg backdrop-blur-md transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/80 dark:hover:bg-slate-700"
    >
      <ArrowUp size={20} className="text-slate-700 dark:text-sky-300" />
    </button>
  );
}
