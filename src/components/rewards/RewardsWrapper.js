import React from "react";
import { PERIOD } from "../../common/constants";
import Loader from "../common/Loader";
import { addRewards, breakByMonth, calculateRewards, getQS } from "./helpers";
import PeriodSelector from "./period/PeriodSelector";
import { fetchTransactions } from "./services";
import RewardsSummary from "./summary/RewardsSummary";
import TransactionTable from "./transaction/TransactionTable";

function RewardsWrapper() {
  const [transactionsByMonth, setTransactionsByMonth] = React.useState({});
  const [totalRewards, setTotalRewards] = React.useState(0);
  const [selectedPeriod, setSelectedPeriod] = React.useState(
    PERIOD.THREE_MONTHS
  );
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const qs = getQS(selectedPeriod);
    setLoading(true);
    fetchTransactions(qs)
      .then((data) => {
        addRewards(data.sort((a, b) => new Date(b.date) - new Date(a.date)));
        const totalRewards = calculateRewards(data);
        setTransactionsByMonth(breakByMonth(data));
        setTotalRewards(totalRewards);
        setLoading(false);
      })
      .catch((err) => {
        //TODO: handle error
        setLoading(false);
        console.log(err);
      });
  }, [selectedPeriod]);

  return (
    <div style={{ background: "#fafafa", padding: "10px 0" }}>
      <Loader loading={loading} />
      <PeriodSelector onChange={setSelectedPeriod} value={selectedPeriod} />
      <RewardsSummary
        totalRewards={totalRewards}
        selectedPeriod={selectedPeriod}
      />
      <TransactionTable transactionsByMonth={transactionsByMonth} />
    </div>
  );
}

export default RewardsWrapper;
