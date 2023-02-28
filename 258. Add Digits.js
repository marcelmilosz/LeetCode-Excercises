



// First try 60% speed (in 9 minutes)
// var addDigits = function (num) {
//     let arr = [];
//     let sum = 0;

//     while (num != 0) {
//         arr.push(num % 10);
//         num = parseInt(num / 10)
//     }

//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }

//     if (sum < 10) return sum;
//     else return addDigits(sum);

// };

// Second try 93% Speed (+ 4mins)
var addDigits = function (num) {
    let sum = 0;

    while (num != 0) {
        sum += (num % 10);
        num = parseInt(num / 10)
    }

    if (sum < 10) return sum;
    else return addDigits(sum);

};

// Third try O(1)
// It seems that Every number % 9 will have the same result as counting all single digits and adding them like in my second try
// This is inspired by LeetCode user, damn they are smart..
let addDigits = function (num) {
    if (num < 10) return num;
    return (num % 9 === 0) ? 9 : num % 9;
};

console.log(addDigits(38)) // 1 + 1 = 2
console.log(addDigits(0)) // 0 = > 0 