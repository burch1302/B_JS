let now = new Date();
console.log(now)//Покажет поточную дату 

let zero = new Date(0);
console.log(zero)

let Jan02_1970 = new Date(24 * 3600 * 1000);
console.log(Jan02_1970);

//new Date(year, month, date, hours, minutes, seconds, ms)
new Date(2011, 0, 1, 0, 0, 0, 0); // 1 січня 2011 року, 00:00:00
new Date(2011, 0, 1); // те ж саме, години тощо -- 0 за замовчуванням

console.log(now.getFullYear());//2024
console.log(now.getMonth());//0
console.log(now.getDate());//12
//getHours(), getMinutes(), getSeconds(), getMilliseconds()
console.log(now.getDay());//5

console.log(now.getHours())
console.log(now.getUTCHours())

//getTimezoneOffset() Повертає різницю між UTC та місцевим часовим поясом, у хвилинах:

/*
Наступні методи дозволяють встановити дату/часові компоненти:

setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds) (встановлює всю дату в мілісекундах з 01.01.1970 UTC)
*/

let today = new Date();
today.setHours(0)// ще сьогодні, але година змінюється на 0
today.setHours(0, 0, 0, 0);// ще сьогодні, зараз рівно 00:00:00.

//Автокорекція – це дуже зручна особливість об’єктів Date.
//Ми можемо встановити данні за межами діапазону, і вони будуть автоматично налаштувати себе.

//Date.parse з рядка
let ms = Date.parse('2012-01-26T13:51:50.417-07:00');

console.log(ms); // 1327611110417  (timestamp)

let date = new Date(Date.parse('2012-01-26T13:51:50.417-07:00'));

console.log(date);

let someDate = new Date(2012, 1, 20, 3, 12);
console.log(someDate)
