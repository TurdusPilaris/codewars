// Task
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
//     Mind the input validation.
//
//     Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {

    if(!array) return 0;

    let newArray = array.sort((a, b) => {
        if(a > b) return 1
        if(a < b) return -1
        return 0
    });
    return newArray.reduce(
        function (acc, number, index) {
           if (index > 0 && index < (newArray.length-1)){
            return acc + number;
         } else return acc + 0;

    }, 0);
}

console.log(sumArray([null]) ) // , 2 );
console.log(sumArray([]) ) // , 2 );
console.log(sumArray([ 2]) ) // , 2 );
console.log(sumArray([ 2, 2]) ) // , 2 );
console.log(sumArray([ 1, 2, 3]) ) // , 2 );
console.log(sumArray([ 6, 2, 1, 8, 10 ]) ) // , 16 );
console.log( sumArray([ 0, 1, 6, 10, 10 ]) ) //     , 17 );
console.log( sumArray([ -6, -20, -1, -10, -12 ])) // , -28 );
console.log( sumArray([ -6, 20, -1, 10, -12 ]) ) //  , 3 );