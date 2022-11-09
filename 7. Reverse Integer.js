var reverse = function (x) {

    let reversed = 0;
    let num = Math.abs(x);

    while (num) {
        reversed = (reversed * 10) + (num % 10);
        num = Math.floor(num / 10);
    }

    return reversed > 0x7FFFFFFF ? 0 : ((x) < 0) ? -reversed : reversed;

};

console.log(reverse(-2147483412))