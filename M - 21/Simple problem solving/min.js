function min(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        return 'Number one ' + num1 + ' is the smallest Number.';
    }
    else if(num2 < num1 && num2 < num3){
        return 'Number two ' + num2 + ' is the smallest number';
    }else{
        return 'Number Three ' + num3 + ' is the smallest number.';
    }
}


let num1 = 50;
let num2 = 10;
let num3 = 9;

let minNumber = min(num1, num2, num3);
console.log(minNumber);