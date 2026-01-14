import { HeroGraphTrigger } from "./hero-graph-trigger";
import { Button } from "./ui/button";

export function Hero() {
  const headingId = "hero-heading";

  return (
    <section
      aria-labelledby={headingId}
      className="relative min-h-[60vh] overflow-visible bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:min-h-[20vh] lg:min-h-[35vh]"
    >
      <HeroGraphTrigger />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-slate-950/85 dark:to-slate-950" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 pb-16 pt-20 text-slate-900 dark:text-slate-50 md:gap-10 md:pb-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pb-32">
        <div className="w-full max-w-3xl text-center md:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-sky-300/80">
            MSCS @ Penn State · Software Engineer · Full Stack & Backend
          </p>

          <h1
            id={headingId}
            className="mt-3 text-4xl font-semibold leading-tight md:text-5xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-sky-300">Pratyush Kumar</span>.
            <br />
            I build software that holds up in the real world, from backend services to full-stack products.
          </h1>

          <p className="mt-4 text-sm text-slate-600 dark:text-slate-200/90 md:text-base">
            Previously at Enphase Energy — building cloud dashboards and backend services used by thousands daily. Currently working on backend systems, distributed services, and full-stack platforms.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-sky-500 text-slate-950 transition hover:bg-sky-400"
            >
              <a href="#projects">See My Work</a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-slate-200 bg-white/85 text-slate-900 transition hover:bg-white dark:border-slate-600/80 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800/60"
            >
              <a href="#contact">Let’s Build Something</a>
            </Button>
          </div>

          <p className="mt-4 text-xs text-slate-500 dark:text-slate-400/90">
            Open to Summer 2026 SWE internships (backend · full-stack · platform).
          </p>
        </div>
      </div>
    </section>
  );
}
