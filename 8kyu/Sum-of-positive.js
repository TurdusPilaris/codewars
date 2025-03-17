function positiveSum(arr) {
    for(let value of arr){
        console.log("number", value);
        console.log("value>0?value:0",value>0?value:0);
    }
    return arr.reduce((acc, value) =>  acc = acc + (value>0?value:0))
}
const str = '*';
console.log(str.replace(3, str));
// console.log(positiveSum([1,2,3,4,5]))//,15);
// console.log(positiveSum([1,-2,3,4,5]))//,13);
// console.log(positiveSum([]))//,0);
// console.log(positiveSum([-1,-2,-3,-4,-5]))//,0);
// console.log(positiveSum([-1,2,3,4,-5]))//,9);