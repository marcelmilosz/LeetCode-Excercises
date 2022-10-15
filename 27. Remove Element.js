

var removeElement = function (nums, val) {

    for (let i = nums.length - 1; i >= 0; i--) {

        if (nums[i] === val && i === nums.length - 1) {
            nums.pop();
            continue;
        }

        if (nums[i] === val) {
            nums[i] = nums[nums.length - 1];
            nums.pop();
        }
    }

    return nums.length
};

console.log(removeElement([3, 2, 2, 3, 4], 3))

// 0, 1, 2, 2, 3, 0
// 0, 1, 2, 2, 3, 0