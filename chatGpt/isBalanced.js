function isBalanced(str){
    const hooks = {
        ')': '(',
        ']': '[',
        '}': '{'
    }
    const stack = [];
    for( let char of str){

        const currentOpponent = hooks[char];

        if(!currentOpponent){
            stack.push(char)
        } else {
            let currentElement = stack.pop();
            if (currentElement !== currentOpponent) return false

        }

    }
    return stack.length === 0;

}

console.log(isBalanced("()")) // ➝ true
console.log(isBalanced("([])")) // ➝ true
console.log(isBalanced("{[()]}")) // ➝ true
console.log(isBalanced("{[(])}")) // ➝ false
console.log(isBalanced("{[}")) // ➝ false
console.log(isBalanced("((()"))// ➝ false