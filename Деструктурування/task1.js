
//Напишіть деструктуроване присвоєння, яке зчитує: 
//властивість name у змінну name.
//властивість years у змінну age.
//властивість isAdmin у змінну isAdmin (false, якщо така властивість відсутня)

let user = {
    name: "Іван",
    years: 30
};

let { name, years: age, isAdmit = false } = user;
console.log(name);//Іван
console.log(age);//30
console.log(isAdmit);//false