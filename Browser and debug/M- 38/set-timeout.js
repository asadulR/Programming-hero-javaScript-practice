

const doSomething = () => {
    console.log('I am coding JavaScript');
};
console.log('I am the first one');
console.log('I am the Second one');
// doSomething();
// setTimeout(doSomething);

setTimeout(doSomething, 5000);

setTimeout( () => {
    console.log('Ami special one, tai deri kore aslam')
} , 10000);
console.log('I am the Third one');

