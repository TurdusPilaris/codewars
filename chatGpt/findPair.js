//это О(n)2

// function findPair(nums, target){
//     let result = null;
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = 0; j < nums.length; j++) {
//             if(nums[i]+nums[j] === target){ result = [nums[j],nums[i]]}
//         }
//     }
//     return result;
// }

//давай решим через set
function findPair(nums, target){
    let set =  new Set();
    for(let num of nums){
        let complement = target - num;
        if (set.has(complement)) {
            return [complement, num]
        }
        set.add(num);
    }
    return null;
}

console.log(findPair([1, 2, 3, 4, 6], 6)) // ➝ [2, 4]
console.log(findPair([1, 3, 5, 9], 10)) // ➝ [1, 9]
console.log(findPair([1, 2, 3], 10)) // ➝ null