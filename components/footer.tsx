export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-xs text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Pratyush Kumar.</p>
        <p>Built with Next.js · Tailwind · Framer Motion.</p>
      </div>
    </footer>
  );
}
