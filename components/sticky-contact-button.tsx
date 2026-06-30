"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function StickyContactButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!show) return null;

  return (
    <a
      href="#contact"
      className="fixed bottom-20 right-6 z-50 inline-flex items-center justify-center rounded-full bg-sky-600 p-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(14,165,233,0.35)] transition hover:bg-sky-500 hover:shadow-[0_22px_48px_rgba(14,165,233,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 dark:bg-sky-500 dark:hover:bg-sky-400 sm:gap-2 sm:px-4 sm:py-3"
      aria-label="Contact"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Contact</span>
    </a>
  );
}
