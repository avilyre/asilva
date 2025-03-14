import { Companies } from "@/@types/company";
import { CareerCard } from "@/components/career-card";
import { getCompany } from "@/utility/get-company";

import { strings } from "./strings";

export const CareerSection = () => {
  return (
    <section data-testid="career-section">
      <h2 className="mb-8 select-none text-2xl font-semibold leading-tight text-primary">
        {strings.title}
      </h2>

      <div className="flex flex-col gap-8">
        <CareerCard
          company={getCompany(Companies.CWI)}
          role="frontend software engineer"
          startDate="2024-12-02"
          outsourced={getCompany(Companies.PAO_DE_ACUCAR)}
        />
        <CareerCard
          company={getCompany(Companies.TRACTIAN)}
          role="frontend software engineer"
          startDate="2024-08-26"
          endDate="2024-12-02"
        />
        <CareerCard
          company={getCompany(Companies.MERITUM)}
          role="frontend software engineer"
          startDate="2022-04-015"
          endDate="2024-08-23"
        />
        <CareerCard
          company={getCompany(Companies.META)}
          role="mobile software engineer"
          startDate="2021-05-15"
          endDate="2022-03-15"
          outsourced={getCompany(Companies.OLIST)}
        />
        <CareerCard
          company={getCompany(Companies.GAZETA_DO_POVO)}
          role="fullstack developer"
          startDate="2020-11-15"
          endDate="2021-05-15"
        />
      </div>
    </section>
  );
};
