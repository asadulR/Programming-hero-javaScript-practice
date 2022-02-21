const fish = {
    name: 'King Hilsha',
    id: 5090,
    price : 9000,
    phone: "01786414966",
    address: 'Padma River',
    color : 'Silver'
};
/*
const phone = fish.phone;
const price = fish.price;
console.log(phone);
console.log(price);
*/

//  or

const {phone, price, id, address} = fish;
// console.log(id, address);




const company = {
    name: 'GP',
    ceo: {
        id: 1, name: 'Asad', food: 'Milk'
    },
    web: {
        work: 'Website Development', employee: 22, framework: 'React'
    },
}
// const work = company.web.work;
// const framework = company.web.framework

// or

const {name, food} = company.ceo;
const {work, framework} = company.web;
console.log(framework);

console.log(name, food);
