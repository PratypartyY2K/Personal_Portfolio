import { ReactNode } from "react";

interface SectionContainerProps {
  id?: string;
  className?: string;
  ariaLabelledby?: string;
  children: ReactNode;
}

export function SectionContainer({
  id,
  className = "",
  ariaLabelledby,
  children,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledby}
      className={`border-t border-slate-200/70 py-20 md:py-24 px-4 transition-colors duration-300 dark:border-slate-800/70 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
