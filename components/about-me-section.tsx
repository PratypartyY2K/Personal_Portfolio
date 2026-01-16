import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

export function AboutSection() {
  const headingId = "about-heading";
  return (
    <SectionContainer id="about" ariaLabelledby={headingId}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_transparent_70%)]" />

      <div className="relative z-10 space-y-8 md:space-y-6">
        <h2
          id={headingId}
          className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50"
        >
          About Me
        </h2>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-7 md:space-y-6 text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <p className="hidden md:block leading-6 md:leading-5">
              I&apos;m Pratyush, a software engineer focused on resilient backend and distributed systems, with a full-stack edge for
              turning complex infrastructure into clean, maintainable products. I build for real usage, optimizing for performance,
              correctness, and long-term reliability while completing my MS in Computer Science at Penn State (distributed systems and
              cloud computing).
            </p>

            <ul className="space-y-3 md:hidden text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
                <span>Resilient backend + distributed systems, with a full-stack edge.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
                <span>Build for real usage: performance, correctness, long-term reliability.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
                <span>MS CS at Penn State (distributed systems + cloud computing).</span>
              </li>
            </ul>

            <p className="text-slate-600 dark:text-slate-300/90 leading-6 md:leading-5">
              Off-hours: competitive badminton, coffee gear tinkering, and anime marathons.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-4 w-full sm:w-auto bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900"
            >
              <a href="#contact">Start a Conversation</a>
            </Button>
          </div>

          <div className="h-fit self-start rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-xl backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Recent highlights
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Built a{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">high-performance multi-threaded MapReduce framework</span>{" "}
                  in C++.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Implemented and experimented with{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Vicuna / LLM system pipelines</span>{" "}
                  for modern AI workloads
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Started MS in Computer Science at{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Penn State (University Park)</span>{" "}
                  — Fall 2025, GPA: 3.6/4.0
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Completed 2.5+ years as a Software Engineer at{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Enphase Energy</span>, working on production cloud systems.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
