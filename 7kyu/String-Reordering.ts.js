// The input will be an array of dictionaries.
//
//     Return the values as a string-seperated sentence in the order of their keys' integer equivalent (increasing order).
//
// The keys are not reoccurring and their range is -999 < key < 999. The dictionaries' keys & values will always be strings and will always not be empty.
//
// Example
// Input:
//     List = [
//         {'4': 'dog' }, {'2': 'took'}, {'3': 'his'},
//         {'-2': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}
//     ]
//
// Output:
//     'Vatsan took his dog for a spin'

function sentence(List) {
    // your code
    return List.sort((curr, next) => Object.keys(curr)[0] - Object.keys(next)[0]).map(item => item[Object.keys(item)[0]]).join(' ');
}

console.log(sentence(
    [{'1': 'dog' }, {'2': 'took'}, {'4': 'Vatsan'}, {'5': 'for'}, {'6': 'a'}, {'12': 'spin'}])//,
    // 'dog took Vatsan for a spin'
);
console.log(sentence(
    [{'3': 'Jake.'}, {'5': 'Chinatown'}, {'1': 'Forget'},{'4': 'It is'}, {'2': 'it'}])//,
    // 'Forget it Jake. It is Chinatown'
);
console.log(sentence([ {'3': 'vatsan!'}, {'2': 'love'}, {'1': 'I'} ]));//, 'I love vatsan!');
console.log(sentence([ {'0': 'Wars'}, {'-1': 'Code'} ]));//,'Code Wars');