function smallestElements(numbers) {
    let smallest = numbers[0];

    for(let i = 0; i < numbers.length; i++) {
        element = numbers[i]

        if(element < smallest) {
            smallest = element;
        }
    }
    return smallest;
}

let numbers = [30, 50, 20, 10, 33, 1, 45, 3];
let numbers2 = [-30, -50, -3, -500];

const smallestNumber = smallestElements(numbers2);
console.log('Smallest number is ', smallestNumber);