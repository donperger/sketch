const container = document.querySelector('#container');

makeGrid(16, 16);

addInk();

const clearButton = document.querySelector('#clear-button')
clearButton.addEventListener('click', clearPad)

function makeGrid(rows, cols) {
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    for (i = 0; i < rows * cols; i++) {
        let gridItem = document.createElement('div');
        gridItem.className = 'items';
        gridItem.id = `item-${i+1}`;

        container.appendChild(gridItem)
    }
}

function clearPad() {
    container.textContent = '';
    let pixel = prompt('How many pixels do you want in one row? (0 to 100)');
    
    while (pixel < 1 || pixel > 100) {
        pixel = prompt('How many pixels do you want in one row? (1 to 100)');
    }
    makeGrid(pixel, pixel);
    addInk();
}

function addInk() {
    let gridItems = document.querySelectorAll('.items');
    gridItems.forEach((item) => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = 'black';
            })
    })
}

// function isInputValid () {
//     let pixel = prompt('How many pixels do you want in one row? (0 to 100)');

//     if ( pixel < 1 || pixel > 100) {
//         return pixel
//     } else {
//         alert ('You must enter a number between 1 and 100!')
//     }
// }
