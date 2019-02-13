areBracketsBalanced.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход строку, состоящую только из открывающих и закрывающих круглых скобок, и проверяет является ли эта строка корректной. Пустая строка (отсутствие скобок) считается корректной.

Строка считается корректной (сбалансированной), если содержащаяся в ней скобочная структура соответствует требованиям:

Скобки — это парные структуры. У каждой открывающей скобки должна быть соответствующая ей закрывающая скобка.
Закрывающая скобка не должна идти впереди открывающей.
import areBracketsBalanced from 'roundBracketsValidator';

areBracketsBalanced('(())');  // true
areBracketsBalanced('((())'); // false

Мое решение:

// BEGIN (write your solution here)
const areBracketsBalanced = (str) => {
  const len = str.length;
  let balance = 0;
  if (str[0] === ")") return false;
  let i = 0;
  while (i < len && balance >= 0){
    if (str[i] === "(") balance += 1;
    if (str[i] === ")") balance += -1;
    i += 1;
  }
  return balance === 0;
}

export default areBracketsBalanced;
// END

Решение учителя:

// BEGIN
export default (str) => {
  let acc = 0;
  for (let i = 0; i < str.length; i += 1) {
    const symbol = str[i];
    acc = symbol === '(' ? acc + 1 : acc - 1;
    if (acc < 0) {
      return false;
    }
  }
  return acc === 0;
};
// END

Анализ и сравнение:
В принципе похоже, отличие в цикле не критично, я просто захотел засунуть сравнение с нулем в условие.
Но у меня можно было не писать строку 
	if (str[0] === ")") return false;
Потому что по условию цикла balance и так был бы равен -1.
Из плюсов еще то, что наконец-то запомнил, что можно
	return balance === 0;
А не писать условия