"use client";

import { useState } from "react";

import {
  TimelineList,
  educationTimelineItems,
  experienceTimelineItems,
} from "./experience/ExperienceTimeline";

export function ExperienceSection() {
  const headingId = "experience-heading";
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemId: string) => {
    setOpenItem((current) => (current === itemId ? null : itemId));
  };

  return (
    <section
      id="experience"
      aria-labelledby={headingId}
      className="section-transition relative bg-gradient-to-b from-slate-100 via-white to-slate-50 py-28 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="relative z-10 mx-auto max-w-[90rem] px-6 xl:px-8 2xl:px-10">
        <h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">
          Education & Experience
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90">
          Where I&apos;ve worked, studied, and what I shipped.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Education
            </p>
            <div className="mt-6">
              <TimelineList
                items={educationTimelineItems}
                listId="education"
                openItem={openItem}
                onToggle={toggleItem}
              />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Experience
            </p>
            <div className="mt-6">
              <TimelineList
                items={experienceTimelineItems}
                listId="experience"
                openItem={openItem}
                onToggle={toggleItem}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
