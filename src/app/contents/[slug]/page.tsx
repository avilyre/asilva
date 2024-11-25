import Image from "next/image";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/page-header";
import { getContentBySlug } from "@/lib/api";
import { convertMarkdownToHtml } from "@/lib/convert-markdown-to-html";

import { ContentDetailsProps } from "./interface";

const ContentDetails = async (props: ContentDetailsProps) => {
  const {
    params: { slug },
  } = props;

  const defaultThumbnailSize = {
    height: 285,
    width: 800,
  };

  const content = getContentBySlug(slug);

  const { title, thumbnail, summary, createdAt } = content;

  if (!content) notFound();

  const formattedHTML = await convertMarkdownToHtml(content.content);

  return (
    <>
      <header>
        <Image
          src={thumbnail}
          className="mb-8 aspect-video w-full select-none rounded-md bg-tertiary object-cover sm:aspect-[16/5.68]"
          alt={title}
          height={defaultThumbnailSize.height}
          width={defaultThumbnailSize.width}
          quality={100}
          priority
        />

        <div className="mb-16 flex flex-col gap-8 sm:mb-0 sm:flex-row">
          <PageHeader
            title={title}
            description={summary}
            className="mb-0 flex-1 sm:mb-16"
            shouldAdaptToSmallContext
          />

          <section className="flex flex-col gap-8">
            {createdAt && (
              <h5 className="select-none">
                <span className="mb-1 block text-sm text-secondary">
                  publicado em
                </span>
                <time
                  className="text-base leading-tight text-primary"
                  dateTime="2023-06-22T00:00:00.000Z"
                >
                  {new Date(createdAt).toLocaleDateString("pt-BR")}
                </time>
              </h5>
            )}
          </section>
        </div>
      </header>
      <article
        className="content"
        dangerouslySetInnerHTML={{ __html: formattedHTML }}
      />
    </>
  );
};

export default ContentDetails;
