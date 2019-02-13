isPerfect.js
Создайте функцию isPerfect, которая принимает число и возвращает true, если оно совершенное, и false — в ином случае.

Совершенное число — это положительное целое число, равное сумме его положительных делителей (не считая само число). Например, 6 — идеальное число, потому что 6 = 1 + 2 + 3.

Совершенное число (википедия)
Список совершенных чисел

Мое решение:

// BEGIN (write your solution here) (write your solution here)
const isPerfect = (num) => {
  if (num < 1){
    return false;
  }
  let sum = 0;
  for(let i = 1; i <= num/2; i++){
    if(num%i === 0){
      sum = sum + i;
    }
  }
  return sum === num ? true : false
}
// END

export default isPerfect;

Решение учителя:

// BEGIN (write your solution here)
const isPerfect = (num) => {
  if (num === 0) return false;

  let sum = 0;
  const upperBorder = num / 2;

  for (let divisor = 1; divisor <= upperBorder; divisor += 1) {
    if (num % divisor === 0) sum += divisor;
  }

  return sum === num;
};
// END

Анализ и сравнение:
Алгоритм такой же. Надо не забывать про пробелы, чтобы линтер не ругался.
Плюс можно использовать сокращенный синтаксис if без блока, если всего одна инструкция
if (num === 0) return false;
if (num % divisor === 0) sum += divisor;
Еще я затупил в return - sum === num и так возвращает true или false
return sum === num ? true : false
return sum === num;