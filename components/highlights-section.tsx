import { SectionContainer } from "./section-container";
import { Card } from "./ui/card";

export function HighlightsSection() {
  const highlights = [
    "2+ years at Enphase: Backend + QA (Ruby on Rails, automation, pipelines).",
    "Implemented distributed ABD key–value store with linearizable semantics.",
    "Built custom MapReduce engine in C++ with concurrency & performance tuning.",
    "Published research on partial face image encryption (Springer MTAP).",
    "MSCS @ Penn State (graduation 2027).",
  ];

  return (
    <SectionContainer
      id="highlights"
      className="relative z-10 pt-16 pb-32 md:pt-20 md:pb-40 overflow-visible bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950"
    >
      {/* Cyan bloom from Hero */}
      <div className="pointer-events-none absolute inset-x-0 -top-32 h-56 -z-10 bg-gradient-to-b from-slate-900/0 via-slate-900/70 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 -top-16 h-40 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_75%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-40 -z-10 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-100 dark:to-slate-950" />

      <div className="relative z-10">
        <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
          Highlights
        </h2>

        <p className="mt-2 text-sm text-slate-300/90">
          A quick snapshot of what I’ve been working on.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <Card
              key={item}
              className="border border-slate-800/80 bg-slate-900/70 p-4 text-sm text-slate-100 backdrop-blur"
            >
              {item}
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
