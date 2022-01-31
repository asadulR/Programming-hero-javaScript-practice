let numOfWon = 0;
let numOfLost = 0;

for (i = 0; i <=5; i++){

    let guessNumber = prompt('Enter a number between 1 to 5 :');

    let randomNumber = Math.floor(Math.random() * 5) + 1;

    if (guessNumber === randomNumber){
        console.log('Yes! You have won.')
        numOfWon++;
    }else{
        console.log("You have lost. Random number was " + randomNumber + '.' + " Maybe next time..");
        numOfLost++;
}


}

console.log('Total Number of won = ' + numOfWon);
console.log('Total Number of lost = ' + numOfLost);
