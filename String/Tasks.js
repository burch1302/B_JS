//В верхний регистр первую букву
function ucFirst(str) {
    let newStr = str[0].toUpperCase() + str.substring(1, str.length);
    return newStr;
}

console.log(ucFirst("qWERTY"))
console.log(ucFirst("danya"))

//проверка на спам ‘viagra’ or ‘XXX’
function checkSpam(str) {
    if (str.includes("viagra") || str.includes("XXX")) {
        return true;
    } else {
        return false;
    }
}

console.log(checkSpam(" i love viagra (group)!"));
console.log(checkSpam(" i love XXX (group)!"));
console.log(checkSpam(" i love threeSixMafia (group)!"));

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        newStr = str.substring(0, maxlength) + "...";
        return newStr;
    } else {
        return str;
    }
}

console.log(truncate("12345678", 5));

function extractCurrencyValue(str) {
    return +str.slice(1);
}

console.log(extractCurrencyValue("$3472"));