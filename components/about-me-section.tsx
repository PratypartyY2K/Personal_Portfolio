"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

export function AboutSection() {
  return (
    <SectionContainer id="about">
      {/* Soft cyan glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50">
          About Me
        </h2>

        <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div>
            <p className="text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              I’m Pratyush — a backend & distributed systems engineer passionate about reliability, clean design, and performance. I enjoy breaking down complex systems into elegant solutions, whether I’m building distributed storage, tuning C++ performance, or designing intuitive web experiences.
            </p>

            <p className="mt-4 text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              Outside engineering you’ll find me playing <span className="text-sky-400 font-medium">competitive badminton</span>,
              nerding out over coffee gear, or unwinding with anime — the hobbies
              that keep me curious and disciplined.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-xl backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Recent highlights
            </p>
            <ul className="mt-3 space-y-2">
              <li>• Built an ABD-based distributed key–value store.</li>
              <li>• Designed a custom MapReduce engine in C++.</li>
              <li>• Automated backend test suites and pipelines at Enphase.</li>
              <li>• Published research on partial face image encryption.</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </SectionContainer>
  );
}
