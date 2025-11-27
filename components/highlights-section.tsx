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
      className="relative pt-0 md:pt-2 pb-32 md:pb-36 bg-gradient-to-b from-transparent via-slate-950 to-slate-950 overflow-visible"
    >
      {/* Seamless fade from Hero graph */}
      <div className="pointer-events-none absolute inset-x-0 -top-28 h-28 bg-gradient-to-b from-slate-900/0 via-slate-900/60 to-slate-950" />
      <div className="pointer-events-none absolute inset-x-0 -top-20 h-24 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.22),_transparent_70%)] blur-xl" />

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
            className="border border-slate-800/80 bg-slate-900/60 p-4 text-sm text-slate-100"
          >
            {item}
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
