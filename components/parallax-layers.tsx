"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";

export function HeroParallaxBackground() {
  const skyOffset = useParallax(0.06);
  const duneOffset = useParallax(0.12);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* SKY */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[50vh] md:h-[55vh]"
        style={{ translateY: skyOffset * -1 }}
      >
        <Image
          src="/sky.png"
          alt="Sky"
          fill
          priority
          className="object-cover object-top"
        />
      </motion.div>

      {/* DUNES */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[38vh] md:h-[40vh]"
        style={{ translateY: duneOffset * -1 }}
      >
        <Image
          src="/dunes.png"
          alt="Dunes"
          fill
          priority
          className="object-cover object-bottom"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/0 via-slate-950/20 to-slate-950/95" />
    </div>
  );
}
