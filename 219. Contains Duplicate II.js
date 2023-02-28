



// First Try - Too Slow
// var containsNearbyDuplicate = function (nums, k) {

//     let pos = 0;
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[pos] == nums[i] && Math.abs(i - pos) <= k) return true;
//         if (i == nums.length - 1) {
//             pos++;
//             i = pos;
//         }
//     }
//     return false;
// };


// Second try - too slow 
// var containsNearbyDuplicate = function (nums, k) {


//     let dictionary = {};

//     for (let i = 0; i < nums.length; i++) {
//         if (!dictionary[nums[i]]) dictionary[nums[i]] = [i]
//         else dictionary[nums[i]].push(i)
//     }

//     let arr = Object.values(dictionary);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length >= 2) {
//             for (let j = 0; j < arr[i].length - 1; j++) {
//                 if (Math.abs(arr[i][j] - arr[i][j + 1]) <= k) return true
//             }
//         }
//     }
//     return false;
// };


// Very cool solution with help of other users
var containsNearbyDuplicate = function (nums, k) {


    let mySet = new Set();
    let left = 0;

    for (let right = 0; right < nums.length; right++) {

        if (mySet.has(nums[right]) && right - left <= k) return true;

        mySet.add(nums[right]);

        if (right - left === k) {
            mySet.delete(nums[left]);
            left += 1;
        }

        console.log(mySet)
    }

    return false;

};

// console.log(containsNearbyDuplicate([1, 2, 3, 1], 3)) // true 
// console.log(containsNearbyDuplicate([1, 0, 1, 1], 1)) // true
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)) // false