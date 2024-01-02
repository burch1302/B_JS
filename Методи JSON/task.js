let user = {
    name: "Іван Іванов",
    age: 35
}

let json = JSON.stringify(user);
console.log(json)

let user2 = JSON.parse(json)
console.log(typeof user2)

//Напишіть функцію replacer, щоб серіалізувати все, але видалити властивості, які посилаються на meetup:
let room = {
    number: 23
};

let meetup = {
    title: "Конференція",
    occupiedBy: [{ name: "Іван" }, { name: "Аліса" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));

/*
{
  "title":"Конференція",
  "occupiedBy":[{"name":"Іван"},{"name":"Аліса"}],
  "place":{"number":23}
}
*/