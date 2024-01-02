//Методи JSON, toJSON

let user = {
    name: "Kostya",
    age: 20,
    salary: [22200, 23400, 27800]
};

let json = JSON.stringify(user);

console.log(json)

/*
JSON – незалежна від мови специфікація даних,
тому JSON.stringify пропускає деякі специфічні для JavaScript властивості об’єктів.

А саме:

Функціональні властивості (методи).
Символьні ключі та значення.
Властивості, що мають undefined.
*/

//Виключення та перетворення: replacer

let room = {
    number: 23
};

let meetup = {
    title: "Конференція",
    participants: [{ name: "Іван" }, { name: "Аліна" }],
    place: room // meetup посилається на room
};

room.occupiedBy = meetup; // room посилається на meetup

console.log(JSON.stringify(meetup, ['title', 'participants']));
// {"title":"Конференція","participants":[{},{}]}

console.log(JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']));
/*
{
  "title":"Конференція",
  "participants":[{"name":"Іван"},{"name":"Аліна"}],
  "place":{"number":23}
}
*/

//Форматування: space

//Третій аргумент JSON.stringify(value, replacer, space) –
//це кількість пробілів, що використовуються для гарного форматування.

console.log(JSON.stringify(user, null, 2));

//Спеціальний “toJSON”
let room1 = {
    number: 23
};

let meetup1 = {
    title: "Конференція",
    date: new Date(Date.UTC(2017, 0, 1)),
    room1,
};

console.log(JSON.stringify(meetup1));//{"title":"Конференція","date":"2017-01-01T00:00:00.000Z","room1":{"number":23}}
//Date стал строкой потому что все обьекты типа Date имеют встроеный метод “toJSON”
//который возвращает такой рядок
//поэтому мы можем переписать этот метод

//Пример , заменю в дате знак "-" на "_"
let room2 = {
    number: 23
};

let meetup2 = {
    title: "Конференція",
    date: new Date(Date.UTC(2017, 0, 1)),
    room2,
    toJSON() {
        return {
            title: this.title,
            date: this.date.toISOString().replace(/-/g, '_'),
            room2: this.room2
        };
    }
};

console.log(JSON.stringify(meetup2));

//JSON.parse

//let value = JSON.parse(str, [reviver]);
/*
str
JSON-рядок для перетворення в об’єкт.

reviver
Необов’язкова функція, яка буде викликана для кожного (key, value) та може перетворювати значення.
*/

let userData = '{ "name": "Іван", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

let userr = JSON.parse(userData);

console.log(userr.friends[1]); // 1
