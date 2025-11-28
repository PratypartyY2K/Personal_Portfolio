"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";

const STORAGE_KEY = "resume-download-count";

type Listener = () => void;

const resumeDownloadStore = {
  initialized: false,
  count: 0,
  listeners: new Set<Listener>(),
  subscribe(listener: Listener) {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  },
  getSnapshot() {
    return this.count;
  },
  init() {
    if (this.initialized || typeof window === "undefined") {
      return;
    }
    const storedValue = Number(window.localStorage.getItem(STORAGE_KEY) ?? "0");
    this.count = Number.isFinite(storedValue) ? storedValue : 0;
    this.initialized = true;
    this.emit();
  },
  emit() {
    this.listeners.forEach((listener) => listener());
  },
  increment() {
    this.count += 1;
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, String(this.count));
    }
    this.emit();
  },
};

export function useResumeDownloadTracker() {
  const count = useSyncExternalStore(
    (listener) => resumeDownloadStore.subscribe(listener),
    () => resumeDownloadStore.getSnapshot(),
    () => 0
  );

  useEffect(() => {
    resumeDownloadStore.init();
  }, []);

  const trackDownload = useCallback(() => {
    resumeDownloadStore.increment();
  }, []);

  return { count, trackDownload };
}
