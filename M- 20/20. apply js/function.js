// >>>>> Age Odd / Even Checking  <<<<<<<<<<

function isAgeEven(age){
    if(age % 2 === 0){
        return 'Your Age Is a Even Number';
    }else{
        return 'Your Age is a Odd Number';
    }


}

let personAge = 20;
let ageCheck = isAgeEven(personAge);
console.log(ageCheck);




//>>>>>>>>>>  converting Hour into Minutes     <<<<<<<

function hourToMinutes(hour){
    let minutes = hour * 60;
    return hour + " Hour" + " = " + minutes + " Minutes"
}

let hour = .5;
let checkHour = hourToMinutes(hour);

console.log(checkHour);