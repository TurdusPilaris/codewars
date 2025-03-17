// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
//
//     A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// var maximumWealth = function(accounts) {
//     return accounts.reduce((acc, arr, i)=>{
//         const sum = sumOffArray(arr);
//         if(acc < sum){
//             return  sum;
//         }else{
//             return acc
//         }
//     }, 0)
// };
//
// function sumOffArray(array){
//     return array.reduce((acc, number, i)=>{
//         return acc = acc + number;
//     })
// }

var maximumWealth = function(accounts) {
    return Math.max(...accounts.map((value)=>value.reduce((acc, cur)=> { return acc+ cur})))
};


console.log(
    maximumWealth([[1,2,3],[3,2,1]])
)//6
console.log(
    maximumWealth([[1,5],[7,3],[3,5]])
)//10

console.log(
    maximumWealth([[2,8,7],[7,1,3],[1,9,5]])
)//17
