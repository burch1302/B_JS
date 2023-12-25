//ARRAYS

//let arr = new Array();
let arr = ["a", "b", "c", "d"];
console.log(arr)

//в js в масиве можно хоть венегрет сделаать , ей богу
let venegret = ['Apple', { name: 'John' }, true, function () { console.log('hello'); }];
console.log(venegret[1].name);
venegret[3]();

console.log(venegret.at(-1)()) //Почему тут еще и выводится undefined???


//Методы Методи pop/push, shift/unshift

/* чуть теории себе на память 
Очередь это любая коллекция оторая поддерживает операции push и shift

push - добавляет елемент в конец очереди 
shift - удаляет елемент в начале коллекции , и смещает всю очередь 
 (1 елемент удаляется а 2 елемент становится первым)

 стек - коллекция которая поддерживает два типа операций pop/push

 pop - удаляет еллемент с конца 
*/

let masivchik = ["boba", "biba", "doda", "dida"];

console.log(masivchik);

console.log(masivchik.pop() + " was poped");
console.log("\n" + masivchik);

masivchik.push("Gregoriy -_-");
console.log("\n" + masivchik);

masivchik.shift()
console.log("\n" + masivchik);

masivchik.unshift("apple");
console.log("\n" + masivchik);
//методами push и unshift можно добавить несколько елементов сразу

for (let element of masivchik) {
    console.log(element)
}
console.log()

//Отож, найпростіший метод очистки масиву це: arr.length = 0;.
let arrr = [1, 2, 3, 4, 5];
console.log(arrr)
arrr.length = 0;
console.log(arrr)
arrr = [1, 2, 3, 4, 5];
console.log(String(arrr))



