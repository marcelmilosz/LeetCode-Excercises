


// First try in 10 mins (60% speed 60% mem)
// let singleNumber = function (nums) {

//     let d = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (!d[nums[i]]) d[nums[i]] = 1;
//         else delete d[nums[i]]
//     }
//     return Object.keys(d).map((ele) => parseInt(ele));
// };

// Second Try 
// let singleNumber = function (nums) {

//     let arr = [];

//     for (let i = 0; i < nums.length; i++) {
//         if (nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) arr.push(nums[i])
//     }
//     return arr
// };

// Third Try (Im very happy with this one!)
// 95% memory but slow .. 
let singleNumber = function (nums) {
    return nums.filter(n => nums.indexOf(n) === nums.lastIndexOf(n))
};

console.log(singleNumber([1, 2, 1, 3, 2, 5])) // [3, 5]
// console.log(singleNumber([-2, 0, 1, 3])) // 2
// console.log(singleNumber([-1, 0])) // [-1, 0]
// console.log(singleNumber([0, 1])) // [1, 0]
// console.log(singleNumber([])) // 0
// console.log(singleNumber([0])) // 0