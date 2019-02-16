isPalindrome.js
Реализуйте и экспортируйте по умолчанию функцию isPalindrome с использованием рекурсии.

Примеры использования:
import isPalindrome from './isPalindrome';

isPalindrome('radar'); // => true
isPalindrome('a');     // => true
isPalindrome('abs');   // => false
Один из способ реализовать эту функцию — попарно сравнить буквы, стоящие зеркально относительно центра. Если они совпадают, то перед нами палиндром.

Алгоритм
Если строка короче двух символов, то считается, что это палиндром.
Проверяем, совпадают ли первый и последний символы. Если нет, то это не палиндром. Если совпадают, то вызываем функцию рекурсивно, передавая внутрь строку минус первый и последний символ.
Разбор на примере: radar (палиндром)

Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ada
Первый и последний символ a. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем d
Так как длина строки d меньше двух символов, возвращаем true
Разбор на примере: rador (не палиндром)

Первый и последний символ r. Так как символы совпали, вызываем isPalindrome рекурсивно. Дальше передаем ado
Первый символ a и последний символ o. Так как символы не совпали, возвращаем false
Подсказки
Чтобы узнать длину строки, используйте свойство length:

'hello'.length; // 5
Чтобы получить подстроку из строки, используйте метод substr:

'hello'.substr(0, 4); // "hell"
'hello'.substr(1, 2); // "el"

Мое решение:

// BEGIN (write your solution here)
const isPalindrome = (str) => {
  const len = str.length;
  if (len < 2) return true;

  if (str[0] === str[str.length - 1]) {
    const sub = str.substring(1, len - 1);
    return isPalindrome(sub);
  }
  return false;
}

export default isPalindrome;
// END

Решение учителя:

// BEGIN
const isPalindrome = (string) => {
  if (string.length <= 1) {
    return true;
  }

  const firstSymbol = string[0];
  const lastSymbol = string[string.length - 1];

  if (firstSymbol !== lastSymbol) {
    return false;
  }

  const stringWithoutFirstAndLastSymbols = string.substr(1, string.length - 2);

  return isPalindrome(stringWithoutFirstAndLastSymbols);
};

export default isPalindrome;
// END

Анализ и сравнение:
Вроде все тоже самое, только интересуют параметры задания подстроки. У меня
	const sub = str.substring(1, len - 1);
У учителя
	const stringWithoutFirstAndLastSymbols = string.substr(1, string.length - 2);

Если сделаю как у учителя, работать не будет.
Задал вопрос в топик, потом допишу.
