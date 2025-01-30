// You are given two 0-indexed integer permutations A and B of length n.
//
//     A prefix common array of A and B is an array C such that C[i] is equal to the count of numbers that are present at or before the index i in both A and B.
//
//     Return the prefix common array of A and B.
//
//     A sequence of n integers is called a permutation if it contains all integers from 1 to n exactly once.
//
//

var findThePrefixCommonArray = function(A, B) {

    const resArr = [];
    for (let i = 0; i < A.length; i++) {
    let count = 0;
        let slicedArrB = B.slice(0,i+1);
        for (let j = 0; j <= i; j++) {
            if(slicedArrB.includes(A[j])){
                ++count;
            }
        }
        resArr.push(count);
    }
    return resArr;
};


console.log(findThePrefixCommonArray([1,3,2,4], [3,1,2,4])); //[0,2,3,4]
console.log(findThePrefixCommonArray([2,3,1], [3,1,2])); //[0,1,3]