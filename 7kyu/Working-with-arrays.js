function withoutLast(arr) {
    // Fix it
    //  arr.pop(); // removes the last element
    const arr2 = arr.slice(0, -1)
    return arr2;
}

console.log(withoutLast([ 26, 33, 24, 100, 55, 57, 43, 47, 96, 87, 92, 94, 63 ]))