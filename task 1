function solution(number) {
  let sum = 0;
  if (number <= 0) {
    console.log(0);
  } else {
    for (let i = 3; i < number; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        sum += i;
        continue;
      } else if (i % 3 == 0 || i % 5 == 0) {
        sum += i;
      } else {
        continue;
      }
    }
    console.log(sum);
  }
}

solution(10);
