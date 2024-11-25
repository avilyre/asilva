import { PageHeader } from "@/components/page-header";
import { getAllContents } from "@/lib/api";
import { generateSEO } from "@/utility/generate-seo";

import { ContentsList } from "./sections/contents-list";
import { strings } from "./strings";

export const metadata = generateSEO({
  title: strings.title,
  description: strings.description,
});

const Contents = () => {
  const allContents = getAllContents();

  return (
    <main>
      <PageHeader title={strings.title} description={strings.description} />

      <ContentsList contents={allContents} />
    </main>
  );
};

export default Contents;
