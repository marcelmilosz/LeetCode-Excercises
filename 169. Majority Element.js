var majorityElement = function (nums) {
    let obj = {}, nMax = nums.length / 2;
    for (let n = 0; n < nums.length; n++) {
        obj[nums[n]] = obj[nums[n]] + 1 || 1;
        if (obj[nums[n]] >= nMax) return nums[n]
    }
};


// console.log(majorityElement(nums = [2, 2, 1, 1, 1, 2, 2]))
console.log(majorityElement(nums = [3, 2, 3]))