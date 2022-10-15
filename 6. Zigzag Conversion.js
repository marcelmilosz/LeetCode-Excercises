/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"

// Input: s = "A", numRows = 1
// Output: "A"

var convert = function (s, numRows) {

    if (numRows < 2 || s.length < numRows) {
        return s;
    }

    let row = numRows;
    let jump = 0;

    let final = "";

    for (let i = 0; i < numRows; i++) {

        while (final.length != s.length) {

            if (s[jump]) final += s[jump];

            jump = jump + ((row - 1) * 2);

            if (i > 0 && i < numRows - 1 && s[jump]) final += s[jump];

            jump = jump + (i * 2);

            if (!s[jump]) break;

        }

        jump = i + 1;
        row--;
    }

    return final
};

console.log(convert("AB", 1));