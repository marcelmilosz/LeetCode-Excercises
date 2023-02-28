var hammingWeight = function (n) {
    let count = 0;
    while (n) {
        if (n & 1 == 1) count++;
        n = n >>> 1;
    }
    return count;
};

// console.log(hammingWeight(n = 00000000000000000000000010000000))
console.log(hammingWeight(n = 11111111111111111111111111111101))