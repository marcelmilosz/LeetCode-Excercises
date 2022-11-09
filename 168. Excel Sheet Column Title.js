// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28 
// ...

var convertToTitle = function (columnNumber) {
    let base = 64;
    if (columnNumber < 27) return String.fromCharCode(columnNumber + base);

    let res = "";
    let r;

    while (columnNumber > 0) {

        r = columnNumber % 26;
        r = r == 0 ? 26 : r;

        console.log(columnNumber, r)

        res = String.fromCharCode(r + base) + res;

        columnNumber -= r;
        columnNumber /= 26;

    }
    return res;
};

// console.log(convertToTitle(columnNumber = 1)) // A
// console.log(convertToTitle(columnNumber = 28)) // AB
// console.log(convertToTitle(columnNumber = 701)) // ZY -- Z: 90 -- Y: 89
console.log(convertToTitle(columnNumber = 2147483647)) // FXSHRXW
console.log(convertToTitle(columnNumber = 52)) // AZ