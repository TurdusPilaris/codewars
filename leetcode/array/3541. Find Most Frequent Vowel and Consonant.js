// You are given a string s consisting of lowercase English letters ('a' to 'z').
//
// Your task is to:
//
//     Find the vowel (one of 'a', 'e', 'i', 'o', or 'u') with the maximum frequency.
//     Find the consonant (all other letters excluding vowels) with the maximum frequency.
//     Return the sum of the two frequencies.
//
//     Note: If multiple vowels or consonants have the same maximum frequency, you may choose any one of them. If there are no vowels or no consonants in the string, consider their frequency as 0.
//
// The frequency of a letter x is the number of times it occurs in the string.

let maxFreqSum = function(s) {
    const vowel = new Set(['a', 'e', 'i', 'o', 'u']);
    let map = new Map();
    for (const char of s) {
        map.set(char, (map.get(char) ?? 0) +1 )
    }
    let maxVowel = 0;
    let maxConsonant  = 0;
    for (const [value, count] of map.entries()) {
        if(vowel.has(value)){
            maxVowel = Math.max(count, maxVowel);
        }else{
            maxConsonant = Math.max(count, maxConsonant);
        }
    }
    return maxVowel + maxConsonant;

};

console.log(maxFreqSum("successes"))