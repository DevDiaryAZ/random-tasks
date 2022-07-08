// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let arr = str.split(" ");
  let newStr = "";
  arr.forEach((e) => {
    if (/^[a-zA-Z]*$/.test(e) === true) {
      e = e.slice(1, e.length) + e[0];
      e += "ay";
      newStr += " " + e;
    } else {
      newStr += " " + e;
    }
  });
  console.log(newStr);
}

pigIt("Pig latin is cool");
pigIt("Hello world !");

// .test(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)
