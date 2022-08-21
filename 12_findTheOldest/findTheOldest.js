const findTheOldest = function(arrayObj) {
    const oldest = arrayObj.reduce((prevPerson, curPerson) => {
        if (!("yearOfDeath" in prevPerson)) prevPerson["yearOfDeath"] = new Date().getFullYear();
        const age1 = curPerson["yearOfDeath"] - curPerson["yearOfBirth"];
        const age2 = prevPerson["yearOfDeath"] - prevPerson["yearOfBirth"];
        if (age1 > age2) {
            return curPerson;
        }
        return prevPerson;
    });
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
