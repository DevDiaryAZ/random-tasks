// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
function friend(friends) {
  let friendsNameList = [];
  friends.forEach((name) => {
    if (name.length === 4) {
      friendsNameList.push(name);
    }
  });
  console.log(friendsNameList);
}

friend(["Ryan", "Kieran", "Jason", "Yous"]);
