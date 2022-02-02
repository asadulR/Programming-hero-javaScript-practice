function getOnlyPositiveNumbers(arr) {
    let positiveNumbers = [];

    for(i = 0; i < arr.length; i++) 
    {
        if (arr[i] >= 0) {
            positiveNumbers.push(arr[i]);
        }
    }
    return positiveNumbers;
}

const arr = [5, 55, -5, 32, -2, -4, 0, -66, -87];

const positiveNumbersArray = getOnlyPositiveNumbers(arr);

console.log(positiveNumbersArray);