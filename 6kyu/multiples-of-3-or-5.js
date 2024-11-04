// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
//
// Additionally, if the number is negative, return 0.
//
// Note: If the number is a multiple of both 3 and 5, only count it once.

//my solution
function solution(number){
    if (number < 1) return 0;
    let multiple = 0;
    let sumOfDivisors = 0;
    while (multiple<number){

        if(multiple%3===0 || multiple%5===0 ){
            sumOfDivisors += multiple;
        }

        multiple += 1;
    }
    return sumOfDivisors;
}


console.log(solution(10))// 23
console.log(solution(-10))// 0