// var titleToNumber = function (columnTitle) {

//     // A -> 1 (65)
//     // B -> 2
//     // Z -> 26 (90)
//     // AA -> 27

//     if (columnTitle.length == 1) return columnTitle[0].charCodeAt() - 64;

//     let charCode;
//     let sum = 0;
//     let len = columnTitle.length;

//     for (let i = 0; i < len; i++) {
//         charCode = columnTitle[i].charCodeAt() - 64;
//         sum += charCode * Math.pow(26, len - i - 1)
//     }

//     return sum
// };

var titleToNumber = function (columnTitle) {

    if (columnTitle.length == 1) return columnTitle[0].charCodeAt() - 64;

    let pow = 0;
    let sum = 0;

    for (let i = columnTitle.length - 1; i > - 1; i--) {
        sum += (columnTitle[i].charCodeAt() - 64) * Math.pow(26, pow++)
    }

    return sum
};

// console.log(titleToNumber("A")); // 1
// console.log(titleToNumber("AB")); // 28
// console.log(titleToNumber("BA")); // 53
// console.log(titleToNumber("ZY")); // 701
// console.log(titleToNumber("FXS")); // 4699
console.log(titleToNumber("DX")); // 128
console.log(titleToNumber("FXSHRXW")); // 2147483647
