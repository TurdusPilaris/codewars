// 1. Подсчитает общую сумму продаж по каждому товару
// 2. Найдите товар с наиольшей суммой продаж
// 3. Найдите месяц с наобольшей выручкой


const salesData = [
    { product: 'Laptop', quantity: 2, price: 1000, date: "2024-01-15" },
    { product: 'Phone', quantity: 5, price: 500, date: "2024-01-18" },
    { product: 'Tablet', quantity: 1, price: 700, date: "2024-01-21" },
    { product: 'Laptop', quantity: 1, price: 1000, date: "2024-02-01" },
    { product: 'Phone', quantity: 3, price: 500, date: "2024-02-13" },
    { product: 'Tablet', quantity: 4, price: 700, date: "2024-02-10" },
    { product: 'Laptop', quantity: 1, price: 1000, date: "2024-02-15" },
];

// 1. Подсчитает общую сумму продаж по каждому товару
const result = salesData.reduce((acc, sale)=>{
    const { product, quantity, price } = sale;
    const totalSale = quantity * price;

    if (!acc[product]) {
        acc[product] = { totalSales: 0 };
    }

    acc[product].totalSales += totalSale;

    return acc;
}, {});

console.log(result);

//через Map
const result2 = salesData.reduce((acc, sale, index)=>{
    const { product, quantity, price } = sale;
    const totalSale = quantity * price;

    if (!acc[product]) {
        acc[product] =  0 ;
    }

    acc[product] += totalSale;

    if(index === salesData.length-1){
        return acc;
    }
    return acc;
}, new Map());

console.log(result2);

// 2. Найдите товар с наибольшей суммой продаж

