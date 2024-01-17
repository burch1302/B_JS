//Создать декоратор  delay(f, ms) который будет задерживать каждый вызов f на ms милисекунд

function f(x) {
    console.log(x);
}

function delay(func, ms) {
    return function () {
        setTimeout(() => f.apply(this, arguments), ms);
    }
}

let f1000 = delay(f, 2000)

f1000("Тест")

//apply - позволяет нам візвать функцию с указанного контекста (значения this) и передачей аргументов в виде масива

