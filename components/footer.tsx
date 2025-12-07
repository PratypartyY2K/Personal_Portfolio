import { ResumeDownloadLink } from "./resume-download-link";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-slate-200 bg-slate-100 
      py-10 text-center text-xs text-slate-700 dark:border-slate-800/60 dark:bg-slate-950/80 dark:text-slate-300 overflow-hidden">

      {/* soft radial glow behind footer content */}
      <div className="pointer-events-none absolute inset-x-0 -top-8 h-36 z-0 blur-2xl"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(56,189,248,0.12), rgba(99,102,241,0.06) 35%, transparent 60%)',
        }}
      />

      <div className="relative z-10 flex justify-center gap-6 mb-4 text-slate-700 dark:text-slate-300">
        <ResumeDownloadLink className="hover:text-sky-500 dark:hover:text-sky-300">
          Resume
        </ResumeDownloadLink>

        <a href="https://github.com/PratypartyY2K" target="_blank" className="hover:text-sky-500 dark:hover:text-sky-300">
          GitHub
        </a>

        <a href="https://linkedin.com/in/pratyushkumar123" target="_blank" className="hover:text-sky-500 dark:hover:text-sky-300">
          LinkedIn
        </a>
      </div>

      <p className="relative z-10 text-slate-700 dark:text-slate-300">
        © {new Date().getFullYear()} Pratyush Kumar. All rights reserved.
      </p>
    </footer>
  );
}
