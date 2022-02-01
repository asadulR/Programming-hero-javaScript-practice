function arrayAverage(numbers) {
    let sum = 0

    for(let i = 0; i < numbers.length; i++){
        sum += numbers[i]
        average = sum / numbers.length;
        
    }
    return average;
}

let arr = [1, 2, 3, 4, 30,  50, 200];

const averageOfArray = arrayAverage(arr);
console.log('Average of the Array number is ', averageOfArray);


