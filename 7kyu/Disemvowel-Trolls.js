// Trolls are attacking your comment section!
//
//     A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
//
// Your task is to write a function that takes a string and return a new string with all vowels removed.
//
//     For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
//
//     Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    // let vowels = new Set(['a', 'e', 'i', 'u', 'o']);
    //
    // return str.split('').filter((value) => !vowels.has(value.toLowerCase())).join('');
    return str.replace(/[aeiou]/gi, '');
}
console.log(disemvowel("This website is for losers LOL!"))