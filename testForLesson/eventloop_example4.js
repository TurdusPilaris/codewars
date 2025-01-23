async function first(){
    console.log(9);
    await Promise.resolve(2).then((r) => console.log(r));
    console.log(0);
    await Promise.resolve(3).then((r) => console.log(r));
}

async function second(){
    console.log(10);
    await Promise.resolve(4).then((r) => console.log(r));
    console.log(11);
    await Promise.resolve(5).then((r) => console.log(r));
}

first();
second();
const promises = Promise.resolve("new Promise");
promises.then((str) => console.log(str))

// неверно
// 9 выводится
// 2 добавляется в микро и теперь начинает выполняться second
// 10 выводится
// 4 добавляется в микро
// синхронный код продолжается и мы добавляем new Promise в микро
// забираем 2 из микро(выводим), добавляем все что после 2 в микро
// забираем 4 из микро(выводим), добавляем все что после 4 в микро
//
//
//
// 9, 10, 2
