// DESCRIPTION:
//     Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "


//SOLUTION:

function doubleChar(str) {
    let strResult = '';
    for (i = 0; i < str.length; i++) {
        strResult = strResult + str[i] + str[i];
    }

    return strResult;
}

document.write(doubleChar('string'));