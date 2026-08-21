interface Transaction {
  type: "deposit" | "withdraw";
  amount: number;
}

const processTransaction = (
  balance: number,
  transaction: Transaction,
): number | string => {
  let userBalance: number = balance;

  if (transaction.type === "deposit") {
    userBalance += transaction.amount;
  } else if (transaction.type === "withdraw") {
    if (userBalance < transaction.amount) {
      return "insufficient balance";
    }
    userBalance -= transaction.amount;
  }
  return userBalance;
};

console.log(processTransaction(5000, { type: "withdraw", amount: 1000 }));
