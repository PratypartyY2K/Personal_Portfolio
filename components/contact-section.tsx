import { SectionContainer } from "./section-container";
import { ProfileCard } from "./experience/ProfileCard";
import { ResumeDownloadLink } from "./resume-download-link";

export function ContactSection() {
  const headingId = "contact-heading";
  return (
    <SectionContainer
      id="contact"
      ariaLabelledby={headingId}
      className="relative py-32 sm:py-28 text-center bg-white dark:bg-transparent"
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

      <p className="mt-4 hidden md:block max-w-2xl text-sm text-slate-600 dark:text-slate-300/90 mx-auto leading-6 md:leading-5">
        Have an interesting system to design, a product to ship, or a hard backend problem to solve?
        I&apos;m always open to meaningful engineering conversations.
      </p>

      <ul className="mt-4 md:hidden max-w-2xl space-y-2 text-sm text-slate-600 dark:text-slate-300/90 mx-auto leading-6">
        <li className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
          <span>System to design, product to ship, or hard backend problem.</span>
        </li>
        <li className="flex items-start gap-3">
          <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
          <span>Always open to meaningful engineering conversations.</span>
        </li>
      </ul>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div className="order-2 mx-auto max-w-sm lg:order-1 lg:mx-0">
          <ProfileCard />
        </div>

        <div className="order-1 rounded-2xl border border-slate-200 bg-white/90 p-8 text-left shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60 lg:order-2">
          <p className="hidden md:block text-base text-slate-600 dark:text-slate-300/90 leading-6 md:leading-5">
            If you&apos;re building something real and need a steady engineering partner, I&apos;d love to hear about it.
          </p>

          <ul className="md:hidden space-y-2 text-sm text-slate-600 dark:text-slate-300/90 leading-6">
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
              <span>Building something real and need a steady engineering partner.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-sky-500/80 ring-1 ring-sky-300/30" aria-hidden />
              <span>I&apos;d love to hear about it.</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="mailto:pratyushkum4@gmail.com"
              className="inline-flex w-full items-center justify-center rounded-full bg-sky-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_18px_rgba(56,189,248,0.45)] transition hover:bg-sky-500 hover:shadow-[0_0_26px_rgba(56,189,248,0.6)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 sm:w-auto"
            >
              Start a Conversation
            </a>
            <ResumeDownloadLink
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200 sm:w-auto"
            >
              Download Resume
            </ResumeDownloadLink>
            <a
              href="https://linkedin.com/in/pratyushkumar123"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200 sm:w-auto"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PratypartyY2K"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-slate-200 px-5 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-300 hover:text-sky-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-sky-400 dark:hover:text-sky-200 sm:w-auto"
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
