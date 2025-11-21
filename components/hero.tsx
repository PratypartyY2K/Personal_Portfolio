"use client";

import { motion } from "framer-motion";
import { HeroParallaxBackground } from "./parallax-layers";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-4">
      <HeroParallaxBackground />

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-sky-200/80">
            MSCS @ Penn State · Backend & Distributed Systems
          </p>

          <h1 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight text-slate-50">
            Hi, I’m <span className="text-sky-300">Pratyush Kumar</span>.
            <br />
            I build reliable distributed systems and thoughtful user experiences.
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-200/90">
            Associate Software Engineer at Enphase, incoming MSCS student, and
            badminton & anime enjoyer. I work on MapReduce frameworks, ABD
            key–value stores, and event-driven backends.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="bg-sky-500 hover:bg-sky-400 text-slate-950"
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-500/70 bg-slate-950/60 text-slate-100 backdrop-blur"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-300/80">
            Currently looking for Summer 2026 Software Engineering internships (backend / distributed systems / full-stack).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
