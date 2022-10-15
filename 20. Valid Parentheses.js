// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isOpposite = function (s) {
    if (s === '(') return ')';
    if (s === '[') return ']';
    if (s === '{') return '}';

    return false;
}

var isValid = function (s) {

    if (s.length % 2 == 1 || s.length === 0) return false;

    let stack = [s[0]];
    let p = 0;
    let i = 0;

    while (p != s.length - 1) {
        p++;
        i++;
        stack.push(s[p]);
        if (stack[i] === isOpposite(stack[i - 1])) {
            stack.pop();
            stack.pop();
            i = i - 2;
        }
    }

    return (stack.length === 0);
};

console.log(isValid("(){}}{"));
console.log(isValid("()()()"));
console.log(isValid("()[]{}"));
console.log(isValid("(]"));
