// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.
//
//     Return the number of consistent strings in the array words.
//
//
//
//     Example 1:
//
// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.

// var countConsistentStrings = function(allowed, words) {
//     const allowStr = allowed.split('').sort().join('');
//     let count = 0;
//     for (const word of words) {
//         const stringWithoutDouble = [...new Set(word.split('').sort())].join('');
//         if(allowStr.includes(stringWithoutDouble)) count++
//     }
//     return count;
// };

var countConsistentStrings = function(allowed, words) {
    const allowedSet = new Set(allowed);
    let count = 0;
    return words.reduce((acc, word) => {
        return acc + ([...word].every(char => allowedSet.has(char))?1:0)
    }, 0)
}
console.log(countConsistentStrings('abc', ["a","b","c","ab","ac","bc","abc"]))