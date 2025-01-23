console.log("1")

setTimeout(() => {
    console.log("2")
    Promise.resolve().then(()=>{
        console.log(3)
    })
})

new Promise(function (res, rej){
    console.log(4);
    res(5);

}).then((data) => {
    console.log(data);
    Promise.resolve()
        .then(()=> {
            console.log(6)
        })
        .then(()=> {
            console.log(7);
            setTimeout(()=>{
            console.log(8);
            })
   })
})

setTimeout(()=>{
    console.log(9 );
})
console.log("10");

// я думаю тут будет 3,4,6,7,8,10,5,1,2,9
// неверно
// 1 выводится
// 2 + 3 в макро
// 4 выводится
// 5 в микро таску со всем содержимым(6,7,8)
// 9 в макро
// 10 выводится
// macro
