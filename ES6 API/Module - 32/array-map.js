
const numbers = [4, 6, 8, 10];
const output = [];


for(const number of numbers){
    const result = number*2;
    output.push(result);
}
// console.log(output);


//  with arrow function 
const doubleIt = number => number * 2;

for(const number of numbers){
    const result = doubleIt(number);
    output.push(result);
}

// console.log(output);



// with map
/* What map does ?
            1. Loop through each element
            2. for each element calls the provided function
            3. result for each element will be stored in an Array
*/


// const output2 = numbers.map(doubleIt);   or

// const output2 = numbers.map(number => number * 2);   or

const output2 = numbers.map(x => x * 2);
// console.log(output2);




const squre = numbers.map(x => x * x);
console.log(squre);







/* 
Maping an array meanse loop through the each element,
    result make a array  

*/