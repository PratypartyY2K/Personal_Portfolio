import { SectionContainer } from "./section-container";
import { Button } from "./ui/button";

export function AboutSection() {
  const headingId = "about-heading";
  return (
    <SectionContainer id="about" ariaLabelledby={headingId}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.10),_transparent_70%)]" />

      <div className="relative z-10 space-y-6">
        <h2
          id={headingId}
          className="text-xl md:text-2xl font-semibold text-slate-900 dark:text-slate-50"
        >
          About Me
        </h2>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
          <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
            <p>
              I’m Pratyush — a backend & distributed systems engineer passionate about
              reliability, clean design, and performance. I enjoy breaking down complex
              systems into elegant solutions, whether I’m building distributed storage, tuning
              C++ performance, or designing intuitive web experiences.
            </p>

            <p>
              Outside engineering you’ll find me playing{" "}
              <span className="text-sky-600 font-medium dark:text-sky-200">competitive badminton</span>,
              nerding out over coffee gear, or unwinding with anime — the hobbies that keep me
              curious and disciplined.
            </p>

            <Button
              asChild
              size="lg"
              className="mt-4 bg-slate-900 text-slate-50 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900"
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-5 text-sm text-slate-700 shadow-xl backdrop-blur-sm dark:border-slate-800/80 dark:bg-slate-900/60 dark:text-slate-200">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
              Recent highlights
            </p>
            <ul className="mt-3 space-y-3">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">Implemented a linearizable distributed key–value store using the ABD protocol.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">Engineered a multi-threaded MapReduce framework in C++ with major performance improvements.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">Automated backend test pipelines and CI workflows at Enphase.</span>
              </li>

              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/90 ring-1 ring-sky-300/30" aria-hidden />
                <span className="text-sm text-slate-700 dark:text-slate-200">Published research on secure partial face-image encryption (Springer MTAP).</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
