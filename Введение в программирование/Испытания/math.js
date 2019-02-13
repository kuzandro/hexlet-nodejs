Программист, который работал на проекте до вас, разбросал все функции, связанные с математическими вычислениями по разным файлам с именами numbers1, numbers2 и numbers3. Причем имена функций тоже сделал странными: все функции в файле numbers2 заканчиваются на двойку, например, sum2.

Вы быстро поняли, что это неудобно и нужно создать единый интерфейс для доступа к ним (говорят "фасад"). Для этого необходимо импортировать все функции из всех перечисленных модулей в новый модуль в файле math.js.

math.js
Задача состоит в том, чтобы файл math.js импортировал в себя все функции из трех описанных выше файлов и выставил их наружу (то есть сделал их реэкспорт) под следующими именами: pow, sum, sub, sqrt и multi. А так же экспортировал функцию cube по умолчанию.

В этом задании специально не сказано, где какая функция и под каким именем лежит. А так же не сказано, как они все экспортируются. Цель этого задания в том, чтобы вы хорошо разобрались с системой модулей, что очень упростит вашу жизнь в дальнейшем. Огромная просьба не подсматривать решение и подумать самостоятельно, а в случае чего задать вопрос в комьюнити.

Не забудьте проанализировать файл с тестами, чтобы понять, как используется модуль math.js.

Мое решение:

// BEGIN (write your solution here)
import cube from "./numbers1.js";
import multi2, { pow2, sub2, sum2 } from "./numbers2.js";
import sqrt3 from "./numbers3.js";

export const pow = pow2;
export const sub = sub2;
export const sum = sum2;
export const sqrt = sqrt3;
export const multi = multi2;
export default cube;
// END

Решение учителя:

// BEGIN
import cube from './numbers1';
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2';
import sqrt from './numbers3';

export { cube as default, multi, pow, sum, sub, sqrt };
// END

Анализ и сравнение:
Учитель использует конструкции
import multi, { pow2 as pow, sum2 as sum, sub2 as sub } from './numbers2';
pow2 as pow в усах
export { cube as default, multi, pow, sum, sub, sqrt };
cube as default
export {};

import multi, { pow2 as pow, sub2 as sub, sum2 as sum } from "./numbers2";
export { cube as default, multi, pow, sub, sum, sqrt };