"use client";

import { motion } from "framer-motion";
import { SectionContainer } from "./section-container";

const skills = {
  "Languages": ["C/C++", "Python", "Java", "JavaScript", "Ruby", "TypeScript"],
  "Backend & Distributed Systems": [
    "gRPC",
    "Protobuf",
    "RESTful APIs",
    "AWS (EC2)",
  ],
  "Frameworks": [
    "Ruby on Rails",
    "Node.js",
    "Express",
    "Django",
    "PyQt6",
  ],
  "Dev Tools": [
    "Git",
    "Linux",
    "Jenkins",
    "Selenium",
  ],
  "Database Systems": [
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "MySQL",
  ],
  "Soft Skills": [
    "Effective Communication",
    "Team Collaboration",
    "Problem-Solving",
    "Adaptability",
    "Time Management",
  ],
  "Frontend": [
    "Next.js",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "jQuery",
    "Vanilla JavaScript",
  ],
  "Testing & Debugging": [
    "Unit Testing",
    "Integration Testing",
    "Debugging Tools",
    "Performance Optimization",
    "Selenium",
  ],
};

export function SkillsSection() {
  return (
    <SectionContainer id="skills" className="relative py-28">
      {/* Subtle top glow */}
      <div className="absolute -top-20 left-0 right-0 h-32
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_75%)]
        blur-xl pointer-events-none"
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-slate-50"
      >
        Skills
      </motion.h2>

      <p className="mt-2 text-sm text-slate-300/90">
        Technologies I use to build distributed systems, full-stack applications,
        and backend infrastructure.
      </p>

      <div className="mt-10 grid gap-12 md:grid-cols-2">
        {Object.entries(skills).map(([category, list], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h3 className="text-lg font-semibold text-slate-200">{category}</h3>

            <div className="mt-4 flex flex-wrap gap-2">
              {list.map((skill) => (
                <div
                  key={skill}
                  className="rounded-md border border-slate-700/70 bg-slate-900/60
                             px-3 py-1 text-xs text-sky-300 backdrop-blur-sm
                             shadow-[0_0_10px_rgba(56,189,248,0.05)]
                             hover:shadow-[0_0_14px_rgba(56,189,248,0.25)]
                             transition-all"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
}
