const fibonacci = function(num) {
    num = +num;
    if (num < 1) {
        return "OOPS";
    }
    num = num - 1; //Works better with the array.
    fibArray = [1, 1];
    let i = 1;
    while (i < num) {
        fibArray.push(fibArray[i] + fibArray[i-1]);
        i++;
    }
    return fibArray[num];
};

// Do not edit below this line
module.exports = fibonacci;
