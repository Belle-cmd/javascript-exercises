const getTheTitles = function(obj) {
    let output = [];
    obj.filter(item => output.push(item["title"]));
    return output;
};

// Do not edit below this line
module.exports = getTheTitles;
