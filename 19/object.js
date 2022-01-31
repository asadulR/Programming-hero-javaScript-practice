

//>>>>>>>>>>>>>>> object litaral <<<<<<<<<<<<<



//  declare object


// var obj = {}
// console.log(obj);
// console.log(typeof obj);


//  simple declare and call

// var point = {
//     x: 10,
//     y: 80,
//     z: 60,

// };
// console.log(point);




//  insert new data into a object


// var point = {
//     x: 10,
//     y: 80,
//     z: 60,

// };

// point.a = 100;
// console.log(point);





// >>>>>>>>>>>>> Object Conostract <<<<<<<<<<<<<<<<<<<<<<



// var obj = Object();

// obj.a = 80,
// obj.b = 90,
// obj.c = 100;

// console.log(obj);




// >>>>>>>>>>>>>>>  Accessing Object Properties  <<<<<<<<<



// var obj = {
//     x: 10,
//     y: 30,
//     z: 50
// }

// var objSum = obj.x + obj.z;
// console.log(obj.z);   // or  console.log(obj['z']);
// console.log(obj.x);
// console.log(objSum);
// console.log(obj.y + obj.z);









//  >>>>>>>>>>>>>  Setting Object Properties  <<<<<<<<<<<

// var result = {
//     Bangla: 70,
//     English: 86,
//     Math: 90
// }

// // result.Math = 60   
// result["Bangla"] = 90;  // Array notetion
// result.Economics = 100;

// var engChange = "English"       // Array notetion
// result[engChange] = 40;        // Array notetion

// console.log(result)





//>>>>>>>>>>>>>>>>>>>>>>  Remove Object Properties <<<<<<<<<<<<<<<


// var number ={
//     x: 30,
//     y: 10,
//     z: 8
// }

// delete number.x;
// delete number.z;
// console.log(number);





// >>>>>>>>>>>>>>>> Comparing Two Object <<<<<<<<<<<<



// var obj1 = {
//     a: 30,
//     b: 10,
//     c: 50
// }

// var obj2 = {
//     a: 30,
//     b: 10,
//     c: 50
// }

// if (obj1.a === obj2.a && obj1.b === obj2.b && obj1.c === obj2.c) {
//     console.log(true);
// }else{
//     console.log(false);
// }


// console.log(JSON.stringify(obj1) === JSON.stringify(obj2))






// >>>>>>>>>>> Iterate Object Properties  <<<<<<<<<<<



// var obj = {
//     x: 70,
//     y: 10,
//     z: 50
// }
// console.log('x' in obj);
// console.log('p' in obj);

// for (var i in obj){
//     console.log(i)
//     console.log(obj[i])
// }

 


// >>>>>>>>>>>> Object Method <<<<<<<<<<<<<<<<<<<<<


var obj = {
    x: 3,
    y: 20,
    z: 15
}

// console.log(Object.keys(obj));

// console.log(Object.values(obj));

// console.log(Object.entries(obj));

var obj2 = Object.assign(obj);
var obj2 = Object.assign({}, obj);
// console.log(obj2)