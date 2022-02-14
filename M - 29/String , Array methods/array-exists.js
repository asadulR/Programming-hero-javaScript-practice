const friends = ['Asadullah', 'Tanmeen', 'Alaina', 'Asad', 'Mehazabeen', 'Shehnaz', 'Sharfaraz']

//  get the bigest length item and error handle
function megaFriend(friends){
    if(Array.isArray(friends) == false){
        return 'Please input an array.'
    }
    let mega = friends[0];
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}

const myMegaFriend = megaFriend(friends);

// console.log(myMegaFriend);



//  indexOf() method
if(friends.indexOf('Asad') != -1){
    console.log('Asad is exists')

}else{
    console.log('Asad does not exists');
}





const task = "Practice Makes a person perfect";
const index = task.toLowerCase().indexOf("M");

// console.log(index);

//  includes( ) method
if(friends.includes('Tanmeen') === true){
    // console.log('Tanmeen exists');
}



//  concat()  array

const firstArr = [1, 3, 5, 7];
const secondArr = [2, 4, 6, 8]

const combined = firstArr.concat(secondArr);

console.log(combined);