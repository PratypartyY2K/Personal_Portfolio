import { SectionContainer } from "./section-container";
import { Mail, Linkedin, Github } from "lucide-react";
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
        Get in Touch
      </h2>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90 max-w-lg mx-auto">
        Feel free to reach out for collaboration, opportunities, or just to say hi.
      </p>

      <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
        <div className="mx-auto max-w-sm lg:mx-0">
          <ProfileCard />
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white/90 p-8 text-left shadow-xl backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-base text-slate-600 dark:text-slate-300/90">
            I&apos;m always excited to connect with folks working on resilient backend systems, research,
            or thoughtful UX. Send a note and I&apos;ll get back quickly.
          </p>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="mailto:pratyushkum4@gmail.com"
              className="flex items-center gap-3 text-slate-900 transition hover:text-sky-600 dark:text-slate-100 dark:hover:text-sky-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sky-600 dark:bg-slate-800 dark:text-sky-300">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Email
                </p>
                <p className="text-base">pratyushkum4@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com/in/pratyushkumar123"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-900 transition hover:text-sky-600 dark:text-slate-100 dark:hover:text-sky-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sky-600 dark:bg-slate-800 dark:text-sky-300">
                <Linkedin size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  LinkedIn
                </p>
                <p className="text-base">/in/pratyushkumar123</p>
              </div>
            </a>

            <a
              href="https://github.com/PratypartyY2K"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-slate-900 transition hover:text-sky-600 dark:text-slate-100 dark:hover:text-sky-200"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-sky-600 dark:bg-slate-800 dark:text-sky-300">
                <Github size={18} />
              </span>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  GitHub
                </p>
                <p className="text-base">github.com/PratypartyY2K</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
