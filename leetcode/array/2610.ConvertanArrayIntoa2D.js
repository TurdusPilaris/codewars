// You are given an integer array nums. You need to create a 2D array from nums satisfying the following conditions:
//
//     The 2D array should contain only the elements of the array nums.
//     Each row in the 2D array contains distinct integers.
//     The number of rows in the 2D array should be minimal.
//     Return the resulting array. If there are multiple answers, return any of them.
//
//     Note that the 2D array can have a different number of elements on each row.

// var findMatrix = function(nums) {
//     const hash = {};
//     for (const num of nums) {
//         if(num in hash){
//             hash[num] = hash[num] + 1;
//         }else {
//             hash[num] = 1;
//         }
//     }
//
//     let max = 0;
//     for(const value of Object.values(hash)){
//         if(value>max){
//             max = value;
//         }
//     }
//
//     const arrResult = Array.from({length: max}, ()=>[]);
//
//     for( const [key, value] of Object.entries(hash)){
//         for (let i = 0; i < value; i++) {
//             arrResult[i].push(+key);
//         }
//     }
//
//     return arrResult;
// };

var findMatrix = function(nums) {

    const n = nums.length;
    const freq = new Array(n + 1).fill(0); // массив для подсчёта частот
    const ans = []; // итоговый двумерный массив

    for (const c of nums) {
        if (freq[c] >= ans.length) {
            ans.push([]); // добавляем новую строку, если нужно
        }
        ans[freq[c]].push(c); // кладём число в строку с индексом = текущей частоте
        freq[c]++; // увеличиваем частоту для числа c
    }

    return ans;
};
console.log(findMatrix([1,3,4,1,2,3,1]))//Output: [[1,3,4,2],[1,3],[1]]
console.log(findMatrix([9, 10, 11]))//Output: [[1,3,4,2],[1,3],[1]]