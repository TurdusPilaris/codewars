//1
function a() {
    setTimeout(() => {
        console.log("1")
    })
}
function b() {
    console.log("2")
}

a();

new Promise(function (res, rej){
    console.log("3");
    res();
}).then(() => {
    setTimeout(function timer(){
        console.log("4");
    }, 0)
})
b();

// я думаю тут будет 2, 1
// неверно
// первый вызов a() вызов console.log("1") поместится в очередь макро тасок
// потом будет 3 потому что new Promise - сздание промиса это синхронный вызов и он положит его в стек,
// а resolve промиса setTimout с console.log("4"); в очередь микро тасок
// потом синхронный вызов b() положит в очередь стека и в итоге вызов будет таков:
// 3, 2, - синхронные
// потом идем в очередь микро тасок, там лежит setTimout с console.log("4"); он заберет и положит console log (4 ) в конец очередт микро
// 1, 4 - достаем из очереди

