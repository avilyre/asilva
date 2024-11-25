import { ContentItem } from "@/components/content-item";

import { ContentsListProps } from "./contents-list";

export const ContentsList = (props: ContentsListProps) => {
  const { contents } = props;

  return (
    <section className="flex flex-col gap-10">
      {contents?.map(content => {
        const key = `${content.title}-${content.date}`;

        return (
          <ContentItem
            key={key}
            title={content.title}
            createdAt={content.date}
            slug={content.slug}
          />
        );
      })}
    </section>
  );
};
