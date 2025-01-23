// async function sleep(millis) {
//  return new Promise(resolve => setTimeout(resolve, millis));
// }

const first = () => {
 setTimeout(()=> console.log(1), 500)
}

const second = () => {
 console.log(2)
}

first();
second();

