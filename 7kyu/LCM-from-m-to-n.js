// Task
// Your task is to find the smallest number which is evenly divided by all numbers between m and n (both inclusive).
//
// Example
// For m = 1, n = 2, the output should be 2.
//
// For m = 2, n = 3, the output should be 6.
//
// For m = 3, n = 2, the output should be 6 too.
//
//     For m = 1, n = 10, the output should be 2520.
//
// Input/Output
//     [input] integer m
// 1 ≤ m ≤ 25
//
//     [input] integer n
// 1 ≤ n ≤ 25
//
//     [output] an integer

function mnLCM(m,n) {

    for(let i = 1; (i%m!==0)&&(i%n!==0); i++){
        console.log(i%m)
        console.log(i%m)
    }
}

console.log(mnLCM(1,2)) //,2)

console.log(mnLCM(1,5)) //,60)

console.log(mnLCM(5,1)) //,60)

console.log(mnLCM(1,10)) //,2520)

console.log(mnLCM(2,3)) //,6)

console.log(mnLCM(3,5)) //,60)

console.log(mnLCM(10,20)) //,232792560)

console.log(mnLCM(1,25)) //,26771144400)

console.log(mnLCM(24,25)) //,600)