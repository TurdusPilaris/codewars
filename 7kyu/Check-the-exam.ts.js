// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.
//
// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).
//
// If the score < 0, return 0.
//
// For example:
//
//     Correct answer    |    Student's answer   |   Result
// ---------------------|-----------------------|-----------
//     ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
//     ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
//     ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
//     ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0

function checkExam(array1, array2) {
    const sum = array1.reduce((acc, curr, index) => {
        let result = 0;
        if(array2[index ] === curr) {
            result = 4
        } else if (!array2[index ]){
            result = 0;
        } else result = -1
         // return  acc +(array2[index ] === curr?4:-1);
        return  acc +result;
    }, 0 )
    return sum < 0?0:sum;
    // good luck
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]))//, 6);
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]))//, 7);
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]))//, 16);
console.log(checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]))//, 0);