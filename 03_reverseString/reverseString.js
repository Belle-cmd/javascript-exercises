const reverseString = function(input) {
    let output = "";
    let count = 0;
    const arrayString = input.split("");  // turns the string into an array to enable iteration
    let index = input.length - 1;  // since array starts at 0, index should be -1 the length of string
    while (count != input.length) {
        output += arrayString[index]
        index--;
        count++;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
