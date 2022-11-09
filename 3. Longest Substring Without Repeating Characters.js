



var lengthOfLongestSubstring = function (s) {

    let left = 0;
    let count = 0;
    let maxCount = 0;
    let letters = {};

    for (let right = 0; right < s.length; right++) {
        if (letters[s[right]]) {
            while (s[left] != s[right]) {
                letters[s[left]] = 0;
                left++;
                count--;
            }
            left++;
        }
        else {
            letters[s[right]] = 1;
            count++;
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount
};

console.log(lengthOfLongestSubstring("aaabc"))