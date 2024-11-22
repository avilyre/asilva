import { PageHeader } from "@/components/page-header";
import { generateSEO } from "@/utility/generate-seo";

import { ContentsList } from "./sections/contents-list";
import { strings } from "./strings";

export const metadata = generateSEO({
  title: strings.title,
  description: strings.description,
});

const Contents = () => {
  return (
    <main>
      <PageHeader title={strings.title} description={strings.description} />

      <ContentsList />
    </main>
  );
};

export default Contents;
