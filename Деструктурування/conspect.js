console.log("/////////////////////////// деструктурирование масива ///////////////////////////")
/////////////////////////// деструктурирование масива ///////////////////////////

let arr = ["Даня", "Бурченко"]
let [firstName, sureName] = arr

console.log(firstName)//Даня
console.log(sureName)//Бурченко

let [dogName, , catName] = ["Bobik", "Mousename", "Murzik"]
console.log(catName)//Murzik

//.entires() cycle
let user = {
    name: "Nikola",
    age: "24"
};

for (let [key, value] of Object.entries(user)) {
    console.log(`${key} -> ${value}`)//name -> Nikola , age -> 24
}

//Залишкові параметри 
let [name1, name2] = ["Bob", "Tad", "Bill", "Stepan", "Tolik"];
console.log(name1)//Bob
console.log(name2)//Ted

let [name_1, name_2, ...rest] = ["Юлій", "Цезар", "Консул", "Римської Республіки"];
console.log(name_1)//Юлій
console.log(name_2)//Цезар
console.log(rest.length)//2

let [name_ = "Анонім", surname_ = "Гість"] = ["Юлій"];
console.log(name_)//Юлій
console.log(surname_)//Гість



console.log("/////////////////////////// деструктурирование объектов ///////////////////////////")
/////////////////////////// деструктурирование объектов ///////////////////////////

let options = {
    title: "Menu",
    width: 100,
    height: 200
};

let { title, width, height } = options;
console.log(title)//menu
console.log(width)//100
console.log(height)//200

let { width: w, height: h, title } = options
console.log(title)//menu
console.log(w)//100
console.log(h)//200

//--------------------//

let options1 = {
    title1: "Меню"
};

let { color = "Blue", colorCode = "B12BCC", title1 } = options;
console.log(color)//Blue
console.log(colorCode)//B12BCC
console.log(title1)//Меню

//залишок об'єкту 
let { title2, ...rest2 } = options;
alert(rest2.height);  // 200
alert(rest2.width);   // 100

//Вкладене деструктурування
let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Торт", "Пончик"],
    extra: true
};

// деструктурування розподілене на кілька рядків для наочності
let {
    size: { // помістимо тут size
        width,
        height
    },
    items: [item1, item2], // тут призначимо items
    title = "Меню" // немає в об’єкті (використовується типове значення)
} = options;

alert(title);  // Меню
alert(width);  // 100
alert(height); // 200
alert(item1);  // Торт
alert(item2);  // Пончик