import { TRANSACTIONS } from "../../common/endpoints";

export const fetchTransactions = async (qs) => {
  const response = await fetch(`${TRANSACTIONS}${qs}`);
  const data = await response.json();
  return data;
};
