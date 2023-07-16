
let numOfSquares = 0;
const btnNewSquares = document.querySelector('#btnNewSquares')
btnNewSquares.addEventListener('click', () => {
    do {
        numOfSquares = Number(prompt("How many squares? (1-50)"))
    } while (numOfSquares > 50 || numOfSquares < 1);
    let divToDelete = document.getElementById('divContainer')
    document.body.removeChild(divToDelete)
    makeSketch(numOfSquares)
})


function makeSketch(numOfSquares) {
    const divContainer = document.createElement('div');
    divContainer.id = 'divContainer';
    divContainer.style.cssText = 'border: 2px solid; width: max-content; margin: auto;';
    for (let i=0; i < numOfSquares; i++) {
        let gridContainer = document.createElement('div');
        gridContainer.style.display = 'flex'
        for (let j=0; j < numOfSquares; j++) {
            let grid = document.createElement('div')
            grid.style.cssText = 'border: 1px solid black; width: 30px; height: 30px;';
            grid.addEventListener('mouseover', (e) => {
                if (e.target.style.backgroundColor !== '') {
                    return
                }
                e.target.style.backgroundColor = getRandomRGBColor()
            })
            
            gridContainer.appendChild(grid)
        }
        divContainer.appendChild(gridContainer)
    }
    document.body.appendChild(divContainer)
}
makeSketch(16)
function getRandomRGBColor() {
    return `rgb(${getRandomNumBetween0And255()}, ${getRandomNumBetween0And255()}, ${getRandomNumBetween0And255()})`
}
function getRandomNumBetween0And255() {
    return Math.floor(Math.random() * 256)
}