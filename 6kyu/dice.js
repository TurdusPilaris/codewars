// Generala is a dice game popular in South America. It's very similar to Yahtzee but with a different scoring approach. It is played with 5 dice,
// and the possible results are:
//
// Result	Points	Rules	Samples
// GENERALA	50	When all rolled dice are of the same value.	66666, 55555, 44444, 11111, 22222, 33333.
// POKER	40	Four rolled dice are of the same value.	44441, 33233, 22262.
// FULLHOUSE	30	Three rolled dice are of the same value, the remaining two are of a different value, but equal among themselves.	12121, 44455, 66116.
// STRAIGHT	20	Rolled dice are in sequential order. Dice with value 1 is a wildcard that can be used at the beginning of the straight before a 2,
// or at the end of it after a 6.	12345, 23456, 34561, 13654, 62534.
// Anything else	0	Anything else will return 0 points.	44421, 61623, 12346.
// Please note that dice are not in order; for example 12543 qualifies as a STRAIGHT. Also, No matter what string value you get for the dice,
// you can always reorder them any order you need to make them qualify as a STRAIGHT. I.E. 12453, 16543, 15364, 62345 all qualify as valid STRAIGHTs.
//
//     Complete the function that is given the rolled dice as a string of length 5 and return the points scored in that roll. You can safely assume
//     that provided parameters will be valid:
//
//     String of length 5,
//     Each character will be a number between 1 and 6
function points(dice) {
    // code your solution here

    const resObj = {}
    for(let char of dice){
        resObj[char] = (resObj[char]||0)+1;
    }
    const values = Object.values(resObj).sort();
    const uniqNumbers = [...new Set(dice.split("").map(Number))].sort((a, b) => a - b);


    if(Object.keys(resObj).length === 1) return 50;

    if(Object.keys(resObj).length === 2){
        if((values[0]===1 && values[1]===4)) return 40;
        if((values[0]===2 && values[1]===3)) return 30;
    }

    if(uniqNumbers.length === 5){
        if(
            (uniqNumbers[4] - uniqNumbers[0] === 4)||
            (uniqNumbers[0]===1 &&(uniqNumbers[4] - uniqNumbers[1] ===3))
        ){
            return 20
        }
    }
    return 0
}

console.log(points("55555"))//, 50);
console.log(points("66666"))//, 50);
console.log(points("11111"))//, 50);
console.log(points("22222"))//, 50);
console.log(points("33333"))//, 50);
console.log(points("44444"))//, 50);
console.log(points("44441"))//, 40);
console.log(points("33233"))//, 40);
console.log(points("22262"))//, 40);
console.log(points("12121"))//, 30);
console.log(points("44455"))//, 30);
console.log(points("66116"))//, 30);
console.log(points("12345"))//, 20);
console.log(points("23456"))//, 20);
console.log(points("34561"))//, 20);
console.log(points("13564"))//, 20);
console.log(points("62534"))//, 20);
console.log(points("44421"))//, 0);
console.log(points("61623"))//, 0);
console.log(points("12346"))//, 0);