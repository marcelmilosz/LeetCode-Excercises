




// First Try 70% faster 90% space 
var isAnagram = function (s, t) {

    if (s.length !== t.length) return false;

    let sDictionary = {};

    for (let i = 0; i < s.length; i++) {
        if (!sDictionary[s[i]]) sDictionary[s[i]] = 1
        else sDictionary[s[i]] += 1
    }

    for (let i = 0; i < s.length; i++) {
        if (sDictionary[t[i]] > 0) sDictionary[t[i]] -= 1
        else return false
    }

    return true;
};


console.log(isAnagram(s = "anagram", t = "nagaram")) // true 
console.log(isAnagram(s = "rat", t = "car")) // false
