// function isUnique(str){
//     for (let i = 0; i < str.length; i++) {
//         if(str.substring(i+1).includes(str[i])) return false
//     }
//     return true;
// }

//это было тоже не оптимально includes это прохождение циклом

function isUnique(str){
    const seen = {};
    for (let char of str) {
        if(seen[char]) return false;
        seen[char] = true;
    }

    return true;
}


console.log(isUnique("abcdef")) // ➝ true
console.log(isUnique("hello")) // ➝ false
console.log(isUnique("")) // ➝ true
console.log(isUnique("1234567890")) // ➝ true
console.log(isUnique("abca")) // ➝ false