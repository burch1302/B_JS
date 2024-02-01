function Hello() {
    console.log('Hello', this)
}
function sayName(name = 'kirill') {
    console.log(`The name in this context is: ${name}`)
}

let person = {
    name: 'Bill',
    age: 25,
    context: this,
    sayHello: Hello,
    sayHelloWindow: Hello.bind(document),//привязали контекст с которым будет вызвана функция
    logInfo: function (job, phone) {
        console.group(`${this.name} info: `)
        console.log(`Name is: ${this.name}`)
        console.log(`Age is: ${this.age}`)//в данном случае this укажет на контекст person , потому что функция создання изначально в этом контексте
        console.log(`job is ${job}`)
        console.log(`phone is ${phone}`)
        console.groupEnd()
    },
    logContextName: sayName.bind(this)//this указывает на контекст в котором создан sayName
}

let lena = {
    name: 'Elena',
    age: 23
}
const fnLenaInfoLog = person.logInfo.bind(lena)// тут мы к функции которая в person привязали контекст lena , и она нам вывела значения с объекта lena
fnLenaInfoLog('FrontEnd', '0942374618')
const fnLenaInfoLog2 = person.logInfo.bind(lena, 'FrontEnd', '0942374618')//можем передать параметры через запятую после указания контекста
fnLenaInfoLog2()
person.logInfo.bind(lena, 'FrontEnd', '0942374618')()

person.logInfo.call(lena, 'FrontEnd', '0942374618')//Отличие что call сразу вызывает функцию и не нужны дополнительные ()
person.logInfo.apply(lena, ['FrontEnd', '0942374618'])//apply полсе указания контекста принимает только один параметр

/// ===============

let array = [1, 2, 3, 4, 5];

// function multBy(arr, n) {
//     return arr.map(function (i) {
//         return i * n
//     })
// }

//console.log(multBy(array, 5))

//Но данный вариант не самый удобный 
Array.prototype.multBy = function (n) {
    return this.map(function (i) {
        return i * n
    })
}
console.log(array.multBy(2))

//И это круто потому что теперь мы этот метод можем применять к ЛЮБОМУ масиву к которому захотим
//В данном случае this будет ссылаться на масив к которому мы приминяем метод