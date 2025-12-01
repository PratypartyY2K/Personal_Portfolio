"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ArrowUp = dynamic(() => import("lucide-react").then((mod) => mod.ArrowUp), {
  ssr: false,
});

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
      className="fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white/90 p-3 shadow-lg transition hover:border-sky-300 hover:text-sky-600 dark:border-slate-700 dark:bg-slate-800/90 dark:hover:bg-slate-700"
    >
      <ArrowUp size={20} className="text-slate-700 dark:text-sky-300" />
      <span className="sr-only">Scroll back to top</span>
    </button>
  );
}
