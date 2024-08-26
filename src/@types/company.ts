export interface Company {
  id: number;
  name: string;
  role: string;
  url: string;
  stateLocation: string;
}

export enum Companies {
  TRACTIAN = "tractian",
  MERITUM = "meritum",
  META = "meta",
  OLIST = "olist",
  GAZETA_DO_POVO = "gazeta do povo",
}
