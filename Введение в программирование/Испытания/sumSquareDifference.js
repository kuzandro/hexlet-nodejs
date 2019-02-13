sumSquareDifference.js
Сумма квадратов первых десяти натуральных чисел это 12 + 22 + 32 + ... + 10 2 = 385.

Квадрат суммы первых десяти натуральных чисел это (1 + 2 + 3 + ... + 10)2 = 552 = 3025.

Разница между квадратом суммы и суммой квадратов первых десяти натуральных чисел: 3025 − 385 = 2640.

Напишите функцию sumSquareDifference, которая принимает аргумент n и возвращает разницу между квадратом суммы и суммой квадратов первых n натуральных чисел.

Мое решение:

// BEGIN (write your solution here) (write your solution here)
const sumSquareDifference = (n) => {
  let sumSquares = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sumSquares = sumSquares + i**2;
    sum = sum + i;
  }
  const squareOfSum = sum**2;
  return squareOfSum - sumSquares;
}
// END

export default sumSquareDifference;

Решение учителя:

// BEGIN (write your solution here)
const sumOfSquares = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i * i;
    i += 1;
  }

  return sum;
};

const squareOfSum = (n) => {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i += 1;
  }

  return sum * sum;
};

const sumSquareDifference = n =>
  squareOfSum(n) - sumOfSquares(n);
// END

Анализ и сравнение:
Учитель использует разделение на функции и сокращенные операторы
