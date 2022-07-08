// Examples:
// nb_year(1500, 5, 100, 5000) -> 15
// nb_year(1500000, 2.5, 10000, 2000000) -> 10

// p0 - население в начале года >0
// percent - процент >0, преобразовать
// aug - население, приходящее или уходящее каждый год - целое
// p - население, которое должно превзойти >0

//возвращает n лет  необходимых для получения популяции, >=p

function nbYear(p0, percent, aug, p) {
  let currentPercent = percent / 100;
  let magnifiedP = p0;
  let n = 1;
  while (magnifiedP < p) {
    magnifiedP = magnifiedP + magnifiedP * currentPercent + aug;
    n += 1;
  }
  return n - 1;
}

nbYear(1500000, 2.5, 10000, 2000000);
