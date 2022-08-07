const removeFromArray = function(array) {
    // iterate through all array arguments
    let argLength = arguments.length - 1;
    while (argLength != 0) {
        // iterate through array and delete last element if it matches target elements
        let index = 0;
        while (index < array.length) {
            // enable duplicated items to be deleted
            if (array[index] === arguments[argLength]) {
                array.splice(index, 1); 
            } else {
                index++;
            }
        }
        argLength--;
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
