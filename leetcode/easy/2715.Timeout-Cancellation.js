// setTimeout(()=> console.log("Hi"), 2000);

var cancellable = function(fn, args, t) {
    //set timer
    let timer = setTimeout(()=>fn(...args), t);

    return function cancelFn() {
      clearTimeout(timer);
    }

};


const cancelFn = cancellable((x) => x * 5, [2], 20000);

setTimeout(() => {
    cancelFn(); // Отменяем выполнение printMessage через 1 секунду
}, 50000);