//ARRAYS

/*
unshift
shift
push
pop
splice
slice
concat
forEach
indexOf
lastIndexOf
includes
find
findIndex
findLastIndex
filter
map
sort(fn)
reverse
split 
join
reduce
reduceRight
Array.isArray*/

//let arr = new Array();
let arr = ["a", "b", "c", "d"];
console.log(arr)

//в js в масиве можно хоть венегрет сделаать , ей богу
let venegret = ['Apple', { name: 'John' }, true, function () { console.log('hello'); }];
console.log(venegret[1].name);
venegret[3]();

console.log(venegret.at(-1)()) //Почему тут еще и выводится undefined???


//Методы Методи pop/push, shift/unshift

/* чуть теории себе на память 
Очередь это любая коллекция оторая поддерживает операции push и shift

push - добавляет елемент в конец очереди 
shift - удаляет елемент в начале коллекции , и смещает всю очередь 
 (1 елемент удаляется а 2 елемент становится первым)

 стек - коллекция которая поддерживает два типа операций pop/push

 pop - удаляет еллемент с конца 
*/

let masivchik = ["boba", "biba", "doda", "dida"];

console.log(masivchik);

console.log(masivchik.pop() + " was poped");
console.log("\n" + masivchik);

masivchik.push("Gregoriy -_-");
console.log("\n" + masivchik);

masivchik.shift()
console.log("\n" + masivchik);

masivchik.unshift("apple");
console.log("\n" + masivchik);
//методами push и unshift можно добавить несколько елементов сразу

for (let element of masivchik) {
    console.log(element)
}
console.log()

//Отож, найпростіший метод очистки масиву це: arr.length = 0;.
let arrr = [1, 2, 3, 4, 5];
console.log(arrr)
arrr.length = 0;
console.log(arrr)
arrr = [1, 2, 3, 4, 5];
console.log(String(arrr))

//метод splice | arr.splice(start[, deleteCount, elem1, ..., elemN]) начинающая позиция
//start , удаляет deleteCount елементов и вставляет elem1...,elemN

let masiv = ["I", "Love", "js..."];
masiv.splice(2, 1)
console.log(masiv)

let masiv1 = ["I", "Love", "js..."];
masiv1.splice(2, 1, "C#")// удаление и вставка
console.log(masiv1)
masiv1.splice(3, 0, "so much")//Вставка без удаления
console.log(masiv1)

//метод slice | arr.slice([start], [end])
//Він повертає новий масив, копіюючи до нього всі елементи від індексу start до end (не включаючи end).

let array = ["t", "e", "s", "t"];
newArray = array.slice(1, 3)//метод взвращает новый масив 
console.log(newArray)
console.log(array.slice(1))

//метод concat | создаст новый масив в который скопирует значения с дургого масива
//результатом будет новый масив что будет вмещать новый добавленые елеиенты

let array1 = [1, 2, 3, 4, 5, 6];
newArray1 = array1.concat("qwe")//в аргумент тоже можно добавлять масивы
console.log(newArray1)

//forEach перебор
//синтаксис
//arr.forEach(function(item, index, array) {
// ... робимо щось з item
//  });

array2 = ["Bilbo", "Gandalf", "Nazgul"]
array2.forEach((item, index, array) => {
    console.log(`${item} має позицію ${index} в масиві ${array}`);
});

//indexOf/lastIndexOf та includes
//arr.indexOf(item, from) – шукає item, починаючи з індексу from, і повертає індекс, на якому був знайдений шуканий елемент, в іншому випадку -1.
//arr.includes(item, from) – шукає item, починаючи з індексу from, і повертає true, якщо пошук успішний.

let array3 = [1, 2, 3, "q", 12, "w"]
let result = array3.indexOf("q")
console.log(result)//3
console.log(array3.indexOf(null))// не нало и вернуло -1

let cars = ["Toyoya", "Ford", "Ausi", "Ferari"];
console.log(cars.includes("Ford"))//true

//find і findIndex/findLastIndex
//синтаксис find

let users = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

let user = users.find(item => item.id == 1);

console.log(user.name); // John

