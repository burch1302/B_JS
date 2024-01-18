//Напишіть функцію printNumbers(from, to) яка виводить число кожну секунду, починаючи від from і закінчуючи to.
{
    function printNumbers(from, to) {
        let current = from

        let timerId = setInterval(function () {
            console.log(current);
            if (current == to) {
                clearInterval(timerId)
            }
            current++
        }, 1000)
    }

    printNumbers(1, 10);
}

{

    /*
        let timerId = setTimeout(function tick() {
        console.log('тік');
        timerId = setTimeout(tick, 2000); // (*)
    }, 2000);
    */
    function printNumbers(from, to) {
        let current = from;

        setTimeout(function Tik() {
            console.log(current);
            if (current < to) {
                setTimeout(Tik, 1000);
            }
            current++;
        }, 1000)
    }

    printNumbers(1, 10);

}