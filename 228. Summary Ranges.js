


// First try 60% Speed
// var summaryRanges = function (nums) {

//     let a = 0;
//     let b = 0;
//     let ans = [];

//     for (let i = 0; i < nums.length; i++) {

//         if (nums[i] + 1 === nums[b + 1]) {
//             b++;
//         }
//         else {
//             if (nums[a] === nums[b]) {
//                 ans.push(`${nums[b]}`)
//             }
//             else {
//                 ans.push(`${nums[a]}->${nums[b]}`)
//             }

//             b++;
//             a = b;

//         }
//     }

//     return ans
// };


// Faster option and shorter
// var summaryRanges = function (nums) {

//     let a = 0;
//     let ans = [];

//     for (let i = 1; i < nums.length + 1; i++) {
//         if (nums[i - 1] + 1 == nums[i]) continue
//         if (nums[a] === nums[i - 1]) ans.push(`${nums[a]}`)
//         else ans.push(`${nums[a]}->${nums[i - 1]}`)
//         a = i;
//     }
//     return ans
// };

// Even faster Third try
var summaryRanges = function (nums) {

    let a = 0;
    let ans = [];

    for (let i = 1; i < nums.length + 1; i++) {
        if (nums[i - 1] + 1 == nums[i]) continue
        ans.push(nums[a] === nums[i - 1] ? nums[a].toString() : `${nums[a]}->${nums[i - 1]}`)
        a = i;
    }
    return ans
};



console.log(summaryRanges(nums = [0, 1, 2, 4, 5, 7])) //["0->2","4->5","7"]
console.log(summaryRanges(nums = [0, 2, 3, 4, 6, 8, 9])) //["0","2->4","6","8->9"]