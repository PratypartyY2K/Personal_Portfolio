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

      <div className="relative z-10 mx-auto w-full max-w-[90rem] px-4 pb-12 pt-24 text-slate-900 dark:text-slate-50 sm:pb-14 md:pb-20 md:pt-24 lg:pb-28 lg:pt-28 xl:px-8 xl:pb-32 2xl:px-10">
        <div className="mx-auto grid max-w-[78rem] items-center gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(19rem,21rem)] lg:gap-10 xl:max-w-[84rem] xl:grid-cols-[minmax(0,1.05fr)_minmax(22rem,24rem)] xl:gap-14 2xl:max-w-[88rem] 2xl:grid-cols-[minmax(0,1.08fr)_minmax(24rem,26rem)] 2xl:gap-20">
          <div className="text-center md:text-left lg:justify-self-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 dark:text-sky-300/80 sm:text-xs sm:tracking-[0.25em]">
              Formerly at Enphase Energy · MSCS @ Penn State
            </p>

            <h1
              id={headingId}
              className="mt-3 max-w-5xl text-[2.15rem] font-semibold leading-[1.04] sm:mt-4 sm:text-4xl md:text-5xl lg:max-w-4xl lg:text-[3.75rem] xl:max-w-5xl xl:text-[4.25rem] 2xl:max-w-6xl 2xl:text-[4.9rem]"
            >
              Backend engineer focused on{" "}
              <span className="text-sky-300">performance</span>,{" "}
              <span className="text-sky-300">reliability</span>, and{" "}
              <span className="text-sky-300">distributed systems</span>.
            </h1>

            <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-200/90 sm:mt-5 md:text-base md:leading-7 lg:max-w-2xl xl:max-w-3xl">
              I&apos;ve worked on backend services used by 5,500+ users, reduced integration failures in production systems, and built projects in distributed systems and performance engineering.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center md:justify-start">
              <Button
                asChild
                size="lg"
                className="w-full sm:w-auto bg-sky-500 text-slate-950 transition hover:bg-sky-400"
              >
                <a href="#projects">Read Case Study</a>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto border-slate-200 bg-white/85 text-slate-900 transition hover:bg-white dark:border-slate-600/80 dark:bg-slate-900/60 dark:text-slate-100 dark:hover:bg-slate-800/60"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>

            <div className="mt-4 flex items-center justify-center gap-4 text-sm text-slate-600 dark:text-slate-300 md:justify-start">
              <a
                href="https://github.com/PratypartyY2K"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-700 dark:hover:text-sky-200"
              >
                GitHub
              </a>
              <span className="text-slate-300 dark:text-slate-700" aria-hidden>
                /
              </span>
              <a
                href="https://linkedin.com/in/pratyushkumar123"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-sky-700 dark:hover:text-sky-200"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-2 text-left sm:mt-8 sm:grid-cols-4">
              {[
                { value: "5,500+", label: "users in production" },
                { value: "25%", label: "fewer integration failures" },
                { value: "7x", label: "MapReduce throughput gain" },
                { value: "2.5 yrs", label: "production engineering" },
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

          <div className="flex justify-center lg:justify-self-end lg:justify-end xl:translate-x-4 2xl:translate-x-6">
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              <div className="relative w-full max-w-[13rem] overflow-hidden rounded-full border border-slate-200 bg-white/80 shadow-2xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 sm:max-w-[16rem] lg:max-w-[18.5rem] xl:max-w-[23rem] 2xl:max-w-[26rem]">
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
                Formerly at Enphase Energy
                <span className="block text-[10px] text-slate-500 dark:text-slate-400/90 sm:text-[11px]">
                  MSCS @ Penn State · full-time roles in 2027
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
