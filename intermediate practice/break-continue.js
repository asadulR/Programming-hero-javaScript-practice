const products = [
    {name : 'i phone 14', price : 70000},
    {name : 'Tesla phone AS', price : 90000},
    {name : 'Samsung A6', price : 35000},
    {name : 'Apple laptop', price : 90000},
    {name : 'Lenovo yoga laptop', price : 50000},
    {name : 'Apple Watch', price : 7000},
    {name : 'Asus laptop', price : 60000},
    {name : 'Tesla car', price : 7000000},
]

//  use of break
// for(const product of products) {
//     if(product.price < 8000) {
//         break;
//     }
//     console.log(product);
// }


//   use of continue

for(const product of products) {
    if(product.price < 60000) {
        continue;
    }
    console.log(product);
}




//    >>>>>>>>>>>>>>>>>>> extra excersice <<<<<<<<<<<<<<



function compare(a, b) {
    if (a == b) {   // have to use three equal sign to compare data type
      return true;
    } else {
      return false;
    }
  }
//   const result = compare(15, "15");
//   console.log(result);




  function compare(a, b) {
    if (a.toString() === b) {     // have to use three equal sign to compare data type
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
   console.log(result);




   console.log("123" + 123);











   const array = [1, 2, 3, 4, 5, 6, 7];

   for (let i = 1; i < array.length; i++) {
    if (i == 5) {
     continue;
    }
    console.log(array[i]);
   }
























//     Assignment 4 re practice


function anaToVori(ana) {
    // 16 ana = 1 vori
    if(ana < 0){
    return "ana should be a positive number."
    }else{
    const vori = ana / 16;
    return vori;
    }
    }
    const toVori = anaToVori(64);
    console.log(toVori);
    function pandaCost (singara, somuca, jilapi) {
    // 1 singara = 7 taka, 1 somuca = 10 taka and 1 jilapi = 15 taka
    if(singara < 0 || somuca < 0 || jilapi < 0) {
    return 'Sorry! Input should be a positive number';
    }
    else{
    const singaraPrice = singara * 7;
    const somucaPrice = somuca * 10;
    const jilapiPrice = jilapi * 15;
    const totalCost = singaraPrice + somucaPrice + jilapiPrice;
    return totalCost;
    }
    }
    const myBreakfast = pandaCost(10, 3, 2);
    console.log(myBreakfast);
    function picnicBudget (people) {
    // per people cost for the picnic
    const perPeopleCostFirst100 = 5000;
    const perPeopleCostSecond100 = 4000;
    const perPeopleCostAfter200 = 3000;
    if(people < 0) {
    // people Quantity must be a positive number.
    return 'Sorry! Input should be a positive number';
    }
    else if(people <= 100) {
    const cost = people * perPeopleCostFirst100;
    return cost;
    }
    else if(people <= 200) {
    const first100PeopleCost = 100 * perPeopleCostFirst100;
    const restPeople = people - 100; // total people - first 100 people
    const second100PeopleCost = restPeople * perPeopleCostSecond100;
    const totalBudget = first100PeopleCost + second100PeopleCost;
    return totalBudget;
    }
    else {
    const first100PeopleCost = 100 * perPeopleCostFirst100;
    const second100PeopleCost = 100 * perPeopleCostSecond100;
    const restPeople = people - 200; // Total people - first 200 people
    const restPeopleCost = restPeople * perPeopleCostAfter200;
    const totalBudget = first100PeopleCost + second100PeopleCost + restPeopleCost;
    return totalBudget
    }
    }
    const peoplePicnicBudget = picnicBudget(130);
    console.log(peoplePicnicBudget);
    function oddFriend(friends) {
    if(friends.length === 0) {
    //Array should not be an empty array
    return 'Please enter an array of names.'
    }
    else{
    let oddFriendName = 0;
    for (let i = 0; i < friends.length; i++){
    let friend = friends[i];
    if(friend.length % 2 != 0) {
    oddFriendName = friend;
    break;
    }
    }
    return oddFriendName;
    }
    }
    const friends = ['Asad', 'Tanmin', 'Ayaan Rahman', 'Shehnaz', 'Muskan', 'Alia', 'Mehazebin'];
    const myOddNameFriend = oddFriend(friends);
    console.log(myOddNameFriend);


   