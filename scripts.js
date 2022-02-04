const container = document.querySelector('#container');

makeGrid(16, 16);

function makeGrid(rows, cols) {
    for (i = 0; i < rows * cols; i++) {
        let gridItem = document.createElement('div');
        gridItem.textContent = i + 1;
        gridItem.className = 'items';

        container.appendChild(gridItem)
    }
}