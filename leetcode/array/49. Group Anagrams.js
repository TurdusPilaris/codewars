// Given an array of strings strs, group the anagrams together. You can return the answer in any order.
//
//
//
//     Example 1:
//
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
//
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
//
// Explanation:
//
//     There is no string in strs that can be rearranged to form "bat".
//     The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
//     The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
//     Example 2:
//
// Input: strs = [""]
//
// Output: [[""]]
//
// Example 3:
//
// Input: strs = ["a"]
//
// Output: [["a"]]

var groupAnagrams = function(strs) {

    const anagrams = {};
    for (let i = 0; i < strs.length; i++) {
        const sortWord = strs[i].split('').sort().join(' ');
        if(!anagrams[sortWord]){
            anagrams[sortWord] = [];
        }
        anagrams[sortWord].push(strs[i]);

    }

    return Object.values(anagrams);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));//[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams([""]));//[["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(groupAnagrams(["a"]));//[["bat"],["nat","tan"],["ate","eat","tea"]]