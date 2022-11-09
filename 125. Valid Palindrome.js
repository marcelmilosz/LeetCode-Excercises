// 97 a 65 = A 
// 122 z Z = 90
// 48 -- 0 , 57 -- 9

var returnOnlyLowLetter = function (letter) {
    let res = letter.charCodeAt(0);
    if (res >= 97 && res <= 122) return letter;
    if (res >= 65 && res <= 90) return String.fromCharCode(res + 32);
    if (res >= 48 && res <= 57) return letter;
    return "";
}

var isPalindrome = function (s) {

    let convertedS = "";

    for (let i = 0; i < s.length; i++) convertedS += returnOnlyLowLetter(s[i]);
    for (let i = 0; i < convertedS.length / 2; i++) {
        if (convertedS[i] != convertedS[convertedS.length - i - 1]) return false
    }

    return true;
};

console.log(isPalindrome(s = "a"))
