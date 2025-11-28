"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./section-container";
import { Mail, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  return (
    <SectionContainer id="contact" className="relative py-28 text-center">
      
      <div className="absolute -top-24 left-0 right-0 h-32 
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_70%)]
        blur-xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold text-slate-50"
      >
        Get in Touch
      </motion.h2>

      <p className="mt-2 text-sm text-slate-300/90 max-w-lg mx-auto">
        Feel free to reach out for collaboration, opportunities, or just to say hi.
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <a
          href="mailto:kinshuk048@gmail.com"
          className="flex items-center gap-2 text-sky-300 hover:text-sky-200 text-sm"
        >
          <Mail size={18} /> Email
        </a>

        <a
          href="https://linkedin.com/in/pratyushkumar123"
          target="_blank"
          className="flex items-center gap-2 text-sky-300 hover:text-sky-200 text-sm"
        >
          <Linkedin size={18} /> LinkedIn
        </a>

        <a
          href="https://github.com/PratypartyY2K"
          target="_blank"
          className="flex items-center gap-2 text-sky-300 hover:text-sky-200 text-sm"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </SectionContainer>
  );
}
