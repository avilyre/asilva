import Image from "next/image";
import { notFound } from "next/navigation";
import { Fragment } from "react";

import { PageHeader } from "@/components/page-header";
import { ShareBar } from "@/components/share-bar";
import { getContentBySlug } from "@/lib/api";
import { convertMarkdownToHtml } from "@/lib/convert-markdown-to-html";
import { generateSEO } from "@/utility/generate-seo";

import { Reaction } from "./components/reaction";
import { ContentDetailsProps } from "./interface";

export async function generateMetadata(props: Readonly<ContentDetailsProps>) {
  const {
    params: { slug },
  } = props;

  const { title, summary, thumbnail, createdAt } = getContentBySlug(slug);

  return generateSEO({
    title,
    description: summary,
    openGraph: {
      title,
      type: "article",
      publishedTime: createdAt,
      description: summary,
      images: thumbnail,
    },
  });
}

const ContentDetails = async (props: ContentDetailsProps) => {
  const {
    params: { slug },
  } = props;

  const defaultThumbnailSize = {
    height: 285,
    width: 800,
  };

  const content = getContentBySlug(slug);

  const { title, thumbnail, summary, createdAt, readingTime } = content;

  if (!content) notFound();

  const formattedHTML = await convertMarkdownToHtml(content.content);

  const readingTimeFormatted = Math.round(readingTime);

  return (
    <Fragment>
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

        <div className="my-8 flex flex-col-reverse gap-8 sm:mb-10 sm:mt-8 sm:flex-row">
          <PageHeader
            title={title}
            description={summary}
            className="mb-0 flex-1"
            shouldAdaptToSmallContext
          />

          <section className="flex flex-row gap-8 sm:flex-col">
            {createdAt && (
              <h5 className="flex select-none flex-col">
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
            {createdAt && (
              <h5 className="flex select-none flex-col">
                <span className="mb-1 block text-sm text-secondary">
                  tempo de leitura
                </span>
                <span className="text-base leading-tight text-primary">
                  {readingTimeFormatted} minutos
                </span>
              </h5>
            )}
          </section>
        </div>

        <div className="mb-8 flex items-center gap-2">
          <ShareBar content={{ title, slug: content.slug }} />
          <Reaction slug={slug} />
        </div>
      </header>
      <article
        className="content"
        dangerouslySetInnerHTML={{ __html: formattedHTML }}
      />
      <footer className="mt-8 text-balance leading-relaxed text-secondary">
        <h5 className="mb-4 text-3xl text-white">Concluída!</h5>
        Parabéns por chegar concluir essa leitura e muito obrigado! 🎉
      </footer>
    </Fragment>
  );
};

export default ContentDetails;
