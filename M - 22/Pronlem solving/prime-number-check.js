function primeCheck(number) {
    if(number === 2 ){
        return number + " is Prime!";
    }
    else if(number > 1){
        for(let i = 2; i < number; i++) {
            if(number % 1 !== 0){
                return number + " is Prime!";
            }
            else if (number === i * i) {
                return number + ' is not prime.';
            }else{
                return number + ' is not prime.';
            }
        }
    } else {
        return number + ' is not prime.';
    }
}

const numberCheckPrime = primeCheck(9);

console.log(numberCheckPrime);