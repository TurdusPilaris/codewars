// Sparse arrays in Javascript can be very useful, but just as often they can be be very annoying. One of the reasons is that sometimes basic array methods are not well suited for sparse arrays. For example, pop() method will try to return the last array element regardless of whether it exists or not. If it doesn't exist, the result is undefined. It's great if that's what you want, but what if you want to return the next existing element in a sparse array?
//
// Your task here is to create a new pops() array method, which would pop the last existing element in the array and remove this element and any nonexisting ones after it. For example:
//
//     array = [1,2,3,,,,]
// array.pops() // = 3
// array // = [1,2]
// While you're at it, you could also create a new shifts() array method, which would do the same this from the other end of an array and mimic the basic shift() array method. For example:
//
// array = [,,,1,2,3]
// array.shifts() // = 1
// array // = [2,3]

Array.prototype.pops = function() {

    // Проходим массив с конца и ищем последний существующий элемент
    for (let i = this.length - 1; i >= 0; i--) {
        if (i in this) {  // Проверяем, существует ли элемент на текущем индексе
            const lastElement = this[i];
            this.length = i;  // Устанавливаем длину массива, удаляя элемент и все пустые после него
            return lastElement;
        }
    }
    return undefined;
}

Array.prototype.shifts = function() {

    let lastFullElementIndex = 0;

    for (let i = 0; i < this.length; i++) {

         if(i in this){
            const firstFullElement = this[i];
            this.splice(0, i+1);
            return firstFullElement;
        }
    }

    return undefined;

}
//pops
// console.log([1,2,3].pops())//).to.equal(3);
// console.log([1,2,3,,,,].pops())//).to.equal(3);
// console.log(['a','b','c',,,,].pops())//).to.equal('c');
// console.log([1,2,3,null].pops())//).to.be.null;
// console.log([1,2,3,undefined].pops())//).to.be.undefined;

// let a = [1,,2,,3,,];
// a.pops();
// console.log(a)//).to.deep.equal([1,,2,,]);
// a.pops();
// console.log(a)//).to.deep.equal([1,,]);
// a.pops();
// console.log(a)//).to.be.empty;


//shifts
// console.log([1,2,3].shifts())//).to.equal(1);
// console.log([,,,1,2,3].shifts())//).to.equal(1);
// console.log([,,,'a','b','c'].shifts())//).to.equal('a');
// console.log([null,1,2,3].shifts())//).to.be.null;
// console.log([undefined,1,2,3].shifts())//).to.be.undefined;

let a = [,1,,2,,3];
a.shifts();
console.log(a)//).to.deep.equal([,2,,3]);
a.shifts();
console.log(a)//).to.deep.equal([,3]);
a.shifts();
console.log(a)//).to.be.empty;