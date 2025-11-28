import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export function SectionContainer({ id, className = "", children }: SectionContainerProps) {
  return (
    <section id={id} className={`py-16 md:py-24 px-4 transition-colors duration-300 ${className}`}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
