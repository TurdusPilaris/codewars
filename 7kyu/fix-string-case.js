function solve(s){

    let arr = s.split('');

    const res = arr.reduce((acc, el, index) =>{
        if( el === el.toUpperCase()) {return acc + 1} else return acc+0;
    }, 0);

    if (res > arr.length/2) {
        return s.toUpperCase();
    } else
    {
        return s.toLowerCase();
    }

}


console.log(solve("code")); //"code"
console.log(solve("CODe")); //"CODE"
console.log(solve("COde")); //"code"
console.log(solve("Code")); //"code"