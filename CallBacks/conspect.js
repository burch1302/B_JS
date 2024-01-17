//Callbacks

/*
    В жс не совсем есть такое понятие как асинхронность , поэтому могут случаться такие моменты
    когда функция еще не закончила свою работу а скрип пошел дальше , что бы этого не проимходило -
    Колбек функции. 
*/

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(script);//установка колбека 

    document.head.append(script);
}


//Такой стиль называется , асинхронное программирование на основе колбеков 
//Функция которая выполняет что то асинхронно должна иметь колбек
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Cool, the script ${script.src} is loaded`);
    alert(_); // _ функція, що оголошена в завантаженому скрипті
});

//Обработка ошибок 

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Помилка завантаження скрипту для ${src}`));

    document.head.append(script);
}