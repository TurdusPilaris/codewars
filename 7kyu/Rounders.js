function rounders(value) {

    const lengthNimber = value.toString().length-1;

    let a = 0;

    let  res = value;
    while (a<lengthNimber){
        res = res/10;
        res = Math.round(res)
        a++
    }

    return res*10**lengthNimber


}

console.log( rounders(15) )//, 20)

console.log( rounders(1234))// , 1000)

console.log( rounders(1445))// , 2000)

console.log( rounders(14))// , 10)

console.log( rounders(99))// , 100)

console.log( rounders(10) )//, 10)