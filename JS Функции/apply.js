apply.js
Реализуйте и экспортируйте по умолчанию функцию apply, которая принимает на вход три параметра:

Количество раз, которое нужно применить функцию к аргументу (ряд последовательных вызовов, где каждому следующему вызову передается аргумент, являющийся результатом предыдущего вызова функции; см. примеры ниже)
Функцию для применения
Аргумент для применения
apply(0, Math.sqrt, 4); // => 4
apply(1, Math.sqrt, 4); // => 2

// Math.sqrt(Math.sqrt(16));
apply(2, Math.sqrt, 16); // => 2
// Math.sqrt(Math.sqrt(Math.sqrt(256)));
apply(3, Math.sqrt, 256); // => 2

apply(1, v => v ** 2, 3); // => 9
apply(5, v => v + 10, 3); // => 53

Мое решение:

// BEGIN (write your solution here)
export default (n, func, arg) => {
  for (let i = 0; i < n; i++){
    arg = func(arg);
  }
  return arg;
}
// END

Решение учителя:

// BEGIN
const apply = (count, fn, value) =>
  (count === 0 ? value : apply(count - 1, fn, fn(value)));

export default apply;
// END

Анализ и сравнение:
Уитель использовал рекурсию, а не цикл
И чтобы было без блока кода, он записал конечное условие в тернарный оператор

const apply = (count, fn, value) => (count === 0) ? value : apply(count - 1, fn, fn(value));