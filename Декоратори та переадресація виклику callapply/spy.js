//Декоратор-шпигун
function work(a, b) {
    console.log(a + b); // працює як довільна функція або метод
}

function spy(func) {
    function wraper(...args) {
        wraper.calls.push(args);
        return func.apply(this, args);
    }

    wraper.calls = [];

    return wraper;
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('виклик:' + args.join()); // "виклик:1,2", "виклик:4,5"
}