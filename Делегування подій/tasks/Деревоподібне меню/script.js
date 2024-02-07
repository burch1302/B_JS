// помістіть кожен текстовий вузол у елемент <span>
// він займає саме те місце, яке необхідне для тексту,
for (let li of tree.querySelectorAll('li')) {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling); // поміщаємо текстовий вузол у span
}

tree.onclick = function (event) {

    if (event.target.tagName != 'SPAN') {
        return;
    }

    let childrenContainer = event.target.parentNode.querySelector('ul');
    if (!childrenContainer) return; // дітей немає

    childrenContainer.hidden = !childrenContainer.hidden;
}