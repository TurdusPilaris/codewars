// You are given two strings s and t such that every character occurs at most once in s and t is a permutation of s.
//
//     The permutation difference between s and t is defined as the sum of the absolute difference between the index of the occurrence of each character in s and the index of the occurrence of the same character in t.
//
//     Return the permutation difference between s and t.
//
//     Example 1:
//
// Input: s = "abc", t = "bac"
//
// Output: 2
//
// Explanation:
//
//     For s = "abc" and t = "bac", the permutation difference of s and t is equal to the sum of:
//
//     The absolute difference between the index of the occurrence of "a" in s and the index of the occurrence of "a" in t.
//     The absolute difference between the index of the occurrence of "b" in s and the index of the occurrence of "b" in t.
//     The absolute difference between the index of the occurrence of "c" in s and the index of the occurrence of "c" in t.
//     That is, the permutation difference between s and t is equal to |0 - 1| + |1 - 0| + |2 - 2| = 2.

var findPermutationDifference = function(s, t) {

    const tIndexMap = {}
    for (let i = 0; i < t.length; i++) {
        tIndexMap[t[i]] = i;
    }

    return [...s].reduce((acc, str, index) =>{
        acc = acc + Math.abs(index - tIndexMap[str]);
        return acc
    }, 0)

};

console.log(findPermutationDifference("abc", "bac"));//2
console.log(findPermutationDifference("abcde", "edbac"));//2