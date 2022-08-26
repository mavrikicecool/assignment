import { PERIOD } from "../../common/constants";
import calCulateReward from "./calculateReward";

const getRange = (rangeType) => {
  switch (rangeType) {
    case PERIOD.THREE_MONTHS:
      return {
        startDate: new Date(
          new Date(new Date().setMonth(new Date().getMonth() - 2)).setDate(1)
        ).toISOString(),
        endDate: new Date().toISOString(),
      };
    case PERIOD.ALL:
    default:
      return {};
  }
};

export const getQS = (rangeType) => {
  const { startDate, endDate } = getRange(rangeType);
  if (startDate && endDate) {
    return "?date_gte=" + startDate + "&date_lte=" + endDate;
  }
  return "";
};

export const breakByMonth = (transactions) => {
  const transactionsByMonth = {};
  transactions.forEach((transaction) => {
    const date = new Date(transaction.date);
    const month = date.getMonth();
    const year = date.getFullYear();
    const key = `${year}-${month}`;
    if (!transactionsByMonth[key]) {
      transactionsByMonth[key] = [];
    }
    transactionsByMonth[key].push(transaction);
  });
  console.log(transactionsByMonth);
  return transactionsByMonth;
};

export const addReward = (transaction) => {
  let reward = calCulateReward(transaction);
  transaction.reward = reward;
};

export const addRewards = (transactions) => {
  transactions.forEach((transaction) => {
    addReward(transaction);
  });
};

export const calculateRewards = (transactions) => {
  let totalRewards = 0;
  transactions.forEach((transaction) => {
    totalRewards += transaction.reward;
  });
  return totalRewards;
};
