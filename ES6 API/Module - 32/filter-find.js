//  filter element from an array by condition
const numbers = [5, 13, 7, 41, 29, 79, 100, 30, 5, 2, 19, 82];

const bigNumbers = numbers.filter(number => number > 20);
// console.log(bigNumbers);

const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);

const bestNumber = numbers.filter(number => number < 101 && number > 99 || number == 100)
// console.log(bestNumber);










const products = [
    {
       name: 'Water Bottle', color: 'Yellow', price: 50 
    },
    {
       name: 'Phone', color: 'Black', price: 55000
    },
    {
       name: 'Laptop', color: 'White', price: 70000
    },
    {
       name: 'Smart Watch', color: 'Black', price: 7000
    },
    {
       name: 'Headphone', color: 'White', price: 700
    }
];

const bestPrice = products.filter(product => product.price < 1000);
console.log(bestPrice);







//  find
//  find doesn't give array . find give just element

const whiteItem = products.find(product => product.color == 'White');
console.log(whiteItem);

