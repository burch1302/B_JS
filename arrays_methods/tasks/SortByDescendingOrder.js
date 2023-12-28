//Сортувати за спаданням
let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr)

//Скопіювати і впорядкувати масив

console.log(arr)
let newArr = arr.slice()
console.log(newArr)

function copySorted(arr) {
    return arr.slice().sort()
}

let arr1 = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr1)
console.log(sorted)