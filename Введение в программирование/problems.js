//Итеративный процесс - наименьший делитель

const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
  const iter = (numer, div) => {
    if (numer % div === 0) {
      return div;
    };
    if (div < numer/2) {
      return iter(numer, div + 1);
    } else {
      return numer;
    };
  };
  if (num%2 === 0) {
      return 2;
    } else {
      return iter(num, 2);
    };
  // END
};

//Переворачивает строку

const reverse  = (str) =>{
  const rec = (string, part, num) =>{
    if (num < 0) {
      return part;
    }
    const part2 = part + str[num];
    return rec(string, part2, num - 1);
  }
  const len = str.length - 1
  return rec(str, '', len);
}

//Проверка на простое
const isPrime = (num) => {
  if(num<2){
    return false;
  }
  for(let i = 2; i < num; i++){
    if(num%i === 0){
      return false;
    }
  }
  return true;
} 

//Тесты
assert.equal(factorial(0), 1);
assert.equal(factorial(1), 1);
assert.equal(factorial(5), 120);

//Модули

// BEGIN
export const getTriangleArea = (h, b) => {
  const area = (h * b) / 2;
  return area;
};
// END

// BEGIN
import { getTriangleArea } from './myMathModule';

const solution = n => getTriangleArea(n, square(n) / 2);

export default solution;
// END

//Функции

// BEGIN
const square = num => num * num;

const sumOfSquares = (num1, num2) =>
  square(num1) + square(num2);

const squareSumOfSquares = (num1, num2) =>
  square(sumOfSquares(num1, num2));
// END

//Функции для сравнения количества заглавных символов в двух строках

import { length, toUpperCase } from './strings';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  let counter = 0;
  const strlength = length(str);
  let i = 0;
  let char = "";
  while (i < strlength){
    char = str[i];
    if(toUpperCase(char) === char || char === " "){
      counter = counter + 1;
    }
    i = i + 1;
  }
  console.log("!!!!!!!!!!!! " + str);
  return counter;
  // END
};


const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  console.log("!!!!!!!!!!!!!firstCount " + firstCount );
  const secondCount = bigLettersCount(second);
  console.log("!!!!!!!!!!!!!secondCount " + secondCount );
  const more = firstCount > secondCount;
  const equal = firstCount === secondCount;
  const result = more 
  if(more){
    return 1;
  } else if(equal){
    return 0;
  } else{
    return -1;
  }

  // BEGIN (write your solution here)
  
  // END
};

export const greaterThan = (first, second) =>
  compare(first, second) === 1;

export const lessThan = (first, second) =>
  compare(first, second) === -1;

export const isEqual = (first, second) =>
  compare(first, second) === 0;

//Сумма цифр в числе
import { length } from './strings'; // eslint-disable-line

// BEGIN (write your solution here)
const addDigits = (num) => {
  const sum = (number) => {
    const strnum = String(number);
    let sum = 0;
    for(let i = 0; i < length(strnum); i++){
      sum = sum + Number(strnum[i]);
    }
    return sum;
  }
  while(length(String(num)) > 1){
    num = sum(num);
  }

  return num;
}

export default addDigits;

// END

//Сделать заглавными первые буквы слов
import { length, toUpperCase } from './strings';

// BEGIN (write your solution here)
const solution = (str) => {
  let result = "";
  let last = "";
  for(let i = 0; i < length(str); i++){
    if(i === 0 || last === " "){
      result = result + toUpperCase(str[i]);
    } else{
      result = result + str[i];
    }
    last = str[i];
  }
  
  console.log(result);
  return result;
}
export default solution;
// END

