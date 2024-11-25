import { cn } from "@/utility/cn";

import { PageHeaderProps } from "./interface";

export const PageHeader = (props: PageHeaderProps) => {
  const {
    title,
    description,
    hasMarginTop = false,
    className,
    shouldAdaptToSmallContext = false,
  } = props;

  if (!title || !description) return null;

  const marginTop = hasMarginTop ? "mt-8" : "";

  const adaptiveTitleSize = shouldAdaptToSmallContext
    ? "text-3xl lg:text-4xl"
    : "text-4xl lg:text-5xl";

  return (
    <header
      data-testid="page-header"
      className={cn(["mb-16", marginTop, className])}
    >
      <h1
        className={cn([
          "select-none text-balance font-semibold leading-tight text-primary",
          adaptiveTitleSize,
        ])}
      >
        {title}
      </h1>
      <h2
        className={cn([
          "mt-3 select-none text-balance text-base leading-relaxed text-secondary",
          !shouldAdaptToSmallContext && "max-w-[384px]",
        ])}
      >
        {description}
      </h2>
    </header>
  );
};
