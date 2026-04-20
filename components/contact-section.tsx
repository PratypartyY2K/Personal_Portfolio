import { SectionContainer } from "./section-container";
import { ProfileCard } from "./experience/ProfileCard";
import { ResumeDownloadLink } from "./resume-download-link";

export function ContactSection() {
  const headingId = "contact-heading";
  return (
    <SectionContainer
      id="contact"
      ariaLabelledby={headingId}
      className="relative overflow-hidden py-20 text-center sm:py-24 md:py-28 bg-white dark:bg-transparent"
    >

      <div className="absolute -top-24 left-0 right-0 h-32 
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_70%)]
        blur-xl pointer-events-none" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.08),_transparent_35%)]" />

      <div className="relative z-10 grid gap-5 sm:gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div className="order-2 mx-auto hidden max-w-sm lg:order-1 lg:mx-0 lg:block lg:pt-24">
          <ProfileCard />
        </div>

        <div className="order-1 rounded-[1.6rem] border border-slate-200/80 bg-white/88 p-5 text-left shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-md dark:border-slate-800 dark:bg-[rgba(15,23,42,0.74)] sm:rounded-[2rem] sm:p-8 lg:order-2 lg:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Contact
          </p>

          <h2
            id={headingId}
            className="mt-3 max-w-3xl text-[1.95rem] font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:mt-4 sm:text-3xl md:text-4xl"
          >
            Let&apos;s talk about systems, products, and hard backend problems.
          </h2>

          <p className="mt-4 max-w-3xl text-sm leading-6 text-slate-600 dark:text-slate-300/90 sm:mt-5 md:text-[15px] md:leading-7">
            If you&apos;re building something real and need a steady engineering partner, I&apos;d like to hear about it. I&apos;m most interested in backend, distributed systems, infrastructure-heavy product work, and Summer 2026 SWE internship opportunities.
          </p>

          <div className="mt-5 grid gap-3 sm:mt-8 sm:gap-4 sm:grid-cols-3">
            {[
              "Backend and platform engineering",
              "Distributed systems and systems projects",
              "Production-focused full-stack products",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-slate-700 dark:border-slate-800/80 dark:bg-slate-950/30 dark:text-slate-200 sm:py-4"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:pratyushkum4@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.45)] transition hover:bg-sky-500 hover:shadow-[0_0_26px_rgba(56,189,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:w-auto"
            >
              Start a Conversation
            </a>
            <ResumeDownloadLink
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200 sm:w-auto"
            >
              Download Resume
            </ResumeDownloadLink>
            <a
              href="https://linkedin.com/in/pratyushkumar123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200 sm:w-auto"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PratypartyY2K"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200 sm:w-auto"
            >
              GitHub
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-950/30 sm:mt-8 sm:px-5 sm:py-4">
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              Open to Summer 2026 SWE internships · Backend · Full-Stack · Platform
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
