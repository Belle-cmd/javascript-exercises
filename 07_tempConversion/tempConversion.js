const ftoc = function(fahrenheit) {
  let output = (fahrenheit - 32) * (5/9);
  return Math.round(output * 10) / 10;
};

const ctof = function() {

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
