

// First try very bad 15% speed 50% memory (15 mins)
// var moveZeroes = function (nums) {
//     let i = 0;
//     let right = nums.length - 1;

//     while (i < right) {

//         if (nums[i] == 0) {

//             for (let j = i; j < right; j++) {
//                 nums[j] = nums[j + 1]
//             }
//             nums[right] = 0;
//             right--;
//             i--;
//         }

//         i++;
//     }
// };

// Second time 85% speed 85% memory 
var moveZeroes = function (nums) {
    let right = nums.length;

    for (let i = right; i != 0; i--) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
        }
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12])) // [1, 3, 12, 0, 0]
// console.log(moveZeroes([0])) // [0]
console.log(moveZeroes([0, 0, 1])) // [1, 1, 0]