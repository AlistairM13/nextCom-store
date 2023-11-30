import { Billboard } from "@/types";

const URL = `${process.env.BASE_URL}/billboards`;

const getBillboards = async (): Promise<Billboard[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getBillboards;

