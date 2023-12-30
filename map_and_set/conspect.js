//map это колекция ключ/значение как и у object. Но разница в том что у map в роли ключа
//может выступать любой тип


//Методы и свойства 

/*
new Map() – створює колекцію.
map.set(key, value) – зберігає значення value за ключем key.
map.get(key) – повертає значення за ключем; повертає undefined якщо key немає в колекції.
map.has(key) – повертає true якщо key існує, інакше false.
map.delete(key) – видаляє елемент (пару ключ/значення) за ключем.
map.clear() – видаляє всі елементи колекції.
map.size – повертає поточну кількість елементів.
*/

let map = new Map();

map.set("1", "str1") // строкак как ключ 
map.set(1, "num1")
map.set(true, "bool1")

console.log(map.get(1)); //num1
console.log(map.get("1")); // str1

console.log(map.size); //3

//не знаю зачем , но мап может использовать в качесве ключей , объекты 

let ivan = {
    name: "Ivan",
};

let visitsCountMap = new Map();
visitsCountMap.set(ivan, 123);
console.log(visitsCountMap.get(ivan))

//Перебор map

let recipeMap = new Map([
    ['огірок', 500],
    ['помідори', 350],
    ['цибуля', 50]
]);

//перебор ключей (овощи)
for (let vegateble of recipeMap.keys()) {
    console.log(vegateble)// огірок , помідор , цибуля
}

//перебор значений (количество)
for (let amount of recipeMap.values()) {
    console.log(amount); // 500 , 350 ,50
}

//перебор елементов в формате [ключ , значение ]
for (let entry of recipeMap) {
    console.log(entry)//[ 'огірок', 500 ] [ 'помідори', 350 ] [ 'цибуля', 50 ]
}

//Object.entries: Map з Object

// масив пар [ключ, значення]
let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);

console.log(map1.get('1')); // str1

//map мы можем создать из обьекта 

let obj = {
    name: "Bobik",
    sureName: "Bobikovich",
    age: 7
};

let map2 = new Map(Object.entries(obj))
console.log(map2.get("name"))

//Object.fromEntries трансформує отриманий масив пар [ключ, значення] в об’єкт

let prices = Object.fromEntries([
    ['банан', 1],
    ['апельсин', 2],
    ['яблуко', 4]
]);
// тепер prices = { банан: 1, апельсин: 2, яблуко: 4 }
console.log(typeof prices)

let map4 = new Map();
map4.set('банан', 1);
map4.set('апельсин', 2);
map4.set('яблуко', 4);

let obj1 = Object.fromEntries(map4.entries()); // робимо простий об’єкт (*)

// Готово!
// obj1 = { банан: 1, апельсин: 2, яблуко: 4 }

console.log(obj1.апельсин); // 2

//Set

//Об’єкт Set – это особенный тип коллекции :
//"Множество" значений (без ключей) где каждое значение появляется лишь один раз
//типо в этой коллекции не могут повторяться значения

//основные методы
/*
new Set([iterable]) – створює Set, якщо аргументом виступає об’єкт-ітератор, тоді значення копіюються в Set.
set.add(value) – додає нове значення до Set, повертає Set.
set.delete(value) – видаляє значення з Set, повертає true, якщо value наявне в множині значень на момент виклику методу, інакше false.
set.has(value) – повертає true, якщо value присутнє в множині Set, інакше false.
set.clear() – видаляє всі значення множини Set.
set.size – повертає кількість елементів в множині.
*/

let set = new Set();

let lexa = { name: "Леха" };
let petro = { name: "Петро" };
let maria = { name: "Марія" };

// підраховуємо гостей, деякі приходять кілька разів
set.add(lexa);
set.add(petro);
set.add(maria);
set.add(lexa);
set.add(maria);

// set зберігає тільки 3 унікальних значення
console.log(set.size); // 3

for (let user of set) {
    console.log(user.name); // "Іван" (тоді "Петро" і "Марія")
}

//Перебор объекта Set

for (let value of set) console.log(value)

//то же самое с форич
set.forEach((value, valueAgain, set) => {
    console.log(value);
});

//ИТОГ
