// Given an array of integers, find the one that appears an odd number of times.
//Дан массив с числами, ннеобходимо найти то , которое появляется нечетное количество раз.
// There will always be only one integer that appears an odd number of times.
//Всегда будет только одно такое число, которое появляется нечетное количество раз.
function findOdd(A) {
  let result;
  A.forEach((element) => {
    let arrWithOneNum = A.filter(function (number) {
      return number === element;
    });
    if (arrWithOneNum.length % 2 != 0) {
      result = arrWithOneNum[0];
    }
  });
  console.log(result);
}

// findOdd([10, 9, 3, 10, 9]);
findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]);
