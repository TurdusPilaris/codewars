function looseChange(cents){

    let res = Math.floor(cents);
    const objRes=  {
        'Pennies' : 0,
        'Nickels' : 0,
        'Dimes' : 0,
        'Quarters' : 0
    };

    if(res <= 0) return objRes;
    const coins = {
        'Quarters' : 25,
        'Dimes' : 10,
        'Nickels' : 5,
        'Pennies' : 1
    }

    for(const [coin, value] of Object.entries(coins)){
        objRes[coin] = Math.floor(res/value)
        res = res % value;
    }

    return objRes;
}

console.log(looseChange(56))//, {'Nickels': 1, 'Pennies': 1, 'Dimes': 0, 'Quarters': 2})//;
console.log(looseChange(100))//,{'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 4}));
console.log(looseChange(0))//,  {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}));
console.log(looseChange(-3))//, {'Nickels': 0, 'Pennies': 0, 'Dimes': 0, 'Quarters': 0}),"no looseChange for -3 cents");
console.log(looseChange(7.9))//,{'Nickels': 1, 'Pennies': 2, 'Dimes': 0, 'Quarters': 0}),"7.9 cents should be rounded down to 7");
