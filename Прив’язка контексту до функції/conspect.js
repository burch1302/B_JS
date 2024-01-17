//Привязка контекста к функции

//Втрата this.

let user = {
    firstName: "Ivan",
    sayHi() {
        console.log(`Привіт + ${this.firstName}!`)
    }
}

setTimeout(user.sayHi, 1000) //Если метод передался отдельно от объетка , то – this теряется 
//поэтому и undefined

//Как решать эту проблему:

//Обгортка
{
    let user = {
        firstName: "Ivan",
        sayHi() {
            console.log(`Привіт + ${this.firstName}!`)
        }
    }

    setTimeout(() => user.sayHi(), 1000);
}

//Но в этом случае , решение не предусматривает возможность изменения значения user на протяжение 1 секнды задержки
//Следующий пример гарантирует что такой ситуации не произойдет

//Есть встроеный метод bind который позволяет сохранить правильный this

{
    let user = {
        firstName: "Ivan"
    };

    function func() {
        console.log(this.firstName);
    }

    let funcUser = func.bind(user)
    funcUser();
}

//Теперь попробуем с методом объекта 

{
    let user = {
        firstName: "Ivan",
        sayHi() {
            console.log(`Привіт, ${this.firstName}!`);
        }
    };

    let sayHi = user.sayHi.bind(user)

    sayHi();

    setTimeout(sayHi(), 1000);

    //Теперь если даже за 1 секунду задержки , значение user изменится , метод sayHi все ранво отработает правильно 
    //// sayHi використовує прив’язане значення, яке посилається на старий об’єкт user
}

//Часткове застосування 
{
    //Полный синтаксис bind
    let bound = func.bind(context, [arg1], [arg2], ...arr);

    //Це дозволяє прив’язати context як this та початкові аргументи функції.
    function mul(a, b) {
        return a * b;
    }
    //Використаємо bind щоб створити функцію double на її основі:

    let double = mul.bind(null, 2);
    console.log(double(3));// 2*3 = 6
    console.log(double(4)); // = mul(2, 4) = 8
}