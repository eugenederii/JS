// Створити клас, що дозволяє виконувати такі операції над масивами: знаходження кількості додатних, кількості від’ємних, кількість входжень деякого числа (статичні методи)

class Count {
  constructor(arrNumber) {
    this.number = arrNumber;
  }

  static getPositivNum(arr) {
    let positiv = 0;
    for (let i of arr) {
      if (i > 0) positiv++;
    }
    return positiv;
  }

  static getNegativNum(arr) {
    let negativ = 0;
    for (let i of arr) {
      if (i < 0) negativ++;
    }
    return negativ;
  }

  static searchNum(arr, num) {
    let count = 0;
    for (let i of arr) {
      if (i === num) count++;
    }
    return count;
  }
}

const myArray = [-1, -2, 3, -4, 5, 6, 3, 1, 3, -4, 8];

const positiv = Count.getPositivNum(myArray);
console.log(positiv);
const negativ = Count.getNegativNum(myArray);
console.log(negativ);
const countNum = Count.searchNum(myArray, 3);
console.log(countNum);
