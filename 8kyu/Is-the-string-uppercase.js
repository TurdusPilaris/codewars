// Is the string uppercase?
//     Task
//     Create a method to see whether the string is ALL CAPS.
//
// Examples (input -> output)
// "c" -> False
// "C" -> True
// "hello I AM DONALD" -> False
// "HELLO I AM DONALD" -> True
// "ACSKLDFJSgSKLDFJSKLDFJ" -> False
// "ACSKLDFJSGSKLDFJSKLDFJ" -> True
// In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.

String.prototype.isUpperCase = function() {
    let isUpperCase = true;
    for (let i = 0; i < this.length; i++) {
        if(this[i].toLowerCase() === this[i]) {
            isUpperCase = false;
            break}
    }
    return isUpperCase;
}


console.log('c'.isUpperCase())//, false, 'c is not upper case');
console.log('C'.isUpperCase())//, true, 'C is upper case');
console.log('hello I AM DONALD'.isUpperCase())//, false, 'hello I AM DONALD not is upper case');
console.log('HELLO I AM DONALD'.isUpperCase())//, true, 'HELLO I AM DONALD is upper case');
console.log('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase())//, false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
console.log('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase())//, true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');