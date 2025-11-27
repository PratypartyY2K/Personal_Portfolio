"use client";

import { motion } from "framer-motion";

export function ProjectParticles() {
  const particles = Array.from({ length: 14 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; // 2–6px
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const delay = Math.random() * 4;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -10 - Math.random() * 10],
            }}
            transition={{
              duration: 3 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "loop",
              delay,
            }}
            className="absolute rounded-full bg-sky-400/70"
            style={{
              width: size,
              height: size,
              left: `${x}%`,
              top: `${y}%`,
              filter: "drop-shadow(0 0 6px rgba(56,189,248,0.8))",
            }}
          />
        );
      })}
    </div>
  );
}
