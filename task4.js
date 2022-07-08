// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  let myString = s1 + s2;
  myString = myString.split("").sort().join("");
  myArray = [];
  console.log(myString);

  for (i = 0; i < myString.length; i++) {
    if (myString[i] !== myString[i + 1]) {
      myArray.push(myString[i]);
    }
  }
  return myArray.join("");
}

longest("xyaabbbccccdefww", "xxxxyyyyabklmopq");
