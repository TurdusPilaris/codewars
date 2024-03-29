// Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.

function isItLetter(character) {
    const allLetters = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    return (allLetters.includes(character.toLocaleUpperCase()))
}

console.log( isItLetter('a'))//, true, `'a' is a letter` );
console.log( isItLetter('1'))//, false, `'1' is not a letter` );