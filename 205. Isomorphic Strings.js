
let checkWord = function (w) {
    let arr = [];
    let count = 1;
    let symbols = {};

    for (let i = 0; i < w.length; i++) {
        if (!symbols[w[i]]) {
            symbols[w[i]] = count;
            count++;
        }
        arr.push(symbols[w[i]])
    }
    return arr;
}


var isIsomorphic = function (s, t) {

    if (s.length !== t.length) return false;

    let ss = checkWord(s).toString();
    let tt = checkWord(t).toString();

    return (ss === tt) ? true : false
}

// console.log(isIsomorphic(s = "egg", t = "add"))
console.log(isIsomorphic(s = "badc", t = "baba"))