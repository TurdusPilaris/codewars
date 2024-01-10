/*
DESCRIPTION:
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence.
You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word.
Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
    ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'*/

//SOLUTION

function smash (words) {
    let result = '';
    let endSymbol = '';
    for(i = 0; i < words.length; i++) {
        endSymbol = ( i === words.length - 1)?"":" ";
        result = result + words[i] + endSymbol;
    }
    return result;
}

document.write(smash(["Hello"]));

document.write(smash(["Hello", 'world']));
