import { PageHeader } from "@/components/page-header";

import { strings } from "./strings";

const Contents = () => {
  return (
    <main>
      <PageHeader title={strings.title} description={strings.description} />
    </main>
  );
};

export default Contents;
