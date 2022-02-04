// const products = [
//     {name: 'Laptop', price: 55000, quantity: 1},
//     {name: 'Shirt', price: 500, quantity: 8},
//     {name: 'Mobile', price: 23000, quantity: 1},
//     {name: 'Watch', price: 5000, quantity: 4}
// ];


// function totalPrice(products){
//     let totalPrice = 0;

//     for(const product of products){
//         totalPrice = totalPrice + product.price;
//     }
//     return totalPrice;
// }
// const productsPrice = totalPrice(products);
// console.log(productsPrice);





//  Mega shopping


const products = [
    {name: 'Laptop', price: 55000, quantity: 1},
    {name: 'Shirt', price: 500, quantity: 8},
    {name: 'Mobile', price: 23000, quantity: 1},
    {name: 'Watch', price: 5000, quantity: 4}
];


function totalPrice(cart){
    let cartTotalPrice = 0;
    

    for(const product of cart){
        let productTotal = product.price * product.quantity;

        cartTotalPrice = cartTotalPrice + productTotal;

    }
    return cartTotalPrice;
}
const productsPrice = totalPrice(products);
console.log(productsPrice);








const shoppingProducts = [
    {name: 'Laptop', price: 55000, quantity: 1},
    {name: 'Shirt', price: 500, quantity: 8},
    {name: 'Pant', price: 800, quantity: 4},
    {name: 'Mobile', price: 23000, quantity: 4},
    {name: 'Watch', price: 5000, quantity: 4}
];


function totalPrice(cart){
    let cartTotalPrice = 0;

    for(const product of cart) {
        totalProductPrice = product.price * product.quantity;

        cartTotalPrice = totalProductPrice + cartTotalPrice;
    }
    return cartTotalPrice;
}
   
const shoppingProductsPrice = totalPrice(shoppingProducts);
console.log(shoppingProductsPrice);