//  JavaScript Object Notation 
//  JSON

const user = {id: 11, name: 'Asad', job: 'Student'}
const stringified = JSON.stringify(user)

// console.log(user);
// console.log(stringified);




const shop = {
    name: 'Alia Store',
    address: 'Ranvir road',
    owner: {
        name: 'Alia Bhatt',
        profession: 'actor'
    },
    products: ['laptop', 'mobile', 'pepsi'],
    isExpensive : false,
    profit: 22000
}

const shopStringified = JSON.stringify(shop);
// console.log(shop);
// console.log(shopStringified);


//  convert from stringify to normal
const converted = JSON.parse(shopStringified);
console.log(converted);




const stuInfo = JSON.stringify({ name: "James", roll: 3 }); console.log(stuInfo.name); 
