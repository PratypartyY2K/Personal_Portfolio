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
      className={`border-t border-slate-200/70 px-4 py-14 transition-colors duration-300 sm:px-6 md:py-24 dark:border-slate-800/70 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}
