import { SectionContainer } from "./section-container";
import { Mail, Linkedin, Github } from "lucide-react";

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
      <div className="pointer-events-none absolute inset-x-0 -bottom-10 h-32 bg-gradient-to-b from-transparent to-white dark:from-transparent dark:to-slate-950" />

      <h2
        id={headingId}
        className="text-2xl font-semibold text-slate-900 dark:text-slate-50"
      >
        Get in Touch
      </h2>

      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300/90 max-w-lg mx-auto">
        Feel free to reach out for collaboration, opportunities, or just to say hi.
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <a
          href="mailto:kinshuk048@gmail.com"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-500 text-sm dark:text-sky-300 dark:hover:text-sky-200"
        >
          <Mail size={18} /> Email
        </a>

        <a
          href="https://linkedin.com/in/pratyushkumar123"
          target="_blank"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-500 text-sm dark:text-sky-300 dark:hover:text-sky-200"
        >
          <Linkedin size={18} /> LinkedIn
        </a>

        <a
          href="https://github.com/PratypartyY2K"
          target="_blank"
          className="flex items-center gap-2 text-sky-600 hover:text-sky-500 text-sm dark:text-sky-300 dark:hover:text-sky-200"
        >
          <Github size={18} /> GitHub
        </a>
      </div>
    </SectionContainer>
  );
}
