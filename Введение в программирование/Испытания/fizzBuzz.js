fizzBuzz.js
Реализуйте и экспортируйте по умолчанию функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число
Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.

Пример
Вызов функции:

fizzBuzz(11, 20);
Вывод в терминале:

11
Fizz
13
14
FizzBuzz
16
17
Fizz
19
Buzz
Это задание крайне часто задают на собеседованиях.

Мое решение:

// BEGIN (write your solution here)
const fizzBuzz = (begin, end) => {
  if (begin <= end){
    for (let i = begin; i <= end; i++) {
      let str = "";
      if (i%3 === 0) str = str + "Fizz";
      if (i%5 === 0) str = str + "Buzz";
      if (str === "") str = str + String(i);
      console.log(str);
    }
  }
}

export default fizzBuzz;
// END

Решение учителя:

// BEGIN
const fizzBuzz = (begin, end) => {
  for (let i = begin; i <= end; i += 1) {
    const hasFizz = i % 3 === 0;
    const hasBuzz = i % 5 === 0;
    const fizzPart = hasFizz ? 'Fizz' : '';
    const buzzPart = hasBuzz ? 'Buzz' : '';
    console.log(hasFizz || hasBuzz ? `${fizzPart}${buzzPart}` : i);
  }
};

export default fizzBuzz;
// END

Анализ и сравнение:
Учитель использовал сокращенные конструкции (но я тоже начал) и "усы" для вывода строк. 
console.log(hasFizz || hasBuzz ? `${fizzPart}${buzzPart}` : i);