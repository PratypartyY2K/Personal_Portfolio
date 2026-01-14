import Image from "next/image";
import { HeroGraphTrigger } from "./hero-graph-trigger";
import { Button } from "./ui/button";

export function Hero() {
  const headingId = "hero-heading";

  return (
    <section
      id="home"
      aria-labelledby={headingId}
      className="relative overflow-hidden bg-gradient-to-b from-slate-100 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950"
    >
      <HeroGraphTrigger />

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(56,189,248,0.12),_transparent_60%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-white/10 to-white dark:via-slate-950/85 dark:to-slate-950" />
      <div className="pointer-events-none absolute right-6 top-24 h-72 w-72 rounded-full bg-sky-200/30 blur-3xl dark:bg-sky-500/10" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-16 pt-20 text-slate-900 dark:text-slate-50 md:pb-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pb-32">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div className="text-center md:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 dark:text-sky-300/80">
              MSCS @ Penn State · Software Engineer · Full Stack & Backend
            </p>

            <h1
              id={headingId}
              className="mt-4 text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-sky-300">Pratyush Kumar</span>.
              <br />
              I build software that holds up in the real world, from backend services to full-stack products.
            </h1>

            <p className="mt-5 text-sm text-slate-600 dark:text-slate-200/90 md:text-base">
              Previously at Enphase Energy — building cloud dashboards and backend services used by thousands daily. Currently working on backend systems, distributed services, and full-stack platforms.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
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

          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-4">
              <div className="relative w-full max-w-[20rem] overflow-hidden rounded-full border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/15" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_70%)]" />
                <div className="relative aspect-square w-full">
                  <Image
                    src="/self_portrait.webp"
                    alt="Pratyush Kumar portrait"
                    fill
                    sizes="(min-width: 1024px) 20rem, (min-width: 768px) 18rem, 16rem"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>

              <p className="text-center text-xs text-slate-500 dark:text-slate-400/90">
                Open to Summer 2026 SWE and research internships
                <span className="block text-[11px] text-slate-500 dark:text-slate-400/90">
                  (backend · full-stack · platforms · distributed systems)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
