import { SectionContainer } from "./section-container";

export function AboutSection() {
  const headingId = "about-heading";
  return (
    <SectionContainer
      id="about"
      ariaLabelledby={headingId}
      className="relative overflow-hidden bg-slate-50 dark:bg-slate-950"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: "radial-gradient(circle at top, var(--accent-wash), transparent 70%)" }}
      />

      <div className="relative z-10 grid gap-5 sm:gap-8 lg:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
        <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/82 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-slate-800/80 dark:bg-[rgba(15,23,42,0.72)] sm:rounded-[2rem] sm:p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            About
          </p>

          <h2
            id={headingId}
            className="mt-3 text-[1.95rem] font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:mt-4 sm:text-3xl md:text-4xl"
          >
            I turn ambiguous backend problems into reliable, maintainable systems.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300/90 sm:mt-5 md:text-[15px] md:leading-7">
            I&apos;m Pratyush, a software engineer who takes ownership from problem definition through production. I care about clear abstractions, thoughtful tradeoffs, and software that remains understandable as it scales.
          </p>

          <p className="mt-3 hidden max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300/90 sm:block md:text-[15px] md:leading-7">
            At Enphase Energy, I improved backend services used by 5,500+ people, reduced integration failures, and automated workflows for both users and engineers. Projects such as my C++ MapReduce framework are evidence of the same approach: measure first, find the real bottleneck, and make the system simpler and faster.
          </p>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-3">
            {[
              {
                label: "Ownership",
                text: "I take work from an unclear problem to a shipped, measurable result and stay accountable for how it behaves in production.",
              },
              {
                label: "Engineering judgment",
                text: "I use data to find the real constraint, weigh tradeoffs, and choose solutions that fit the system instead of chasing complexity.",
              },
              {
                label: "Reliable execution",
                text: "I build with testing, observability, correctness, and maintainability in mind—not as cleanup after the feature ships.",
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
            I&apos;m currently pursuing an MS in Computer Science at Penn State, with a focus on backend systems and distributed systems.
          </p>

        </div>

        <div className="grid gap-4 sm:gap-6">
          <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/85 p-5 shadow-[0_20px_60px_rgba(15,23,42,0.07)] backdrop-blur-md dark:border-slate-800/80 dark:bg-[rgba(15,23,42,0.72)] sm:rounded-[2rem] sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
              Snapshot
            </p>

            <div className="mt-4 grid grid-cols-2 gap-3 sm:mt-5 sm:gap-4">
              {[
                { value: "5,500+", label: "users supported through production IoT systems" },
                { value: "25%", label: "fewer integration failures at Enphase" },
                { value: "7x", label: "throughput improvement in C++ systems work" },
                { value: "MSCS", label: "focus on backend systems and distributed systems" },
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
                <span className="accent-dot mt-1 h-2 w-2 flex-shrink-0 rounded-full" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Built{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Holocron Timeline Engine</span>{" "}
                  with FastAPI, Next.js, and Neo4j for causal traversal and world-state reconstruction.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="accent-dot mt-1 h-2 w-2 flex-shrink-0 rounded-full" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Built{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">FairShare</span>{" "}
                  as a ledger-first expense tracker with deterministic money handling and explainable balances.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="accent-dot mt-1 h-2 w-2 flex-shrink-0 rounded-full" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Benchmarking and optimizing{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">GEMM workloads across CPU and GPU architectures</span>{" "}
                  for systems performance analysis.
                </span>
              </li>

              <li className="flex items-start gap-3">
                <span className="accent-dot mt-1 h-2 w-2 flex-shrink-0 rounded-full" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">
                  Pursuing an MS in Computer Science at{" "}
                  <span className="font-semibold text-slate-900 dark:text-slate-50">Penn State University</span>{" "}
                  with a focus on backend systems and distributed systems.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
