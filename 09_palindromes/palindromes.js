const palindromes = function (phrase) {
    let newPhrase = phrase.replace(/[,.!?\s]/g, "");
    newPhrase = newPhrase.toLowerCase();
    let i = 0;
    let j = newPhrase.length - 1;
    while (i < j) {
        if (newPhrase[i] === newPhrase[j]) {
            i++, j--;
            continue;
        }
        else {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
