const container = document.querySelector('#container');
let canDraw = true;

makeGrid(16, 16);

addInk();
addShade();

const helpButton = document.getElementById('help');
helpButton.addEventListener('click', () => {
    alert("You can draw with your mouse.\nYou can lift up pencil with up arrow key.\nYou can put down pencil with down arrow key.")
})

const clearButton = document.querySelector('#clear-button');
clearButton.addEventListener('click', clearPad);

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        canDraw = false;
        addShade();
    }
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        canDraw = true;
        addShade();
    }
})

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
    
    while (!isInputValid(pixel)) {
        pixel = prompt('How many pixels do you want in one row? (1 to 100)');
    }
    makeGrid(pixel, pixel);
    addInk();
    addShade();
}

function addInk() {
    let gridItems = document.querySelectorAll('.items');
    gridItems.forEach((item) => {
            item.style.backgroundColor = 'rgb( 255, 255, 255)';
    })
}

function addShade() {
    let gridItems = document.querySelectorAll('.items');
        gridItems.forEach((item) => {
            item.addEventListener('mouseover', (e) => {
                if (canDraw === true) {
                    let splitBGColor = item.style.backgroundColor.split(/\(| |\)/);
        
                    let red = splitBGColor[1].slice(0, -1);
                    let green = splitBGColor[2].slice(0, -1);
                    let blue = splitBGColor[3]
        
                    item.style.backgroundColor = `rgb(${red - 22.5}, ${green - 22.5}, ${blue - 22.5})`;
                }
            }) 
        })  
}

function isInputValid (input) {

    if (isNaN(input)) {
        alert('You must enter a number between 1 and 100!');
        return false
    } else if (input < 1 || input > 100) {
        alert('You must enter a number between 1 and 100!');
        return false
    } else {
        return true
    }
}
