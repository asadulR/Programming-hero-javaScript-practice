const favName = 'Tanmin';
const firstName = 'Asad';
const myNotes = `My name is ${firstName}.
My best friend name is ${favName}`;

// console.log(myNotes);




//  default parameter
function findMaxNumber(arr = [5, 9, 10]){
    const max = Math.max(...arr);
    return max;
}

const myBiggest = findMaxNumber();
// console.log(myBiggest);






//  arrow function

const square = x => x*x;
console.log(square(9));


