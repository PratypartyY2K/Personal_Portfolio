import { SectionContainer } from "./section-container";

export function ContactSection() {
  return (
    <SectionContainer id="contact">
      <h2 className="text-xl md:text-2xl font-semibold text-slate-50">
        Contact
      </h2>
      <p className="mt-2 text-sm text-slate-300/90">
        Reach out at: <span className="text-sky-300">youremail@example.com</span>
      </p>
    </SectionContainer>
  );
}
