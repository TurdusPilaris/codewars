type StringOrNumber = string | number;

const value1: StringOrNumber = "Hello I am string";
const value2: StringOrNumber = 3;

function isNumber(val: StringOrNumber): val is number {

    return typeof val === "number";
}

function square(value: StringOrNumber) {
    if(isNumber(value)) {
        return value ** 2; //тут typescript "ругается" на value
    } else {
        console.log(`incorrect value type ${value}`);
        return value;
    }
}

console.log(square(value2));