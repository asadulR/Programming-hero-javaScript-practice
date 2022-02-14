const products = [
    'Dell hard core i20 Laptop',
    'Iphone i3 pro phone',
    'Yellow Laptop Mac Book',
    'Lenevo Comercial Laptop',
    'Lenevo core i9 Gaming Laptop',
    'HTC low price Phone',
    'Hp laptop core i3'
]
const searching = 'laptop';

// use of indexOf to find a string from a array
const output = []

for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase()) !== -1){
       // output.push(product);
    }
}
// console.log(output);


// use of Includes
for(const product of products){
    if(product.toLowerCase().includes(searching.toLowerCase())){
        // output.push(product)
    }
}
// console.log(output);





//   use of startsWith
const start = 'Lenevo'
for(const product of products){
    if(product.toLowerCase().startsWith(start.toLowerCase())){
        // output.push(product);
    }
}

// console.log(output);



//   use of endsWith
const ends = 'phone';
for(const product of products){
    if(product.toLowerCase().endsWith(ends.toLowerCase())){
        output.push(product);
    }
}
console.log(output);




const str1 = 'Bangladesh is a beautiful country.'; 
console.log(str1.endsWith("country"));