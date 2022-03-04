console.log('I am the first one');

// setInterval(() => {                                 //to off tirminal run (ctrl + c)   
//     console.log('I will come again and again');
// }, 3000);
console.log('I am the Second one');



// setInterval(() => {                 //to off tirminal run (ctrl + c)   
//     console.log('tik');
// }, 1000);



/*

let seconds = 0;

const timeIntervalId = setInterval( () => {
    // seconds ++;
    console.log(seconds++);
    if(seconds > 10){
        clearInterval(timeIntervalId);
    }
}, 1000)

*/



let seconds = 0;

const timeIntervalId = setInterval( () => {
    // seconds ++;
    console.log(++seconds);
    if(seconds > 10){
        clearInterval(timeIntervalId);
    }
}, 1000)