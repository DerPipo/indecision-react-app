const square = function (x) {
  return x * x;
};

function squareFunc(x) {
  return x * x;
}

console.log(square);
console.log(squareFunc);

const squareArrow = (x) => x * x;

console.log(squareArrow(8));

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName('Dominik Alexander'));
