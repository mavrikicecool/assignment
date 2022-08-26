import React from "react";
import Header from "./header/Header";
import RewardsWrapper from "./rewards/RewardsWrapper";

function AppWrapper(props) {
  return (
    <div>
      <Header />
      <RewardsWrapper />
    </div>
  );
}

export default AppWrapper;
