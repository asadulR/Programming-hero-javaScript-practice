
//>>>>>>>>>>
    //   Simple array declaration >>>>>>>>>>>>>


var arr = [1, 2, 4, 7 ,34];
// console.log(arr);
// console.log(arr[3]);

// console.log(arr.length)


arr[4] = 100;

// console.log(arr)


// replace data 

var fish = ["Rui", "Hilsha", "Boal", "Cat Fish"]

fish[2] = 22;
// console.log(fish);




var arr2 = Array(1, 2, 3,9);
// console.log(arr2);






// >>>>>>>>>>>>>      Traversing Array <<<<<<<<<<<<<<

var number = [4, 5, 9, 10, 30, 4]

for (var i = 0; i < number.length; i++) {
    // number[i] = number[i] + 2;
    // number[i] = number[i] - 1;
    // number[i] = number[i] * 2;
}
// console.log(number);


for (var i = 0; i <= number.length - 1; i++) {
    // number[i] = number[i] + 2;
    // number[i] = number[i] - 1;
    number[i] = number[i] * 2;
}
// console.log(number);



var result = [35 , 98, 66, 86, 79, 90]

for(i = 0; i < result.length; i++){
    // console.log(result[i])

    result[i] = result[i] / 2;
}
// console.log(result);





//>>>>>>>>>>>>>  Array data sum


var price1 = [4, 3, 6, 7, 23, 9, 66, 10, 20]

var price1Sum = 0
for(i=0; i< price1.length; i++){
    price1Sum += price1[i]
}
// console.log(price1Sum);






// >>>>>>>>>>>>> array insert , replace , Remove



var number2 = [2, 3, 5, 4, 8, 9];

// number2.push(100);
// number2.unshift(9);

// number2.splice(3, 0, 100, 500);

// number2.pop()

// number2.shift()

// number2.splice(3, 1)

// console.log(number2);









// >>>>>>>>>>>>>>> Search Value/Data in Array


var number3 = [4, 5, 3, 8, 100, 23, 55, 30, 100, 10];

var find = 100;

var isFound = false;

for(i = 0; i < number3.length; i++){
    if(number3[i] === find) {
        // console.log("Data is found at Index " + i)
        isFound = true;
        break;
    }
}

if (!isFound) {
    // console.log("Data Not Found");
}






// >>>>>>>>>>>>>>>>>>>   Multidimensional Array    <<<<<<<<<<


var numberr = [
    [4, 55, 34, 90, 10, 20, 30],
    [30, 20, 50, 40, 10,],
    [10, 40, 90, 31, 100, 200],
    [20, 60, 44, 55, 66, 70]
]

// console.log(numberr[2])
// console.log(numberr[0]);

// console.log(numberr[0][3])







// >>>>>>>>>>>>>>  Reverse an Array   <<<<<<<<<<<<<<<<



// >>>>>>>>>>>>>> Array Methods    <<<<<<<<<<<<<


var arrrr = [20, 4, 6, 10, 8, 9, 12];

// console.log(arrrr.join(' '));
// console.log(arrrr.join(' , '));
// console.log(arrrr.join(' | '));


// arrrr.fill(true);
// arrrr.fill(0);
// console.log(arrrr);




var arrrr2 = [5, 10, 30, 20, 44, 90, 20];

var arrrr3 = arrrr.concat(arrrr2);

// console.log(arrrr3);




// console.log(Array.isArray(arrrr3));
// console.log(Array.isArray(arrrr2));

