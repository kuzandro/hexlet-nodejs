solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:

import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10solution.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход два аргумента - количество нулей и количество единиц, и определяет сколько есть способов размещения этих нулей и единиц так, что бы не было двух нулей идущих подряд.

Например, определим все способы размещения двух нулей и двух единиц. Существует шесть возможных способов размещения: 0011, 0101, 0110, 1001, 1010, 1100. В трех случаях содержится два нуля, идущих подряд: 0011, 1001 и 1100. Вычитаем их из общего числа и получаем три возможных способа: 0101, 0110 и 1010. Ответ - 3.

Примеры использования:

import withoutTwoZeros from './solution';

withoutTwoZeros(2, 2); // 3
withoutTwoZeros(1, 1); // 2
withoutTwoZeros(1, 3), // 4
withoutTwoZeros(2, 4); // 10

Мое решение:

// BEGIN (write your solution here) (write your solution here)
const withoutTwoZeros = (z, o) => {
  const isWithout00 = (str) => {
    const len = str.length;
    let temp = "";
    for (let i = 0; i < len; i++) {
      if (temp === "0" && str[i] === "0") return false;
      temp = str[i];
    }
    return true;
  }
  let result = 0;

  const makeStr = (initStr, zeros, ones) => {
    if (initStr.length === z + o) {
      if (isWithout00(initStr)) result += 1;
    }

    if (zeros > 0) makeStr(initStr + "0", zeros - 1, ones);
    if (ones > 0) makeStr(initStr + "1", zeros, ones - 1);
  }
  
  makeStr("", z, o);
  return result;
}
export default withoutTwoZeros;
// END

Решение учителя:

// BEGIN (write your solution here)
const withoutTwoZeros = (a, b) => {
  if (a > b + 1) {
    return 0;
  } else if (a === 0 || b === 0) {
    return 1;
  }

  return withoutTwoZeros(a, b - 1) + withoutTwoZeros(a - 1, b - 1);
};

export default withoutTwoZeros;
// END

Анализ и сравнение:
Я использовал рекурсию, чтобы составить все возможные строки.
Потом проверял каждую и увеличивал результат на 1, если строка без 00.
Решение учителя что-то пока вообще не понял.
Видимо что-то из комбинаторики, поставлю задачу на попозже - разобраться
https://vk.com/@talkcodetome-pobedil-zadachu-bez-dvuh-nulei-dvazhdy-a-esche-poluchil-mesy