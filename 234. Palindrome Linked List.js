/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function(head) {
    const arr = [];
    while(head && head.val !== null) {
        arr.push(head.val);
        head = head.next;
    }
    return arr.every((e, i) => e === arr[arr.length - i - 1]);
};

// function linkedList(arr){
//     return arr.reduceRight((next, val) => ({val, next}), null);
// }

// let l = [1, 2, 2, 1];
// console.log(isPalindrome(linkedList(l)));