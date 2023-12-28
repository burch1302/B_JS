function count(user) {
    result = Object.keys(user);
    if (result) {
        return result.length;
    } else {
        return 0
    }
}

let user = {
    name: 'Іван',
    age: 30,
    height: 187
};

console.log(count(user));