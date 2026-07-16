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
      className={`section-transition px-4 py-14 transition-colors duration-300 sm:px-6 xl:px-8 2xl:px-10 md:py-24 ${className}`}
    >
      <div className="relative z-10 mx-auto w-full max-w-[90rem]">{children}</div>
    </section>
  );
}
