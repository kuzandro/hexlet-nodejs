reverseInt.js
Реализуйте и экспортируйте по умолчанию функцию reverseInt, которая переворачивает цифры в переданном числе и возвращает новое число.

reverseInt(13); // 31
reverseInt(-123); // -321
reverseInt(8900); // 98
Подсказки
Длина строки str находится так: str.length

Мое решение:

// BEGIN (write your solution here)
const reverseInt = (num) => {
  const minus = num < 0 ? "-" : "";
  const strNum = String(Math.abs(num));
  let result = "";
  for (let i = strNum.length - 1; i >= 0; i--) {
    result = result + strNum[i];
  }
  return Number(minus + result);
}

export default reverseInt;
// END

Решение учителя:

// BEGIN
const reverseInt = (num) => {
  const numAsStr = String(Math.abs(num));
  let reversedStr = '';
  let i = numAsStr.length - 1;

  while (i >= 0) {
    reversedStr += numAsStr[i];
    i -= 1;
  }
  const reversedModule = Number(reversedStr);

  return num < 0 ? -reversedModule : reversedModule;
};

export default reverseInt;
// END

Анализ и сравнение:
В принципе, у учителя то же самое, только в другом порядке.