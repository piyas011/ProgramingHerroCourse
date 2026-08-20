//
//
//

const getTicketPrice = (age: number): number | string => {
  if (age < 0 || age > 150) {
    return "Age is not valid";
  }

  if (age < 5) {
    return 0;
  } else if (age <= 12) {
    return 100;
  } else if (age < 60) {
    return 200;
  }
  return 120;
};

const user1 = getTicketPrice(200);
console.log(user1);
