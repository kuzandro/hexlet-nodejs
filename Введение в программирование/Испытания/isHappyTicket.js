Счастливым билетом называют такой билет с шестизначным номером, где сумма первых трех цифр равна сумме последних трех.

Например, билет с номером 385916 - счастливый, так как 3 + 8 + 5 = 9 + 1 + 6

isHappyTicket.js
Напишите и экспортируйте по умолчанию функцию, проверяющую является ли номер счастливым (номер может быть как числового, так и строкового типа: см. примеры ниже). Функция должна возвращать true, если билет счастливый, или false, если нет.

Примеры использования:

import isHappyTicket from './isHappyTicket';

isHappyTicket(385916); // true
isHappyTicket(231002); // false
isHappyTicket(128722); // true
isHappyTicket('054702'); // true
Подсказки
Преобразовать число в строку можно с помощью функции String:

String(1234); // '1234'
Преобразовать строку в число можно с помощью функции Number:

Number('456'); // 456
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7

Мое решение:

// BEGIN (write your solution here)
const isHappyTicket = (ticket) => {
  const str = String(ticket);
  let left = 0;
  let right = 0;
  for (let i = 0; i < 3; i++) {
    left += Number(str[i]);
    right += Number(str[str.length - 1 - i]);
  }

  if (left === right) {
    return true;
  }
  return false;
}

export default isHappyTicket;
// END

Решение учителя:

// BEGIN
export default (_num) => {
  const num = String(_num);
  let balance = 0;

  for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1) {
    balance += +num[i] - +num[j];
  }
  return balance === 0;
};
// END

Анализ и сравнение:
Интересные моменты решения учителя
Использование нижнего подчеркивания _num чтобы не менять имя
for с двумя переменными
	for (let i = 0, j = num.length - 1; i < j; i += 1, j -= 1)
Использования оператора + для перевода из строки в число
	balance += +num[i] - +num[j];
Опять же, в конце моего решенния можно было просто написать
	return left === right;