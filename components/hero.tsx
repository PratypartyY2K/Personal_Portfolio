"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "framer-motion";
import { NetworkGraph } from "./three/NetworkGraph";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[20vh] lg:min-h-[35vh] overflow-visible bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* 3D BACKGROUND */}
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 14], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 6, 8]} intensity={1.2} />
          <NetworkGraph />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.4}
          />
        </Canvas>
      </div>

      {/* GRADIENT GLOW BEHIND TEXT */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-slate-950/85 dark:to-slate-950" />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 pb-16 pt-20 text-slate-900 dark:text-slate-50 md:gap-10 md:pb-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pb-32">
        {/* Left: Text */}
        <motion.div
          className="w-full max-w-3xl text-center md:text-left"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-sky-300/80">
            MSCS @ Penn State · Backend & Distributed Systems
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-tight md:text-5xl">
            Hi, I&apos;m{" "}
            <span className="text-sky-300">Pratyush Kumar</span>.
            <br />
            I build reliable distributed systems and thoughtful user
            experiences.
          </h1>

          <p className="mt-4 text-sm md:text-base text-slate-600 dark:text-slate-200/90">
            Distributed systems engineer shaping resilient backend platforms and
            thoughtful UX. MSCS @ Penn State & formerly scaling energy software
            at Enphase.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-sky-500 text-slate-950 hover:bg-sky-400"
            >
              <a href="#projects">View Projects</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-200 bg-white/85 text-slate-900 backdrop-blur hover:bg-white dark:border-slate-600/80 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800/60"
            >
              <a href="#about">About Me</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400/90">
            Currently looking for Summer 2026 Software Engineering internships
            (backend / distributed systems / full-stack).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
