const sumAll = function(addend1, addend2) {
    // check for larger value
    let larger;
    let smaller;
    
    if ((typeof(addend1) != "number") || (typeof(addend2) != "number")) {
        return "ERROR";
    } else if (addend1 < 0 || addend2 < 0) {
        return "ERROR";
    } else if (addend1 > addend2) {
        larger = addend1;
        smaller = addend2;
    }
     else {
        larger = addend2;
        smaller = addend1;
    }

    let output = 0;
    for (i=smaller; i <= larger; i++) {
        output += i;
    }

    return output;
};

// Do not edit below this line
module.exports = sumAll;
