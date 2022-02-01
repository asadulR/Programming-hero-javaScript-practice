// let fibo = [0, 1];

// for(let i = 2; i <10; i++) {
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);


// let series = [0,1];

// for(let i = 2; i < 15; i++) {
//     series[i] = series[i-1] + series[i-2];
// }
// console.log('Fibonacci series is: ', series);



//   >>>>>>>>>>>>>> By function



/* function fibonacciSeries(num) {
    let series = [0,1]

    for(let i = 2; i <= num; i++) {
        series[i] = series[i-1] + series[i-2];
    } 
    return series;
}

const fibonSeries = fibonacciSeries(20);

console.log(fibonSeries);

*/


function fibonacciDhara(number) {
    let dhara = [0,1];

    if(typeof number != 'number'){
        return 'Please enter a number'
    }
    if(number < 2 ) {
        return 'Please enter a number getter than 1.'
    }


    for(let i=2; i <= number; i++){
        dhara[i] = dhara[i-1] + dhara[i-2];

    }

    return dhara;
}
const newDhara = fibonacciDhara(-33);

console.log(newDhara);