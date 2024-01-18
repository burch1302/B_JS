/*
     Планирование вызова - возможность выполнить функцию не сейчас , а через указаное время.
     Для этого существует два метода

     setTimeout - позволяет нам запускать функцию один раз через указаный промежуток времени
     setInterval - позволяет нам запускать функцию много разово , по указанному временному интервалу

*/

//Синтаксис setTimeout
let timerId = setTimeout(func | code, [delay], [arg1], [arg2], ...[argsN]);
/*
func | code - функция или рядок для выполнения 
[delay] - задержка перед выполнением (в мс)
[arg1], [arg2], ...[argsN] - аргменты которые передаются в функцию
*/

{
    function sayHi() {
        console.log("Hi")
    }

    setTimeout(sayHi, 1000)//Hi [Done] exited with code=0 in 1.225 seconds
}
{
    //With arguments

    function sayHi(phrase, who) {
        console.log(`${phrase} , ${who}`)
    }

    setTimeout(sayHi, 2000, "Hello", "My name is Jhon");

    //Так тоже работает 
    setTimeout(() => alert('Привіт'), 1000);
}

//Скасування за допомогою clearTimeout

{
    /*
        Виклик setTimeout повертає “ідентифікатор таймера” timerId,
        який ми можемо використовувати для скасування виконання.
    */

    //Синтаксис отмены
    {
        let timerId = setTimeout(...n);
        clearTimeout(timerId);
    }

    //Пример в котором ничего не произойдет
    let timerId = setTimeout(() => console.log("ніколи не відбувається"), 1000);
    console.log(timerId); // ідентифікатор таймера

    clearTimeout(timerId);
    console.log(timerId);
}

//Метод setInterval (Имеет тот же синтаксис что и setTimeout)
{
    //Этот метод запускает функцию много раз , и что б это прекратить нам и понадобится clearInterval(timerId)
    let timerId = setInterval(() => console.log("Tik"), 2000);

    setTimeout(() => {
        clearInterval(timerId); console.log("STOP");
    }, 5000)//повідомлення кожні 2 секунди. Через 5 секунд вивід припиняється
}

//Вкладений setTimeout
{
    //Это как бы второй способ запускать какую то функцию регулярно 
    let timerId = setTimeout(function tick() {
        console.log('тік');
        timerId = setTimeout(tick, 2000); // (*)
    }, 2000);

    //Вкладений setTimeout дозволяє більш точно встановити затримку між виконанням, ніж setInterval.
}

//setTimeout з нульовою затримкою
{
    //Це планує виконання func якнайшвидше. 
    //Але планувальник викликає його лише після завершення виконання поточного скрипту.

    setTimeout(() => console.log("Світ"));

    console.log("Привіт");
    console.log("Привіт");
}