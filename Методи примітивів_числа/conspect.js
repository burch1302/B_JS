let billion = 1_000_000_000;// _ - синтаксический сахар
let billion1 = 1000000000;
console.log(billion)
console.log(billion1)

let milion = 1e6;  // 1 мільярд, буквально: 1 та 6 нулів
console.log(milion)

//Округлення
Math.floor(3.1)//3.1 -> 3 // -1.1 -> -2
Math.ceil(3.1)//3.1 -> 4 
Math.round(3.1)//3.1 -> 3 // 3.6 -> 4 // 3.5 -> 4
Math.trunc(3.1)//3.1 -> 3 // -1.1 -> -1

let num = 12.2342
num.toFixed(1) //12.2
let num1 = 13.9123
num1.toFixed(1)//14 //оно еще и округляет 

let sum = 0.1 + 0.2;
console.log(+sum.toFixed(2));  //0.3 // toFixed() - всегда возвращает строку , поэтому его нужно парсить плюсом в number

console.log(9999999999999999);

//Перевірки: isFinite та isNaN
isNaN(NaN) //true
isNaN("123") //true потому что перед проверкой isNaN превращает свой аргумент в число 

NaN === NaN // false , нан уникально , оно не может быть равно чему то

isFinite(15)//true
isFinite("str")//false, тому що це спеціальне значення: NaN
isFinite(Infinity)//true

//parseInt та parseFloat
console.log(+"100px"); // NaN
console.log(parseInt("100px")) // 100
console.log(parseFloat("12.5em")) // 12.5
console.log(parseInt("a123")) //NaN
