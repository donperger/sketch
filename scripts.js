const container = document.querySelector('#container');

makeGrid(16, 16);

const gridItems = document.querySelectorAll('.items')
gridItems.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        item.style.backgroundColor = 'black';
        })
})

function makeGrid(rows, cols) {
    for (i = 0; i < rows * cols; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'items';
        gridItem.id = `item-${i+1}`;

        container.appendChild(gridItem)
    }
}
