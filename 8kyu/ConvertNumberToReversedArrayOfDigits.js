// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
//
// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
    // let stringN = String(n);
    // let arrayString = Array.from(stringN);
    // let resultArray = [];
    //
    // for(let i = arrayString.length; i > 0 ; i--){
    //     resultArray.push(Number(arrayString[i-1]));
    // }
    // return resultArray;

    return Array.from(String(n), Number).reverse();
}

document.write(digitize(12345), '<br>');


document.write(digitize(0), '<br>');