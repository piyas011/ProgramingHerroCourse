const getStockStatus = (stock: number): string => {
  if (stock > 6) {
    return "In Stock";
  } else if (stock >= 1) {
    return "Almost sold Out";
  }
  return "Out of Stock";
};

const status = getStockStatus(10);
console.log(status);
