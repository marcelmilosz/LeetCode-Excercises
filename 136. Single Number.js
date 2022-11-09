// var singleNumber = function (nums) {
//     let d = {};
//     for (let n of nums) (!d[n]) ? d[n] = 1 : d[n]++;
//     for (let n in d) if (d[n] == 1) return n
// };

var singleNumber = function (nums) {
    return nums.reduce((a, b) => a ^ b)
};

console.log(singleNumber(nums = [4, 1, 2, 1, 2]))