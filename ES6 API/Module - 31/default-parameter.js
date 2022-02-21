//  default parameter works when parameter is not given 
function add(num1, num2 = 15){

    const total = num1+ num2;
    return total
}

const result = add(15);
// console.log(result);



// Always parameter works when parameter is given
function add2(num1, num2 = 15){

    const total = num1 + num2;
    return total
}

const result2 = add(15, 30);
// console.log(result2);




function fullName(first, last = 'Rahman'){
    const name = `${first} ${last}`;
    return name;
}

const myName = fullName('Asadul', 'Tanmin');

console.log(myName);