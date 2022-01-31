// var roastGiven = 0;

// while (roastGiven < 10){
//     console.log("Roast den, please!!");
//     roastGiven++;
// }


var number = 1

// while (number <= 10){
//     console.log(number);
//     number++;
//}






// var isRunning = true;

// while (isRunning) {
//     var rand = Math.floor(Math.random() * 10 + 1);
//     if (rand === 10) {
//         console.log("Winner Winner Chicken Dinner! You have got " + rand);
//         isRunning = false
//     }else{
//         console.log("You have got " + rand)
//     }
// }



var isRunning = true;

while(isRunning){
    var rand = Math.floor(Math.random() * 10 + 1);
    if(rand === 10){
        console.log('Winner Winner Chicken Dinner');
        isRunning = false;
    }
    else if(rand >= 7 && rand < 10){
        console.log("Ohh! You are almost there. Your score is " + rand)
    }
    else {
        console.log('You have got ' + rand);
    }
}