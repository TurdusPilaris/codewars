// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order, and each of their nodes contains a single digit.
// Add the two numbers and return the sum as a linked list.
//
//     You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
var addTwoNumbers = function(l1, l2) {
    l1 = [...l1];
    l2 = [...l2]
    const sum = Number(l1.reverse().join('')) + Number(l2.reverse().join(''));
    return sum.toString().split('').reverse().map((n)=> +n)
    // new NodeList().
};

// console.log(addTwoNumbers([2,4,3], [5,6,4]))
console.log(addTwoNumbers(new NodeList(...[2,4,3]), new NodeList(...[5,6,4])))