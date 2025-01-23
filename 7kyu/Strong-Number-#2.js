function strong(n) {
    const result = {
        strong: "STRONG!!!!",
        notStrong: "Not Strong !!"
    }
    const arrForNumber = n.toString().split('');

    const sumFactorial = arrForNumber.reduce((acc, el) =>{
        let numberForsum = +el;
        return acc + (numberForsum===0?0:factorial(numberForsum));

    }, 0);


    if(sumFactorial===n) return result.strong
    return result.notStrong
}
function factorial(n){

    if(n===1){
        return n;
    }
    return n* factorial(n-1);
}


// console.log(strong(1))//, "STRONG!!!!");
// console.log(strong(2))//, "STRONG!!!!");
// console.log(strong(145))//, "STRONG!!!!");
// console.log(strong(7))//, "Not Strong !!");
// console.log(strong(93))//, "Not Strong !!");
console.log(strong(40585))//, "Not Strong !!");