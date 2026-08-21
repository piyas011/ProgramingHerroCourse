"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const processTransaction = (balance, transaction) => {
    let userBalance = balance;
    if (transaction.type === "deposit") {
        userBalance += transaction.amount;
    }
    else if (transaction.type === "withdraw") {
        if (userBalance < transaction.amount) {
            return "insufficient balance";
        }
        userBalance -= transaction.amount;
    }
    return userBalance;
};
console.log(processTransaction(5000, { type: "withdraw", amount: 1000 }));
//# sourceMappingURL=Bank-Transaction-Processor.js.map