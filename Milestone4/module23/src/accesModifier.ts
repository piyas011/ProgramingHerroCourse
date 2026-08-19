/**
 * balance
 * pin
 * phone
 * history
 *
 */
// access modifier : public ,  private , protected
class BikashAccount {
  public phone: string;
  private balance: number;
  private pin: number;
  protected history = [];

  constructor(phone: string, balance: number, pin: number) {
    this.phone = phone;
    this.balance = balance;
    this.pin = pin;
  }

  getBalance(pin: number) {
    if (this.pin === pin) {
      return this.balance;
    }
    return `Pin is wrong`;
  }
}

const piyas = new BikashAccount("123456789", 5000, 1234);
const rohim = new BikashAccount("9485769443", 4000, 999);

// console.log(piyas.balance);
// console.log(rohim.pin);

console.log(piyas.getBalance(1234));
