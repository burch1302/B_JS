grid.onclick = function (e) {
    if (e.target.tagName != 'TH') return;

    let th = e.target;
    // якщо клітинка TH, тоді сортувати
    // cellIndex -- це номер клітинки th:
    // 0 для першого стовпця
    // 1 для другого і т.д.
    sortGrid(th.cellIndex, th.dataset.type);
};

function sortGrid(colNum, type) {
    let tbody = grid.querySelector('tbody');

    let rowsArray = Array.from(tbody.rows);

    // compare(a, b) порівнює два рядки, необхідно для сортування
    let compare;

    switch (type) {
        case 'number':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML - rowB.cells[colNum].innerHTML;
            };
            break;
        case 'string':
            compare = function (rowA, rowB) {
                return rowA.cells[colNum].innerHTML > rowB.cells[colNum].innerHTML ? 1 : -1;
            };
            break;
    }

    // сортування
    rowsArray.sort(compare);

    tbody.append(...rowsArray);
}