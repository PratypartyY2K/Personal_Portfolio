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

      <p className="relative z-10 text-[11px] text-slate-700 dark:text-slate-300">
        © 2026 Pratyush Kumar · Built with intent, not templates.
      </p>
      <p className="relative z-10 mt-2 font-mono text-[10px] text-slate-500 dark:text-slate-400">
        &gt; status: system online
      </p>
    </footer>
  );
}
