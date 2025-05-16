// Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

var uniqueOccurrences = function(arr) {

    const map = new Map();

    for (const num of arr) {
        if(map.has(num)){
            map.set(num, map.get(num) +1)
        }else{
            map.set(num, 1);
        }
    }

    const set = new Set([...map.values()])

    return set.size === map.size;

};

console.log(uniqueOccurrences([1,2,2,1,1,3])) // true
console.log(uniqueOccurrences([1,2])) // false
console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0])) // true