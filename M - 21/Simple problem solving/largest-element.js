

// function largestElements(numbers){
//     let largest = 0
//     for(let i = 0; i < numbers.length; i++) {
//         let elements = numbers[i];

//         if(elements > largest){
//             largest = elements;
//         }
//     }
//     return largest
// }

// let ages = [20, 190, 60, 40, 55, 10];

// let oldestPerson = largestElements(ages);
// console.log('Oldest ',oldestPerson);


function largestElements(numbers) {
    let largest = 0;
    for(let i = 0; i < numbers.length; i++) {
        let elements = numbers[i];

        if(elements > largest) {
            largest = elements;
        }
    }
    return largest;
}

let numbers = [30, 50, 20, 100, 500, 999];

let largestNumber = largestElements(numbers);
console.log('Largest Number is ', largestNumber);