const add = function(addend1, addend2) {
	return addend1 + addend2;
};

const subtract = function(minuend, subtrahend) {
	return minuend - subtrahend;
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
};

const multiply = function(array) {
  if (array.length > 0) {
    let total = array[0];
    for (let i = 1; i < array.length; i++) {
      total *= array[i];
    }
    return total;
  } else {
    return 0;
  }
};

const power = function(base, exponent) {
	return Math.pow(base, exponent);
};

const factorial = function(n) {
	if (n===0) return 1;
  return n * factorial(n-1);
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
