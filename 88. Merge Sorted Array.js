


var merge = function (nums1, m, nums2, n) {

    let insertPos = m + n - 1;
    m--; n--;
    while (n >= 0) {
        nums1[insertPos--] = (nums1[m] > nums2[n]) ? nums1[m--] : nums2[n--];
    }

};

// console.log(merge(nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3))
// console.log(merge(nums1 = [1], m = 1, nums2 = [], n = 0))
// console.log(merge(nums1 = [0], m = 0, nums2 = [1], n = 1))
console.log(merge(nums1 = [4, 0, 0, 0, 0, 0], m = 1, nums2 = [1, 2, 3, 5, 6], n = 5))