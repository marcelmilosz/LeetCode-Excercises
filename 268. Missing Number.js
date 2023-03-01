


// First try 60% speed 92% memory (5 mins)
// var missingNumber = function (nums) {

//     let sum = 0;
//     let expSum = 0;

//     for (let i = 0; i < nums.length + 1; i++) {
//         expSum += i;
//         if (i < nums.length) sum += nums[i]
//     }

//     return expSum - sum
// };


// Second try 75% speed 75% memory (6 mins)
var missingNumber = function (nums) {
    let range = nums.length + 1;
    let sum = nums.reduce((acc, curr) => acc + curr);
    let expSum = (range * (range - 1) / 2);
    return expSum - sum;
};

console.log(missingNumber([3, 0, 1])) // 2
console.log(missingNumber([0, 1])) // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // 8