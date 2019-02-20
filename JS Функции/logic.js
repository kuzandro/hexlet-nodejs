logic.js
В этой практике мы реализуем упрощённую версию, имитирующую работу условной конструкции if.

Экспортируйте тройку True, False, If, используя только функции, внутри которых только функции ;) То есть нельзя пользоваться встроенными в язык if, а также true и false. Сами функции должны быть каррированы.

Пример использования:
import { If, True, False } from './logic';

If(True)('one')('two');  // one
If(False)('one')('two'); // two
Подсказки
Общая схема работы функций такова:

If(func)('one')('two'); // ?
То есть, в итоге должно вернуться то или иное значение, в зависимости от того, какая функция передана на вход If.

Если функции If была передана True, то выражение ниже вернёт значение аргумента первого вызова (one):

const ConditionFunction = If(True);
ConditionFunction('one')('two'); // one

Если функции If была передана False, то выражение ниже вернёт значение аргумента второго вызова (two):

const ConditionFunction = If(False);
ConditionFunction('one')('two'); // two

Мое решение:

// BEGIN (write your solution here)
export const If = func => arg1 => arg2 => func(arg1)(arg2);

export const True = arg1 => arg2 => arg1;

export const False = arg1 => arg2 => arg2;
// END

Решение учителя:

// BEGIN
export const True = x => () => x;
export const False = () => y => y;

export const If = f => f;
// END

Анализ и сравнение:
Ненужные аргументы можно было записать как ()
export const True = x => () => x;

в  If можно было просто взять функцию как аргумент и вернуть ее
export const If = f => f;