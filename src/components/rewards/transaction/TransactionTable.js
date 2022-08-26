import React from "react";
import { STRING_CONSTANTS } from "../../../common/constants";
import { calculateRewards } from "../helpers";
import "./transactionTable.css";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getPperiod = (period) => {
  const month = period.split("-")[1];
  const year = period.split("-")[0];
  return `${monthNames[month]} ${year}`;
};

function TransactionTable({ transactionsByMonth }) {
  const [formattedTransactions, setFormattedTransactions] = React.useState({});
  React.useEffect(() => {
    const formattedTransactions = {};
    Object.keys(transactionsByMonth).forEach((key) => {
      const totalRewards = calculateRewards(transactionsByMonth[key]);
      formattedTransactions[key] = {
        transactions: transactionsByMonth[key],
        totalRewards: totalRewards,
      };
    });
    setFormattedTransactions(formattedTransactions);
  }, [transactionsByMonth]);
  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead className="sticky">
          <tr>
            <th>{STRING_CONSTANTS.MONTH}</th>
            <th>{STRING_CONSTANTS.DESCRIPTION}</th>
            <th>{STRING_CONSTANTS.TRANSACTION_AMOUNT}</th>
            <th>{STRING_CONSTANTS.REWARD_POINTS}</th>
            <th>{STRING_CONSTANTS.TOTAL_REWARD_POINTS}</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(formattedTransactions).map((key, groupIndex) => {
            return formattedTransactions[key].transactions.map(
              (transaction, i) => {
                return (
                  <tr
                    key={i}
                    className={groupIndex % 2 ? "group" : "alternate group"}
                  >
                    {i === 0 ? (
                      <td
                        className="border spaned"
                        rowSpan={formattedTransactions[key].transactions.length}
                      >
                        {getPperiod(key)}
                      </td>
                    ) : null}
                    <td>{transaction.description}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.reward}</td>
                    {i === 0 ? (
                      <td
                        className="border spaned"
                        rowSpan={formattedTransactions[key].transactions.length}
                      >
                        {formattedTransactions[key].totalRewards}
                      </td>
                    ) : null}
                  </tr>
                );
              }
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionTable;
