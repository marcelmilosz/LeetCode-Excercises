// var mySqrt2 = function (x) {
//     let odd = 1;
//     let square = 0;

//     while (x > 0) {
//         x = x - odd;

//         odd += 2;
//         square++;
//     }

//     return (x < 0) ? (square - 1) : square;
// };

var mySqrt = function (x) {
    let square = 0;
    for (let odd = 1; x > 0; x = x - odd, odd += 2) { square++; }
    return (x < 0) ? (square - 1) : square;
};

// console.log(mySqrt2(15))
console.log(mySqrt(15))
