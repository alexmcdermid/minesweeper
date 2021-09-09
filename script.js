//constants
const grid = document.querySelector('.grid');
const choose = document.querySelector('.choose');
const buttonEasy = document.querySelector('.easy');
const buttonHard = document.querySelector('.hard');
const width = 20;
const height = 20;
const boardSize = width*height;
//variables
let bombs = 0;
let squares = [];
//event listeners
document.querySelector('.easy').addEventListener('click', function() {
    bombs = 10;
    buttonEasy.parentNode.removeChild(buttonEasy);
    buttonHard.parentNode.removeChild(buttonHard);
    choose.parentNode.removeChild(choose);
    createBoard();
});

document.querySelector('.hard').addEventListener('click', function() {
    bombs = 20;
    buttonEasy.parentNode.removeChild(buttonEasy);
    buttonHard.parentNode.removeChild(buttonHard);
    choose.parentNode.removeChild(choose);
    createBoard();
});
//functions
function createBoard() {
    const bombsArray = Array(bombs).fill('bomb');
    const emptyArray = Array(boardSize - bombs).fill('empty')
    var gameArray = emptyArray.concat(bombsArray);
    gameArray.sort(()=>Math.random() -0.5);

    for(let i = 0; i<boardSize; i++) {
        const square = document.createElement('div');
        square.setAttribute('id', i);
        square.classList.add(gameArray[i]);
        grid.appendChild(square);
        squares.push(square);
    }

}

