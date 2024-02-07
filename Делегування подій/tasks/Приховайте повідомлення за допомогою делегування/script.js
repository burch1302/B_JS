let container = document.getElementById('container')

container.onclick = function (event) {
    let target = event.target;

    if (target.tagName != 'BUTTON') return;

    target.parentNode.remove()
}