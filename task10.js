// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function digPow(n, p) {
  let array = `${n}`.split(""),
    result = 0;

  array.forEach((el) => {
    result += el ** p;
    p++;
  });

  return (result / n) % 1 == 0 ? result / n : -1;
}

console.log(digPow(89, 1));
console.log(digPow(46288, 3));
