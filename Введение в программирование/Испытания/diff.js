Напишите функцию diff, которая принимает два угла (integer), каждый от 0 до 360, и возвращает наименьшую разницу между ними.

Примеры:

diff(0, 45) === 45;         // не 315, а 45, потому что 45 меньше
diff(0, 180) === 180;
diff(0, 190) === 170;       // не 190, а 170, потому что 170 меньше
diff(120, 280) === 160;

Мое решение:

// BEGIN (write your solution here) (write your solution here)
const diff = (ang1, ang2) => {
  const bigger = ang1 > ang2 ? ang1 : ang2;
  const less = ang1 > ang2 ? ang2 : ang1;
  const dist01 = less;
  const dist12 = bigger - less;
  const dist2360 = 360 - bigger;
  return dist12 <= dist01 + dist2360 ? dist12 : dist01 + dist2360;  
}
// END
export default diff;

Решение учителя:

// BEGIN (write your solution here)
const diff = (a, b) => {
  const angle = Math.abs(a - b);
  return Math.min(angle, 360 - angle);
};
// END

Анализ и сравнение:
Получилось длинно, но зато не использовал библиотеку Math.
Надо учесть, что можно использовать.