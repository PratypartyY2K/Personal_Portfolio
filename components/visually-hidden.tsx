import { ElementType, createElement } from "react";

import { cn } from "@/lib/utils";

type VisuallyHiddenProps = {
  as?: ElementType;
  className?: string;
} & Record<string, unknown>;

export function VisuallyHidden({ as, className, ...props }: VisuallyHiddenProps) {
  const Component = as || "span";

  return createElement(Component, {
    ...props,
    className: cn("sr-only", className),
  });
}
