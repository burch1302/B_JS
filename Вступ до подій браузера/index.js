//Подія , це сигнал від браузера , що щось сталося 

function countRabbits() {
    for (let i = 1; i <= 3; i++) {
        alert("Кролик номер " + i);
    }
}
elem.onclick = function () {
    alert('Дякую');
};

//Доступ до елемента через this
//Усередині обробника події this посилається на поточний елемент

//addEventListener

/*
    Синтаксис додавання обробника:

    element.addEventListener(event, handler, [options]);

    event
    Назва події, наприклад "click".

    handler
    Посилання на функцію-обробник.

    options
    Додатковий об’єкт із властивостями:

*/

//Метод addEventListener дозволяє додавати кілька обробників на одну подію одного елемента, наприклад:

function handler1() {
    alert('Дякую!');
};

function handler2() {
    alert('Ще раз дякую!');
}

elem.onclick = () => alert("Привіт");
elem.addEventListener("click", handler1); // Дякую!
elem.addEventListener("click", handler2); // Ще раз дякую!

//Обробники деяких подій можна присвоїти лише через addEventListener
// буде працювати
document.addEventListener("DOMContentLoaded", function () {
    alert("DOM побудований");
});

//Об’єкт події

/*
Щоб правильно обробити подію, можуть знадобитися деталі того, що сталося. Не просто “клік” 
або “натискання клавіші”, але й координати вказівника миші, яка саме клавіша натиснута і так далі.

Коли відбувається подія, браузер створює об’єкт події, записує в нього деталі та передає його 
як аргумент функції-обробнику.

Приклад нижче демонструє отримання координат миші з події:
*/
elem.onclick = function (event) {
    // вивести тип події, елемент та координати кліка
    alert(event.type + " на " + event.currentTarget);
    alert("Координати: " + event.clientX + ":" + event.clientY);
};

//Об’єкт-обробник: handleEvent

let obj = {
    handleEvent(event) {
        alert(event.type + " at " + event.currentTarget);
    }
};

elem.addEventListener('click', obj);

//Також можна використати класс
class Menu {
    handleEvent(event) {
        switch (event.type) {
            case 'mousedown':
                elem.innerHTML = "Натиснута кнопка миші";
                break;
            case 'mouseup':
                elem.innerHTML += "...і відпущена.";
                break;
        }
    }
}

let menu = new Menu();

elem.addEventListener('mousedown', menu);
elem.addEventListener('mouseup', menu);