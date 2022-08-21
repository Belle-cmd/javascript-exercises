const palindromes = function (string) {
    // regex say "anything not lowercase letters" + global 
    const cleanedString = string.toLowerCase().replace(/[^a-z]/g, "");
    const splitted = string.toLowerCase().split("");
    let charOnly = "";
    for (let i = string.length - 1; i >= 0; i--) {
        if (splitted[i] === " "|| splitted[i] === ","||splitted[i] === "!"||splitted[i] === ".") {
            continue;
        }
        charOnly += splitted[i];
    }
    return charOnly === cleanedString;
};

// Do not edit below this line
module.exports = palindromes;
