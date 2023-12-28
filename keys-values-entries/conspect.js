/*Object.keys, values, entries
Для простих об’єктів доступні наступні методи:

Object.keys(obj) – повертає масив ключів.
Object.values(obj) – повертає масив значень.
Object.entries(obj) – повертає масив пар [ключ, значення].
*/

let user = {
    name: "Іван",
    age: 30
};
//Object.keys(user) = ["name", "age"]
//Object.values(user) = ["Іван", 30]
//Object.entries(user) = [ ["name","Іван"], ["age",30] ]

for (let value of Object.values(user)) {
    console.log(value); // Іван, тоді 30
}

//Трансформация объектов

let price = {
    banana: 1,
    orange: 2,
    meat: 4
};
console.log(Object.entries(price))
//Object.fromEntries(arr) - превратит переданій масив снова в объект
let doublePrice = Object.fromEntries(Object.entries(price).map(entry => [entry[0], entry[1] * 2]))
console.log(doublePrice)
console.log(doublePrice.orange)