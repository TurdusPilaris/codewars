// You are given the strings key and message, which represent a cipher key and a secret message, respectively. The steps to decode message are as follows:
//
//     Use the first appearance of all 26 lowercase English letters in key as the order of the substitution table.
//     Align the substitution table with the regular English alphabet.
//     Each letter in message is then substituted using the table.
//     Spaces ' ' are transformed to themselves.
//     For example, given key = "happy boy" (actual key would have at least one instance of each letter in the alphabet), we have the partial substitution table of ('h' -> 'a', 'a' -> 'b', 'p' -> 'c', 'y' -> 'd', 'b' -> 'e', 'o' -> 'f').
// Return the decoded message.

var decodeMessage = function(key, message) {

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const set = [...new Set(key.toLowerCase().replaceAll(' ', ''))];
    const map = {};
    for (let i = 0; i < set.length; i++) {
       map[set[i]] = alphabet[i];
    }
    return [...message]
        .map(char => char === ' ' ? char : map[char])
        .join('');
};

console.log(decodeMessage('The quick brown fox jumps over the lazy dog', "vkbs bs t suepuv")); //"this is a secret"