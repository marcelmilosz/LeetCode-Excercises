


var plusOne = function (digits) {

    let last = digits.length - 1;

    if (digits[last] !== 9) digits[last]++;
    else {

        let p = last;

        while (digits[p] === 9 && p >= 0) {
            digits[p] = 0;
            p--;
        }

        if (p != -1) {
            digits[p]++;
            digits[last] = 0;
        } else {
            digits[0] = 1;
            digits.push(0);
        }
    }

    return digits;

};

console.log(plusOne([1, 3, 9]))