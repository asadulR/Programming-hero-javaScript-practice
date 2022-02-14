//  unlimited number of paramiter
function addNumber (){
    let sum = 0;

    for(const num of arguments){
        sum = sum + num;
    }
    return sum;
}

const sum = addNumber(22, 20, 30, 50, 100, 54, 67, 87, 34);
// console.log(sum);





function getFullname (){
    let fullName = '';
    for(const name of arguments){
        fullName = fullName + name;
    }

    return fullName
}

const name = getFullname('Asadullah', ' ', 'Galib', ' ', "Asad");
console.log(name);