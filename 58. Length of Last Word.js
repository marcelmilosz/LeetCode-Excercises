var lengthOfLastWord = function (s) {
    let count = 0;
    let last = s.length - 1;

    while (s[last] == " " && s[last]) last--;
    while (s[last] !== " " && s[last]) {
        last--;
        count++;
    }

    return count;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "))
// console.log(lengthOfLastWord("luffy is still joyboy"))
console.log(lengthOfLastWord("Hello World"))