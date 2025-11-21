import { SectionContainer } from "./section-container";
import { Card } from "./ui/card";

export function HighlightsSection() {
  const highlights = [
    "2+ years at Enphase: QA + backend (Ruby on Rails, automation, pipelines).",
    "Implemented distributed ABD key–value store with linearizable semantics.",
    "Built custom MapReduce engine in C++ with concurrency & performance tuning.",
    "Published research on partial face image encryption (Springer MTAP).",
    "Incoming MSCS @ Penn State (Fall 2025).",
  ];

  return (
    <SectionContainer id="highlights">
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
