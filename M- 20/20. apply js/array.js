let gueatList = ['Tanmeen', 'Angela', 'Rabia', 'Rafsan', 'Muhammad'];

let guestName = "Tanmeen";

if(gueatList.includes(guestName)){
    console.log("You are wellcome, " + guestName);
}else{
    console.log("Sorru! Maybe next time:");
}




//   fizz Buzz game using array

let output = [];
let count = 1;

function fizzBuzz(){
    if(count % 3 === 0 && count % 5 === 0){
        output.push("FizzBuzz");
    }
    else if(count % 3 === 0){
        output.push("fizz")
    }
    else if (count % 5 === 0){
        output.push("Buzz")
    }
    else{
        output.push(count); 
    }
    count++;

    console.log(output);
}


fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();

