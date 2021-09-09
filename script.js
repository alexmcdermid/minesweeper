//constants
const grid = document.querySelector('.grid');
const difficulty = document.querySelector('.difficulty');
const buttonEasy = document.querySelector('.easy');
const buttonHard = document.querySelector('.hard');
const size = document.querySelector('.size');
const buttonSmall = document.querySelector('.small');
const buttonLarge = document.querySelector('.large');
//variables
var isGameOver = false;
let bombs = 0;
let squares = [];
var width = 10;
var height = 10;
var boardSize = width*height;

//event listeners
document.querySelector('.easy').addEventListener('click', function() {
    bombs = 8;
    buttonEasy.parentNode.removeChild(buttonEasy);
    buttonHard.parentNode.removeChild(buttonHard);
    difficulty.parentNode.removeChild(difficulty);
    createBoard();
});

document.querySelector('.hard').addEventListener('click', function() {
    bombs = 16;
    buttonEasy.parentNode.removeChild(buttonEasy);
    buttonHard.parentNode.removeChild(buttonHard);
    difficulty.parentNode.removeChild(difficulty);
    createBoard();
});

//was messing with the idea of being able to change the board size. kind of a pain
// document.querySelector('.small').addEventListener('click', function() {
//     buttonEasy.parentNode.removeChild(buttonSmall);
//     buttonHard.parentNode.removeChild(buttonLarge);
//     difficulty.parentNode.removeChild(size);
//     renderBoard();
// });

// document.querySelector('.large').addEventListener('click', function() {
//     buttonEasy.parentNode.removeChild(buttonSmall);
//     buttonHard.parentNode.removeChild(buttonLarge);
//     difficulty.parentNode.removeChild(size);
//     renderBoard();
// });

// function renderBoard() {
//     grid.style.height = height*height;
//     grid.style.width = width*width;
// }

//functions
function createBoard() {
    const bombsArray = Array(bombs).fill('bomb');
    const emptyArray = Array(boardSize - bombs).fill('empty')
    var gameArray = emptyArray.concat(bombsArray);
    gameArray.sort(()=>Math.random() -0.5);

    for(let i = 0; i<boardSize; i++) {
        const square = document.createElement('div');
        square.style.width = width;
        square.style.height = height;
        square.setAttribute('id', i);
        square.classList.add(i);
        square.classList.add(gameArray[i]);
        grid.appendChild(square);
        squares.push(square); 

        square.addEventListener('click', function(input) {
            click(square)
        });
    }
    //logic to deal with nearby bombs in an array while accounting for board dimensions 
    for (let i = 0; i < squares.length; i++) {
        let total = 0
      
        if (squares[i].classList.contains('empty')) {
         
          squares[i].setAttribute('data', total)
        }
      }

}

function click(square) {
    if (square.classList.contains('bomb')) {
        console.log('game over');
    } else if (square.classList.contains('empty')){

    }
}
