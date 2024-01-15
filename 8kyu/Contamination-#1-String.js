// An AI has infected a text with a character!!
//
//     This text is now fully mutated to this character.
//
//     If the text or the character are empty, return an empty string.
//     There will never be a case when both are empty as nothing is going on!!
//
//     Note: The character is a string of length 1 or an empty string.
//
//     Example
// text before = "abc"
// character   = "z"
// text after  = "zzz"

// Solution

function contamination(text, char){
    // let result = "";
    // for (let i = 0; i < text.length; i++) {
    //     // if (Boolean(char.trim())) {
    //         result = result + char;
    //     // }
    // }
    // return result;

    return char.repeat(text.length);
}

document.write(contamination("abc","z"), "<br>");
document.write(contamination("","z"), "<br>");
document.write(contamination("abc",""), "<br>");
document.write(contamination("_3ebzgh4","&"), "<br>");
document.write(contamination("//case"," "), "<br>");