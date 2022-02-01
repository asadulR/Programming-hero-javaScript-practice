// function secondLargestElements(numbers) {
//     let largest = 0;
//     let secondLargest = 0;
//     for(let i = 0; i < numbers.length; i++) {
//         let elements = numbers[i];

//         if(elements > largest) {
//             secondLargest = largest;
//             largest = elements;
//         }

//         else if(elements > secondLargest && elements != largest){
//             secondLargest = elements;
//         }
//     }
//     return secondLargest;
// }

// let numbers = [30, 50, 20, 100, 500, 999];

// let secondLargestNumber = secondLargestElements(numbers);
// console.log('Second Largest Number is ', secondLargestNumber);





// function secondMaxNumber(numbers) {
//     let maxNumber = 0;
//     let secondMax = 0;

//     for(let i = 1; i < numbers.length; i++) {
//         let elements = numbers[i];

//         if(elements > maxNumber) {
//             secondMax = maxNumber;
//             maxNumber = elements;
//         }
//         else if(elements > secondMax && elements != maxNumber) {
//             secondMax = elements;
//         }

//     }
//     return secondMax;
// }


// const arr = [30, 20, 44, 34, 65, 12, 55, 90];

// const secondMaxOfArray = secondMaxNumber(arr);

// console.log(secondMaxOfArray);



//    Third max



function secondMaxNumber(numbers) {
    let maxNumber = 0;
    let secondMax = 0;
    let thirdMax = 0;

    for(let i = 1; i < numbers.length; i++) {
        let elements = numbers[i];

        if(elements > maxNumber) {
            secondMax = maxNumber;
            maxNumber = elements;
        }
        else if(elements > secondMax && elements != maxNumber) {
            thirdMax = secondMax;
            secondMax = elements;
        }
        else if(elements > thirdMax && elements != maxNumber && elements != secondMax) {
            thirdMax = elements;
        }
    }
    return thirdMax;
}


const arr = [30, 20, 44, 34, 65, 12, 55, 90];

const secondMaxOfArray = secondMaxNumber(arr);

console.log(secondMaxOfArray);