formattedTime.js
Реализуйте и экспортируйте по умолчанию функцию, которая принимает на вход количество минут (прошедших с начала суток) и возвращает строку, являющуюся временем в формате чч:мм.

Пример:

formattedTime(5); // 00:05
formattedTime(15); // 00:15
formattedTime(60); // 01:00
formattedTime(67); // 01:07
formattedTime(175); // 02:55
formattedTime(600); // 10:00
formattedTime(754); // 12:34
Подсказки
Используйте функцию Math.floor(number) для округления до нижней границы

Мое решение:

// BEGIN (write your solution here)
const formattedTime = (num) => {
  const houres = Math.floor(num / 60);
  const minutes = num % 60;
  const strHoures = (houres <= 9) ? "0" + String(houres) : String(houres);
  const strMinutes = (minutes <= 9) ? "0" + String(minutes) : String(minutes);
  return `${strHoures}:${strMinutes}`;
}
export default formattedTime;
// END

Решение учителя:

// BEGIN
export default (rawMinutes) => {
  const hours = Math.floor(rawMinutes / 60);
  const formattedHours = hours >= 10 ? hours : `0${hours}`;

  const minutes = rawMinutes % 60;
  const formattedMinutes = minutes >= 10 ? minutes : `0${minutes}`;

  return `${formattedHours}:${formattedMinutes}`;
};
// END

Анализ и сравнение:
Почти то же самое, но учитель везде использовал усы.