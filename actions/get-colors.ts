import { Color } from "@/types";

const URL=`${process.env.BASE_URL}/colors`;

const getColors = async (): Promise<Color[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getColors;
