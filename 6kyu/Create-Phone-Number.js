// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
//
//     Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.
//
//     Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){

    //my solution
    // return  numbers.reduce((acc, el, index)=>{
    //     if(index===0){
    //         return acc = "("+el.toString();
    //     }
    //     if(index===2){
    //         return acc += +el.toString()+") ";
    //     }
    //     if(index===5){
    //         return acc += +el.toString()+"-";
    //     }
    //     return acc += +el.toString();
    // },"");

    //best practic
    var format = "(xxx) xxx-xxxx";

    for(var i = 0; i < numbers.length; i++)
    {
        format = format.replace('x', numbers[i]);
    }

    return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //, "(123) 456-7890");
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //, "(111) 111-1111");
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //, "(123) 456-7890");