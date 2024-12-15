// Task
// Write a function that takes a string and finds a repeating character in the string (there may be multiple repeating characters). The function should return the minimum difference between the indices of these characters, and the character itself.
//
//     For example, in the string "aabcba", the minimum position difference of repeated characters will be equal to 1, since for the character a, the position difference is 1.
//
// The output should be in the form of an array.
//
//     If there are no duplicate characters in the string, it should return null.
//
//     The string can only contain lowercase letters, and nothing else!!! (an empty string is not allowed).
//
// If the difference between repeated characters is the same, return the first minimal difference encountered.
//
//     Examples of outputs:
//
//     "aa" => new Object[]{1, 'a'}
//
// "aabbca" => new Object[]{1, 'a'}
//
// "abka" => new Object[]{3, 'a'}
//
// "abcded" => new Object[]{2, 'd'}
//
// "abbbbbc" => new Object[]{1, 'b'}
//
// "abc" => null

//my solution
function minRepeatingCharacterDifference(text) {

    // const textArray = text.split('');
    //
    // const resReduce = textArray.reduce((acc, element, index)=>{
    //    if(acc.even.has(element)){
    //        if (acc.arrayOfRepetitive.includes(element) && acc.even.get(element) < index - acc.even.get(element)) return acc;
    //         acc.even.set(element, index - acc.even.get(element));
    //         acc.arrayOfRepetitive.push(element)
    //    } else {acc.even.set(element, index)}
    //    return acc;
    // }, { even: new Map(), arrayOfRepetitive: [] });
    //
    // const arrayForMap = [...resReduce.even];
    //
    // if(resReduce.arrayOfRepetitive.length === 0) return null
    // let minKey;
    // let minValue = Infinity;
    // for (const [key, value] of arrayForMap) {
    //     if(value<minValue && resReduce.arrayOfRepetitive.includes(key)){
    //        minValue = value;
    //        minKey = key;
    //     }
    // }
    // return [minValue, minKey];

    const characters = [...text];
    const differences = [];

    for (let i = 0; i < characters.length; i++) {
        const currentChar = characters[i];
        const nextIndex = characters.indexOf(currentChar, i + 1);

        if (nextIndex !== -1) {
            const diff = nextIndex - i;
            differences.push([currentChar, diff]);
            continue;
        };

        if (i === characters.length - 1 && differences.length === 0) return null;
    };

    console.log("differences", differences);
    const sortedDifferences = differences.sort((a, b) => a[1] - b[1]);

    return [sortedDifferences[0][1], sortedDifferences[0][0]];

    const res = []

    for (let i = 0; i < text.length; i++) {
        for (let j = i + 1; j < text.length; j++) {
            if(text[i] === text[j]) {
                if(!res[0]) {
                    res.push(j - i);
                    res.push(text[i]);
                }else{
                    if(j - i < res[0]){
                        res[0] = j - i;
                        res[1] = text[i]
                    }
                }
            }
        }
    }

    return res.length > 0 ? res : null
}

 // const lstFixedTask = ["aabbca", "abded", "abbbbbc", "aa", "aba"];
 const lstFixedTask = ["bhxobmblyjfaijnynlutgepa"];
const lstFixedAnswer = [[1, 'a'], [2, 'd'], [1, 'b'], [1, 'a'], [2, 'a']];

lstFixedTask.forEach((input, index) => {
    // it(`Testing for: "${input}"`, () => {
        console.log(minRepeatingCharacterDifference(input), lstFixedAnswer[index]);
    // });
});