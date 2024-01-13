//Переменную можно закупорт=ить внутри блока кода , и тогда ее нельзя будет использовать извне
{
    let a = "Hi"
    console.log(a)
}
console.log(a)//Ошибка

//

let a = 1;
let a = 4;//Ошибка ведь переменная с таким именем уже есть 

{
    let b = 10;
}
{
    let b = 11;
}

//Для if, for, while переменные объявленные в {} , так же будут видні ток в пределах скобок

//Вложеные функции

function sayHiBy(firstName, lastName) {

    //Вспомогающая вложеная функция 
    function getFullName() {
        return firstName + " " + lastName;
    }

    console.log("Привіт, " + getFullName());
    console.log("Бувай, " + getFullName());
}

//Что еще интересно , вложеную функцию можно вернуть как свойство

function makeCounter() {
    let count = 0;

    return function () {
        return count++;
    };
}

let counter1 = makeCounter();

console.log(counter1());//0
console.log(counter1());//1
console.log(counter1());//2

//Лексичне середовище (Lexical Environment)

/*
    Весь наш скрипт по сути , это объект , это как бы основная лексическая среда , и посути когда мы обьявляем пер
    еменные , то мы просто присваемваем обьекту новые свойства и их значения.

    в фигурных скобках , отдельная лексическая среда {} , Типо вниутри нашего основного Lexical Environment
    находится еще один.

    !
    (“Лексичне середовище” – це об’єкт специфікації: він існує лише “теоретично” в специфікації мови щоб показати,
    як все працює.Ми не можемо отримати цей об’єкт у нашому коді та керувати ним безпосередньо.)
    !
*/

//Замыкание 

/*
    Замыкание - Это функция которая запоминает свои внешние переменные и может получить к ним доступ 

    !
    Коли під час співбесіди розробник отримує запитання “що таке замикання?”, 
    правильною відповіддю буде визначення замикання та пояснення, 
    що всі функції в JavaScript є замиканнями, і, можливо, 
    ще кілька слів про технічні деталі: властивість [[Environment]], і як взагалі працюють лексичні середовища.
    !
*/

// Хороший пример конструктора в функции 
function Counter() {
    let count = 0;

    this.up = function () {
        return ++count;
    };
    this.down = function () {
        return --count;
    };
}

let counter = new Counter();

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());


//Задание , написать функцию sum которая работает вот так sum(a)(b) = a+b
//Именно с двумя скобками

function sum(a) {
    return function (b) {
        return a + b;
    }
}

console.log(sum(10)(10));


/*Задание. Есть встроеный метод для масивов который фильтрует его по нашей функции - Filter(f) где
он фильтрует все элементы по функции f

нужно написать фильтры 

inBetween(a, b) – фільтрує елементи які більше a та менше b. Також має включати елементи, які дорівнюють їм.
inArray([...]) – фільтрує елементи, які включено у заданий масив.
*/



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr.filter(inBetween(1, 5)));
console.log(arr.filter(inArray([1, 2, 10])));

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b;
    };
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    }
}
