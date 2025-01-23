setTimeout(() => {
    console.log("1")
}, 0)
setTimeout(() => {
    console.log("2")
}, 1000)

new Promise(function (res, rej){
    console.log("3");
    res();
    console.log("4");
}).then(() => {
    console.log("5");
})

console.log("6");

async function test1() {
    console.log("7");
    await  test2();
    console.log("8");
}
async function test2() {
    console.log("9");
}

test1();

console.log("10");

// я думаю тут будет 3,4,6,7,8,10,5,1,2,9
// неверно
// 1 в макро
// 2 в макро
// 3 выводится
// 4 выводится
// 5 в микро таску
// 6 выводится
// 7 выводится
// 9 выводится потому что await тормозим все пока не выполнится
// а 8 уходит в микро (то что ниже await уходит в микро таску воспринимает как then)
// 10 выводится
// результат: 3,4,6,7,9,10,5,8,1,2