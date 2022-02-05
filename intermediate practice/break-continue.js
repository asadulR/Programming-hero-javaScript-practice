const products = [
    {name : 'i phone 14', price : 70000},
    {name : 'Tesla phone AS', price : 90000},
    {name : 'Samsung A6', price : 35000},
    {name : 'Apple laptop', price : 90000},
    {name : 'Lenovo yoga laptop', price : 50000},
    {name : 'Apple Watch', price : 7000},
    {name : 'Asus laptop', price : 60000},
    {name : 'Tesla car', price : 7000000},
]

//  use of break
// for(const product of products) {
//     if(product.price < 8000) {
//         break;
//     }
//     console.log(product);
// }


//   use of continue

for(const product of products) {
    if(product.price < 60000) {
        continue;
    }
    console.log(product);
}



