//Чи скопійовано масив?
let fruits = ["Apples", "Pear", "Orange"];

// додаємо нове значення в "копію"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// Що в fruits?
console.log(fruits.length); // 4


let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");

let arr = ["a", "b"];

arr.push(function () {
    console.log(this);
});

arr[2](); // a,b,function(){...}


//Сума введених чисел
function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введіть, будь ласка, номер", 0);

        // Обриваємо введення даних?
        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log(sumInput());