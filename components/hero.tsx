"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { Button } from "./ui/button";

const roles = ["Backend Engineer", "Performance Engineer", "Distributed Systems"];

export function Hero() {
  const headingId = "hero-heading";
  const [roleIndex, setRoleIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIsTransitioning(true);

      window.setTimeout(() => {
        setRoleIndex((current) => (current + 1) % roles.length);
        setIsTransitioning(false);
      }, 320);
    }, 2400);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-slate-950/85 dark:to-slate-950" />

      <div className="relative z-10 mx-auto flex w-full max-w-[90rem] flex-col items-center px-4 pb-14 pt-24 text-center text-slate-900 sm:pb-16 md:pb-20 md:pt-24 lg:pb-24 lg:pt-28 dark:text-slate-50">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-sky-300/80 sm:text-xs sm:tracking-[0.25em]">
          Formerly at Enphase Energy · MSCS @ Penn State
        </p>

        <div className="mt-8 relative w-full max-w-[15rem] overflow-hidden rounded-full border border-slate-200 bg-white/85 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 sm:max-w-[17rem] md:max-w-[19rem] xl:max-w-[22rem] 2xl:max-w-[24rem]">
          <div className="pointer-events-none absolute -inset-8 rounded-full bg-sky-300/25 blur-3xl dark:bg-sky-500/15" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.14),_transparent_70%)]" />
          <div className="relative aspect-square w-full">
            <Image
              src="/self_portrait.webp"
              alt="Pratyush Kumar portrait"
              fill
              sizes="(min-width: 1536px) 24rem, (min-width: 1280px) 22rem, (min-width: 768px) 19rem, 17rem"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1
          id={headingId}
          className="mt-8 max-w-5xl text-[2.5rem] font-semibold leading-[0.98] tracking-tight sm:text-5xl md:text-6xl xl:text-[5.4rem]"
        >
          Pratyush Kumar
        </h1>

        <div className="mt-5 h-[2rem] overflow-hidden sm:h-[2.4rem] md:h-[2.8rem]">
          <div
            className={`transition-transform duration-300 ease-out ${
              isTransitioning ? "-translate-y-full" : "translate-y-0"
            }`}
          >
            <p className="h-[2rem] text-xl font-medium text-sky-600 dark:text-sky-300 sm:h-[2.4rem] sm:text-2xl md:h-[2.8rem] md:text-3xl">
              {roles[roleIndex]}
            </p>
            <p className="h-[2rem] text-xl font-medium text-sky-600 dark:text-sky-300 sm:h-[2.4rem] sm:text-2xl md:h-[2.8rem] md:text-3xl">
              {roles[(roleIndex + 1) % roles.length]}
            </p>
          </div>
        </div>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300/90 sm:text-base">
          I build software systems that are fast, reliable, and built to hold up under real-world use.
        </p>

        <Button
          asChild
          size="lg"
          className="mt-8 w-full rounded-full bg-sky-500 text-slate-950 transition hover:bg-sky-400 sm:w-auto"
        >
          <a href="#contact">Get in Touch</a>
        </Button>
      </div>
    </section>
  );
}
