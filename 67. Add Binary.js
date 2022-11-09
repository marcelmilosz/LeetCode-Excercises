
// Awesome Method
// var addBinary = function (a, b) {
//     return (BigInt(`0b${a}`) + BigInt(`0b${b}`)).toString(2)
// };


var addBinary = function (a, b) {

    let iA = a.length;
    let iB = b.length;

    let carry = false;
    let sum = "";
    let sumReversed = "";

    for (let i = Math.max(iA, iB); i >= 0; i--) {

        iA--;
        iB--;

        if (a[iA] == "0" && b[iB] == "0") {
            if (carry) {
                sum += "1";
                carry = false;
            } else sum += "0";
        }
        else if ((a[iA] == "0" && b[iB] == "1") || (a[iA] == "1" && b[iB] == "0")) {
            if (carry) {
                sum += "0"
                carry = true
            } else sum += "1";
        }
        else if (a[iA] == "1" && b[iB] == "1") {
            if (carry) {
                sum += "1";
                carry = true;
            } else {
                sum += "0"
                carry = true;
            }
        } else {
            if (a[iA] && carry) {
                if (a[iA] == "0") {
                    sum += "1"
                    carry = false;
                }
                else if (a[iA] == "1") {
                    sum += "0"
                    carry = true;
                }
                continue
            }
            else if (b[iB] && carry) {
                if (b[iB] == "0") {
                    sum += "1"
                    carry = false;
                }
                else if (b[iB] == "1") {
                    sum += "0"
                    carry = true;
                }
            }
            else {
                if (a[iA]) sum += a[iA];
                else if (b[iB]) sum += b[iB];
                continue
            }
        }
    }

    if (carry) sum += "1";

    for (let r = sum.length; r >= 0; r--) if (sum[r]) sumReversed += sum[r];

    return sumReversed;

};


console.log(addBinary("10110", "1011"));
// console.log(addBinary("1010", "1011"));
// console.log(addBinary("1010", "101"));
// console.log(addBinary("1010011001", "1"));