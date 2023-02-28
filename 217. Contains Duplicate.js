var containsDuplicate = function (nums) {
    let digits = {};
    for (let i = 0; i < nums.length; i++) {
        if (!digits[nums[i]]) digits[nums[i]] = 1;
        else return true;
    }
    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]))