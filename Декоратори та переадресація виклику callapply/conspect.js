//Декоратори та переадресація виклику, call/apply

//Прозоре кешування

/* 
    если функция часто вызывается , мы можем екшировать (запомнить) ее результат , что бы не тратить
    время на перерасчет .
    Пример с функцией slow();
    И вместо того что бы добавить эту логику внутри slow мы создадим функцию обертку , которая добавляет
    куширование 
*/
{
    function slow(x) {
        //Тут могут быть ресурсо затратные операции
        console.log(`Викликана з ${x}`);
        return x;
    }

    function cachingDecorator(func) {
        let cache = new Map();

        return function (...args) {
            if (cache.has(args)) {
                return cache.get(args);
            }

            let result = func(...args);

            cache.set(args, result);
            return result;
        }
    }

    slow = cachingDecorator(slow);
    console.log(slow(1));
    console.log(`Again : ${slow(1)}`)

    console.log(slow(2));
    console.log(`Again : ${slow(2)}`)


    /*
        В данном случае cachingDecorator это декоратор ; Специальная функция которая берет другую функцию 
        и меняет ее поведение 
    
        идея лежит в том что мы можем вызвать cachingDecorator к любой функции , и она вернет обертку с кешированием 
        Это замечательно потому что мы можем иметь много функций которые могли бы использовать эту особенность ,
        и все что нам нужно сделать - это применить к ним cachingDecorator
    */

}

//Використання “func.call” для контексту
{
    //Кешуючий декоратор не будет работать с методами объекта

    /*
        Существует специально встреный метод функции
         func.call(context, …args)
         что позволяет вызвать функцию явно задавая ей this
    */

    //Синтаксис 
    func.call(context, arg1, arg2, ...args);

    function sayHi() {
        console.log(this.name)
    }

    let user = { name: "Ivan" }
    let admin = { name: "Admin" }

    // використовуйте call, щоб передати різні об’єкти як "this"
    sayHi.call(user); // Іван
    sayHi.call(admin); // Адмін
}

{
    function say(phrase) {
        alert(this.name + ': ' + phrase);
    }

    let user = { name: "Іван" };

    // користувач стає this, і "Привіт" стає першим аргументом
    say.call(user, "Привіт"); // Іван: Привіт
}

//Тот же декоратор но измененный с помощью call что б работать с методами обьекта 
{
    let worker = {
        someMethod() {
            return 1;
        },

        slow(x) {
            alert("Викликана з " + x);
            return x * this.someMethod(); // (*)
        }
    };

    function cachingDecorator(func) {
        let cache = new Map();
        return function (x) {
            if (cache.has(x)) {
                return cache.get(x);
            }
            let result = func.call(this, x); // "this" зараз передано правильно
            cache.set(x, result);
            return result;
        };
    }

    worker.slow = cachingDecorator(worker.slow); // тепер зробимо цьому методу кешування

    console.log(worker.slow(2)); // працює
    console.log(worker.slow(2)); // працює, не викликаючи оригінальну функцію (кешується)
}

//Переходимо до декількох аргументів з «func.apply»
{
    function cachingDecorator(func) {
        let cache = new Map();
        return function (x) {
            if (cache.has(x)) {
                return cache.get(x);
            }
            let result = func.call(this, x); // "this" зараз передано правильно
            cache.set(x, result);
            return result;
        };
    }

    /*
        все это время наш декоратор работал только с функциями у которых ожин аргумент
    
        теперь вопрос , как хешировать метод worker.slow в котором несколько аргументов ?
    */
    let worker = {
        slow(min, max) {
            return min + max;//тут может быть сожная задача 
        }
    }

    worker.slow = cachingDecorator(worker.slow)

    /*
        естьмножество способов как решить эту проблему но я буду использовать соединение двух значений в одно
    
        В нашем конкретном случае мы можем просто использовать рядок "min,max" как ключ Map
        Для гибкости мы можем написать функцию хешировнаия для декоратора , которая знает как 
        сделать одно значение из множества 
    
    */
}
{
    //Немного изменю декоратор для множества параметров функции 

    let worker = {
        slow(min, max) {
            console.log(`Викликана з ${min},${max}`);
            return min + max;
        }
    };

    function cachingDecorator(func, hash) {
        let cache = new Map();
        return function () {
            let key = hash(arguments); // (*)
            if (cache.has(key)) {
                return cache.get(key);
            }

            let result = func.call(this, ...arguments); // (**)

            cache.set(key, result);
            return result;
        };
    }

    function hash(args) {
        return args[0] + ',' + args[1];
    }

    worker.slow = cachingDecorator(worker.slow, hash);

    console.log(worker.slow(3, 5)); // працює
    console.log("Знову " + worker.slow(3, 5)); // те ж саме значення (з кешу)
}

//func.apply
{
    /*
        вместо func.call(this, ...arguments) в прошлом примере мы бы могли использовать 
        func.apply(this, arguments)
    
    */

    //Синтаксис методу func.apply:
    func.apply(context, args)
    //Він запускає func, встановлюючи this = context і використовує псевдо-масив args як список аргументів.
    //Разница от call , в том что call принимает итерированую коллекцию в качестве аргументов
    //а apply принимает псевдо масив
}

//Запозичення методу
{

    /*
        Опять сделаем еще ожно улучшение нашей функции  Хеширования
        Сейчас она работает всего на двух аргументах но лучше б было 
        что б она закрепляла любое количество args

        обычным решением будет использовать  arr.join но єто не сработает
        потому что если мы вызовем hash(arguments) то наши аргументы это не масив
        а итерированая коллекция и псевдо масив но точне не настоящий масив

        тем не мение используя Запозичення методу мы можем это сделать :

    */

    function hash() {
        console.log([].join.call(arguments));//1,2
    }
}