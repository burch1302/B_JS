function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age);
}

let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [petro, ivan, mariya];

sortByAge(arr);

// тепер відсортовано: [ivan, mariya, petro]
console.log(arr[0].name); // Ivan
console.log(arr[1].name); // Mariya
console.log(arr[2].name); // Petro