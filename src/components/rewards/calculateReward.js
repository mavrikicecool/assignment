const calCulateReward = (transaction) => {
  let reward = 0;
  if (transaction.amount > 100) {
    reward = (Math.floor(transaction.amount) - 100) * 2 + 50;
  } else if (transaction.amount > 50) {
    reward = (Math.floor(transaction.amount) - 50) * 1;
  }
  return reward;
};

export default calCulateReward;
