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

// Return the browser window when available, null on the server.
const getClientWindow = (): ExtendedWindow | null => {
  if (typeof window === "undefined") return null;
  return window as ExtendedWindow;
};

const addMediaQueryListener = (mq: MediaQueryList, handler: () => void) => {
  const listener = () => handler();
  if (typeof mq.addEventListener === "function") {
    mq.addEventListener("change", listener);
    return () => mq.removeEventListener("change", listener);
  }
  if (typeof mq.addListener === "function") {
    mq.addListener(listener);
    return () => mq.removeListener(listener);
  }
  return () => {};
};

const HeroGraph = dynamic(
  () => import("./hero-graph").then((mod) => mod.HeroGraph),
  { ssr: false, loading: () => null }
);

export function HeroGraphTrigger() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [fontsReady, setFontsReady] = useState(() => {
    if (typeof document === "undefined") return false;
    if (!("fonts" in document)) return true;
    return document.fonts.status === "loaded";
  });
  const [isVisible, setIsVisible] = useState(false);
  const [idleReady, setIdleReady] = useState(false);
  const [canRender, setCanRender] = useState(false);

  // Wait a short idle period before allowing heavy work
  useEffect(() => {
    const w = getClientWindow();
    if (!w) return;
    if (typeof w.requestIdleCallback === "function") {
      const id = w.requestIdleCallback(() => setIdleReady(true), { timeout: 500 });
      return () => w.cancelIdleCallback?.(id);
    }
    const timer = w.setTimeout(() => setIdleReady(true), 500);
    return () => w.clearTimeout(timer);
  }, []);

  // Observe visibility (with a RAF fallback)
  useEffect(() => {
    const w = getClientWindow();
    if (!w) return;

    let rafId: number | null = null;
    const node = containerRef.current;
    if (!node) {
      // If we don't have a node, just optimistically mark visible via RAF
      rafId = (w as any).requestAnimationFrame?.(() => setIsVisible(true)) ?? null;
      return () => {
        if (rafId !== null) (w as any).cancelAnimationFrame?.(rafId);
      };
    }

    if (typeof (w as any).IntersectionObserver === "undefined") {
      rafId = (w as any).requestAnimationFrame?.(() => setIsVisible(true)) ?? null;
      return () => {
        if (rafId !== null) (w as any).cancelAnimationFrame?.(rafId);
      };
    }

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
      if (rafId !== null) w.cancelAnimationFrame?.(rafId);
    };
  }, []);

  // Wait for fonts to be ready (with sensible fallbacks)
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!document.fonts) return;
    if (document.fonts.status === "loaded") return;

    let active = true;
    document.fonts.ready.then(() => {
      if (active) setFontsReady(true);
    });

    return () => {
      active = false;
    };
  }, []);

  // Check viewport and reduced-motion preference
  useEffect(() => {
    const w = getClientWindow();
    if (!w) return;

    const desktopQuery = w.matchMedia("(min-width: 1024px)");
    const motionQuery = w.matchMedia("(prefers-reduced-motion: reduce)");

    const update = () => {
      setCanRender(desktopQuery.matches && !motionQuery.matches);
    };

    update();

    const cleanupDesktop = addMediaQueryListener(desktopQuery, update);
    const cleanupMotion = addMediaQueryListener(motionQuery, update);

    return () => {
      cleanupDesktop();
      cleanupMotion();
    };
  }, []);

  const shouldRender = fontsReady && isVisible && idleReady && canRender;

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 opacity-80" aria-hidden>
      {shouldRender ? <HeroGraph /> : null}
    </div>
  );
}
