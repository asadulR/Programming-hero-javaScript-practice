const friends = ['Tom Sulaiman', 'Tanmin', 'Asadul Rahman', 'Tom Cruise', 'Ariana'];

const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);






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
// products.map(product => console.log(product));

//  get every product name from this array of object
const productName = products.map(product => product.name);

// console.log(productName);


//  getting every product price in an array from this array of object
const productPrice = products.map(p => p.price);
// console.log(productPrice);



//  forEach doesn't return
//  forEach

products.forEach(product => console.log(product))