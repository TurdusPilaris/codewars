function add(a, b)
{
    while(b!==0){
        let carry = a & b;
        a = a ^ b;
        b = carry << 1;
    }
    return a;
}

console.log(add(5,3))
// console.log(add(-3,2))
// console.log(add(-11,-32))