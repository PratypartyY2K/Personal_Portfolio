import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

export function AboutSection() {
  const headingId = "about-heading";
  return (
    <SectionContainer id="about" ariaLabelledby={headingId} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_transparent_70%)]" />

      <div className="relative z-10 grid gap-5 sm:gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/82 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-slate-800/80 dark:bg-[rgba(15,23,42,0.72)] sm:rounded-[2rem] sm:p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            About
          </p>

          <h2
            id={headingId}
            className="mt-3 text-[1.95rem] font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:mt-4 sm:text-3xl md:text-4xl"
          >
            I build backend-heavy software that stays reliable when complexity increases.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300/90 sm:mt-5 md:text-[15px] md:leading-7">
            I&apos;m Pratyush, a software engineer focused on resilient backend systems, distributed services, and production-minded full-stack products. I like turning complex infrastructure into software that is easier to operate, easier to trust, and easier to extend.
          </p>

          <p className="mt-3 hidden max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300/90 sm:block md:text-[15px] md:leading-7">
            My work spans cloud systems at Enphase, systems projects in C++, and full-stack product development with FastAPI, React, and modern tooling. I&apos;m currently completing my MS in Computer Science at Penn State, where my work is centered around distributed systems and scalable backend design.
          </p>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-3">
            {[
              {
                label: "Build for reliability",
                text: "I optimize for correctness, operability, and clean system boundaries.",
              },
              {
                label: "Work across the stack",
                text: "Strongest in backend systems, with enough frontend depth to ship complete products.",
              },
              {
                label: "Like hard problems",
                text: "Most energized by distributed systems, auth flows, performance, and real production constraints.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3.5 dark:border-slate-800/80 dark:bg-slate-950/30 sm:p-4"
              >
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.label}</p>
                <p className="mt-1.5 text-sm leading-6 text-slate-600 dark:text-slate-300/90">{item.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
            Off-hours: competitive badminton, coffee gear tinkering, and anime marathons.
          </p>

          <Button
            asChild
            size="lg"
            className="mt-6 w-full rounded-full bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 sm:mt-8 sm:w-auto"
          >
            <a href="#contact">Start a Conversation</a>
          </Button>
        </div>

        <div className="grid gap-4 sm:gap-6">
          <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-slate-800/80 dark:bg-[rgba(15,23,42,0.72)] sm:rounded-[2rem] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Snapshot
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
              {[
                { value: "5,500+", label: "daily users supported in production systems" },
                { value: "25%", label: "fewer integration failures at Enphase" },
                { value: "7x", label: "throughput improvement in systems work" },
                { value: "MSCS", label: "current focus on distributed systems at Penn State" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-3 dark:border-slate-800/80 dark:bg-slate-950/30 sm:p-4"
                >
                  <p className="text-xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-2xl">
                    {item.value}
                  </p>
                  <p className="mt-1.5 text-sm leading-5 text-slate-600 dark:text-slate-300/90 sm:mt-2 sm:leading-6">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden h-fit self-start rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 text-sm text-slate-700 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-slate-800/80 dark:bg-[rgba(15,23,42,0.72)] dark:text-slate-200 sm:block">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Recent highlights
            </p>
            <ul className="mt-4 space-y-4">
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
                  Integrated{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Supabase auth with FastAPI and React</span>{" "}
                  in a collaborative waste operations product.
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
