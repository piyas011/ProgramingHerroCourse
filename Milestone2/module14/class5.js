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
