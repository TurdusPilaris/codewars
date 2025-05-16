
// const getData = (id) => new Promise((resolve) =>
// setTimeout(() => resolve(`Data for ${id}`), 1000));
//
// const getDataWithReject = (id) => new Promise((resolve, reject) =>
//     setTimeout(() => {
//         if(id===2){
//             reject(`Error!`)
//        }
//         else {
//             resolve(`Data for ${id}`)
//
//         }
//     }, 1000));
// getData(5).then(data => console.log(data));
// getDataWithReject(2)
// .then(data => console.log(data))
// .catch(error => console.log(error));
//
// Promise.all([getData(3), getDataWithReject(4), getDataWithReject(55)])
// .then(data => console.log(data))
// .catch(error => console.log(error))


const getName = (name) => new Promise((resolve, reject) =>
setTimeout(() => {
    if(name === 'Lena'){
        resolve('It is Lena');
    }else if(name==='Vova'){
        resolve('It is Vova');
    }else if(name==='Vania'){
        reject('Not Vania');
    } else {
        reject('I dont know who you')
    }
}))

// Promise.all([getName('Lena'), getName('Vova'), getName('Lena'), getName('Vova'), getName('Lena')])
//     .then(data => console.log(data))
//     .catch(dada => console.log(dada));

// Promise.allSettled([getName('Lena'), getName('Vania'),  getName('Vova')])
//     .then(data => console.log(data));

// Promise.race([getName('Vania'), getName('Olia'),  getName('Gena')])
//     .then(data => console.log(data))
//     .catch(error => console.error(error));

// Promise.any([getName('Vania'), getName('Olia'),  getName('Gena')])
//     .then(data => console.log(data))
//     .catch(error => console.error(error.errors));
//
// for (let i = 0; i < 7; i += 2) {
//     console.log(i)
//     console.log('Yo')
// }


//promise chain
new Promise((resolve, reject) =>{
    setTimeout(()=> {
        resolve(10)
    }, 1000)
}).then((result)=>{
    console.log(result);
    return result + 5;

}).then((result)=>{
    console.log(result);
    return result+6;
}).then((result) => {
    console.log(result)
    return result +5
})














