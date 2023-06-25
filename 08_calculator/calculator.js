const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((sum, item) => sum + item, 0);
};

const multiply = function(...args) {
  if (args.length == 0) {
    return 0;
  }
  let product = 1;
  for (let i = 0; i < args.length; i++) {
    product *= args[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  let factorial = 1;
  while (a > 1) {
    factorial *= a--;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
