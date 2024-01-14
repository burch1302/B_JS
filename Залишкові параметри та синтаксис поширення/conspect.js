//Залишкові параметри 

function sumAll(...args) {// ... - соберает остаток пораметров в масив args
    let sum = 0;

    for (let arg of args) sum += arg;

    return sum;
}

let a = sumAll(1, 2, 3, 4, 5);
console.log(a)

//Случай когда первые два аргумента переменные а остальные - масив
{
    function showName(firstName, lastName, ...title) {
        console.log(firstName + ' ' + lastName);

        for (let i of title) {
            console.log(i);
        }
    }

    showName("Danya", "Burchenko", "Student KNU", "Trany in BANZA")
}

console.log()
//Переменная argument
{
    function showName() {
        console.log(arguments.length)
        console.log(arguments[0])
        console.log(arguments[1])
        console.log[arguments[2]]
    }

    showName("Biba", "Boba")
}
console.log()
//Синтаксис расширения 

{
    let arr = [1, 10, 20];

    console.log(Math.max(...arr))// 20 (Превращает масив в список аргументов)

    //таким способом мы можем подать несколько итераций 

    let arr1 = [4, 1, 7, 25];
    let arr2 = [-2, 12, 100, 43];

    console.log(Math.max(...arr1, ...arr2)); //100

    //так же синтаксис расширения 
    let merged = [...arr1, ...arr2, 10, 20, 30]
    console.log(merged);

    //Так же синтаксис расширения может подойти что бы превратить строку в масив

    let str = "Hello"
    console.log([...str])

    //Array.from(str) сделал бы то же самое 
    let archik = Array.from(str)
    console.log(archik)
    //Но Array.from() рабобтает как с масиво подобными объектами так и с объектами что итерируются
    //а синтаксис расширения работает только с итеративными 
}

{
    //Створити копію масива/об’єкта

    let arr = [1, 2, 4]

    let arrCopy = [...arr]//Росширет масив в список параметров а потом поместит результат в новій масив

    //Одинаковое ли содержание у масивов ?

    console.log(JSON.stringify(arr) === JSON.stringify(arrCopy));//true

    //Масивы одинаковые ?
    console.log(arr == arrCopy)//false (не одинаковые ссыки)

    //Замена нашего первого масива не меняет второй 

    arr.push(123);
    console.log(arr);
    console.log(arrCopy);


    //Обращу внимание что точно так же можно и скопировать обьект 

    let obj = {
        a: 1,
        b: 2,
        c: 3
    };

    let objCopy = { ...obj };

    //Одинаковое содержание
    console.log(JSON.stringify(obj) === JSON.stringify(objCopy))//true

    //Не одинаковые объекты 
    console.log(objCopy == obj)//false

    //Замена нашего объекта не будет влиять на скопированый 

    //поверьте на слово
}

/*
    Подведу итоги 

    Когда видишь ... в коде , то это либо синтаксис расширения , или же залишкові параметри (остаточные параметры)

    Коли ... 
    находиться в кінці параметрів функції, це “залишкові параметри” і він збирає решту переданих аргументів у масив.

    Коли ... 
    виникає під час виклику функції чи чогось подібного, це називається “синтаксисом розширення” і розширює масив у список.
*/