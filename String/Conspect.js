//Длинна рядка 
console.log("12341234".length)//8

//доступ к символам
let str = "Hi"
console.log(str[1])//i

console.log(str.at(-2))//H 
//str.[-2]// не сработает

//перебор циклом 
for (let char of "Привіт") {
    console.log(char); // П,р,и,в,і,т (char — спочатку "П", потім "р", потім "и" і так далі)
}

//Строки в жс не изменяемые поэтому нужно создавать новую строку
let str1 = 'Ой';
str1 = 'о' + str1[1]; // замінюємо рядок
console.log(str1); // ой

//Изменние регистра 
console.log('Інтерфейс'.toUpperCase()); // ІНТЕРФЕЙС
console.log('Інтерфейс'.toLowerCase()); // інтерфейс

console.log('Interface'[0].toLowerCase()); // 'іnterface'

//Поиск подстроки
let str2 = "Віджет з ідентифікатором"
console.log(str2.indexOf("Віджет"))//0 потому что Віджет біло найдено в началае строки 
console.log(str2.indexOf('віджет')); // -1, збігів не знайдено, пошук чутливий до регістру
console.log(str2.indexOf('ід', 2)) // 9 // второй параметр указывает с какого индекса начинать поиск


//цикл который ищет все схожости в строке

let str3 = 'Хитрий, як лисиця, сильний, як Як';

let target = 'як'; // давайте знайдемо це

let pos = 0;
while (true) {
    let foundPos = str3.indexOf(target, pos);
    if (foundPos == -1) break;

    console.log(`Знайдено тут: ${foundPos}`);
    pos = foundPos + 1; // продовжуємо з наступної позиції
}

//includes, startsWith, endsWith

console.log("Віджет з ідентифікатором".includes("Віджет")); // true

console.log("Привіт".includes("Бувай")); // false

console.log("Віджет".includes("ід")); // true
console.log("Віджет".includes("ід", 3)); // false, починаючи з 3-го символа, підрядка "ід" немає

console.log("Віджет".startsWith("Від")); // true, "Віджет" починається з "Від"
console.log("Віджет".endsWith("жет")); // true, "Віджет" закінчується підрядком "жет"

//Как получить подстроку ?

let str4 = "stringify"
console.log(str4.slice(0, 5))//strin

console.log(str4.slice(2)); // 'ringify', з позиції 2 і до кінця

console.log(str4.slice(-4, -1)); // 'gif'

//метод оналог slice
str4.substring(2, 6)//ring // 2 аргумент это количество символов
str4.substring(6, 2)//ring // он умеет менять местами если первый индекс больше
console.log(str4.substring(6))

/*Підсумки
Є 3 види лапок. Зворотні лапки дозволяють рядку охоплювати кілька ліній і застосовувати вбудовувані вирази ${…}.
Ми можемо використовувати спеціальні символи, такі як розрив рядка \n.
Щоб отримати символ, використовуйте: [] або метод at.
Щоб отримати підрядок, використовуйте: slice або substring.
Щоб перевести рядок у нижній/верхній регістри, використовуйте: toLowerCase/toUpperCase.
Щоб знайти підрядок, використовуйте: indexOf, або includes/startsWith/endsWith для простих перевірок.
Щоб порівняти рядки з урахуванням правил мови, використовуйте: localeCompare, інакше вони порівнюються за кодами символів.
Є кілька інших корисних методів у рядках:

str.trim() – видаляє (“обрізає”) пробіли з початку та кінця рядка.
str.repeat(n) – повторює рядок n разів.*/