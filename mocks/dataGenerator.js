const getRandomDate = () => {
  return new Date(
    new Date("01-Jan-2022").getTime() +
      Math.random() * (new Date().getTime() - new Date("01-Jan-2022").getTime())
  );
};

const generateTransactions = (count) => {
  const transactions = [];
  for (let i = 0; i < count; i++) {
    const transaction = {
      id: i + 1,
      amount: Number((Math.random() * 200).toFixed(2)),
      date: getRandomDate().toISOString(),
      description: `Test transaction ${i + 1}`,
    };
    transactions.push(transaction);
  }

  return transactions;
};

export default generateTransactions;
