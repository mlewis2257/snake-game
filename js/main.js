/*----- constants -----*/
const gridDiv = document.getElementById("board");

/*----- state variables -----*/
let score, snake, food, direction;
let currentIdx = 0;
let foodIdx = 0;
const gridWidth = 30;
const gridHeight = 30;

let board = [];

/*----- cached elements  -----*/

// const gridDiv = document.getElementById("game_grid");
/*----- event listeners -----*/

/*----- functions -----*/
const createArr = (x, y) => {
  for (let i = 0; i < x; i++) {
    let row = [];
    for (let j = 0; j < y; i++) {
      row.push(j);
    }
    board.push(row);
  }
  console.log(board);
};

const renderGrid = () => {
  for (let i = 0; i < 600; i++) {
    let gridPattern = document.createElement("div");
    gridPattern.classList.add("gridPattern");
    gridDiv.appendChild(gridPattern);
    gridPattern.style.width = `${gridWidth}px`;
    gridPattern.style.height = `${gridHeight}px`;
  }
};

const renderSnake = () => {};
const renderFood = () => {};

const moveSnake = () => {};
// const iterateDivs = () => {
//   const childDivs = document.querySelectorAll("#game_grid > div");
//   console.log(childDivs);
// };

const render = () => {
  renderGrid();
  createArr();
};
const init = () => {
  render();
  let board = [...document.querySelectorAll("#game_grid > div")];
  direction = 1;
  snake = [1, 2];
  food = [0];
  snake.forEach((idx) => {
    board[idx].classList.add("snake");
    console.log(board[idx]);
  });
  console.log(board[0]);
};

init();
