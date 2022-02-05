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

// function searchProduct(products, searchText){
//     for (const product of products){
//         if(product.name.includes('Watch')){
//             console.log(product.name);
//         }
//         else if(product.name.includes(searchText)){
//             console.log(product);
//         }
//     }
// }
// searchProduct(products, 'laptop');









function searchProduct(products, searchText){
    const result = [];
    for (const product of products){
        if(product.name.includes('Watch')){
            console.log(product.name);
        }
        else if(product.name.includes(searchText)){
            // console.log(product);
            result.push(product);
        }
    }
    return result;
}
console.log(searchProduct(products, 'laptop')) ;