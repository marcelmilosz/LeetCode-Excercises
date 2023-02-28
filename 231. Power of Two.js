

// First try 70%+ faster
// var isPowerOfTwo = function (n) {
//     if (n == 0) return false

//     while (n != 1) {
//         if (n % 2 !== 0) return false
//         n = n / 2
//     }

//     return true
// };

// Recursive way 99%+ faster
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;
    if (n == 1) return true;
    return (n % 2 != 0) ? false : isPowerOfTwo(n / 2)
};



console.log(isPowerOfTwo(1)) // true 
console.log(isPowerOfTwo(3)) // false
console.log(isPowerOfTwo(16)) // true
console.log(isPowerOfTwo(24)) // false
console.log(isPowerOfTwo(32)) // true