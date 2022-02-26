const bottle = {
    color: 'Yellow',
    hold: 'Wine',
    price: '12000',
    isCleaned: true
}

/**   Kinds of for loop
 * for(let i=0; i<10; i++){} basic array
 * for(const num of numbers){}   for array 
 * for(const prop in student) {}   object
 */


for(const prop in bottle) {
    console.log(prop);
    console.log(bottle[prop]);
}