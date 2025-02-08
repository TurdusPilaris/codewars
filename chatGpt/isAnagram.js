// function isAnagram(str1, str2){
//     if(str1.length !== str2.length) return false;
//     return str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('');
// }

function isAnagram(str1, str2){

    if (str1.length !== str2.length) return false;

    const charCount = {};

    for (let char of str1.toLowerCase()) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    console.log(charCount);

    for (let char of str2.toLowerCase()) {
        if (!charCount[char]) return false; // Символа нет или счетчик 0
        charCount[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")) // ➝ true
console.log(isAnagram("hello", "world"))   // ➝ false
console.log(isAnagram("racecar", "carrace")) // ➝ true
console.log(isAnagram("aabb", "bbaa")) // ➝ true
console.log(isAnagram("test", "ttew")) // ➝ false