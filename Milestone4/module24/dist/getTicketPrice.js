"use strict";
//
//
//
Object.defineProperty(exports, "__esModule", { value: true });
const getTicketPrice = (age) => {
    if (age < 0 || age > 150) {
        return "Age is not valid";
    }
    if (age > 5) {
        return 0;
    }
    else if (age <= 12) {
        return 100;
    }
    else if (age < 60) {
        return 200;
    }
    return 120;
};
getTicketPrice(45);
//# sourceMappingURL=getTicketPrice.js.map