const fibonacci = function(n) {
    if (n < 0) return "OOPS";
    if (typeof(n) === "string") n = Number(n);

	if (n===0) {
        return 0;
    } else if (n===1) {
        return 1;
    }
  return fibonacci(n-2) + fibonacci(n-1);
};

// Do not edit below this line
module.exports = fibonacci;
