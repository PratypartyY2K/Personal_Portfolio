"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

const PARTICLE_COUNT = 14;
const PARTICLE_SEED = 7331;

export function ProjectParticles() {
  const particles = useMemo(() => createParticles(PARTICLE_COUNT, PARTICLE_SEED), []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, particle.floatDistance],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            repeatType: "loop",
            delay: particle.delay,
          }}
          className="absolute rounded-full bg-sky-400/70"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            filter: "drop-shadow(0 0 6px rgba(56,189,248,0.8))",
          }}
        />
      ))}
    </div>
  );
}

interface ParticleConfig {
  id: number;
  size: number;
  x: number;
  y: number;
  delay: number;
  duration: number;
  floatDistance: number;
}

function createParticles(count: number, seed: number): ParticleConfig[] {
  const rand = mulberry32(seed);
  return Array.from({ length: count }, (_, id) => ({
    id,
    size: rand() * 4 + 2,
    x: rand() * 100,
    y: rand() * 100,
    delay: rand() * 4,
    duration: 3 + rand() * 3,
    floatDistance: -10 - rand() * 10,
  }));
}

// Lightweight deterministic PRNG so SSR + CSR render identical particle positions
function mulberry32(seed: number) {
  let t = seed;
  return () => {
    t += 0x6d2b79f5;
    let result = Math.imul(t ^ (t >>> 15), t | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}
