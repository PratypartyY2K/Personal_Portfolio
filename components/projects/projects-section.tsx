"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { ProjectParticles } from "./ProjectParticles";

const projects = [
  {
    title: "Distributed Key–Value Store (ABD Protocol)",
    description:
      "A fault-tolerant key–value store implementing the ABD algorithm with strong consistency using quorum-based reads/writes, gRPC servers, and Protobuf message formats.",
    tech: ["C++", "gRPC", "Protobuf", "ABD Algorithm", "Distributed Systems"],
    link: "https://github.com/PratypartyY2K/distributed-key-value-store",
  },
  {
    title: "Custom MapReduce Framework",
    description:
      "Designed a multi-threaded MapReduce engine supporting dynamic task assignment, worker threads, barriers, and performance benchmarking for large datasets.",
    tech: ["C++", "Concurrency", "MultiThreading", "Protobuf", "AWS EC2", "gRPC"],
    link: "https://github.com/PratypartyY2K/cpp-mapreduce-framework",
  },
  {
    title: "Clipboard Manager · Copy-Paste Tool",
    description:
      "A PyQt6-based clipboard history manager supporting multi-app copy tracking, searchable UI, and a clean, responsive layout for productivity workflows.",
    tech: ["Python", "PyQt6"],
    link: "https://github.com/PratypartyY2K/copy-paste-tool",
  },
  {
    title: "Vaccine Slot Monitoring App",
    description:
      "A utility app that periodically checks vaccination slot availability through the CoWIN API, alerts users in real-time, and provides clean UI-driven access to live data.",
    tech: ["Django", "Scikit-Learn", "Random Forest", "APIs"],
    link: "https://github.com/PratypartyY2K/Vaccine",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Projects</h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.1 }}
              className="relative group rounded-2xl border border-slate-800 bg-slate-900/70 backdrop-blur-md p-6 shadow-xl hover:border-sky-400/40 hover:bg-slate-900/80 transition-all"
            >
              {/* Mini Spark Particles */}
              <ProjectParticles />

              {/* Card Content */}
              <div className="relative z-10">
                  <h3 className="text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-slate-800 px-2 py-1 text-xs text-sky-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    className="mt-6 inline-flex items-center gap-2 text-sm text-sky-300 hover:text-sky-200"
                  >
                    <Github size={16} />
                    View Project
                  </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
