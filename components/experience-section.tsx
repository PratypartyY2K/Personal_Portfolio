import { ExperienceTimeline } from "./experience/ExperienceTimeline";
import { ProfileCard } from "./experience/ProfileCard";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-28 bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-slate-900 dark:text-white">
          Experience
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Timeline */}
          <div className="md:col-span-2">
            <ExperienceTimeline />
          </div>

          {/* Profile card */}
          <div className="">
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  );
}
