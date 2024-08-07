// arguments object - no longer bound with arrow functions

const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  },
};
console.log(user.printPlacesLived());

// Challenge area

// const multiplier = {
//   numbers: [10, 20, 30],
//   multiplyBy: 3,
//   multiply() {
//     return this.numbers.map((number) => number * this.multiplyBy);
//   }
// };

// console.log(multiplier.multiply());

const myArray = ['a', 'b', 'c'];

myArray.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

myArray.myMap = function (callback) {
  let a = [];
  for (let i = 0; i < this.length; i++) {
    a.push(callback(this[i]));
  }
  return a;
};

myArray.myForEach((i) => console.log(i));
console.log(myArray.myMap((i) => i.toUpperCase()));

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((x) => x * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
