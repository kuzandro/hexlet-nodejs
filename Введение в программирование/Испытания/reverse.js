reverse.js
Реализуйте и экспортируйте функцию по умолчанию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

import reverse from './reverse';

reverse('str');    // rts
reverse('hexlet'); // telxeh
Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод substr.

Подсказки
Чтобы узнать длину строки, используйте свойство length:

'welcome'.length; // 7
Чтобы получить подстроку из строки, используйте метод substr:

'foo'.substr(1, 2); // 'oo';

Мое решение:

// BEGIN (write your solution here)
const reverse = (_str) => {
  const length = _str.length;
  const iter = (str, pos) => {
    if (pos >= (length - 1)/ 2) {
      return str;
    }
    let newStr = "";
    for(let i = 0; i < str.length; i++) {
      if (i === pos){
        newStr += str[str.length - 1 - pos];
      }
      else if (i === str.length - 1 - pos) {
        newStr += str[pos];
      } 
      else {
        newStr += str[i];
      }
      console.log(newStr);
    }
    return iter(newStr, pos + 1);
  }
  return iter(_str, 0);
}

export default reverse;
// END

Решение учителя:

// BEGIN
const reverse = (str) => {
  const len = str.length;
  if (len === 0) {
    return str;
  }

  return str[len - 1] + reverse(str.substr(0, len - 1));
};

export default reverse;
// END

Анализ и сравнение:
Я замудрил с алгоритмом составления новой строки.
Действительно, можно было возвращать рекурсивно последний символ подстроки
и запускать функцию с подстрокой длиной len - 1
Я же сделал итеративный процесс, но мне помешала подскажзка!!! :)
В исходнике было написано const iter