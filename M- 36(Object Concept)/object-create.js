//  object literal
const student = {
    name: 'Asad',
    roll : 09
};

//  constructor
const person = new Object();
// console.log(person);


//  3.

// const human = Object.create(null);
const human = Object.create(student);
// console.log(human.roll);



//  class
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('Asad', 22);
console.log(peop);