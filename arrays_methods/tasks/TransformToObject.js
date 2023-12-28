let ivan = { name: "Іван", surname: "Іванко", id: 1 };
let petro = { name: "Петро", surname: "Петренко", id: 2 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

let users = [ivan, petro, mariya];

let usersMapped = users.map(user => ({
    fullName: `${user.name} ${user.surname}`,
    id: user.id
}));

console.log(usersMapped[0].id)
console.log(usersMapped[0].fullName)
console.log(usersMapped.isArray())