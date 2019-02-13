ДНК и РНК это последовательности нуклеотидов.

Четыре нуклеотида в ДНК это аденин (A), цитозин (C), гуанин (G) и тимин (T).

Четыре нуклеотида в РНК это аденин (A), цитозин (C), гуанин (G) и урацил (U).

Цепь РНК составляется на основе цепи ДНК последовательной заменой каждого нуклеотида:

G -> C
C -> G
T -> A
A -> U
dnaToRna.js
Реализуйте и экспортируйте функцию по умолчанию, которая принимает на вход цепь ДНК и возвращает соответствующую цепь РНК (совершает транскрипцию РНК).

Если во входном параметре нет ни одного нуклеотида (т.е. передана пустая строка), то функция должна вернуть пустую строку. Если в переданной цепи ДНК встретится "незнакомый" нуклеотид (не являющийся одним из четырех перечисленных выше), то функция должна вернуть null.

dnaToRna('ACGTGGTCTTAA'); // 'UGCACCAGAAUU'
dnaToRna('CCGTA'); // 'GGCAU'
dnaToRna(''); // ''
dnaToRna('ACNTG'); // null
Подсказки
Длина строки str находится так: str.length

Мое решение:

// BEGIN (write your solution here)
const dnaToRna = (dna) => {
  const len = dna.length;
  let rna = ""
  for (let i = 0; i < len; i++) {
    switch(dna[i]){
      case "G":
        rna += "C";
        break;
      case "C":
        rna += "G";
        break;
      case "T":
        rna += "A";
        break;
      case "A":
        rna += "U";
        break;
      default:
        return null;
    }
  }
  return rna;
}
export default dnaToRna;
// END

Решение учителя:

export default (n) => {
  let rna = '';
  for (let i = 0; i < n.length; i += 1) {
    switch (n[i]) {
      case 'G':
        rna += 'C';
        break;
      case 'C':
        rna += 'G';
        break;
      case 'T':
        rna += 'A';
        break;
      case 'A':
        rna += 'U';
        break;
      default:
        return null;
    }
  }

  return rna;
};
// END

Анализ и сравнение:
Тут уж я молодец, написал практически так же :)