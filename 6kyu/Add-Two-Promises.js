var addTwoPromises = async function(promise1, promise2) {
    return promise1.then(res1 => promise2.then(res2 => res1+ res2));
    // const resPr2 = promise2.then();

    // return resPr + resPr2;
};

const Promise3 =
addTwoPromises(
    new Promise(resolve => setTimeout(() => resolve(2), 20)),
    new Promise(resolve => setTimeout(() => resolve(5), 60))
).then(res=> console.log(res))