let users1 = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" },
    { id: 4, name: "John" }
];

console.log(users1.findIndex(user => user.name == 'John')); // 0
console.log(users1.findLastIndex(user => user.name == 'John')); // 3

//метод filter (возвращает масив отфильтрованых елементов)
let users2 = [
    { id: 1, name: "John" },
    { id: 2, name: "Pete" },
    { id: 3, name: "Mary" }
];

// повертає масив перших двох користувачів
let someUsers = users2.filter(item => item.id < 3);

console.log(someUsers.length); // 2

//метод map
//вызывает функцию для каждого елемента масива , и возвращает масив результатов выполнения этой функции 

let lengths = ["Bilbo", "Gandalf", "Nazgul"].map(item => item.length);
console.log(lengths); // 5,7,6

//метод sort(fn)

let array4 = [1, 2, 15]
array4.sort();
console.log(array4)// 1, 15, 2
//такая фигня проиходит потому что по умолчанию элементы сортируются как рядки
//что бы задать свою логику сортировки нам в sort(fn) нужно передать
//функцию в которой будет описываться эта логика 

function compareNumeric(a, b) {
    if (a > b) return 1; // якщо перше значення більше за друге
    if (a == b) return 0; // якщо значення рівні
    if (a < b) return -1; // якщо перше значення меньше за друге
}

array4.sort(compareNumeric)
console.log(array4)
//теперь все правильно 

//метод reverse
let array5 = [5, 4, 3, 2, 1]
array5.reverse();
console.log(array5)

//метод split и join
//split - разбивает строку на масив по заданаму разделителю

let names = "Вася,Пети,Гриша,Кирилл,Вова,Бодя"
let namesArr = names.split(",")
console.log(namesArr)

//arr.join делаеть в точности противоположное для split
//он превратит масив в строку
let namesString = namesArr.join(";")
console.log(namesString)

//методы reduce/reduceRight    ---??????????
let array6 = [1, 2, 3, 4, 5];

let result1 = array6.reduce((sum, current) => sum + current, 0);

console.log(result1); // 15

//isArray() - так как  вжс нету отдельного типа для масива , он является объектом
//что бы проверить масив на масив
console.log(Array.isArray({})); // false

console.log(Array.isArray([])); // true


//шпора 

/*
Шпаргалка по методам масиву:

Для додавання/видалення елементів:

push(... items) – додає елементи до кінця,
arr.pop() – дістає елемент з кінця,
arr.shift() – дістає елемент з початку,
arr.unshift(...items) – додає елементи в початок.
splice(pos, deleteCount, ...items) – починаючи з індексу pos, видаляє deleteCount елементів та вставляє items.
slice(start, end) – створює новий масив, копіюючи в нього елементи з позиції start до end (не включаючи end).
//можно прописать newArr = arr.slice() и он просто скопирует масив

concat(...items) – повертає новий масив: копіює всі члени поточного масиву і додає до нього items. Якщо якийсь із items є масивом, тоді беруться його елементи.
Для пошуку серед елементів:

indexOf/lastIndexOf(item, pos) – шукає item, починаючи з позиції pos, і повертає його індекс або -1, якщо нічого не знайдено.
includes(value) – повертає true, якщо в масиві є елемент value, в іншому випадку false.
find/filter(func) – фільтрує елементи через функцію і віддається перше/всі значення, при проходженні яких функція повертає true.
findIndex схожий на find, але повертає індекс замість значення.
Для перебору елементів:

forEach(func) – викликає func для кожного елемента. Нічого не повертає.
Для перетворення масиву:

map(func) – створює новий масив з результатів виклику func для кожного елемента.
sort(func) – сортує масив «на місці», а потім повертає його.
reverse() – «на місці» змінює порядок елементів на протилежний і повертає змінений масив.
split/join – перетворює рядок в масив і назад.
reduce(func, initial) – обчислює одне значення на основі всього масиву, викликаючи func для кожного елемента і передаючи проміжний результат між викликами.
Додатково:

Array.isArray(value) перевіряє, чи є value масивом, якщо так, повертає true, інакше false.*/