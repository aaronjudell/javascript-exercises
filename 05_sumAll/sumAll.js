const sumAll = function(num1, num2) {
    if (typeof num1 != "number" || typeof num2 != "number") {
        return "ERROR";
    }
    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    let larger = 0;
    let smaller = 0;
    if (num2 > num1) {
        larger = num2;
        smaller = num1;
    }
    else {
        larger = num1;
        smaller = num2;
    }
    let result = 0;
    while (smaller <= larger) {
        result += smaller;
        smaller++;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
