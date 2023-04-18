// Створити службове авто (водій, марка, номер). Створити клас таким чином, щоб можна було створити тільки один екземпляр цього класу.

class CarDriver {
  static #driver;
  constructor(driver, mark, number) {
    if (CarDriver.#driver) {
      return CarDriver.#driver;
    }
    this.driver = driver;
    this.mark = mark;
    this.number = number;

    CarDriver.#driver = this;
  }

  toString() {
    return `Driver: ${this.driver}, Mark:${this.mark}, Number: ${this.number}`;
  }
}

const car1 = new CarDriver("Oleg", "Opel", "AA1313BN");
console.log(car1.driver);
const car2 = new CarDriver("Pider", "Mazda", "AI4213BN");
console.log(car2.driver);
console.log(car1.toString());
console.log(car2.toString());
