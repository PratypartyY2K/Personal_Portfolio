"use client";

import { useEffect, useState } from "react";

export function useParallax(multiplier: number) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setOffset(scrollY * multiplier);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [multiplier]);

  return offset;
}
