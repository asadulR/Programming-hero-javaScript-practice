// const names= ['Asad', 'Arian', 'Tanmeen', 'Rafsan', 'Asad', 'Tanmeen', 'Ayaan', 'Rafsan', 'Arian'];


// function removeDuplicates(names) {
//     let unique = [];

//  /*   for(let i = 0; i < names.length; i++) {
//         let element = names[i];

//     }
// */
//     for (const element of names) {
//         if(unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }

// const uniqueName = removeDuplicates(names);

// console.log(uniqueName);


/*
function removeDuplicates(arr) {
    let unique = [];
    for(const element of arr) {
        if(unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique
}

const arr = ['A', 'B', 'B', 'C', 'A', 'D', 'B', 'C', 'A', 'D', 'E'];
const uniqueNames = removeDuplicates(arr);
console.log(uniqueNames);

*/



//  >>>>>>>>>>>>> Unique numbers <<<<<<<<


function removeDuplicateNumbers(arr) {
    let unique = [];

    for(const element of arr) {
        if(unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }

    return unique;
}

const arr = [1, 2, 3, 2, 3, 4, 3, 2, 5, 3, 6, 7, 3, 2, 5,]

const uniqueNumbers = removeDuplicateNumbers(arr);

console.log(uniqueNumbers);