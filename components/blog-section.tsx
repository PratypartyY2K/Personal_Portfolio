import { SectionContainer } from "./section-container";

export function BlogSection() {
  return (
    <SectionContainer id="blog">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        Blog
      </h2>
      <p className="mt-2 text-sm text-slate-300/90">
        Blog posts coming soon.
      </p>
    </SectionContainer>
  );
}
