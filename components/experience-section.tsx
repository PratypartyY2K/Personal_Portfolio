import {
  TimelineList,
  educationTimelineItems,
  experienceTimelineItems,
} from "./experience/ExperienceTimeline";

export function ExperienceSection() {
  const headingId = "experience-heading";
  return (
    <section
      id="experience"
      aria-labelledby={headingId}
      className="relative py-28 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 id={headingId} className="text-3xl font-semibold text-slate-900 dark:text-white">
          Education & Experience
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Education
            </p>
            <div className="mt-6">
              <TimelineList items={educationTimelineItems} />
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Experience
            </p>
            <div className="mt-6">
              <TimelineList items={experienceTimelineItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
