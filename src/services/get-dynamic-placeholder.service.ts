import { getPlaiceholder } from "plaiceholder";

export const getDynamicPlaceholder = async (src: string) => {
  const buffer = await fetch(src).then(async res =>
    Buffer.from(await res.arrayBuffer()),
  );

  const {
    metadata: { height, width },
    ...plaiceholder
  } = await getPlaiceholder(buffer, { size: 10 });

  return {
    ...plaiceholder,
    image: { src, height, width },
  };
};
