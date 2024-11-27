import { SeoMetadata } from "@/@types/seo";
import { appConfig } from "@/app.config";

export async function generateSEO(
  seoMetadata?: SeoMetadata,
): Promise<SeoMetadata> {
  const pageTitle = seoMetadata?.title
    ? `${seoMetadata.title} // ${appConfig.title}`
    : appConfig.title;

  const pageDescription = seoMetadata?.description
    ? seoMetadata.description
    : appConfig.description;

  const openGraph = seoMetadata?.openGraph;

  const { author } = appConfig;

  const metadata: SeoMetadata = {
    ...seoMetadata,
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL("https://www.avilysilva.com"),
    publisher: `${author.firstName} ${author.lastName}`,
    authors: [
      {
        name: `${author.firstName} ${author.lastName}`,
      },
    ],
    openGraph: {
      ...openGraph,
      title: pageTitle,
      description: pageDescription,
      emails: author.emails,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };

  return metadata;
}
