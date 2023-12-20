//Створіть функцію topSalary(salaries) яка повертає ім’я найбільш високооплачуваної особи.
//Якщо об’єкт salaries пустий, функція повинна повернути null.
//Якщо є кілька високооплачуваних осіб, поверніть будь-якого з них.
//P.S. Використовуйте Object.entries і деструктурування для перебору пар ключ/значення.

let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

function topSalary(salaries) {
    let maxSalary = 0;
    let maxName = null;

    for (let [name, salary] of Object.entries(salaries)) {
        if (maxSalary < salary) {
            maxSalary = name;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries))