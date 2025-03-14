import Link from "next/link";

import { dateTimeFormat } from "@/utility/date-time-format";

import { ContentItemProps } from "./interface";

export const ContentItem = (props: ContentItemProps) => {
  const { title, slug, createdAt, readingTime } = props;

  const hoverClasses =
    "relative before:absolute before:left-[50%] before:top-[50%] before:z-[-1] before:h-[calc(100%+32px)] before:w-[calc(100%+32px)] before:-translate-x-1/2 before:translate-y-[-50%] before:rounded-md before:bg-tertiary before:opacity-0 before:transition-opacity before:content-[''] hover:before:opacity-35";

  const hrefURL = `/contents/${slug}`;

  const createdAtDate = new Date(createdAt);
  const readingTimeFormatted = Math.round(readingTime);

  return (
    <Link href={hrefURL}>
      <article className={`flex flex-col gap-2 ${hoverClasses}`}>
        <h3 className="text-xl font-semibold leading-tight text-primary">
          {title}
        </h3>
        <div className="flex items-center gap-4">
          {createdAtDate && (
            <time dateTime={createdAt} className="leading-tight text-secondary">
              {`${createdAtDate.getDate()} de ${dateTimeFormat(new Date(createdAt))}`}
            </time>
          )}
          <span className="text-secondary">|</span>
          {readingTimeFormatted > 0 && (
            <span className="text-secondary">
              {`${readingTimeFormatted} minutos`}
            </span>
          )}
        </div>
      </article>
    </Link>
  );
};
