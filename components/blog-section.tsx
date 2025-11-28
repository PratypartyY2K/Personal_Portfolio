"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./section-container";

const blogPosts = [
  {
    title: "System Design Notes (Coming Soon)",
    description:
      "Preparation jotnotes, key concepts, and common patterns for system design interviews.",
    tag: "Interview Prep",
  },
  {
    title: "LeetCode Problem Solutions (Coming Soon)",
    description:
      "A collection of solved coding problems from LeetCode with explanations and optimizations.",
    tag: "Interview Prep",
  },
  {
    title: "Journal (Coming Soon)",
    description:
      "Personal reflections, learning experiences, and growth as a Masters student and a software engineer.",
    tag: "Personal",
  },
];

export function BlogSection() {
  return (
    <SectionContainer id="blog" className="relative py-28 bg-white dark:bg-transparent">
      
      {/* Soft glow */}
      <div className="absolute -top-24 left-0 right-0 h-32 
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_70%)]
        blur-xl pointer-events-none" />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-50"
      >
        Blog
      </motion.h2>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
        Technical writeups, project notes, and engineering thoughts.
      </p>

      <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {blogPosts.map((post, idx) => (
          <motion.div
            key={post.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white/90 
                       backdrop-blur p-6 shadow-xl transition-all hover:border-sky-400/40 
                       hover:shadow-2xl dark:border-slate-800/70 dark:bg-slate-900/60"
          >
            <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-sky-600 dark:bg-slate-800 dark:text-sky-300">
              {post.tag}
            </span>

            <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-slate-50">
              {post.title}
            </h3>

            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">{post.description}</p>

            <div className="mt-4 text-xs text-slate-500 italic dark:text-slate-400">
              Coming soon
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
