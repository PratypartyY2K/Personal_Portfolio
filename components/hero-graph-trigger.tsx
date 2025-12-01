"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

type IdleDeadline = {
  didTimeout: boolean;
  timeRemaining: () => number;
};

type IdleCallback = (deadline: IdleDeadline) => void;

type ExtendedWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (callback: IdleCallback, options?: { timeout?: number }) => number;
    cancelIdleCallback?: (handle: number) => void;
    requestAnimationFrame?: (callback: FrameRequestCallback) => number;
    cancelAnimationFrame?: (handle: number) => void;
  };

const HeroGraph = dynamic(
  () => import("./hero-graph").then((mod) => mod.HeroGraph),
  { ssr: false, loading: () => null }
);

export function HeroGraphTrigger() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fontsReady, setFontsReady] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [idleReady, setIdleReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const idleWindow = window as ExtendedWindow;
    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(() => setIdleReady(true), { timeout: 500 });
      return () => idleWindow.cancelIdleCallback?.(idleId);
    }
    const timer = window.setTimeout(() => setIdleReady(true), 500);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const rafWindow = window as ExtendedWindow;
    let rafId: number | null = null;
    if (!("IntersectionObserver" in rafWindow)) {
      rafId = rafWindow.requestAnimationFrame?.(() => setIsVisible(true)) ?? null;
      return () => {
        if (rafId !== null) rafWindow.cancelAnimationFrame?.(rafId);
      };
    }
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(node);
    return () => {
      observer.disconnect();
      if (rafId !== null) rafWindow.cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    const ready = document.fonts?.ready;
    let rafId: number | null = null;
    const rafWindow = window as ExtendedWindow;
    if (document.fonts?.status === "loaded" || !ready) {
      rafId = rafWindow.requestAnimationFrame?.(() => setFontsReady(true)) ?? null;
      return () => {
        if (rafId !== null) rafWindow.cancelAnimationFrame?.(rafId);
      };
    }
    if (document.fonts.status === "loaded") return;
    let active = true;
    ready.then(() => {
      if (active) setFontsReady(true);
    });
    return () => {
      active = false;
      if (rafId !== null) rafWindow.cancelAnimationFrame?.(rafId);
    };
  }, []);

  const shouldRender = fontsReady && isVisible && idleReady;

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 opacity-80"
      aria-hidden
    >
      {shouldRender ? <HeroGraph /> : null}
    </div>
  );
}
