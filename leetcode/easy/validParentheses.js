var isValid = function(s) {

    const stek = [];
    const maping = {
        '}' : '{',
        ')' : '(',
        ']' : '[',
    }
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(char in maping){
            let topElement = stek.pop();
            if(topElement !== maping[char]) return false
        } else stek.push(char);
    }
    return stek.length === 0;
};

console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("([])")); //true