exports.min = function min(array) {
    let minNumber = 0;
    if (array === undefined || arguments.length === 0 || array.length === 0) {
        minNumber = 0;
        return minNumber;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    let maxNumber = 0;
    if (array === undefined || arguments.length === 0 || array.length === 0) {
        maxNumber = 0;
        return maxNumber;
    }

    return Math.max(...array);
};

exports.avg = function avg(array) {
    let avgNumber = 0;
    if (array === undefined || arguments.length === 0 || array.length === 0) {
        avgNumber = 0;
        return avgNumber;
    }
    let result = array.reduce(function (a, b) {
        return a + b;
    }, 0);
    return result / array.length;
};
