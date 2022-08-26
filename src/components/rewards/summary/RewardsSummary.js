import React from "react";
import { STRING_CONSTANTS } from "../../../common/constants";
import "./rewardsSummary.css";

function RewardsSummary({ totalRewards, selectedPeriod }) {
  return (
    <div className="summary">
      <div className="summary-text">{STRING_CONSTANTS.TOTAL_REWARD_POINTS}</div>
      <div className="summary-reward">{totalRewards}</div>
    </div>
  );
}

export default RewardsSummary;
