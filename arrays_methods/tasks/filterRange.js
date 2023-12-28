//Фільтрація за діапазоном
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b)
}

let arr = [5, 3, 8, 1];
console.log(filterRange(arr, 1, 4))