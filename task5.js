// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let num = "";
  let sum = [];
  if (str.length === 0) {
  } else if (str.length % 2 === 0) {
    for (let i = 0; i < str.length; i++) {
      if (i === 0 || i % 2 === 0) {
        num += str[i];
      } else {
        num += str[i];
        sum.push(num);
        num = "";
      }
    }
  } else if (str.length % 2 !== 0) {
    for (let i = 0; i < str.length + 1; i++) {
      if (i === 0 || i % 2 === 0) {
        num += str[i];
      } else if (i % 2 !== 0 && i !== str.length) {
        num += str[i];
        sum.push(num);
        num = "";
      } else if (i === str.length) {
        num += "_";
        sum.push(num);
      }
    }
  }
  console.log(sum);
}

// solution("abcdef");
solution("");

solution("abc");
solution("abcdef");
