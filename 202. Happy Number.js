let getSum = function (n) {
    let sum = 0;

    while (n >= 1) {
        sum += (n % 10) * (n % 10);
        n = Math.floor(n / 10);
    }

    return sum;
}

var isHappy = function (n) {
    let seen = {};
    while (n !== 1 && !seen[n]) {
        seen[n] = true;
        n = getSum(n);
    }
    return (n === 1) ? true : false
};