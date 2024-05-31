// Take a number and check each digit if it is divisible by the digit on its left checked and return an array of booleans.
//
//     The booleans should always start with false becase there is no digit before the first one.
//
//     Examples
// 73312        => [false, false, true, false, true]
// 2026         => [false, true, false, true]
// 635          => [false, false, false]
// *** Remember 0 is evenly divisible by all integers but not the other way around **

function divisibleByLast(n) {
    let arr = [...n.toString()];
    let arr2 = arr.map((e, index) => {
        if(index===0) return false
         return (+e)%+arr[index-1]===0
    })
    // TODO
    return arr2
}

console.log(divisibleByLast(73312))//, [false, false, true, false, true], 'divisibleByLast(73312)')
console.log(divisibleByLast(2026))//, [false, true, false, true], 'divisibleByLast(2026)')
console.log(divisibleByLast(635))//, [false, false, false], 'divisibleByLast(635)')
console.log(divisibleByLast(1337))//, [false, true, true, false], 'divisibleByLast(1337)')