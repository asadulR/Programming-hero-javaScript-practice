const numbers = [3, 4, 66, 34, 54, 23, 43, 65, 78, 90, 12, 22, 4, 6, 66, 100]

//  slice()  method  get  elements from an array
const numberSlice = numbers.slice(2, 10); // when we slice from an array the original array doesn't change
// console.log(numberSlice);
// console.log(numbers);


//  splice() method  to remove an element from an array
// const splicedNumber = numbers.splice(2, 3);  //  when we splice() from an array the original array also changes
// console.log(splicedNumber);
// console.log(numbers);
 
//  splice() / remove elements from the array and add elements
const numberSpliced2 = numbers.splice(2, 3, 500, 1000, 2000,3000);

console.log(numberSpliced2);

console.log(numbers);