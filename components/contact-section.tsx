import { SectionContainer } from "./section-container";
import { ProfileCard } from "./experience/ProfileCard";

export function ContactSection() {
  const headingId = "contact-heading";
  return (
    <SectionContainer
      id="contact"
      ariaLabelledby={headingId}
      className="relative py-28 text-center bg-white dark:bg-transparent"
    >

      <div className="absolute -top-24 left-0 right-0 h-32 
        bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.12),_transparent_70%)]
        blur-xl pointer-events-none" />

      <h2
        id={headingId}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-50"
      >
        Let&apos;s Build Something Real
      </h2>

      <p className="mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-300/90 mx-auto">
        Have an interesting system to design, a product to ship, or a hard backend problem to solve?
        I&apos;m always open to meaningful engineering conversations.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div className="mx-auto max-w-sm lg:mx-0">
          <ProfileCard />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/90 p-8 text-left shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-base text-slate-600 dark:text-slate-300/90">
            If you&apos;re building something real and need a steady engineering partner, I&apos;d love to hear about it.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:pratyushkum4@gmail.com"
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.45)] transition hover:bg-sky-500 hover:shadow-[0_0_26px_rgba(56,189,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
            >
              Start a Conversation
            </a>
            <a
              href="https://linkedin.com/in/pratyushkumar123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PratypartyY2K"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200"
            >
              GitHub
            </a>
          </div>

          <p className="mt-6 text-xs font-mono uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Open to Summer 2026 SWE internships · Backend · Full-Stack · Platform
          </p>
        </div>
      </div>
    </SectionContainer>
  );
}
