// Create a function named divisors/Divisors that takes an integer n > 1 and returns
// an array with all of the integer's divisors(except for 1 and the number itself),
// from smallest to largest. If the number is prime return the string '(integer) is prime'
// (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>,
// String> in Rust).
//
// Examples:
//     divisors(12) --> [2, 3, 4, 6]
// divisors(25) --> [5]
// divisors(13) --> "13 is prime"

export function divisors(integer) {

    let count = 2;
    const arrayRes = [];
    while (count<integer-1){
        if(integer%count===0) arrayRes.push(count)
        count = count +1;
    }
    return arrayRes.length===0?integer+" is prime":arrayRes;
}

console.log(divisors(13))
