// const phones = [
//     {name: 'Samsung s9', price: 29000, camera: 14, storage: 36},
//     {name: 'Saomi 9', price: 20000, camera: 18, storage: 40},
//     {name: 'Oppo A53', price: 24000, camera: 11, storage: 20},
//     {name: 'Vivo', price: 39000, camera: 24, storage: 64},
//     {name: 'Walton ps', price: 16000, camera: 10, storage: 20},
//     {name: 'Tesla A9', price: 45000, camera: 35, storage: 100},
// ];

// let cheapest = phones[0];

// for(const phone of phones) {
      // compare only price
//     if(phone.price < cheapest.price) {
//         cheapest = phone;
//     }
// };
// console.log('The cheapest phone is ', cheapest);






//    Highest price phone

const phones = [
    {name: 'Samsung s9', price: 29000, camera: 14, storage: 36},
    {name: 'Saomi 9', price: 20000, camera: 18, storage: 40},
    {name: 'Oppo A53', price: 24000, camera: 11, storage: 20},
    {name: 'Vivo', price: 39000, camera: 24, storage: 64},
    {name: 'Walton ps', price: 16000, camera: 10, storage: 20},
    {name: 'Tesla A9', price: 45000, camera: 35, storage: 100},
];

let mostPrice = phones[0];

for(const phone of phones) {
    //compare only price
    if(phone.price > mostPrice.price) {
        mostPrice = phone;
    }
};
console.log('The highest price phone is ', mostPrice);
