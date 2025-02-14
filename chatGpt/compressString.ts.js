function compressString(str){
    // const resObj = {}
    // for(let char of str){
    //     resObj[char] = (resObj[char] ?? 0) + 1;
    // }
    // let resStr = "";
    // for(const [char, count] of Object.entries(resObj)){
    //     resStr = resStr + char + count.toString();
    // }
    // return resStr;
    let resStr = "";
    let count = 1;
    for (let i = 1; i <= str.length; i++) {
        if(str[i] === str[i-1]){
            count++;
        }else {
            resStr += str[i-1] + count;
            count = 1
        }
    }
    return resStr;
}


console.log(compressString("aaabbc")) // ➝ "a3b2c1"
console.log(compressString("abcd"))   // ➝ "a1b1c1d1"
console.log(compressString("aabbcc")) // ➝ "a2b2c2"
console.log(compressString("aaa"))    // ➝ "a3"
console.log(compressString("abacba"))    // ➝ "a3"
console.log(compressString(""))       // ➝ ""
