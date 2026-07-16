import { SectionContainer } from "./section-container";
import { ProfileCard } from "./experience/ProfileCard";

export function ContactSection() {
  const headingId = "contact-heading";
  return (
    <SectionContainer
      id="contact"
      ariaLabelledby={headingId}
      className="relative overflow-hidden bg-white py-20 text-center dark:bg-slate-950 sm:py-24 md:py-28"
    >
      <div
        className="absolute -top-24 left-0 right-0 h-32 
        [background-image:radial-gradient(circle_at_top,var(--accent-wash),transparent_70%)]
        blur-xl pointer-events-none"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at bottom right, var(--accent-soft), transparent 35%)",
        }}
      />

      <div className="relative z-10 grid gap-5 sm:gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div className="order-2 mx-auto hidden max-w-sm lg:order-1 lg:block lg:justify-self-center lg:self-center">
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
            If you&apos;re building something real and need a steady engineering
            partner, I&apos;d like to hear about it.
          </p>

          <div className="mt-6 flex flex-row flex-wrap gap-3 sm:mt-8">
            <a
              href="mailto:pratyushkum4@gmail.com"
              className="accent-solid inline-flex w-fit items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition"
            >
              Start a Conversation
            </a>
            <a
              href="https://linkedin.com/in/pratyushkumar123"
              target="_blank"
              rel="noreferrer"
              className="accent-outline inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/PratypartyY2K"
              target="_blank"
              rel="noreferrer"
              className="accent-outline inline-flex w-fit items-center justify-center rounded-full border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 dark:border-slate-700 dark:bg-slate-950/30 dark:text-slate-200"
            >
              GitHub
            </a>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200/80 bg-slate-50/80 px-4 py-3 dark:border-slate-800/80 dark:bg-slate-950/30 sm:mt-8 sm:px-5 sm:py-4">
            Resume available on request.
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
