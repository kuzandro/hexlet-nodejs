isPowerOfThree.js
Реализуйте и экспортируйте по умолчанию функцию isPowerOfThree, которая определяет, является ли переданное число натуральной степенью тройки. Например, число 27 — это третья степень: 3^3, а 81 — это четвёртая: 3^4.

Пример:

isPowerOfThree(1); // true (3^0)
isPowerOfThree(2); // false
isPowerOfThree(9); // true (3^2)

Мое решение:

const isPowerOfThree = (num) => {
  if (num < 1){
    return false;
  }
  if (num === 1){
    return true;
  }
  while(num > 1){
    if(num%3 === 0){
      num = num/3;
    } else {
      return false;
    }
  }
  return true;
};

export default isPowerOfThree;

Решение учителя:

export default (num) => {
  let current = 1;
  while (current < num) {
    current *= 3;
  }

  return current === num;
};

Анализ и сравнение:
Алгоритм решения учителя позволяет написать более лаконичный код, не используя много конструкций if для проверки
пограничных значений. Плюс экспортировать по умолчанию лучше сразу.