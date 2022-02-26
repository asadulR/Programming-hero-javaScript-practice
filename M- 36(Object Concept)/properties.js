//  getting all properties by Keys
const bottle = {
    color: 'Black',
    hold: 'Water',
    price: 80,
    isCleaned: true
}

const keys = Object.keys(bottle);
// console.log(keys);

//  getting all values 
const bottle2 = {
    color: 'Black',
    hold: 'Water',
    price: 80,
    isCleaned: true
}

const values = Object.values(bottle2);
// console.log(values);





// getting whole entries

const pairs = Object.entries(bottle2);
// console.log(pairs);


Object.seal(bottle2);



//  delete properties from object

delete bottle2.isCleaned;
// console.log(bottle2);

//  if we use seal() method of object , it doesn't let any properties to be deleted

// Object.seal(bottle2); this code is used at the line 39.
console.log(bottle2);