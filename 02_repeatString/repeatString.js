const repeatString = function(string,num) {
    let count = 0;
    let output = "";
    while (count != num) {
        output += string;
        count++;
    }
    return output;
};

// Do not edit below this line
module.exports = repeatString;
