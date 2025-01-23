// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
//     For example:
//
//     dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//
//     dup(["kelless","keenness"]) = ["keles","kenes"].
//
//         Strings will be lowercase only, no spaces. See test cases for more examples.

function dup(s) {

    let resultArray = [];
    for (let i = 0; i < s.length; i++) {
        let stringWithDuplicate = s[i];
        console.log(removeDuplicate(stringWithDuplicate));
        // let stack = [];
        // for (let j = 0; j < stringWithDuplicate.length; j++) {
        //
        //     let lastElement = stack.pop();
        //     if(lastElement === stringWithDuplicate[j]){
        //         stack.push(lastElement);
        //     } else{
        //         if(j > 0){
        //             stack.push(lastElement);
        //         }
        //         stack.push(stringWithDuplicate[j]);
        //     }
        //
        // }

        // resultArray.push(stack.join(''));

    }
    return resultArray;
};
function removeDuplicate(str) {
    let word = '';
    for (let i = 0; i < str.length ; i++) {

        if (str[i - 1] !== str[i]) {
            word += str[i];
        }
    };
    return word;
};

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]))//,['codewars','picaniny','hubububo']);
// console.log(dup(["abracadabra","allottee","assessee"]))//,['abracadabra','alote','asese']);
// console.log(dup(["kelless","keenness"]))//, ['keles','kenes']);
// console.log(dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]))//, ['Wolomolo','flodoromonlighters','chuchchi']);
// console.log(dup(["adanac","soonness","toolless","ppellee"]))//, ['adanac','sones','toles','pele']);
// console.log(dup(["callalloo","feelless","heelless"]))//, ['calalo','feles','heles']);
// console.log(dup(["putteellinen","keenness"]))//, ['putelinen','kenes']);
// console.log(dup(["kelless","voorraaddoosspullen","achcha"]))//, ['keles','voradospulen','achcha']);