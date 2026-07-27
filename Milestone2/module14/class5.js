{
  /**
   * Problem 1 : calculateToral(price,tax)
   * Purpose : should calculate and return rhe toral price including tax,
   * so it can be use later in other calculations
   */
  function calculateTotal(price, tax) {
    let total = price + tax;
    return total;
  }
  let finalAmount = calculateTotal(500, 20);
  console.log(`${finalAmount + 20}`);
}
console.log("===================================");
{
  /**
   * Problem 2 : introduce(name,birthYear,city)
   * Purpose : should calculate age from brithYear (current Yeay - birthYear)
   * and return an sentence like
   * "my name is alex, I am 20 Years old from dhaka,"
   */

  let currentYear = 2026;
  function introduce(name, birthYear, city) {
    let age = currentYear - birthYear;
    return `Hello My Name Is ${name} and I am ${age} Years old and I am From ${city}`;
  }
  let result = introduce("Piyas Ahmed", 2005, "Dhaka");
  console.log(result);
}
