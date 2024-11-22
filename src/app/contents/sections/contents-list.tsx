import { ContentItem } from "@/components/content-item";

export const ContentsList = () => {
  return (
    <section className="flex flex-col gap-10">
      <ContentItem
        title="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        createdAt="05-10-2024"
        slug="post1"
      />
      <ContentItem
        title="Lorem Ipsum is simply dummy text of the printing."
        createdAt="05-05-2024"
        slug="post2"
      />
      <ContentItem
        title="lorem Ipsum is simply dummy text of the"
        createdAt="05-02-2024"
        slug="post3"
      />
    </section>
  );
};
