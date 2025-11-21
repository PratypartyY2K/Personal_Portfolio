"use client";

import Image from "next/image";
import { useParallax } from "@/hooks/useParallax";
import { motion } from "framer-motion";

export function HeroParallaxBackground() {
  const skyOffset = useParallax(0.1);   // very subtle
  const duneOffset = useParallax(0.2);  // a bit more

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Sky layer */}
      <motion.div
        className="absolute inset-x-0 -top-10 h-[60vh]"
        style={{ translateY: skyOffset * -1 }} // moves slightly opposite to scroll
      >
        <Image
          src="/sky.png"
          alt="Ghibli style sky"
          fill
          priority
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* Dunes layer */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[40vh]"
        style={{ translateY: duneOffset * -1 }}
      >
        <Image
          src="/dunes.png"
          alt="Alto's Odyssey dunes"
          fill
          priority
          className="object-cover opacity-90"
        />
      </motion.div>

      {/* Gradient overlay to blend into dark body bg */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950" />
    </div>
  );
}
