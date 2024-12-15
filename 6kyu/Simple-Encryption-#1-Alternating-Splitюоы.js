// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.
//
//     Examples:
//
// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"
//
// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
// Together with the encryption function, you should also implement a decryption function which reverses the process.
//
//     If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {

    return getEncryptText(text, 1,n);
    // let counter = 0;
    //
    // let resultText = "";
    //
    // for (let i = 1; i < text.length; i=i+2) {
    //     resultText = resultText+text[i];
    // }
    // for (let i = 0; i < text.length; i=i+2) {
    //     resultText = resultText+text[i];
    // }
    // return resultText;
}

function getEncryptText( text, count, n){

    let resultText = "";
    for (let i = 1; i < text.length; i=i+2) {
        resultText = resultText+text[i];
    }
    for (let i = 0; i < text.length; i=i+2) {
        resultText = resultText+text[i];
    }
    if(count<n){
      return getEncryptText(resultText, count+1, n);
    } else {
        return resultText;
    }
}
function decrypt(encryptedText, n) {

}

console.log(encrypt("012345", 1) );// "135024"
console.log(encrypt("012345", 2) );// "135024"  ->  "304152"
console.log(encrypt("012345", 3) );// "135024"  ->  "304152"  ->  "012345"