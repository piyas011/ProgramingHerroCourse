"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getStockStatus = (stock) => {
    if (stock > 6) {
        return "In Stock";
    }
    else if (stock >= 1) {
        return "Almost sold Out";
    }
    return "Out of Stock";
};
const status = getStockStatus(100);
console.log(status);
//# sourceMappingURL=getStockStatus.js.map