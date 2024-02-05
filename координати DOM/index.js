/*
    Метод elem.getBoundingClientRect() повертає координати у контексті вікна для 
    мінімального за розмірами прямокутника, який вміщує elem у вигляді об’єкта вбудованого класу DOMRect.
*/

let button = document.getElementById('pressMe')

button.addEventListener('click', function () {
    let rect = button.getBoundingClientRect()
    let rectProp = JSON.stringify(rect, null, 2)
    // rect - значение которое -> в строку JSON 
    //null Функция обратного вызова или массив из функций обратного вызова
    //2: пробелы для отступа 
    alert(rectProp)
})

console.log(button.getBoundingClientRect())

//Виклик document.elementFromPoint(x, y) повертає найбільш вкладений елемент вікна з координатами (x, y).
let elem = document.elementFromPoint(x, y);

//Например можно достать елемент который находится на данный момент времени в середине окна 

/*
Пример с https://uk.javascript.info/

let centerX = document.documentElement.clientWidth / 2;
let centerY = document.documentElement.clientHeight / 2;

let elem = document.elementFromPoint(centerX, centerY);

elem.style.background = "red";
alert(elem.tagName);

*/
getBoundingClientRect