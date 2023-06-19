const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(array) {
	let result = 0;
  for (element of array) {
    result += element;
  }
  return result;
};

const multiply = function(num1, ...nums) {
  let result = 1;
  for (num of nums) {
    result *= num;
  }
  return num1 * result;
};

const power = function(num1, num2) {
	return (num1**num2);
};

const factorial = function(num) {
	if (num === 0) {
    return 1;
  }
  else {
    let fac = 1;
    for (num; num > 0; num--) {
      fac *= num;
    }
    return fac;
  }
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
