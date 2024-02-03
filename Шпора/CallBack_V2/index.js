
function myFunc(callback) {
    const a = [4, 5, 6]
    let element = document.querySelector('.out-1');
    callback(element, a)
}

function PasteArrInElement(elem, arr) {
    elem.innerHTML = arr.join(' ')
}//Это пока что не колбек , это просто независимая функция 


function PasteArrInElement2(elem, arr) {
    elem.innerHTML = arr.join('-')
}

myFunc(PasteArrInElement);//вот тут уже PasteArrInElement колбек
myFunc(PasteArrInElement2);


//В данном случае я показываю посему колбек это удобно
/*
я бы мог написать myFunc таким образом , что б вместо колбека внутрь передавать просто функцию PasteArrInElement

function myFunc() {
    const a = [4, 5, 6]
    let element = document.querySelector('.out-1');
    PasteArrInElement(elem, a)
}

Работать оно будет так же. Но в таком случае я теряю гибкость функции myFunc.
она теперь всегда будет выводить масив через пробелы.
в случае же с колбеком я могу сам выбирать какая именно будет логика в myFunc

*/

// ================
//fetch() - это функция в JavaScript, которая используется для выполнения сетевых запросов


//тут для примера я сделал фетч запрос

/*
fetch('https://cat-fact.herokuapp.com/facts')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //console.log(data)
        data.forEach(item => console.log(item.text))
    })
*/

//на сколько это удобно без колбека ?
/*
вообще не удобно , потому что я жестко прописываю вывод информации , без всякой гибкости
еще и вложеность появляется , и если б там была не лямбда функция то вообще минус глаза.
*/

//Применим для всей этой красоты колбек 

function getCats(callback2) {
    fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            callback2(data)
        })
}

function showCats(d) {
    d.forEach(item => console.log(item));
}

function showCats2(d) {
    d.forEach(item => document.querySelector('.out-2').innerHTML +=
        item.text + '<br>');
}
getCats(showCats)
getCats(showCats2)

//Одна и та же функция getCats сделал два разных действия в зависимости от переданого колбека