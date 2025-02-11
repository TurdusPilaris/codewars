function firstUniqueChar(str){
    const resMap = new Map;
    for(let char of str){
        resMap.set(char,(resMap.get(char)??0) + 1);
    }

    return -1;

}

console.log(firstUniqueChar("leetcode")) // ➝ 0  (буква 'l')
console.log(firstUniqueChar("loveleetcode")) // ➝ 2 (буква 'v')
console.log(firstUniqueChar("aabb")) // ➝ -1 (все символы повторяются)