//Для галочки (Скопировать масив)

function CopyArray(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    return newArr;
}

let arr = [1, 2, 5, 8];
let newArr = CopyArray(arr)
for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i])
}

//Способ покруче , с использованием контекста

Array.prototype.Copy = function () {
    let newArr = [];

    for (let i = 0; i < this.length; i++) {
        newArr.push(this[i])
    }

    return newArr;
}

let newNewArr = arr.Copy()

console.log(newNewArr)

Array.prototype.Squeared = function () {
    return this.map(function (i) {
        return i ** 2;
    })
}

console.log(newNewArr.Squeared())

//v trtry stemeny

Array.prototype.Cube = function () {
    return this.map(function (i) {
        return i ** 3;
    })
}

console.log(newNewArr.Cube())

//встроеный

arrchik = [12, 23, 43, 12, 11]
let arrik = arrchik.slice();
console.log(arrik)

let arrik2 = arrchik.concat();
console.log(arrik2)

let arrik3 = [...arrchik]
console.log(arrik3)
