const findTheOldest = function(array) {
    let oldestIndex = 0;
    let oldestAge = 0;
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < array.length; i++) {
        let age = 0;
        if (!('yearOfDeath' in array[i])) {
            age = (currentYear - array[i].yearOfBirth);
        }
        else {
            age = (array[i].yearOfDeath - array[i].yearOfBirth);
        }
        if (age > oldestAge) {
            oldestIndex = i;
            oldestAge = age;
        }
    }
    return array[oldestIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
