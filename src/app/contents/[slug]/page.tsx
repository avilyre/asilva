import { notFound } from "next/navigation";

import { getContentBySlug } from "@/lib/api";
import { convertMarkdownToHtml } from "@/lib/convert-markdown-to-html";

import { ContentDetailsProps } from "./interface";

const ContentDetails = async (props: ContentDetailsProps) => {
  const {
    params: { slug },
  } = props;

  const content = getContentBySlug(slug);

  if (!content) notFound();

  const formattedHTML = await convertMarkdownToHtml(content.content);

  return (
    <article
      className="content"
      dangerouslySetInnerHTML={{ __html: formattedHTML }}
    />
  );
};

export default ContentDetails;
