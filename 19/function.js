function add() {
    var a = 30
    var b = 20
    console.log(a+b);
}

// add();

function sub(){
    var a = 50
    var b = 30
    console.log(a-b);
}
// sub();

function myName(){
    console.log('My Name is Asadul Rahman');
}

for(var i = 0; i < 100; i++){
    // myName();
}


// >>>>>>>>>>>>>>>  Function Arguments and Parameters <<<<<<<<<<<



function add(a, b){
    var result = a + b;
    console.log(result);
}
// add(20, 10);
// add(7, 10)

var arr1 = [30, 30, 20, 10, 10]
var arr2 = [30, 20, 10]
var arr3 = [3, 3, 2, 10, 10]

function sumOfArray(arr){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    console.log(sum);
}

// sumOfArray(arr1);
// sumOfArray(arr2);
// sumOfArray(arr3);




// >>>>>>>>>>>>>>> Argument Object of a Function <<<<<<<<<<


function test(a, b, c){
    console.log()
}






//  >>>>>>>>>>>>>>>>>>>> Return from Function  <<<<<<<<<<<<<<<

function addAll(){
    var sum = 0;
    for (var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

var result = addAll(1, 2, 3);
console.log(result);



function person( name , email){
    return {
        name : name,
        email: email
    }
}
var p1 = person('Asadul Rahman', 'asad1252001@gmail.com')
console.log(p1);





// >>>>>>>>>>>>>>>>>  Function Expression <<<<<<<<<<<<<<<<








