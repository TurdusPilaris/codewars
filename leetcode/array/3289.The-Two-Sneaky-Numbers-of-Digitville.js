// In the town of Digitville, there was a list of numbers called nums containing integers from 0 to n - 1. Each number was supposed to appear exactly once in the list, however, two mischievous numbers sneaked in an additional time, making the list longer than usual.
//
//     As the town detective, your task is to find these two sneaky numbers. Return an array of size two containing the two numbers (in any order), so peace can return to Digitville.

var getSneakyNumbers = function (nums) {
    const result = [];
    const set = new Set();
    for (const num of nums) {
        if(set.has(num)){
            result.push(num);
        }else{
            set.add(num);
        }

    }
    return result;
};

console.log(getSneakyNumbers([0,1,1,0])) //Output: [0,1]
console.log(getSneakyNumbers([0,3,2,1,3,2])) //Output: [2,3]
console.log(getSneakyNumbers([7,1,5,4,3,4,6,0,9,5,8,2])) //Output: [4,5]
