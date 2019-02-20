partialApply.js
Реализуйте и экспортируйте по умолчанию функцию partialApply. Эта функция умеет частично применять один (второй) аргумент у переданной функции:

const pow = (a, b) => a ** b;
const f1 = partialApply(pow, 2);
f1(1); // => 1
f1(10); // => 100

const f2 = partialApply((a, b) => a * b, 5);
f2(2); // => 10
f2(5); // => 25

Мое решение:

// BEGIN (write your solution here)
const partialApply = (func, arg2) => arg1 => func(arg1, arg2);

export default partialApply;
// END

Решение учителя:

// BEGIN
export default (f, second) => first => f(first, second);
// END

Анализ и сравнение:
Все норм