//Константы
const pi = 3.14; // eslint-disable-line

// BEGIN (write your solution here)
const weight = 80
const c = 300000000
const energy = weight * (c ** 2)
// END

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