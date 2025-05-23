// Create a function with two arguments that will return an array of the first n multiples of x.
//
//     Assume both the given number and the number of times to count will be positive numbers greater than 0.
//
// Return the results as an array or list ( depending on language ).

function countBy(x, n) {

    // return [...Array(n)].map((_, i) => i)
    // return [ ...Array(n).keys() ].map( i => i+1);
     return [ ...Array(n)].fill(0) ;

    // return [ ...Array(n).keys() ].map( i => (i+1)*x);

}

console.log(countBy(1,10)); // , [1,2,3,4,5,6,7,8,9,10],); // "Array does not match")
 console.log(countBy(2,5)); // , [2,4,6,8,10]); //, "Array does not match")