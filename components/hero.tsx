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

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-12 pt-24 text-slate-900 dark:text-slate-50 sm:pb-14 md:pb-20 md:pt-24 lg:pb-28 lg:pt-28 xl:pb-32">
        <div className="grid items-center gap-7 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:gap-16">
          <div className="text-center md:text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-sky-300/80 sm:text-xs sm:tracking-[0.25em]">
              Backend Engineer · Distributed Systems · MSCS @ Penn State
            </p>

            <h1
              id={headingId}
              className="mt-3 text-[2.15rem] font-semibold leading-[1.04] sm:mt-4 sm:text-4xl md:text-5xl lg:text-6xl"
            >
              Hi, I&apos;m{" "}
              <span className="text-sky-300">Pratyush Kumar</span>.
              <br />
              I build reliable backend systems and full-stack products that hold up under real-world use.
            </h1>

            <p className="mt-4 text-sm leading-6 text-slate-600 dark:text-slate-200/90 sm:mt-5 md:text-base md:leading-6">
              Formerly at Enphase Energy, where I worked on production cloud systems used by 5,500+ daily users. My recent work spans distributed systems, FastAPI services, role-based auth flows, and systems projects built for performance and correctness.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-sky-500 text-slate-950 transition hover:bg-sky-400"
              >
                <a href="#contact">Start a Conversation</a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-200 bg-white/85 text-slate-900 transition hover:bg-white dark:border-slate-600/80 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800/60"
              >
                <a href="#projects">Explore My Work</a>
              </Button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-left sm:hidden">
              {[
                { value: "5,500+", label: "DAU" },
                { value: "25%", label: "fewer failures" },
                { value: "7x", label: "throughput" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-slate-200/80 bg-white/70 px-3 py-3 dark:border-slate-800/80 dark:bg-slate-950/40"
                >
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-50">{item.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="relative w-full max-w-[13rem] overflow-hidden rounded-full border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 sm:max-w-[16rem] lg:max-w-[20rem]">
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

              <p className="text-center text-[11px] text-slate-500 dark:text-slate-400/90 sm:text-xs">
                Open to Summer 2026 SWE and research internships
                <span className="block text-[10px] text-slate-500 dark:text-slate-400/90 sm:text-[11px]">
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
