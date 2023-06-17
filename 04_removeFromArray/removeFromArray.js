const removeFromArray = function(array, ...removeArgs) {
    const newArray = [];
    array.forEach((element) => {
        if (!removeArgs.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
