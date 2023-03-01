// First try 90% speed 60% memory (15 mins)
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0;
        let right = n;
        let mid = Math.floor((left + right) / 2);

        while (left < right) {
            if (isBadVersion(mid) && !isBadVersion(mid - 1)) return mid;
            else if (!isBadVersion(mid) && isBadVersion(mid + 1)) return mid + 1;
            else if (!isBadVersion(mid)) left = mid;
            else right = mid;
            mid = Math.floor((left + right) / 2);
        }
    };
};