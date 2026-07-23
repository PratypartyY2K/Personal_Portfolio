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
      className="accent-solid fixed bottom-20 right-6 z-50 hidden items-center justify-center rounded-full p-3 text-sm font-semibold transition sm:gap-2 sm:px-4 sm:py-3 md:inline-flex"
      aria-label="Contact"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline">Contact</span>
    </a>
  );
}
