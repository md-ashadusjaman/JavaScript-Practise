function megaFriend(friends) {
    var myFriends = friends[0];
    for (var i = 0; i < friends.length; i++) {
        var tallestFriend = friends[i];

        if (tallestFriend.length > myFriends.length) {
            myFriends = tallestFriend;
        }
    }
    return myFriends;
}

var jumboFriends = megaFriend(["rubel", "jamalur", "kamrul hasan kamran jitu", "jihad karim gone", "pavel raj"]);

console.log(jumboFriends);