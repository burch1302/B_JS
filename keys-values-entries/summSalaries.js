let salaries = {
    "Іван": 100,
    "Петро": 300,
    "Марія": 250
};

function sumSalaries(salaries) {
    values = Object.values(salaries)
    let res = values.reduce((sum, current) => sum + current, 0)//sum - аккумулятор , 0 начальное значение аккумулятора
    return res
}

console.log(sumSalaries(salaries))