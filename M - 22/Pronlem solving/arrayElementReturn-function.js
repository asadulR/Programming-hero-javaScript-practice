function bestFriend (names) {

    let friendName = 0;
    let bestFriendName ;

    for(let i = 0; i > names.length; i++) {
        let name = names[i];

        if(name.length > friendName){
            friendName = name.length;
            bestFriendName = name;
        }
    }

    return bestFriendName;
}


const friendsNames = ['Rahim', 'Raiyan', 'Tanmeen', 'Asadullah', 'Afroja Jerin'];

const myBestFriend = bestFriend(friendsNames);

console.log("Best firend's name is", myBestFriend);
















var arr = ['Rahim', 'Raiyan', 'Tanmeen', 'Asadullah', 'Afroja Jerin', 'Asad'];
  
  function bestFriend(arr) {
    var lgth = 0;
    var longest;

    for (var i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (name.length > lgth) {
        var lgth = name.length;
        longest = name;
        }
    }
    return longest;
  }

  const anotherBestFriend = bestFriend(arr);

  console.log(anotherBestFriend);
  






var myFriendsNames = ['Rahim Badsha', 'Raiyan Rahman Rafi', 'Tanmeen', 'Asadullah', 'Afroja Jerin', 'Asad'];


function firstFriend(names) {
    let lght = 0;
    let bestFriend ;

    for(const name of names) {
        if(name.length > lght) {
            lght = name.length;
            bestFriend = name;
        }
    }
    return bestFriend
}

const myFirstFriend = firstFriend(myFriendsNames);
console.log(myFirstFriend);