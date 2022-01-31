// const business = 450;
// const minister = 556;

// if(business > minister){
//     console.log('Business person is bigger than minister.');

// }else{console.log('Minister is bigger than Business person.');
// }


function max(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        return 'Number one ' + num1 + ' is the bigest Number.';
    }
    else if(num2 > num1 && num2 > num3){
        return 'Number two ' + num2 + ' is the bigest number';
    }else{
        return 'Number Three ' + num3 + ' is the bigest number.';
    }
}


let num1 = 50;
let num2 = 180;
let num3 = 90;

let maxNumber = max(num1, num2, num3);
console.log(maxNumber);