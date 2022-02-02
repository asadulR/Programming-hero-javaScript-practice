function primeCheck(number) {
    if (number === 1){
        return number + ' is not prime.';
    }
    else if(number === 2 ){
        return number + " is Prime!";
    }
    else {
        for(let i = 2; i < number; i++) {

            if(number % i === 0){
                return number + ' is not prime.';  
            }

        }
        return number + " is Prime!";
    }
    
    
}

const numberCheckPrime = primeCheck(7);

console.log(numberCheckPrime);







function test_prime(n)
{

  if (n===1)
  {
    return false;
  }
  else if(n === 2)
  {
    return true;
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return false;
      }
    }
    return true;  
  }
}

console.log(test_prime(9));
