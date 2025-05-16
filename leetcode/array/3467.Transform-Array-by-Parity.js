// You are given an integer array nums. Transform nums by performing the following operations in the exact order specified:
//
//     Replace each even number with 0.
//     Replace each odd numbers with 1.
//     Sort the modified array in non-decreasing order.
//     Return the resulting array after performing these operations.
var transformArray = function(nums) {
    return nums.map((number)=> number%2===0?0:1).sort();
};


console.log(transformArray([4,3,2,1]))//[0, 0, 1, 1].