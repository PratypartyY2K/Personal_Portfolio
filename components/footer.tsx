export function Footer() {
  return (
    <footer className="relative mt-28 border-t border-slate-800/60 bg-slate-950/60 
      backdrop-blur py-10 text-center text-xs text-slate-500">
      
      <div className="absolute inset-x-0 -top-10 h-16 
        bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.10),transparent_70%)]
        blur-xl pointer-events-none" />

      <div className="flex justify-center gap-6 mb-4 text-slate-400">
        <a href="/Pratyush_Kumar_Resume.pdf" target="_blank" className="hover:text-sky-300">
          Resume
        </a>

        <a href="https://github.com/PratypartyY2K" target="_blank" className="hover:text-sky-300">
          GitHub
        </a>

        <a href="https://linkedin.com/in/pratyushkumar123" target="_blank" className="hover:text-sky-300">
          LinkedIn
        </a>
      </div>

      <p className="text-slate-500">
        © {new Date().getFullYear()} Pratyush Kumar. All rights reserved.
      </p>
    </footer>
  );
}
