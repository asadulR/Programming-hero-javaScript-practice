// console.log(500 / 12);

function inchesToFeet(inches){
    var feet = inches / 12;
    return feet;
}
let myInch = 2000;
let herInch = 12;
let feet = inchesToFeet(herInch);
let myFeet = inchesToFeet(myInch);
console.log("Inches en feet is " , feet);
console.log("Inches en feet is " , myFeet);

