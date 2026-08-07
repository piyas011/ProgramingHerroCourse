//

const getMostExpensiveProduct = (product) => {
  let keys = Object.keys(product);
  let highestValue = 0;
  let expensiveProduct;
  //   console.log(highestValue);
  for (const key of keys) {
    if (highestValue < product[key]) {
      highestValue = product[key];
      expensiveProduct = key;
    }
  }
  return expensiveProduct;
};
console.log(
  getMostExpensiveProduct({ pen: 20, book: 189, bag: 870, desktop: 150000 }),
);

// / / / / / / / / / / / / / / / / / / / / / / / / / / / / / /

let user1 = {
  name: "Piyas Ahmed",
  address: {
    city: "Dhaka",
  },
};

let user2 = {
  name: "Piyas Ahmed",
  //   address: {
  // city: "Dhaka",
  //   },
};
const getCity = (user) => {
  return user.address?.city;
};
console.log(getCity(user1));
console.log(getCity(user2));
