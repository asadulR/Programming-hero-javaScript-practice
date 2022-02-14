//  sorting array elements   <
const numbers = [3, 6, 2, 9, 8, 1, 7, 5, 4]
const sortNumbers = numbers.sort();
// console.log(sortNumbers);


const friends = ['Asadullah', 'Tanmeen', 'Alaina', 'Asad', 'Mehazabeen', 'Shehnaz', 'Sharfaraz'];
// const sortFriends =  friends.sort();
// console.log(sortFriends);


//  reverse()  array elements
const reverseNumber = numbers.reverse();
// console.log(reverseNumber);
const reverseFriends = friends.reverse();
// console.log(reverseFriends);





//  number sorting with fun

const bigNumbers = [44, 34, 23, 43, 56, 63, 13, 42, 56, 88, 43, 35]
const sordedBigNumbers = bigNumbers.sort(function(a, b){
    return a-b;
})
console.log(sordedBigNumbers);