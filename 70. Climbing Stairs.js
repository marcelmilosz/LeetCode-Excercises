
// Slower but Memory better
// var climbStairs = function (n) {
//     if (n == 0) return 0;
//     if (n == 1) return 1;
//     if (n == 2) return 2;

//     let s = [1, 1];
//     for (let i = 1; i < n; i++) {
//         s.push(s[i] + s[i - 1]);
//     }

//     return s[s.length - 1];
// };


// Faster \/
var climbStairs = function (n) {
    let s = [0, 1, 2];
    for (let i = 2; i < n; i++) {
        s.push(s[i] + s[i - 1]);
    }
    return s[n];
};

console.log(climbStairs(6))