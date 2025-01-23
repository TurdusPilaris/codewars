var isPalindrome = function(x) {
    const stringPolindrom = x.toString().split('').reverse().join('');
    return x === +stringPolindrom;

};

console.log(isPalindrome(121));