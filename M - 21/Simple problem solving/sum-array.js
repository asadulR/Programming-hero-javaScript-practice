// let numbers = [44, 20, 10, 20, 30, 40, 40, 20];

// let sum = 0

// for(let i = 0; i < numbers.length; i++){

//     let elements = numbers[i];
//     sum = sum + elements;
// }
// console.log(sum);





let numbers = [30, 40, 70, 60, 100, 50]

function arrayTotal(numbers) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        let elements = numbers[i];
        sum = sum + elements;
    }
    return sum;
}

let total = arrayTotal(numbers);
console.log('Array Total = ', total);