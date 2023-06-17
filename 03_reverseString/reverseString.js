const reverseString = function(forward) {
    let reverse = forward.split('');
    reverse = reverse.reverse();
    let result = reverse.join('');
    return result;
};

// Do not edit below this line
module.exports = reverseString;
